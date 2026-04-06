# Vica Design — Design Specifications

> 基于项目代码提取 | 1rem = 10px (html font-size: 62.5%)

---

## 1. 颜色系统

| Token | Hex | 用途 |
|---|---|---|
| `brand.primary` | `#BD7D31` | Footer背景、Contact区域、强调色 |
| `brand.background` | `#fcf6eb` | 页面背景、Header背景、SUBMIT按钮 |
| `brand.text-primary` | `#1a1a1a` | 主要文字、深色按钮hover |
| `brand.text-secondary` | `#666666` | Services列表项文字 |
| `border.default` | `#e3e2e2` | Services标题顶部分隔线 |
| `border.light` | `rgba(26,26,26,0.1)` | Header底部细线 |
| `border.medium` | `rgba(26,26,26,0.2)` | Footer内部分隔线 |
| `white` | `#ffffff` | Footer区域文字、表单输入 |
| `overlay.gradient` | `rgba(0,0,0,0.5)` | ProjectCard底部渐变遮罩终点 |

---

## 2. 字体系统

### Font Families
- **Serif**: `Playfair Display` — Logo、标题、项目名、Contact标题、副标题 italic
- **Sans**: `Inter` — 备用正文字体

### Font Sizes & 使用场景

| Size | px | 使用场景 |
|---|---|---|
| `13` | 13px | Footer TORONTO/SOCIAL信息栏 |
| `14` | 14px | ProjectCard 标题 & 副标题 |
| `15` | 15px | 表单输入框占位文字 |
| `16` | 16px | Services标题/列表项、Header "Contact Us" |
| `20` | 20px | Introduction段落、Header Logo "VICA DESIGN" |
| `32` | 32px | Contact成功标题 (mobile) |
| `40` | 40px | Contact成功标题 (desktop) |
| `48` | 48px | Contact Us 标题 (mobile) |
| `60` | 60px | Contact Us 标题 (desktop) |

### Font Weights
| Weight | Value | 用途 |
|---|---|---|
| normal | 400 | 默认，所有正文 |
| semibold | 600 | Footer "VICA DESIGN" 标签 |
| bold | 700 | 备用 |

### Line Heights
| Token | Value | 用途 |
|---|---|---|
| tight | 16px | ProjectCard 标题行高 |
| normal | 1.5 (150%) | Body 默认行高 |
| relaxed | 1.6 (160%) | Introduction 段落 |
| loose | 1.9 (190%) | Footer 联系信息 |

### Letter Spacing
| Token | Value | 用途 |
|---|---|---|
| normal | 0 | 默认 |
| wide | 0.05em | ProjectCard标题 |
| wider | 0.1em | Services标题 |
| widest | 0.15em | SUBMIT按钮、Contact Us链接 |

---

## 3. 间距系统

> 基准: 1rem = 10px

| Token | rem | px | 用途 |
|---|---|---|---|
| xs | 0.4rem | 4px | ProjectCard之间gap |
| sm | 2rem | 20px | Header上下padding |
| md | 4rem | 40px | Services两组间距 |
| lg | 5.6rem | 56px | Section padding、ProjectCard文字区padding |
| xl | 6rem | 60px | Footer主区域padding |
| 2xl | 8rem | 80px | Contact区域padding (mobile) |
| 3xl | 10rem | 100px | Contact表单区padding |
| indent | 12rem | 120px | Introduction首行缩进 (desktop) |

### 特殊间距
- `px-page` = `clamp(15px, 5vw, 60px)` — 全站水平padding（响应式）
- `space-y-[2rem]` = 20px — ServiceGroup之间

---

## 4. 尺寸规范

| 元素 | 值 |
|---|---|
| Header高度 | 70px (h-[7rem]) |
| Landscape图片高 | 80vw / 80vh (desktop) |
| Portrait图片高 | 128vw / 80vh (desktop) |
| Introduction最大宽 | 600px (max-w-[60rem]) |
| 表单最大宽 | 500px (max-w-[50rem]) |
| Footer内容最大宽 | 1400px (max-w-[140rem]) |
| Border Radius | 0（全站无圆角） |

---

## 5. 响应式断点

Tailwind 默认断点：
| 断点 | 宽度 | 用途 |
|---|---|---|
| `md` | 768px | 主要断点 — 双栏布局、Header切换 |
| `lg` | 1024px | 辅助 |

---

## 6. 动效规范

| 效果 | 值 | 用途 |
|---|---|---|
| Hover opacity | `opacity-60` + `transition-opacity` | 所有链接/按钮hover |
| 按钮背景切换 | `transition-colors duration-200` | SUBMIT按钮 |
| 表单边框 | `transition-colors` | focus时边框变实 |
| Loading spinner | `animate-spin` | 表单提交中 |

---

## 7. 组件 Z-index 层级

| 层级 | 值 | 元素 |
|---|---|---|
| Header | z-50 | 固定导航栏 |
| 内容 | z-10 | ProjectCard文字叠层 |
