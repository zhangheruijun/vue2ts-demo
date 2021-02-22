
import {VuexModule, Module, Mutation, Action, getModule} from 'vuex-module-decorators'
import store from '@/store'
// 参数一：module名称，开启命名空间后会以name为命名空间
// 参数二：是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网。本篇博客必须选择true，这也是为什么index.ts一直不用修改的原因，如果设置为false会有很大的变动
// 参数三：是否开启命名空间，如果你的模块很多，强烈建议开启
// 参数四：挂载的store目标
interface listObj{
	text: string,
	complete: boolean,
}
interface userContent{
	index:number,
	content:string,
	k:string
}
@Module({
  name:'user',dynamic:true,namespaced:true,store
})
export default class User extends VuexModule{
	public todoList:listObj[] = [
		{
			text: "我排第一",
			complete: false,
		},
		{
			text: "我排第二",
			complete: false,
		},
	];
	get getList(){
		return this.todoList[0].text
	};
	@Mutation
	private cons(n:userContent){
		const { index,content } = n
		this.todoList[index].text = content
	};
	@Action
	public changs(n:userContent){
		this.cons(n)
		// commit('cons',n)
	}
}
export const userModule = getModule(User)