<template>
  <div class="main">
    <h2>{{msg}}</h2>
    <div class="init margin-box"><div class="wh margin"><span>margin</span></div></div>
    <div class="init margin-box2"><div class="wh margin2"><span>margin2</span></div></div>
    <div class="init calc-box"><div class="wh calc"><span>calc</span></div></div>
    <div class="init flex-box"><div class="wh flex"><span>flex</span></div></div>
    <div class="init transform-box"><div class="wh transform"><span>transform</span></div></div>
  </div>
</template>

<script>
export default {
  name: 'Center',
  data () {
    return {
      msg: 'Center Vertically/Horizontally'
    }
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 15rem;
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
}
.margin-box {
  position: relative;
}
.margin {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -2.5rem;
  margin-top: -2.5rem;
}
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.transform-box {
  position: relative;
}
.transform {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.margin-box2 {
  position: relative;
}
.margin2 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.calc-box {
  position: relative;
}
.calc {
  position: absolute;
  top: calc(50% - 2.5rem);
  left: calc(50% - 2.5rem);
}
</style>
