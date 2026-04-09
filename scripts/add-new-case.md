# 添加新 Case Study 工作流程

## 第一步：准备图片

### 1.1 压缩图片

```bash
# 在项目根目录运行
cd /Users/yvoonezhan/arent-pyke-portfolio

# 压缩图片（确保已安装 Pillow）
pip install Pillow

# 压缩您的原图文件夹
python ../compress_images.py /path/to/your/raw/photos
```

**压缩设置：**
- ✅ 保持宽高比
- ✅ max_width=2000px
- ✅ quality=85
- ✅ 输出为 JPEG 格式
- ✅ 单个文件 < 20MB（方便上传给 Claude）

---

## 第二步：分析图片 & 生成布局

### 2.1 分批上传图片给 Claude

由于单次上传限制 20MB，建议每次上传 3-5 张压缩后的图片。

**在 Claude Code 中说：**
```
这是第一批图片（共X批），请帮我分析并生成 gallery JSON
```

### 2.2 Claude 会生成的 JSON 格式

根据图片内容，Claude 会为每张图片选择合适的布局类型：

#### 布局类型 1: `single` - 单张全宽图片
```typescript
{
  type: 'single',
  image: '/images/project-name/01-living-room.jpg',
  alt: 'Living room with natural light',
  caption: 'Optional caption text',  // 可选
  parallax: true,  // 可选，默认 false
}
```

#### 布局类型 2: `double` - 两张并排图片
```typescript
{
  type: 'double',
  images: [
    { src: '/images/project-name/02-kitchen.jpg', alt: 'Kitchen detail' },
    { src: '/images/project-name/03-joinery.jpg', alt: 'Joinery detail' },
  ],
}
```

#### 布局类型 3: `doubleWithText` - 图片 + 文本
```typescript
{
  type: 'doubleWithText',
  image: { src: '/images/project-name/04-bedroom.jpg', alt: 'Master bedroom' },
  text: 'A thoughtful narrative about the design concept and materiality.',
  imagePosition: 'left',  // 或 'right'
}
```

#### 布局类型 4: `carousel` - 横向滚动轮播
```typescript
{
  type: 'carousel',
  images: [
    { src: '/images/project-name/05-detail-1.jpg', alt: 'Detail 1' },
    { src: '/images/project-name/06-detail-2.jpg', alt: 'Detail 2' },
    { src: '/images/project-name/07-detail-3.jpg', alt: 'Detail 3' },
  ],
}
```

---

## 第三步：添加到项目数据

### 3.1 保存图片到 public 目录

```bash
# 在项目根目录
mkdir -p public/images/your-project-name
cp /path/to/compressed/*.jpg public/images/your-project-name/
```

### 3.2 更新 `lib/sample-data.ts`

将 Claude 生成的 JSON 添加到 `projects` 数组：

```typescript
{
  slug: 'your-project-slug',
  title: 'Project Title',
  location: 'Sydney, NSW',
  year: '2024',
  studioRole: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
  layout: 'landscape',  // 或 'portrait'
  cardImage: '/images/your-project-name/cover.jpg',
  heroImage: '/images/your-project-name/hero.jpg',
  heroImageAlt: 'Project hero image description',
  intro: 'A compelling 2-3 sentence introduction about the project...',
  gallery: [
    // Claude 生成的 gallery JSON 放在这里
  ],
  related: ['other-project-slug-1', 'other-project-slug-2'],
}
```

### 3.3 更新首页封面（可选）

如果想在首页显示，编辑 `app/page.tsx` 的 `featuredProjects` 数组。

---

## 设计规范参考

### 图片布局选择建议

| 图片类型 | 推荐布局 |
|---------|---------|
| 主要空间全景（客厅、厨房） | `single` (parallax: true) |
| 细节特写、材质对比 | `double` |
| 需要设计说明的重点空间 | `doubleWithText` |
| 系列细节、色彩方案、多角度 | `carousel` |

### 文本撰写风格（Arent & Pyke）

- ✅ 简洁、诗意、专业
- ✅ 关注材料、光线、空间体验
- ✅ 避免过度技术术语
- ✅ 2-3 句话即可

**示例：**
> "Every room carries a quiet conversation between old and new — antique finds set against freshly plastered walls, rough linen against polished stone."

---

## 快速测试

```bash
# 启动开发服务器
npm run dev

# 访问
open http://localhost:3000
open http://localhost:3000/projects/your-project-slug
```

---

## Tips

1. **图片命名规范**：使用描述性命名
   - ✅ `01-living-room.jpg`
   - ✅ `02-kitchen-detail.jpg`
   - ❌ `IMG_1234.jpg`

2. **每批上传建议**：
   - 单张图片 < 5MB（压缩后）
   - 每次 3-5 张图片
   - 按照展示顺序上传

3. **文件夹结构**：
   ```
   public/images/
   ├── project-one/
   │   ├── hero.jpg
   │   ├── 01-living.jpg
   │   └── 02-kitchen.jpg
   └── project-two/
       └── ...
   ```

4. **Git 提交**：
   ```bash
   git add public/images/your-project-name
   git add lib/sample-data.ts
   git commit -m "Add new case study: Your Project Name"
   ```
