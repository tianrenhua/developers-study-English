# 翻译对照组件使用指南

这个组件提供了一个可重用的翻译对照功能，适用于开发者学习英语的场景，特别是听力和跟读练习。

## 文件结构

- `translation-component.js`: 包含自定义元素`translation-block`的定义和切换功能逻辑
- `translation-component.css`: 组件样式文件
- `translation-component.html`: 组件的示例实现
- `translation-component-example.html`: 展示如何在其他HTML文件中引用和使用这个组件的示例

## 如何在其他HTML文件中引用这个组件

### 1. 引入必要的文件

在你的HTML文件的`<head>`部分添加以下代码：

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- Font Awesome -->
<link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
<!-- 组件样式文件 -->
<link rel="stylesheet" href="translation-component.css">
```

在`<body>`标签的末尾添加：

```html
<!-- 组件JavaScript文件 -->
<script src="translation-component.js"></script>
<script>
    // 页面加载完成后初始化翻译切换功能
    document.addEventListener('DOMContentLoaded', function() {
        // 初始化翻译切换功能（使用默认ID：contentWrapper和toggleBtn）
        initTranslationToggle();
    });
</script>
```

### 2. 创建组件容器和切换按钮

在你的HTML文件中添加以下结构：

```html
<div class="translation-container">
    <div class="section-title">
        <h1>翻译对照标题</h1>
        <p>描述信息</p>
    </div>

    <div class="content-wrapper" id="contentWrapper">
        <!-- 在这里添加translation-block组件 -->
    </div>
</div>

<!-- 悬浮切换按钮 -->
<button id="toggleBtn" class="toggle-btn show">
    <i class="fa fa-eye"></i>
    <span>隐藏</span>
</button>
```

### 3. 使用translation-block组件

在`contentWrapper`容器中，你可以使用`translation-block`标签来添加翻译对照内容：

```html
<translation-block 
    original="原文内容" 
    translation="翻译内容">
</translation-block>

<!-- 可以使用分隔线 -->
<div class="divider"></div>

<!-- 添加更多的翻译对照 -->
<translation-block 
    original="Another text in English" 
    translation="另一段英文内容的翻译">
</translation-block>
```

### 4. 自定义功能（可选）

`initTranslationToggle`函数接受两个可选参数，允许你自定义内容容器和切换按钮的ID：

```javascript
initTranslationToggle('customContentWrapper', 'customToggleBtn');
```

这将允许你在页面上使用不同ID的元素来实现翻译对照功能。

## 功能特点

- 简洁明了的原文和翻译对照显示
- 点击右上角按钮可以切换翻译的显示/隐藏状态
- 完全响应式设计，适配不同屏幕尺寸
- 可重用的自定义元素，便于在多个页面中使用
- 模块化的代码结构，易于维护和扩展

## 依赖

- Tailwind CSS: 用于基础样式
- Font Awesome: 用于图标

## 浏览器兼容性

该组件使用了Web Components标准，支持以下浏览器：

- Chrome 64+
- Firefox 63+
- Safari 12+
- Edge 79+

对于不支持Web Components的旧浏览器，可能需要使用polyfill。