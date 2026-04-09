# Case Study 工具集

这个文件夹包含添加新 case study 的工具和指南。

## 📁 文件说明

| 文件 | 用途 |
|-----|------|
| `compress_images.py` | 批量压缩图片（quality=85, max_width=2000px） |
| `add-new-case.md` | 完整的添加新 case study 工作流程文档 |

## 🚀 快速开始

### 1️⃣ 压缩图片

```bash
# 安装依赖（首次使用）
pip install Pillow

# 压缩图片文件夹
python scripts/compress_images.py /path/to/your/raw/photos

# 输出会在原目录下的 compressed/ 文件夹
```

### 2️⃣ 上传给 Claude 分析

在 Claude Code 中说：
```
我有一个新的 case study，这是第1批图片（共3批），
项目名称：XXX，请帮我分析并生成 gallery JSON
```

### 3️⃣ 保存图片并更新数据

```bash
# 复制压缩后的图片到 public
mkdir -p public/images/project-name
cp /path/to/compressed/*.jpg public/images/project-name/

# 然后让 Claude 帮你更新 lib/sample-data.ts
```

## 📖 详细文档

完整工作流程请参考 [add-new-case.md](./add-new-case.md)

## 💡 提示

- 每次上传 3-5 张图片，避免超过 20MB 限制
- 使用描述性文件名（如 `01-living-room.jpg`）
- Claude 会根据图片内容智能选择布局类型（single/double/doubleWithText/carousel）
