<template>
	<div id="main">
		<audio  :src="firstUrl" ref="audio" id="audio" @ended="audioEnd()"></audio><!-- 音乐播放器 -->
		<m-header></m-header><!-- 首页头部 -->
		<!-- <m-main></m-main>-->	
		<m-nowmusicsheet v-on:play="play"></m-nowmusicsheet><!-- 正在查看的音乐列表 -->
		<m-musiclist v-on:lplay="play"></m-musiclist>
		<m-musicinfo></m-musicinfo>	
		<m-footer></m-footer> <!-- 音乐播放显示 -->
	</div>
</template>

<script>
	import axios  from 'axios'
	import Vue    from 'vue'
	import store  from './store/index.js'
	import data   from '../static/data.json'
	import header from './components/header/header.vue'
	import footer from './components/footer/footer.vue'
	import mymusic from './components/mymusic/mymusic.vue'
	import nowmusicsheet from './components/nowmusicsheet/nowmusicsheet.vue'
	import musiclist from './components/musiclist/musiclist.vue'
	import musicinfo from './components/musicinfo/musicinfo.vue'
	
	
	Vue.prototype.axios = axios

	export default{
		data(){
			return {
				firstUrl:data.music.all[0].url	
				// shownowmusicsheet : false //是否显示当前音乐列表
			}
		},
		computed:{
			playMusic(){  
				return this.$store.state.nowMusic//当前播放歌曲信息
			},
			getIsPlay() { //获取是否播放
				return this.$store.state.isplay
			},
			getLoop() { //播放方式
				return this.$store.state.loop
			},
			getPlayList() { //当前播放列表
				return this.$store.state.playlist;
			}
		},
		watch:{
			getIsPlay(val){
				if(val){
					// var audio =document.querySelector('#audio');
			    	this.$refs.audio.play();
				}
				else{
					// var audio =document.querySelector('#audio');
			        this.$refs.audio.pause();
				}
			}
		},
		methods: {
			play(){
				// var audio =document.querySelector('#audio');
				this.$refs.audio.src =this.playMusic.url;
			    this.$refs.audio.play();
			},
			audioEnd(){//一首歌曲播放完毕，接着做下一步操作
				if(this.getLoop==0){
					this.$refs.audio.play();
				}
				else if(this.getLoop>=1){
					let len=this.getPlayList.length;
					let index=this.getPlayList.indexOf(this.playMusic);
					if(index==len-1)
					{
						index=0;
					}
					else{
						index++;
					}
					this.$store.dispatch('setNowMusic',this.getPlayList[index]);
					this.play();
				}
				else{
					alert("出错了");
				}
			}
		},
		components: {
			'm-header' : header,
			'm-footer' : footer,
			'm-mymusic' : mymusic,
			'm-nowmusicsheet' : nowmusicsheet,
			'm-musiclist' : musiclist,
			'm-musicinfo' : musicinfo,
		},
		store,
		created(){ 	//初始化store
				// this.axios.get('static/data.json')
				//   .then(function (response) {
				//     store.dispatch('setAllInfo',response.date)
				//   })
				//   .catch(function (error) {
				//     console.log(error);
				//   });
				store.dispatch('setAllInfo',data);
				store.dispatch('setNowMusic',data.music.all[0]);
				store.dispatch('setPlaylist',data.music.all);
				// console.log(data);

		}
	}
</script>

<style>
	body,html{
		width: 100%;
		height: 100%;
		background: #ccc;
	}
	#main{
		width: 100%;
		height: 100%;
		font-weight: 200; 
    	font-family: PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif;
	}
	#audio{
		position: fixed;
		z-index: 100;
		display: block;
	}
	/*#main{
		font-family: 'Avenir', Helvetica, Arial, sans-serif
	    -webkit-font-smoothing: antialiased
	    -moz-osx-font-smoothing: grayscale
	  	color: #2c3e50
	}*/
</style>