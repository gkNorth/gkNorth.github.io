<template>
  <div>
    <h1>{{contents.title}}</h1>
    <span>{{formatCreateAt}}</span>
    <div v-html="contents.content"></div>
    <p>
      <nuxt-link :to="`/`">ホーム</nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Contents } from '~/types'
import dayjs from 'dayjs'

@Component
export default class ContentsPage extends Vue {
  contents: any
  async asyncData({
      $microcms,
      params
    }: {
      $microcms: any,
      params: any
    }): Promise<{}> {
      const contents: Contents = await $microcms.get({
        endpoint: `blog/${params.id}`,
      })
      return {
        contents
      }
  }
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