---
title: "表格"
description: 作为数据展示的主题，一个表格是必不可少的
---

:::success
作为数据展示的主题，一个表格是必不可少的
:::

总体来说，表格的写法在 markdown 中是很简单的。其余位置不变，只要吧`| --- | --- | --- |` 这行的 `---` 前或后标注上 `:` 就能代表对应的对齐方式

> 左对齐`| :--- | :--- | :--- |`  
> 右对齐`| ---: | ---: | ---: |`  
> 居中对齐`| :---: | :---: | :---: |`  
> 混合使用`| :--- | :---: | ---: |`

示例如下：

#### 默认对齐方式

```markdown
| 序号 | 作者   | 作品     |
| ---- | ------ | -------- |
| 1    | 余华   | 活着     |
| 2    | 刘慈欣 | 三体     |
| 3    | 莫言   | 丰乳肥臀 |
```

| 序号 | 作者   | 作品     |
| ---- | ------ | -------- |
| 1    | 余华   | 活着     |
| 2    | 刘慈欣 | 三体     |
| 3    | 莫言   | 丰乳肥臀 |

#### 左对齐

```markdown
| 序号 | 作者   | 作品     |
| :--- | :----- | :------- |
| 1    | 余华   | 活着     |
| 2    | 刘慈欣 | 三体     |
| 3    | 莫言   | 丰乳肥臀 |
```

| 序号 | 作者   | 作品     |
| :--- | :----- | :------- |
| 1    | 余华   | 活着     |
| 2    | 刘慈欣 | 三体     |
| 3    | 莫言   | 丰乳肥臀 |

#### 右对齐

```markdown
| 序号 |   作者 |     作品 |
| ---: | -----: | -------: |
|    1 |   余华 |     活着 |
|    2 | 刘慈欣 |     三体 |
|    3 |   莫言 | 丰乳肥臀 |
```

| 序号 |   作者 |     作品 |
| ---: | -----: | -------: |
|    1 |   余华 |     活着 |
|    2 | 刘慈欣 |     三体 |
|    3 |   莫言 | 丰乳肥臀 |

#### 居中对齐

```markdown
| 序号 |  作者  |   作品   |
| :--: | :----: | :------: |
|  1   |  余华  |   活着   |
|  2   | 刘慈欣 |   三体   |
|  3   |  莫言  | 丰乳肥臀 |
```

| 序号 |  作者  |   作品   |
| :--: | :----: | :------: |
|  1   |  余华  |   活着   |
|  2   | 刘慈欣 |   三体   |
|  3   |  莫言  | 丰乳肥臀 |

#### 混合使用

```markdown
| 序号 |  作者  |     作品 |
| :--- | :----: | -------: |
| 1    |  余华  |     活着 |
| 2    | 刘慈欣 |     三体 |
| 3    |  莫言  | 丰乳肥臀 |
```

| 序号 |  作者  |     作品 |
| :--- | :----: | -------: |
| 1    |  余华  |     活着 |
| 2    | 刘慈欣 |     三体 |
| 3    |  莫言  | 丰乳肥臀 |