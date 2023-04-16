import {
	regist,
	login,
	getUserInfo,
	getUserAddress,
	deleteUserAddress,
	getChina,
	addUserAddress,
	updateUserAddress,
} from '../../data/customer.js'
import router from '@/router'
export default {
	// 开启命名空间
	namespaced: true,
	state: {
		// 注册
		user_phone: '', //手机号码
		user_password: '', //用户密码
		check_user_password: '', //确认密码
		user_name: '', //用户昵称

		errInfo: undefined,
		// 登录
		username: '', //用户名需要输入手机号
		password: '' ,//密码
		userInfo:undefined,//用户信息
		
		addressList:[],//用户收货地址信息列表 
		
		// 获得省市区列表
		chinaList:[],
		province: undefined,
		city: undefined,
		district: undefined,
		isAddAddress:false, //是否添加
		// 添加收货信息
		uaddr_name:'',
		uaddr_phone: "",
		uaddr_province: "",
		uaddr_city: "",
		uaddr_district: "",
		uaddr_address: "",
		uaddr_isdefault: null,
		isUpdateAddress:false,//是否修改
		update_addr_id:'',//需要修改的id
		
		
	},
	// 同步方法
	mutations: {
		// 不耗时的方法都放到这里面
		add_user_address(context){
			context.isAddAddress = !context.isAddAddress;	
		}
	},
	// 异步方法
	actions: {
		// 例如耗时的ajax请求都放在这里面
		user_regist(context) {
			if (context.check_user_password == context.password) {
				regist({
						'user_phone': context.state.user_phone,
						'user_password': context.state.user_password,
						'user_name': context.state.user_name
					})
					.then(response => {
						if (response.data.httpcode == 200) {
							alert("注册成功")
							router.push('/login')
						} else {
							alert(response.data.message)
							// 失败会默认进入刷新登陆路由
							router.push('/regist');
							
						
						}

					})
					
			} else {
				alert("两次输入密码不一致")
			}
		},
		// 登录
		user_login(context) {
			console.log(context)
			login({
				'username': context.state.username,
				'password': context.state.password
				})
				.then(response=>{
					console.log(response.data)
					if(response.data.httpcode ==  200){
						alert("登录成功")
						localStorage.setItem('token',response.data.data)
						//跳转到首页
						router.push('/')
						//回调用户信息
						this.dispatch('customer/get_user_info')
					}else{
						alert("登录失败")
						context.state.errInfo = response.data;
						router.push('/error')
					}
					
				})
		},
		//获取用户信息
		get_user_info(context){
			getUserInfo().then(response=>{
				context.state.userInfo = response.data.data;
				
				localStorage.setItem('user_info',JSON.stringify(response.data.data))
				console.log('context.state.userInfo',context.state.userInfo)
			
			})
		},
		// 获得用户收获信息
		get_user_address(context){
			console.log(context)
			getUserAddress().then(response=>{
				console.log(response.data)
				context.state.addressList = response.data.data
				
			})
		},
		//删除收货信息
		delete_user_address(context,payload){
			deleteUserAddress(payload).then(response=>{
				if(response.data.httpcode == 200){
					alert("删除成功");
					this.dispatch('customer/get_user_address')
				}else{
					alert("删除失败:${response.data.message}")
					
				}
			})
		},
		// 添加收货信息
		add_address(context){
			addUserAddress({
				uaddr_name:context.state.uaddr_name,
				uaddr_phone: context.state.uaddr_phone,
				uaddr_province: context.state.province.name,
				uaddr_city: context.state.city.name,
				uaddr_district: context.state.district.name,
				uaddr_address: context.state.uaddr_address,
				uaddr_isdefault: context.state.uaddr_isdefault,
			}).then(res=>{
				if(res.status == 200){
					this.dispatch('customer/get_user_address')
				}
			})
		},
		// 获得省市区
		get_China(context){
			getChina().then(res=>{
				context.state.chinaList = res.data.data;
			})
		},
		// 修改收货信息
		update_user_address(context,payload){
			context.state.isUpdateAddress = !context.state.isUpdateAddress
			context.state.update_addr_id = payload.id
			console.log('修改收货信息context',context)
			console.log('修改收货信息payload',payload)
			updateUserAddress({
				
			}).then(res=>{
				console.log('修改res',res)
			})
		}
	
	
	},
}
