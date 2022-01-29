## reduce 的使用

reduce 函数接收 4 个参数：

1. Accumulator (acc) 累加器
2. Current Value (cur) 当前元素
3. Current Index (idx) 当前索引
4. Source Array (src) 源数组

```js
const add = [1, 2, 3, 4, 5];

const result = add.reduce((acc, cur, idx, src) => acc + cur);

console.log(result); // => 15
```
