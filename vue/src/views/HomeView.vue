<template>
  <v-container>
    <Caption></Caption>
<Surrounding></Surrounding>
<Entity></Entity>
<Status></Status>
</v-container>
</template>

<script>
import Caption from '@/components/Caption';
import Surrounding from '@/components/Surrounding';
import Entity from '@/components/Entity';
import Status from '@/components/Status';

export default {
  name: 'Home',

  components: {
    Caption,
    Surrounding,
    Entity,
    Status,
  },
}
</script>
