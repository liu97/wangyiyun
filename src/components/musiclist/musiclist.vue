<template> <!-- 页面底部显示内容 -->	
	<div class="musiclist" ref="music">
		<transition name="music_contant"  v-on:after-leave="afterLeave()" v-on:before-enter="beforeEnter()">	
			<div class="contant" v-if="getIsShowMusicList">
				<div class="musiclist_head">
					<div class="play_type" @click="changeXunHuan()">
						<i v-bind:class="{'icon-music-shunxu':loopis1,'icon-music-danqu1':loopis0,'icon-music-random':loopis2}"></i> 
						<span>{{xunhuan}}</span> 
						<span>({{getPlaylist.length}})</span>
					</div>
					<div class="right">
						<div class="collect">
							<i class="icon-add-project"></i> 
							<span>收藏</span>
						</div> 
						<div class="delete">
							<i class="icon-delete"></i> 
							<span>清空</span>
						</div>
					</div>
				</div>
				<ul class="musiclist_ul">
					<li class="musiclist_li" v-for="(music,index) in getPlaylist" @click="playMusic(music)">
						<i class="playingicon icon-volume-medium" v-if="index==getPlaylist.indexOf(getNowMusic)"></i>
						<span class="name">{{music.name}} -</span>
						<span class="singer">{{music.singer}}</span>
					</li>
				</ul>
			</div>	
		</transition>
		<transition name="music_mask" >
			<div class="mask" v-if="getIsShowMusicList" @click="hideList()"></div>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				loop:1,
				xunhuan:'列表循环'
			}
		},
		computed:{
			getPlaylist(){ //获取当前播放列表
				return this.$store.state.playlist;
			},
			getNowMusic(){//获取当前歌曲
				return this.$store.state.nowMusic;
			},
			getIsShowMusicList(){//是否显示歌曲列表
				return this.$store.state.isShowMusicList;
			},
			loopis0(){
				return this.loop==0;
			},
			loopis1(){
				return this.loop==1;
			},
			loopis2(){
				return this.loop==2;
			}
		},
		methods:{
			hideList(){
				this.$store.dispatch('setIsShowMusicList',false);
			},
			afterLeave(){ //消失过渡完成后，把musiclist的z-index设置为7
				this.$refs.music.style.zIndex=7;

			},
			beforeEnter(){//开始过渡前，把musiclist的z-index设置为11
				this.$refs.music.style.zIndex=11;
			},
			playMusic(music){
				this.$store.dispatch('setNowMusic',music);
				this.$store.dispatch('setIsPlay',true);
				this.$emit('lplay');
			},
			changeXunHuan(){ //改变歌曲播放方式
				this.loop=(++this.loop)%3;
				let lp;
				let pl=this.getPlaylist;
				if(this.loop==0){
					this.xunhuan='单曲循环';
					lp=0;
				}
				else if(this.loop==1){
					this.xunhuan='列表循环';
					lp=1;
				}
				else{
					this.xunhuan='随机播放';
					lp=2;
					pl.sort(function(){return 0.5-Math.random()});
				}
				this.$store.dispatch('setLoop',lp);
				this.$store.dispatch('setPlaylist',pl)
			}
		}
	}
</script>

<style>
.music_contant-enter-active,.music_contant-leave-active,.music_mask-enter-active,.music_mask-leave-active{
  transition: all .5s ease;
}
.music_contant-enter, .music_contant-leave-to {
  opacity: 0;
  transform: translateY(100%);
  
}
.music_mask-enter, .music_mask-leave-to{
  opacity: 0;
}
.musiclist{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom:0;
	z-index:7;
}
.musiclist .contant{
	position: fixed;
    height: 314px;
    background: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 11;
}
.musiclist .contant .musiclist_head{
	width: 100%;
    position: relative;
    height: 50px;
    border-bottom: 1px solid #ddd;
}
.musiclist_head .play_type{
	display: inline-block;
    width: auto;
    height: 100%;
    line-height: 50px;
    padding: 0 15px;
    cursor: pointer;
}
.musiclist_head .play_type:active,.musiclist_head .right .collect:active,.musiclist_head .right .delete:active {
	background: #d5d5d5;
}
.musiclist_head .play_type i {
    color: #666;
    font-size: 18px;
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.musiclist_head .play_type span {
    color: #666;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 300;
}
.musiclist_head .right{
	float: right;
    height: 100%;
    line-height: 50px;
}
.musiclist_head .right .collect,.musiclist_head .right .delete {
    font-size: 14px;
    color: #666;
    display: inline-block;
    width: auto;
    height: 100%;
    line-height: 50px;
    padding: 0 15px;
    cursor: pointer;
}
.musiclist_head .right .collect i,.musiclist_head .right .delete i {
    font-size: 18px;
    vertical-align: middle;
}
.musiclist_ul{
	height: calc(100% - 51px);
    margin: 0;
    padding: 0;
    overflow: auto;
}
.musiclist_li .playingicon {
    font-size: 14px;
    vertical-align: middle;
    color: #c62f2f;
}
.musiclist_li{
	height: 42px;
    line-height: 42px;
    padding-left: 15px;
    font-weight: 400;
    font-size: 14px;
    color: #666;
    border-bottom: 1px solid #ddd;
}
.musiclist_li:active{
	background: #d5d5d5;	
}
.musiclist .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    z-index: 10;
}
</style>