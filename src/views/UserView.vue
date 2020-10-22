<template>
  <div>
    <user-profile>
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">{{ userInfo.created }}</template>
      <div slot="karma">{{ userInfo.karma }}</div>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  created() {
    const username = this.$route.params.id
    this.$store.dispatch('FETCH_USER', username)
  }
}
</script>

<style>

</style>