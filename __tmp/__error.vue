<template>
  <div>
    <h1>{{error.statusCode}}</h1>
    <p>{{error.message}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  layout: 'error'
})
export default class Error extends Vue {
  @Prop()
  error!: object
}
</script>

<style>

</style>