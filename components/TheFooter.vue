<!-- Please remove this file from your project -->
<template>
  <footer class="footer">
    <p>TheFooter</p>
  </footer>
</template>


<script land="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class TheFooter extends Vue {}
</script>

<style scoped>
.footer {
  background: rgb(38, 35, 35);
  margin-top: 150px;
  padding: 50px;
}
p {
  color: white;
}
</style>