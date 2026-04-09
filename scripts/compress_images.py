#!/usr/bin/env python3
"""
批量压缩图片脚本
保持宽高比，quality=85, max_width=2000px
"""

import os
import sys
from PIL import Image
from pathlib import Path


def compress_image(input_path, output_path, max_width=2000, quality=85):
    """
    压缩单张图片

    Args:
        input_path: 输入图片路径
        output_path: 输出图片路径
        max_width: 最大宽度（默认2000px）
        quality: JPEG质量（默认85）
    """
    try:
        with Image.open(input_path) as img:
            # 转换为 RGB（处理 RGBA 图片）
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')

            # 计算新尺寸（保持宽高比）
            width, height = img.size
            if width > max_width:
                ratio = max_width / width
                new_width = max_width
                new_height = int(height * ratio)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                print(f"  调整尺寸: {width}x{height} -> {new_width}x{new_height}")
            else:
                print(f"  保持原尺寸: {width}x{height}")

            # 保存压缩后的图片
            img.save(output_path, 'JPEG', quality=quality, optimize=True)

            # 显示文件大小变化
            input_size = os.path.getsize(input_path) / 1024 / 1024
            output_size = os.path.getsize(output_path) / 1024 / 1024
            print(f"  文件大小: {input_size:.2f}MB -> {output_size:.2f}MB")

            return True
    except Exception as e:
        print(f"  ❌ 错误: {e}")
        return False


def batch_compress(input_dir, output_dir=None, max_width=2000, quality=85):
    """
    批量压缩目录中的所有图片

    Args:
        input_dir: 输入目录
        output_dir: 输出目录（默认为 input_dir/compressed）
        max_width: 最大宽度
        quality: JPEG质量
    """
    input_path = Path(input_dir)

    if not input_path.exists():
        print(f"❌ 输入目录不存在: {input_dir}")
        return

    # 设置输出目录
    if output_dir is None:
        output_path = input_path / "compressed"
    else:
        output_path = Path(output_dir)

    output_path.mkdir(parents=True, exist_ok=True)

    # 支持的图片格式
    image_extensions = {'.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff'}

    # 查找所有图片
    images = [f for f in input_path.iterdir()
              if f.is_file() and f.suffix.lower() in image_extensions]

    if not images:
        print(f"❌ 目录中没有找到图片: {input_dir}")
        return

    print(f"📁 找到 {len(images)} 张图片")
    print(f"📤 输出目录: {output_path}")
    print(f"⚙️  设置: max_width={max_width}px, quality={quality}")
    print("-" * 60)

    # 批量处理
    success_count = 0
    total_input_size = 0
    total_output_size = 0

    for i, img_file in enumerate(images, 1):
        print(f"\n[{i}/{len(images)}] {img_file.name}")

        # 输出文件名（保持原文件名，转为.jpg）
        output_file = output_path / f"{img_file.stem}.jpg"

        if compress_image(img_file, output_file, max_width, quality):
            success_count += 1
            total_input_size += os.path.getsize(img_file)
            total_output_size += os.path.getsize(output_file)

    # 统计信息
    print("\n" + "=" * 60)
    print(f"✅ 完成: {success_count}/{len(images)} 张图片")
    print(f"📊 总大小: {total_input_size/1024/1024:.2f}MB -> {total_output_size/1024/1024:.2f}MB")
    print(f"💾 节省: {(total_input_size-total_output_size)/1024/1024:.2f}MB "
          f"({(1-total_output_size/total_input_size)*100:.1f}%)")
    print(f"📁 输出位置: {output_path.absolute()}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法:")
        print("  python compress_images.py <输入目录> [输出目录]")
        print("\n示例:")
        print("  python compress_images.py ./photos")
        print("  python compress_images.py ./photos ./compressed_output")
        sys.exit(1)

    input_dir = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None

    batch_compress(input_dir, output_dir)
