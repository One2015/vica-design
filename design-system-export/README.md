# Vica Design — Design System Export

这是从 **Vica Design (Arent Pyke Portfolio)** 项目中提取的完整设计系统文档。

---

## 📦 包含内容

```
design-system-export/
├── figma-tokens.json          ← 主要文件: Figma Tokens 插件兼容格式
├── tokens/                    ← 分类 token 文件
│   ├── colors.json           — 颜色和透明度
│   ├── typography.json       — 字体系统
│   ├── spacing.json          — 间距、尺寸、圆角
│   └── effects.json          — 边框、过渡、动画、渐变
├── components-inventory.md    ← 组件清单和样式规范
├── figma-import-guide.md      ← Figma 导入指南
└── README.md                  ← 本文件
```

---

## 🎨 设计系统概览

### 颜色系统
- **primary** `#1a1a1a` — 主文字色
- **secondary** `#666666` — 次要文字
- **accent** `#fcf6eb` — 页面背景、Header 背景
- **border** `#e3e2e2` — 分隔线
- **warm** `#BD7D31` — 强调色、Footer 背景

### 字体系统
- **Serif**: Playfair Display — Logo、标题、项目标题
- **Sans**: Inter — 正文、导航、辅助文字

### 间距系统
- 基于 10px 网格 (html 根字体 62.5%)
- 主要间距: 4, 10, 15, 20, 30, 50, 56, 60, 70, 100px
- 响应式间距: `clamp(15px, 5vw, 60px)` 用于页面水平 padding

### 设计特点
- ✅ 无圆角 — 全部使用尖角
- ✅ 无阴影 — 干净简洁
- ✅ 微动画 — fade-up, fade-in, 悬停效果
- ✅ 响应式 — 移动优先，流畅适配

---

## 🚀 快速开始

### 方法 1: Figma Tokens 插件 (最快)

1. 在 Figma 中打开你的文件
2. 安装并运行 **Tokens Studio for Figma** 插件
3. 导入 `figma-tokens.json`
4. 创建 Figma Variables

详细步骤见 → [`figma-import-guide.md`](./figma-import-guide.md)

### 方法 2: 手动创建 Variables

1. 在 Figma 中创建 Variable Collections:
   - Vica Colors
   - Vica Typography
   - Vica Spacing
2. 根据 `tokens/` 文件中的值手动添加变量
3. 创建 Text Styles 和组件

详细步骤见 → [`figma-import-guide.md`](./figma-import-guide.md)

### 方法 3: Figma MCP 自动同步

如果你使用 Figma MCP server，可以运行 JavaScript 代码自动创建 Variables。

---

## 📚 文档说明

### 1. `figma-tokens.json`
主要的 Figma Tokens 文件，包含所有设计 tokens:
- 颜色、透明度
- 字体家族、大小、字重、行高、字间距
- 间距、尺寸
- 边框、圆角

**格式**: Tokens Studio for Figma 插件兼容格式

### 2. `tokens/` 目录
单独的 token 文件，按类型分类:
- `colors.json` — 颜色和透明度值
- `typography.json` — 字体系统
- `spacing.json` — 间距、尺寸、最大宽度
- `effects.json` — 边框、过渡、动画、渐变

**用途**: 如果主文件导入失败，可以逐个导入这些文件

### 3. `components-inventory.md`
详细的组件清单，包含:
- 所有主要组件规格 (Header, Footer, ProjectCard 等)
- 样式规范和类名
- 响应式布局说明
- 动画和过渡定义
- 数据结构说明

**用途**: 设计师和开发者参考，确保设计与代码一致

### 4. `figma-import-guide.md`
Step-by-step 导入指南，包含:
- Figma Tokens 插件使用方法
- 手动创建 Variables 步骤
- Figma MCP 自动化脚本
- 组件创建示例
- Auto Layout 设置
- Code Connect 配置
- 常见问题解答

---

## 🔧 使用场景

### 场景 1: 创建新设计文件
1. 导入 `figma-tokens.json` 到 Figma
2. 创建 Variables
3. 使用 Variables 创建组件
4. 参考 `components-inventory.md` 确保样式一致

### 场景 2: 同步现有设计
1. 对比当前设计与 token 值
2. 更新不一致的颜色、间距、字体
3. 替换硬编码值为 Variables

### 场景 3: 开发者参考
1. 查看 `components-inventory.md` 了解组件规格
2. 根据 token 值编写样式代码
3. 确保 Figma 设计与代码实现一致

### 场景 4: 设计交接
1. 将整个 `design-system-export/` 文件夹交给设计师
2. 设计师导入 tokens 到 Figma
3. 基于 components inventory 创建新页面

---

## ⚙️ 技术栈

本设计系统从以下技术栈提取:

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS 4
- **字体**: Playfair Display (serif), Inter (sans)
- **动画**: Framer Motion, Tailwind animations
- **图片**: Next.js Image 组件

---

## 📐 设计原则

### 1. 优雅简洁
- 使用衬线字体 (Playfair Display) 营造高端感
- 温暖米色背景 (#fcf6eb) 而非纯白
- 无圆角、无阴影，干净利落

### 2. 精致细节
- 精确的字间距控制 (0.08em, 0.1em, 0.15em)
- 微妙的悬停动画 (opacity, scale, transform)
- 渐变叠加用于图片增强可读性

### 3. 响应式设计
- 移动优先，流畅适配桌面
- 使用 clamp() 实现流体间距
- ProjectCard 在移动端堆叠，桌面端网格

### 4. 性能优化
- 使用 CSS variables 和 Tailwind utilities
- 图片懒加载和响应式 sizes
- 减少动画查询 (prefers-reduced-motion)

---

## 🔄 更新记录

### v1.0 (2026-04-07)
- ✅ 初始版本
- ✅ 提取所有颜色、字体、间距 tokens
- ✅ 创建 Figma Tokens JSON 文件
- ✅ 编写完整的组件清单
- ✅ 提供 Figma 导入指南

---

## 📖 相关文档

项目中还有以下设计相关文档:

- **CLAUDE.md** — Figma MCP 设计系统规则和组件模式
- **tailwind.config.ts** — Tailwind 配置和自定义 tokens
- **globals.css** — 全局样式、组件类、动画定义

---

## 🤝 贡献

如果发现 tokens 不准确或缺少内容:

1. 检查源代码 (`tailwind.config.ts`, `globals.css`, `components/`)
2. 更新对应的 JSON 文件
3. 更新 `components-inventory.md` 文档
4. 提交 PR 或通知团队

---

## 📞 联系方式

如有问题或建议，请联系:
- **项目**: Vica Design (Arent Pyke Portfolio)
- **技术栈**: Next.js + Tailwind CSS + Figma

---

## 📜 许可证

本设计系统文档属于 Vica Design 项目的一部分。

---

**Happy Designing! 🎨**

---

**生成时间**: 2026-04-07  
**生成工具**: Claude Code  
**项目**: `/Users/yvoonezhan/arent-pyke-portfolio`
