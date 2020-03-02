<template>
  <div class="main">
    <h1>{{msg}}</h1>
    <div>
      <ul>
        <li class="title"><router-link to="/Position">Position</router-link></li>
        <li class="title"><router-link to="/Center">Center Vertically/Horizontally</router-link></li>
        <li class="title"><router-link to="/Box">Box Shadow</router-link></li>
        <li class="title"><router-link to="/flowWrap">Flow Wrap</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Web Homework'
    }
  }
}
</script>

<style scoped>
.title {
  text-align: left;
  font-size: 1.5rem;
}
</style>
