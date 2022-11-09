<template>
    <v-card outlined height="20vh">Reachable</v-card>
</template>
<script>
export default {
  name: 'ReachableView',
  computed: {
    caption() {
      return this.$store.state.reachable;
    }
  },
  data: () => {
    return {

    }
  },
  mounted: () => {

  }
};
</script>
