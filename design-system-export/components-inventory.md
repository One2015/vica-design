# Vica Design — 组件清单

本文档列出了项目中所有主要 UI 组件及其样式规范。

---

## 1. Header (头部导航)

**文件**: `components/Header.tsx`

### 规格
- **位置**: `fixed` 顶部, `z-50`
- **高度**: `7rem` (70px)
- **背景**: `bg-accent` (#fcf6eb)
- **边框**: 底部 1px, `border-[#1a1a1a]/10`
- **内边距**: 垂直 `2rem` (20px), 水平 `page` (响应式)

### 元素
- **Logo (左侧)**
  - 字体: `font-serif` (Playfair Display)
  - 大小: `text-[20px]`
  - 字间距: `tracking-wide`
  - 悬停: `opacity-60`

- **Contact Us 链接 (右侧)**
  - 大小: `text-[16px]`
  - 样式: `uppercase`, `tracking-[0.15em]`
  - 悬停: `opacity-60`

### 注意事项
- 使用后需添加 `<div className="h-[7rem]" />` 占位元素

---

## 2. Footer (页脚)

**文件**: `components/Footer.tsx`

### 规格
- **背景**: `bg-warm` (#BD7D31)
- **文字颜色**: `text-primary` (#1a1a1a)
- **内边距**: 垂直 `6rem` (60px), 水平 `page`
- **边框**: 顶部 1px, `border-border`

### 布局
- 最大宽度: `max-w-content` (1560px)
- 两列布局 (移动端堆叠)
  - **Contact** 列: 地址、电话、邮箱
  - **Enquiries** 列: 项目咨询

### 文字规格
- **标题**: `text-[1.3rem]` (13px), `uppercase`, `tracking-wider`
- **正文**: `text-[1.3rem]`, `leading-[1.7]`
- **版权栏**: 
  - 顶部间距: `mt-[5rem]` (50px)
  - Flex 布局，移动端堆叠
  - 所有链接悬停 `opacity-60`

---

## 3. ProjectCard (项目卡片)

**文件**: `components/ProjectCard.tsx`

### Props
```typescript
{
  title: string        // 项目标题
  role: string         // 项目角色/类型
  slug: string         // URL slug
  image: string        // 图片路径
  layout: 'landscape' | 'portrait'
  priority?: boolean   // 图片加载优先级
}
```

### 规格
- **布局**:
  - `landscape`: `aspect-[4/3]`
  - `portrait`: `aspect-[3/4]`
- **悬停效果**: 
  - 卡片整体: `scale: 1.02` (0.4s)
  - 图片: `scale: 105%` (0.7s cubic-bezier)
  - 叠加层: 黑色 60% 透明度

### 文字规格
- **卡片下方标题**:
  - 字体: `font-serif`
  - 大小: `text-[1.3rem]` (13px)
  - 样式: `uppercase`, `tracking-[0.08em]`
  
- **卡片下方副标题**:
  - 大小: `text-[1.3rem]`
  - 颜色: `text-secondary`
  - 样式: `font-serif italic`

- **悬停叠加文字**:
  - 标题: `font-serif`, `text-[clamp(1.8rem,3vw,3.2rem)]`
  - 副标题: `text-[1.3rem]`, `uppercase`, `tracking-[0.12em]`

---

## 4. ContactForm (联系表单)

**文件**: `components/ContactForm.tsx`

### 状态
- `idle` — 初始状态
- `loading` — 提交中
- `success` — 提交成功

### 表单规格
- **最大宽度**: `50rem` (500px)
- **间距**: `space-y-[2rem]`
- **栅格**: 移动端 1 列，桌面端 2 列 (`md:grid-cols-2`)

### 输入框样式
- 背景: `bg-transparent`
- 边框: 底部 1px, `border-white/40`
- 文字: `text-white`, `text-[1.5rem]`
- 占位符: `text-white/60`
- 聚焦: `border-white`
- 过渡: `transition-colors`

### 提交按钮
- **默认**: 
  - 背景: `bg-[#fcf6eb]`
  - 文字: `text-[#1a1a1a]`
  - 内边距: `px-[3rem] py-[1rem]`
  - 样式: `text-[1.3rem]`, `uppercase`, `tracking-[0.15em]`
  
- **悬停**: 
  - 背景: `bg-[#1a1a1a]`
  - 文字: `text-[#fcf6eb]`
  
- **禁用**: `opacity-60`, `cursor-not-allowed`

### 成功状态
- 标题: `font-serif`, `text-[3.2rem] md:text-[4rem]`
- 返回链接: `text-[1.4rem]`, `uppercase`, `tracking-[0.15em]`

---

## 5. GallerySection (图库组件)

**文件**: `components/GallerySection.tsx`

### 支持的布局类型

#### 5.1 Single (单图)
- 宽高比: `aspect-video` (16:9)
- 支持视差滚动 (`parallax: true`)
- 可选图片说明 (`caption`)
- 说明文字: `text-secondary`, `text-[1.5rem]`, `leading-[1.6]`

#### 5.2 Double (双图并列)
- 栅格: 移动端 1 列，桌面端 2 列
- 间距: 移动 `2rem`, 桌面 `3.5rem`
- 宽高比: `aspect-[3/4]`

#### 5.3 Double with Text (图文混排)
- 栅格: 1:1 两列
- 图片可左可右 (`imagePosition: 'left' | 'right'`)
- 文字样式:
  - `font-serif`
  - `text-[clamp(1.5rem,2.5vw,2.4rem)]`
  - `leading-[1.5]`
  - 桌面端缩进: `lg:indent-[12rem]`

#### 5.4 Carousel (横向滚动)
- 卡片宽度: 
  - 移动: `80vw`
  - 平板: `50vw`
  - 桌面: `33vw`
- 间距: `gap-[2rem]`
- 滚动: `snap-x snap-mandatory`
- 右侧渐变提示: `from-accent to-transparent`

### 整体间距
- 项目间距: 移动 `5.6rem`, 桌面 `8rem`

---

## 6. ImageParallax (视差图片)

**文件**: `components/ImageParallax.tsx`

### 规格
- 使用 `framer-motion` 和 `useScroll`, `useTransform`
- 垂直偏移: `-20%` 到 `20%`
- 平滑过渡动画

---

## 7. CustomCursor (自定义光标)

**文件**: `components/CustomCursor.tsx`

### 功能
- 跟随鼠标移动的自定义光标
- 链接悬停时放大
- 仅桌面端启用

---

## 通用样式模式

### 链接悬停效果
项目中有两种下划线动画 (定义在 `globals.css`):

1. **link-underline** — 满宽下划线缩至 75%
   ```css
   .link-underline::after {
     transform: scaleX(1);  /* hover: scaleX(0.75) */
   }
   ```

2. **link-grow** — 下划线从 0 增长至 100%
   ```css
   .link-grow::after {
     transform: scaleX(0);  /* hover: scaleX(1) */
   }
   ```

### CTA 按钮
```css
.btn-cta {
  text-[1.3rem] font-bold uppercase tracking-[0.15em]
  padding: 0.8rem 0
  border-bottom: 2px solid currentColor
  hover: opacity-0.6
}
```

---

## 响应式断点

- **主要断点**: `md: 768px`, `lg: 1024px`
- **移动优先**: 默认样式为移动端，`md:` / `lg:` 为桌面覆盖
- **常见模式**:
  - 单列 → `md:grid-cols-2`
  - 堆叠 → `md:flex-row`
  - Portrait 卡片: 全宽 → `md:w-[calc(50%-0.2rem)]`

---

## 动画和过渡

### Tailwind 配置的动画
- **fade-up**: 0.6s 淡入上升 (Y: 2rem → 0)
- **fade-in**: 0.4s 淡入

### 常用过渡
- **透明度**: `opacity 0.3s ease`
- **变换**: `transform 0.5s ease`
- **颜色**: `all 0.2s ease`

### Framer Motion 动画
- ProjectCard 悬停: `scale: 1.02`, 0.4s
- 图片缩放: `scale: 105%`, 0.7s cubic-bezier
- 叠加层淡入: 0.35s

---

## 图片规范

### Next.js Image 组件
- 使用 `fill` + `sizes` 实现响应式
- `priority={true}` 用于首屏图片
- `object-cover` 用于填充容器

### 常见 sizes 值
- 全宽图片: `"100vw"`
- Portrait 卡片: `"(max-width: 768px) 100vw, 50vw"`
- Carousel: `"(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"`

---

## 无障碍考虑

### 减少动画
项目包含 `prefers-reduced-motion` 查询:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }
}
```

### 语义化 HTML
- 使用 `<header>`, `<footer>`, `<nav>`, `<section>`, `<figure>`, `<figcaption>`
- `<address>` 用于联系信息
- 所有图片包含 `alt` 属性

---

## 数据结构

### Project 数据类型
```typescript
{
  slug: string           // URL: /projects/[slug]
  title: string          // 项目标题
  role: string           // 项目类型
  layout: 'landscape' | 'portrait'
  image: string          // 桌面图片
  imageMobile: string    // 移动端图片
}
```

### GalleryItem 类型
- `single` — 单图 + 可选说明
- `double` — 双图并列
- `doubleWithText` — 图文混排
- `carousel` — 横向滚动

---

**文档版本**: 1.0  
**最后更新**: 2026-04-07  
**项目**: Vica Design (Arent Pyke Portfolio)
