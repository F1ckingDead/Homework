<template>
  <div class="main">
    <h1>{{msg}}</h1>
    <div class="contain-box">
      <div class="column">
        <div v-for="(item,index) in content" :key=index v-html="item.num" class="wd" :class="{ 'sr': item.num % 3 == 1, 'md': item.num % 3 == 2, 'lg': item.num % 3 == 0 }"></div>
        <span class="wd break"></span>
        <span class="wd break"></span>
        <span class="wd break"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flowWrap',
  data () {
    return {
      msg: 'Flow Wrap',
      content: [
        {num: 1},
        {num: 2},
        {num: 3},
        {num: 4},
        {num: 5},
        {num: 6},
        {num: 7},
        {num: 8},
        {num: 9},
        {num: 10}
      ]
    }
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 15rem;
}
.contain-box {
  width: 100%;
  background-color: #bbb;
}
.column {
  display: flex;
  flex-flow: column wrap;
  height: 25rem;
  column-count: 4;
}
.wd {
  width: 20%;
  margin: 0.2rem 0.2rem;
  background-color: royalblue;
  color: antiquewhite;
  border-radius: 0.5rem;
}
.wd:nth-child(4n+1) {
  order: 1;
}
.wd:nth-child(4n+2) {
  order: 2;
}
.wd:nth-child(4n+3) {
  order: 3;
}
.wd:nth-child(4n) {
  order: 4;
}
.break {
  flex-basis: 100%;
  width: 0;
  margin: 0;
}
.sr {
  height: 5rem;
}
.md {
  height: 8rem;
}
.lg {
  height: 10rem;
}
</style>
