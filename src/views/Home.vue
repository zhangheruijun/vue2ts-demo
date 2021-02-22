<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ul>
      <home-tsx
        ref="zhang"
        v-for="(item,index) in list"
        :key="index"
        :item="item"
        :index="index"
        :editing.sync="editing"
        @on-save="headleSave"
        @on-cancel="editing=-1"
      />
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js App00000" />
    {{getStore}}
  </div>
</template>
<script lang='ts'>
// @ is an alias to /src
import { Component, Prop, Vue, Provide, Inject, Ref } from "vue-property-decorator";
// import {State, Mutation, Action} from 'vuex-class';
import HelloWorld from "@/components/HelloWorld.vue";
import homeTsx from "./../components/home-tsx";
import { userModule } from "./../store/module/user";

@Component({
  name: "home",
  components: { HelloWorld, homeTsx },
})
export default class Home extends Vue {
  public editing: number = -1;
  public list = userModule.todoList; //store中的state
  public getStore: string = userModule.getList; //store中的getters
  // @State('todoList') public list;  //vuex-class中的state在vuex中的用法
  // @Action('changs') public actionFun; //vuex-class中的actions在vuex中的用法;传的参数要写在标签上
  @Provide() public objs = { zhang: "慢慢看" };
  public headleSave({ ...obj }): void {
    const { index, content, k } = obj;
    console.log(index, content, k);
    // this.actionFun({index,content})
    userModule.changs({ index, content, k });
    this.editing = -1;
	}
}
</script>
<style lang='less' scoped></style>
