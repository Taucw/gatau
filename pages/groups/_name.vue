<template>
  <MainChat />
</template>

<script>
import MainChat from '@/components/chat/Main.vue';
export default {
  components: {
    MainChat,
  },
  computed: {
    groupName() {
      return this.$route.params.name;
    },
  },
  async mounted() {
    console.log(this.$galene);
    if (this.$store.state.isConnected) {
      this.$galene.join(this.groupName, 'join', 'username', 'password'); // TODO: plug this
    }

  }
}
</script>