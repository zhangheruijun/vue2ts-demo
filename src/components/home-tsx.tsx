import { Component, Prop, Vue, Emit, Watch, Ref, Inject } from 'vue-property-decorator';
interface Item {
	text: string,
	complete: boolean
}
interface Obj {
	zhang: string
}
@Component({
	name: 'home-tsx'
})
export default class HomeTsx extends Vue {
	@Prop(Object) public item!: Item;
	@Prop(Number) public index!: number;
	@Prop(Number) public editing!: number;
	// @Prop({ default: 30, type: Number }) private age!: number  有默认属性的写法
	public editingContent = '';  //输入的内容
	public nameRef = '';
	@Ref('refname') public refname!: object;
	@Emit('on-save') save(k: string, e: any) {
		e.stopPropagation()  //阻止事件冒泡
		return {
			index: this.index,
			content: this.editingContent,
			k: k
		}
	};
	@Emit('update:editing') edit(e: any) {
		e.stopPropagation()  //阻止事件冒泡
		return this.index
	};
	@Emit() onCancel(e: any) {
		e.stopPropagation()  //阻止事件冒泡
	};
	@Watch('editing', { immediate: true, deep: true }) onPersonChanged(newValue: number) {
		newValue == this.editing ? this.editingContent = this.item.text : ''
	};
	@Inject() objs!: Obj
	public mounted() {
		console.log(this.refname);  //tsx中的ref用法
		console.log(this.objs.zhang);  //tsx中的Inject用法
	};
	protected render() {
		return (
			<li>
				{this.index == this.editing ?
					(<div>
						<a-input v-model={this.editingContent} style='width:200px'></a-input>
						<a-icon type='check' nativeOnClick={this.save.bind(this, 'ok')} />
						<a-icon type='close' nativeOnClick={this.onCancel} />
					</div>) :
					(<div>
						<span ref='refname'>{this.item.text}</span>
						<a-icon type='edit' nativeOnClick={this.edit} />
					</div>)
				}
			</li>
		)
	}
}
