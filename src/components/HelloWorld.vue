<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide, Inject,Emit } from 'vue-property-decorator';
interface Obj{
  zhang:string
}
@Component({
  name:'helloworld',
  components:{},  //注册的组件
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Inject() objs!:Obj
  public publicKey:string = 'zhanghe'
  public privateKey:string = '这里是封装的私钥';
  public mounted(){
    console.log(this.objs.zhang);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
