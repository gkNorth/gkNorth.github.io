<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <p>TheHeader</p>
  </header>
</template>


<script land="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class TheHeader extends Vue {}
</script>

<style scoped>
.header {
  background: rgb(36, 70, 36);
  margin-bottom: 50px;
  padding: 50px;
}
p {
  color: white;
}
</style>
