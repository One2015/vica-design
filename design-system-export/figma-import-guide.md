# Figma 导入指南

---

## 方法一：Figma Tokens 插件（推荐）

### 步骤
1. 在 Figma 中安装插件 **"Tokens Studio for Figma"**（原 Figma Tokens）
2. 打开插件 → 选择 **"Load from file / URL"** 或 **"JSON"** 标签
3. 将 `figma-tokens.json` 的内容粘贴进去
4. 点击 **"Save"**
5. 点击 **"Apply to document"** — 自动生成所有颜色/文字样式

### 注意
- 插件会创建 Figma Styles（颜色样式、文字样式）
- Token名称格式：`global/colors/brand/primary` → Figma中显示为分组

---

## 方法二：手动创建 Figma Variables（Figma Variables功能）

### 颜色 Variables（需要 Figma Professional+）

在 Figma 右侧面板 → **Variables** → **New variable collection** → 命名为 "Vica Design"

| 变量名 | 类型 | 值 |
|---|---|---|
| `color/brand/primary` | Color | #BD7D31 |
| `color/brand/background` | Color | #fcf6eb |
| `color/brand/text-primary` | Color | #1a1a1a |
| `color/brand/text-secondary` | Color | #666666 |
| `color/border/default` | Color | #e3e2e2 |
| `color/white` | Color | #ffffff |

### 数字 Variables（间距）

| 变量名 | 类型 | 值(px) |
|---|---|---|
| `spacing/xs` | Number | 4 |
| `spacing/sm` | Number | 20 |
| `spacing/md` | Number | 40 |
| `spacing/lg` | Number | 56 |
| `spacing/xl` | Number | 80 |
| `spacing/2xl` | Number | 100 |

---

## 方法三：手动创建 Figma Styles

### 颜色样式 (Color Styles)
在 Figma → **Assets** → **+** → **Color Style**

依次创建：
- `Brand/Primary` → #BD7D31
- `Brand/Background` → #fcf6eb
- `Brand/Text Primary` → #1a1a1a
- `Brand/Text Secondary` → #666666
- `Border/Default` → #e3e2e2

### 文字样式 (Text Styles)

| 样式名 | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| `Body/XS` | Playfair Display | 13 | Regular | 190% |
| `Body/SM` | Playfair Display | 14 | Regular | 16px |
| `Body/Base` | Inter | 16 | Regular | 150% |
| `Body/LG` | Playfair Display | 20 | Regular | 160% |
| `Heading/SM` | Playfair Display | 32 | Regular | auto |
| `Heading/MD` | Playfair Display | 40 | Regular | auto |
| `Heading/LG` | Playfair Display | 48 | Regular | auto |
| `Heading/XL` | Playfair Display | 60 | Regular | auto |
| `Label/Uppercase-SM` | Inter | 13 | Regular | auto |（uppercase） |
| `Label/Uppercase-MD` | Inter | 16 | Regular | auto |（uppercase） |

---

## 字体安装

### Playfair Display
- Google Fonts: [fonts.google.com/specimen/Playfair+Display](https://fonts.google.com/specimen/Playfair+Display)
- 下载后安装到系统，Figma会自动识别
- 需要字重: 400 (Regular), 400 Italic, 700 (Bold)

### Inter
- Google Fonts: [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter)
- 需要字重: 400, 600

---

## Figma 组件建议

按以下顺序创建组件（从小到大）：

1. **Token层**: 颜色、字体、间距 Variables
2. **原子层**:
   - Button/Submit (default / hover / loading / disabled)
   - Input/Text, Input/Email, Input/Tel, Textarea
3. **分子层**:
   - ProjectCard/Landscape
   - ProjectCard/Portrait
   - ServiceGroup
   - ContactForm (3个状态)
4. **模板层**:
   - Header
   - Footer
5. **页面层**:
   - HomePage

---

## 响应式设置

在 Figma 中创建以下 Frame：
- Mobile: 390 × 844 (iPhone 14)
- Desktop: 1440 × 900

断点：768px（md breakpoint）
