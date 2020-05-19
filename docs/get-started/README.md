---
title: 快速上手
---
# 快速上手
## Import
Then you need to import its components and plugins in *main.js*.
```javascript
// main.js
// Import the library
import SUI from 'simple-style-ui'
import 'simple-style-ui/dist/simple-style-ui.css'

// Use some plugins
Vue.use(SUI)
```
## 以Button组件为例子
```html
<s-button type="default">Default</s-button>
<s-button type="primary">primary</s-button>
<s-button type="warning">Warning</s-button>
<s-button type="danger">Danger</s-button>
<s-button type="info">Info</s-button>
<s-button type="success">Success</s-button>
```

