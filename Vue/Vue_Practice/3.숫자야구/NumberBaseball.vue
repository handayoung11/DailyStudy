<!--
component를 코딩하는 곳이다.
javascript로 HTML CSS 코딩을 돕기 위해 생긴 ES6문법(template, css, script)
아래 태그들도 javascript문법이며, HTML은 template 태그에 css는 style 태그에 js는 script태그에 코딩한다.
-->
<template>
  <div>
    <h1>{{result}}</h1>
    <form v-on:submit=""onSubmitForm>
      <input ref="answer" maxlength="4" v-model="value" type="text">
    </form>
    <div>시도:</div>
  </div>
</template>

<script>
  export default {
   data() {
      return {
        value: '',
        result: '',
      }
   },
    methods: {
     onSubmitForm(e) {
       e.preventDefault();
     }
    }
  };
</script>

<style>

</style>
