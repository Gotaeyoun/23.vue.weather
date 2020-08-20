# Vue, React에서 사용하는 기술(모듈)
## 저장소(전역변수)
	1. vue --> vuex
	2. react --> redux
## ServerSideRendering
	1. vue --> nuxt
	2. react --> next


## xxxx.vue 의 구조
```js
export default{
	name: '....',
	created(){
		//vue가 생성될 때 호출되는 매서드
	}
	data(){
		// 전역변수 등록
		return{
			a:'',
			b:''
		}
	},
	methods:{
		//함수 등록
		onSubmit(){
			
		}
	},
	components:{
		'태그명':NavBar
	}
	// <나의 태그명v-bind:전달할변수명='값'>
	props: ['전달받은 변수명','전달받은 변수명2'] 
	watch:{
		감시할변수명:function(newValue,oldValue){
			//감시하는 변수가 변하면 본 함수가 실행한다.
		}
	},
	computed:{
		함수등록
	},
	created(){
		//vue가 생성될 때 호출되는 매서드
	},
	beforeMount(){
		//vue가 생성될 때(화면에 붙기전) 호출되는 매서드
	},
	mounted(){
		//vue가 화면에 붙으면 호출되는 매서드
	},
	beforeUpdate(){
		//화면(view) 갱신되기 전에 실행하는 매서드
	},
	updated(){
		//화면(view)이 갱신되고 난 후에 실행되는 매서드
	},
	beforeDestory(){
		//vue가 삭제되기 직전에 발생하는 이벤트
	}

}
```

## vue의 부모와 자식이 변수를 전달하는 방식
1. 부모 -> 자식 (부모는 자식에게 bind -> props 전달)
- 부모
```html
<child v-bind:변수명="값>
	props: ['변수명']
```
- 자식
```js
export default{
	props:['변수명']
}
```

2. 자식 -> 부모
-자식
```js
export default{
	methods:{
		onsubmit(){
			this.$emit('@submit', '값')
		}
	}
}
```
-부모
```html
<form v-on:@submit='onSubmit'>
```
```js
export default{
	methods:{
		onSubmit(value){
			this.query = value;
		}
	}
}
```