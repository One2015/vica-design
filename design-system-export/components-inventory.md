# Vica Design — Components Inventory

---

## Header
**文件**: `components/Header.tsx`
**类型**: Client Component（固定定位）

| 属性 | 值 |
|---|---|
| 背景 | #fcf6eb |
| 高度 | 70px |
| 位置 | fixed top-0, z-50 |
| 底部线 | 1px, rgba(26,26,26,0.1) |

**子元素**:
- Logo "VICA DESIGN" — 20px, font-serif, tracking-wide, href="/"
- "Contact Us" — 16px, uppercase, tracking-[0.15em], href="/contact"
- 两者均有 hover:opacity-60 效果

---

## ProjectCard (via ProjectGrid)
**文件**: `app/page.tsx` → `ProjectGrid` 函数

**布局变体**:
- `landscape`: w-full, 高度 80vw / 80vh
- `portrait`: w-full / md:w-[calc(50%-0.2rem)], 高度 128vw / 80vh

| 属性 | 值 |
|---|---|
| 图片占位背景 | bg-stone-200 |
| 渐变遮罩 | from-transparent to-black/50 |
| 标题字号 | 14px, leading 16px, uppercase, font-serif |
| 副标题字号 | 14px, leading 16px, italic, font-serif, opacity-90 |
| 文字区padding | pb-56px pt-56px |
| 文字对齐 | text-center |
| 文字颜色 | white |
| 卡片间距 | gap-[0.4rem] = 4px |

**交互**: 整个文字区是 `<Link>` 包裹，跳转到 `/projects/[slug]`

---

## Introduction Section
**文件**: `app/page.tsx`

| 属性 | 值 |
|---|---|
| 字号 | 20px |
| 行高 | 1.6 |
| 字体 | serif (继承body) |
| 最大宽度 | 600px |
| 对齐 | ml-auto（右对齐块） |
| 首行缩进 | 120px（仅desktop） |
| Section padding | py-56px |

---

## ServiceGroup
**文件**: `app/page.tsx` → `ServiceGroup` 函数

| 属性 | 值 |
|---|---|
| 标题字号 | 16px, uppercase, tracking-[0.1em] |
| 标题顶部线 | border-t #e3e2e2, pt-20px |
| 列表项字号 | 16px, leading-1.5, color #666666 |
| 列表项间距 | space-y-[0.5rem] = 5px |
| 标题与列表间距 | mt-[1.5rem] = 15px |
| 两组间距 | space-y-[2rem] = 20px |

**内容**:
- Interior Design（5项）
- Interior Decoration（5项）

---

## ContactForm
**文件**: `components/ContactForm.tsx`
**类型**: Client Component（含状态管理）

**三种状态**:

### idle（默认）
- Your Name + Your Phone — 两栏，15px，底部边框
- Email — 全宽，15px，底部边框
- Message — textarea，4行，四周边框
- SUBMIT按钮 — bg-[#fcf6eb], text-[#1a1a1a], 13px uppercase

### loading（提交中）
- 按钮显示旋转spinner + "Sending…"
- 按钮禁用（disabled）

### success（成功）
- "Thanks for subscribing!" — 32px/40px, font-serif
- "Check your email..." — 16px
- "Submit a new message" — 14px, uppercase, underline, href="/contact"

---

## Footer (Contact区域)
**文件**: `app/page.tsx` → `<footer>` 内联

### Contact表单区
| 属性 | 值 |
|---|---|
| 背景 | #BD7D31 |
| 文字 | white |
| 上下padding | 100px (py-[10rem]) |
| 标题 | 48px/60px, font-serif |
| 副标题 | 16px, white/80 |

### 信息栏
| 属性 | 值 |
|---|---|
| 字号 | 13px (1.3rem) |
| 行高 | 1.9 |
| 左侧 | TORONTO + 地址 + 电话 |
| 右侧 | SOCIAL + Instagram/YouTube/LinkedIn |
| 底部padding | 40px (pb-[4rem]) |

---

## 组件依赖关系

```
layout.tsx
├── Header (components/Header.tsx)
├── main > {children}
│   └── page.tsx (HomePage)
│       ├── ProjectGrid × 2 (前3 + 后3)
│       ├── Introduction section
│       ├── ServiceGroup × 2
│       └── <footer>
│           ├── ContactForm (components/ContactForm.tsx)
│           └── 信息栏 (内联)
└── CustomCursor (components/CustomCursor.tsx)
```

---

## 数据结构

### Project
```typescript
{
  slug: string          // URL路径
  title: string         // 显示名称
  role: string          // 副标题/服务描述
  layout: 'landscape' | 'portrait'
  image: string         // 桌面图片路径
  imageMobile: string   // 移动端图片路径
}
```

当前6个占位项目:
1. Hawthorn House (landscape)
2. Golden Light (portrait)
3. Bradleys Head House (portrait)
4. Mosman Residence (landscape)
5. Paddington Terrace (portrait)
6. Bondi Beach House (portrait)
