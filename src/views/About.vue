<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
// import {State, Mutation, Action} from 'vuex-class';
interface Obj{
  zhang:string,
  name:string
}
@Component({
  name:'about'
})
export default class About extends Vue{
 
}
</script>