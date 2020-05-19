---
title: Tabs 标签页
---

# 标签页

## 简单用法

#### 预览 
&nbsp;
<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>
#### 代码
```vue
<s-tabs selected="Home">
   <s-tabs-head>
      <s-tabs-item name="Home">Home</s-tabs-item>
      <s-tabs-item name="About">About</s-tabs-item>
      <s-tabs-item name="Career">Career</s-tabs-item>
   </s-tabs-head>
   <s-tabs-body>
      <s-tabs-pane name="Home">Home</s-tabs-pane>
      <s-tabs-pane name="About">About</s-tabs-pane>
      <s-tabs-pane name="Career">Career</s-tabs-pane>
   </s-tabs-body>
</s-tabs>
```
 
