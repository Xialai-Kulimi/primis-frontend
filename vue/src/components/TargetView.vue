<template>
    <v-card outlined height="20vh">Target</v-card>
</template>
<script>
export default {
  name: 'TargetView',
  computed: {
    caption() {
      return this.$store.state.target;
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
