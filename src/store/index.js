import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
	state: {
		allInfo: {},
		nowMusicSheet: {}, //当前歌单页面
		isShowMusicSheet:false, //是否显示歌单页面
		nowMusic:{},//当前正在播放的歌曲
		playlist: [],//当前播放列表
		isplay:false,//是否为播放状态
		loop:1,//0表示单曲循环,1表示循序播放,2表示随机播放
		isShowMusicList:false,//是否显示播放列表
		isShowMusic:true,//是否显示歌曲信息
	},
	getters: {
		
	},
	mutations: {
		setAllInfo(state,info){
			state.allInfo=info
		},
		setShowMusicSheet(state,item){
			state.nowMusicSheet=item
		},
		isShowMusicSheet(state,is){
			state.isShowMusicSheet=is
		},
		setNowMusic(state,music){
			state.nowMusic=music
		},
		setPlaylist(state,list){
			state.playlist=list
		},
		setIsPlay(state,is){
			state.isplay=is
		},
		setLoop(state,lo){
			state.loop=lo
		},
		setIsShowMusicList(state,bo){
			state.isShowMusicList=bo;
		},
		setIsShowMusic(state,bo){
			state.isShowMusic=bo;
		},
	},
	actions: {
		setAllInfo({commit,state},info){  //将data.json的信息存储进allInfo
			commit('setAllInfo',info)
		},
		setShowMusicSheet({commit,state},item){ // 目前歌单信息
			commit('setShowMusicSheet',item)
		},
		isShowMusicSheet({commit,state},is){
			commit('isShowMusicSheet',is)
		},
		setNowMusic({commit,state},music){
			commit('setNowMusic',music)
		},
		setPlaylist({commit,state},list){
			commit('setPlaylist',list)
		},
		setIsPlay({commit,state},is){
			commit('setIsPlay',is)
		},
		setLoop({commit,state},lo){
			commit('setLoop',lo)
		},
		setIsShowMusicList({commit,state},bo){
			commit('setIsShowMusicList',bo)
		},
		setIsShowMusic({commit,state},bo){
			commit('setIsShowMusic',bo)
		}
	},
	modules: {

	}
})
export default store