<template>
  <div class="main">
    <h1>{{msg}}</h1>
    <div class="box-container"><div class="init offsetX"></div>offset-x</div>
    <div class="box-container"><div class="init offsetY"></div>offset-y</div>
    <div class="box-container"><div class="init blur"></div>blur</div>
    <div class="box-container"><div class="init spread"></div>spread</div>
    <div class="box-container"><div class="init color"></div>color</div>
    <div class="box-container"><div class="init position"></div>position</div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  data () {
    return {
      msg: 'Box-Shadow'
    }
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 15rem;
}
.box-container {
  width: 100%;
  height: 15rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #019234;
  margin-top: 1rem;
  position: relative;
}
.init {
  width: 5rem;
  height: 5rem;
  background-color: #970409;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.offsetX {
  box-shadow: 0.5rem 0 0 0 #fff;
}
.offsetY {
  box-shadow: 0.5rem 0.5rem 0 0 #fff;
}
.blur {
  box-shadow: 0.5rem 0.5rem 0.5rem 0 #fff;
}
.spread {
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem #fff;
}
.color {
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem #bbb;
}
.position {
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem #fff inset;
}
</style>
