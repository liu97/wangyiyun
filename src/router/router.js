import Vue from 'vue'
import VueRouter from 'vue-router'
import mymusic   from '../components/mymusic/mymusic.vue'
import findmusic   from '../components/findmusic/findmusic.vue'
import community   from '../components/community/community.vue'

Vue.use(VueRouter)

// const MyMusic={
// 	template : "<div>mymusic</div>"
// }
const FindMusic={
	template : "<div>FindMusic</div>"
}
const Community={
	template : "<div>Community</div>"
}

export default new VueRouter({
		routes:[
			{
				path: '/',
				redirect: '/mymusic'
			},
			{
				path: '/mymusic',
				component: mymusic
			},
			{
				path: '/findmusic',
				component: findmusic
			},
			{
				path: '/community',
				component: community
			},
		]
})
