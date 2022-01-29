---
title: "代码片段"
description: 程序员最常使用的功能
---

:::success
作为程序员，代码和我们的工作息息相关。没有网上的现成代码片段进行复制，我们的生活怎么能快乐呢 :)
:::

#### 行级代码片段（字符）表述方式

> 这种一般用来表示强调或特殊字符/组合的内容
> 在想要高亮的字符前后加上反引号 \` 来表示

###### 示例

我们复制一段文字通常要选中后使用 `CTRL` + `C` 的快捷键进行快速复制。

#### 块级代码片段表述方式

1. 可以在代码片段前后使用 \`\`\` 进行包裹，而且可以在代码片段前的 \`\`\` 后加上代码块中的编程语言，来进行高亮代码块

> 下面的示例中就是使用 \`\`\` javascript 来进行 js 语法的高亮

```javascript
console.log("hello world");
```

2. 可以将 \`\`\` 替换为 ~~~ 来进行使用，效果相同

```python
print('hello world')
```

:::info

我这里因为 vs code 的插件，这样书写会自动帮我转换为 \`\`\` 的书写形式  
不过我相信，您最常见到的书写形式也是使用第一种来进行书写，因为想要输出 `~` 字符的话得摁着 shift 键加上 \` 来进行输出（相同的键位，莫名多了一次操作，我想没什么人会这样写）

:::