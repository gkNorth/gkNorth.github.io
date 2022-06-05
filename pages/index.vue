<template>
  <ul>
    <BlogListItem
      v-for="contents in blogList"
      :key="contents.id"
      :contents=contents
    />
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BlogListItem from '~/components/molecules/BlogListItem.vue'

@Component({
  components: {
    BlogListItem
  }
})
export default class PageIndex extends Vue {
  async asyncData({
      $microcms
    }: {
      $microcms: any
    }): Promise<{}> {
    const blogList = await $microcms.get({
      endpoint: 'blog',
    })
    return {
      blogList: blogList.contents
    }
  }
}
</script>
