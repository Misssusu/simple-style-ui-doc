---
title: Input 输入框
---

# 输入框

## 基础用法

#### 预览 
&nbsp;
<ClientOnly>
<input-demo3></input-demo3>
</ClientOnly>
#### 代码
```vue
<s-input v-model="input" placeholder="Please enter content"></s-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```

## 禁用状态

#### 预览 
&nbsp;
<ClientOnly>
<input-demo2></input-demo2>
</ClientOnly>
#### 代码
```vue
<s-input v-model="input" :disabled="true" placeholder="Please enter content"></s-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```

## 可清空

#### 预览 
&nbsp;
<ClientOnly>
<input-demo1></input-demo1>
</ClientOnly>
#### 代码
```vue
<s-input v-model="input" clearable placeholder="Please enter content"></s-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```

## 密码框

#### 预览 
&nbsp;
<ClientOnly>
<input-demo4></input-demo4>
</ClientOnly>
#### 代码
```vue
<s-input v-model="input" show-password placeholder="Please enter content"></s-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```

## 带 icon 的输入框

#### 预览 
&nbsp;
<ClientOnly>
<input-demo5></input-demo5>
</ClientOnly>
#### 代码
```vue
<s-input v-model="searchValue" search placeholder="Please enter content"></s-input>
<s-input v-model="calendarValue" calendar placeholder="Please select a date"></s-input>

<script>
  export default {
    data() {
      return {
        searchValue: '',
        calendarValue: ''
      }
    }
  }
</script>
```
