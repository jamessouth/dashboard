<template>
  <div class="line-chart">
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  name: 'LineChart',
};
</script>

<style scoped>


  .line-chart{
    position: relative;
    width: 96%;
    margin: 1.5em auto 1em;
  }

  @media screen and (min-width: 768px){
    .line-chart{
      width: 94%;
    }
  }
</style>
