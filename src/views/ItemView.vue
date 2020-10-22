<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile>
        <div slot="username">{{ itemInfo.user }}</div>
        <template slot="time">{{ itemInfo.time_ago }}</template>
      </user-profile>
    </section>

    <section>
      <h2>{{ itemInfo.title }}</h2>
    </section>

    <section>
      <!-- 질문 댓글 -->
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters({
      itemInfo: 'fetchedItem'
    })
    // itemInfo() {
    //   return this.$store.state.item
    // }
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>