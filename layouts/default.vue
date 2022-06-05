<template>
 <div>
   <TheHeader />
   <Nuxt />
   <TheFooter />
 </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class Index extends Vue {
  
}
</script>