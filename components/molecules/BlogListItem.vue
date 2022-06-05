<template>
  <li>
    <span class="create-at">{{formatCreateAt}}  </span>
    <span class="title">
      <nuxt-link :to="`/${contents.id}`">{{contents.title}}</nuxt-link>
    </span>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Contents } from '~/types'
import dayjs from 'dayjs'

@Component
export default class BlogListItem extends Vue {
  @Prop()
  contents!: Contents
  
  get formatCreateAt() {
    const time = dayjs(this.contents.createdAt)
    return time.format('YYYY/MM/DD')
  }
}
</script>

<style scoped>
li {
  display: flex;
  margin-bottom: 20px;
}
.create-at {
  display: inline-block;
  width: 110px;
}
</style>