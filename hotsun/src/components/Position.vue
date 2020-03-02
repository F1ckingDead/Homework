<template>
    <div class="main">
      <h1>{{msg}}</h1>
      <div class="init"><div class="wh static"><span>static</span></div></div>
      <div class="init"><div class="wh relative"><span>relative</span></div></div>
      <div class="init"><div class="wh absolute"><span>absolute</span></div></div>
      <div class="init"><div class="wh fixed"><span>fixed</span></div></div>
      <div class="init"><div class="wh sticky"><span>sticky</span></div></div>
    </div>
</template>

<script>
export default {
  name: 'Position',
  data () {
    return {
      msg: 'Position Differences'
    }
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 40rem;
}
.init {
  width: 100%;
  height: 15rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #019234;
  margin-top: 1rem;
}
.wh {
  width: 5rem;
  height: 5rem;
  background-color: #970409;
  margin: 0 auto;
}
.static {
  position: static;
}
.relative{
  position: relative;
  left: 1rem;
  top: 1rem;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
  right: 1rem;
  top: 1rem;
}
.sticky {
  position: sticky;
  top: 0;
}
</style>
