<template lang="pug">
div
  line-chart(
      :data="{'2017-05-13': 2, '2017-05-14': 5}"
      
      :download="true"
      id="users-chart" width="500px" height="500px"
      ytitle="Price"
      xtitle="Time"
      )
</template>

<script>
export default {};
</script>
