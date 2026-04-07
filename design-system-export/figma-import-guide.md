# Figma 导入指南

本指南详细说明如何将 Vica Design 的设计系统导入到 Figma 中。

---

## 方法一: 使用 Figma Tokens 插件 (推荐)

### 步骤 1: 安装插件

1. 在 Figma 中打开你的设计文件
2. 点击菜单 **Resources** → **Plugins** → 搜索 **"Tokens Studio for Figma"**
3. 点击 **Run** 启动插件

### 步骤 2: 导入 tokens

1. 在插件界面中，点击右上角 **齿轮图标** (Settings)
2. 选择 **Import/Export**
3. 选择 **Import from File**
4. 上传 `figma-tokens.json` 文件
5. 点击 **Import**

### 步骤 3: 应用 tokens

导入后，你将看到以下 token 集合：

- **colors** — 颜色系统
- **opacity** — 透明度值
- **fontFamilies** — 字体家族
- **fontSize** — 字体大小
- **fontWeights** — 字重
- **lineHeights** — 行高
- **letterSpacing** — 字间距
- **spacing** — 间距系统
- **sizing** — 尺寸规范
- **borderRadius** — 圆角 (项目使用 0)
- **borderWidth** — 边框宽度

### 步骤 4: 同步到 Figma Variables

1. 在插件中选择你想要同步的 token 集合
2. 点击 **Create Variables**
3. 选择 **Create as Figma Variables**
4. 插件会自动创建对应的 Figma Variables

---

## 方法二: 手动创建 Figma Variables

如果你不想使用插件，可以手动创建 Variables。

### 步骤 1: 创建颜色 Variables

1. 在 Figma 右侧栏，点击 **Local variables** (本地变量)
2. 点击 **Create collection** → 命名为 **"Vica Colors"**
3. 添加以下颜色变量:

| 变量名 | 值 | 用途 |
|--------|-----|------|
| `primary` | `#1a1a1a` | 主文字色 |
| `secondary` | `#666666` | 次要文字 |
| `accent` | `#fcf6eb` | 页面背景 |
| `border` | `#e3e2e2` | 分隔线 |
| `warm` | `#BD7D31` | 强调色 |
| `white` | `#ffffff` | 白色 |
| `black` | `#000000` | 黑色 |

### 步骤 2: 创建字体大小 Variables

1. 创建新 Collection → 命名为 **"Vica Typography"**
2. 设置类型为 **Number**
3. 添加以下变量:

| 变量名 | 值 | 用途 |
|--------|-----|------|
| `fontSize/13` | 13 | Footer 信息 |
| `fontSize/14` | 14 | ProjectCard |
| `fontSize/15` | 15 | 基础文字 |
| `fontSize/16` | 16 | Header 链接 |
| `fontSize/20` | 20 | Introduction/Logo |
| `fontSize/32` | 32 | 小标题 |
| `fontSize/40` | 40 | 中标题 |
| `fontSize/48` | 48 | Contact 标题 (移动) |
| `fontSize/60` | 60 | Contact 标题 (桌面) |

### 步骤 3: 创建间距 Variables

1. 创建新 Collection → 命名为 **"Vica Spacing"**
2. 设置类型为 **Number**
3. 添加以下变量:

| 变量名 | 值 | 用途 |
|--------|-----|------|
| `spacing/4` | 4 | ProjectCard gap |
| `spacing/10` | 10 | 小间距 |
| `spacing/15` | 15 | 中间距 |
| `spacing/20` | 20 | Header padding |
| `spacing/30` | 30 | 按钮 padding |
| `spacing/50` | 50 | Footer margin |
| `spacing/56` | 56 | Section padding |
| `spacing/60` | 60 | Footer padding |
| `spacing/70` | 70 | Header 高度 |
| `spacing/100` | 100 | Contact padding |

### 步骤 4: 创建文字样式 (Text Styles)

基于导入的 variables，创建以下文字样式:

#### Logo / Header
- **字体**: Playfair Display
- **大小**: 20px
- **字重**: Regular (400)
- **字间距**: 1-2%

#### Header Link
- **字体**: Inter
- **大小**: 16px
- **字重**: Regular (400)
- **字母间距**: 15%
- **转换**: UPPERCASE

#### ProjectCard Title
- **字体**: Playfair Display
- **大小**: 13px
- **字重**: Regular (400)
- **字母间距**: 8%
- **转换**: UPPERCASE

#### ProjectCard Subtitle
- **字体**: Playfair Display
- **大小**: 13px
- **字重**: Regular (400)
- **样式**: Italic

#### Body Text
- **字体**: Inter
- **大小**: 15px
- **字重**: Regular (400)
- **行高**: 150%

#### Footer Info
- **字体**: Inter
- **大小**: 13px
- **字重**: Regular (400)
- **行高**: 170%

#### Contact Heading (Mobile)
- **字体**: Playfair Display
- **大小**: 48px
- **字重**: Regular (400)

#### Contact Heading (Desktop)
- **字体**: Playfair Display
- **大小**: 60px
- **字重**: Regular (400)

---

## 方法三: 使用 Figma MCP 自动同步

如果你正在使用 Figma MCP server，可以通过 `use_figma` 工具自动创建 Variables。

### 示例代码片段

```javascript
// 创建颜色 Variables
const colorCollection = figma.variables.createVariableCollection('Vica Colors');

const colors = {
  primary: '#1a1a1a',
  secondary: '#666666',
  accent: '#fcf6eb',
  border: '#e3e2e2',
  warm: '#BD7D31'
};

for (const [name, value] of Object.entries(colors)) {
  const variable = figma.variables.createVariable(name, colorCollection, 'COLOR');
  const rgb = hexToRgb(value);
  variable.setValueForMode(colorCollection.defaultModeId, rgb);
}
```

---

## 应用 Variables 到组件

### 创建 Header 组件

1. 创建 Frame: 1440×70px
2. 背景色: 应用变量 `{colors.accent}`
3. 底部边框: 1px, 应用变量 `{colors.primary}` @ 10% opacity
4. 添加 Logo 文字: 应用 "Logo / Header" 文字样式
5. 添加 "Contact Us" 文字: 应用 "Header Link" 文字样式

### 创建 ProjectCard 组件

1. 创建 Frame: 800×600px (landscape) 或 600×800px (portrait)
2. 添加图片占位符
3. 添加标题文字: 应用 "ProjectCard Title" 样式
4. 添加副标题: 应用 "ProjectCard Subtitle" 样式
5. 创建变体: landscape / portrait

### 创建 Footer 组件

1. 创建 Frame: 1440×auto
2. 背景色: 应用变量 `{colors.warm}`
3. 内边距: 应用变量 `{spacing/60}` (垂直), `{spacing/page-horizontal}` (水平)
4. 添加文字: 应用 "Footer Info" 样式

---

## Auto Layout 设置

### Header
- Direction: Horizontal
- Padding: 20px (vertical), clamp(15px, 60px) (horizontal)
- Justify: Space between
- Align: Center

### ProjectCard
- Direction: Vertical
- Gap: 15px
- Padding: 0

### Footer Sections
- Direction: Vertical
- Gap: 8px
- Padding: 0

---

## 导出为 Code Connect

如果你想要建立 Figma 与代码的连接，可以使用 Code Connect:

### 示例 ProjectCard Code Connect

```typescript
// figma.properties.ts
import { figma } from '@figma/code-connect';
import { ProjectCard } from './components/ProjectCard';

figma.connect(ProjectCard, 'FIGMA_NODE_ID', {
  props: {
    title: figma.string('Title'),
    role: figma.string('Role'),
    layout: figma.enum('Layout', {
      Landscape: 'landscape',
      Portrait: 'portrait',
    }),
  },
  example: ({ title, role, layout }) => (
    <ProjectCard
      title={title}
      role={role}
      layout={layout}
      slug="example"
      image="/images/example.jpg"
    />
  ),
});
```

---

## 验证导入

导入完成后，检查以下项目:

- [ ] 所有颜色变量已创建
- [ ] 所有字体大小变量已创建
- [ ] 所有间距变量已创建
- [ ] 文字样式已应用正确的 variables
- [ ] 组件使用 variables 而非硬编码值
- [ ] Auto Layout 间距使用 spacing variables

---

## 常见问题

### Q: Figma Tokens 插件导入失败?
**A**: 确保 JSON 文件格式正确，符合 Tokens Studio schema。如果仍然失败，尝试使用 `tokens/` 目录下的单独 JSON 文件逐个导入。

### Q: 如何处理响应式间距 (clamp)?
**A**: Figma 不支持 CSS `clamp()` 函数。对于响应式值，创建两个变量 (mobile/desktop) 并在不同断点使用不同值。

### Q: 透明度如何应用?
**A**: Figma Variables 支持透明度。创建颜色变量时，可以直接设置 Alpha 通道，或创建单独的 opacity 变量。

### Q: 如何同步 gradients?
**A**: Figma 目前不支持 gradient variables。渐变需要手动创建为 styles 或在组件中硬编码。

---

## 相关资源

- [Figma Variables 官方文档](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Tokens Studio for Figma](https://tokens.studio/)
- [Figma Code Connect](https://www.figma.com/developers/code-connect)

---

**文档版本**: 1.0  
**最后更新**: 2026-04-07  
**项目**: Vica Design (Arent Pyke Portfolio)
