<template>
  <div>
    <h1 class="status">404</h1>
    <p class="message">ページが見つかりません</p>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head: () => ({
    title: 'Not found',
  })
})
export default class Error extends Vue {};
</script>
