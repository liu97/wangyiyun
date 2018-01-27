<template> <!-- 页面底部显示内容 -->
	<div id="footer">
		<div id="music-info" @click="showMusic()">
				<img :src="getNowMusic.img_url" alt="" class="music-pic"> 
				<div class="music-detail">
					<p class="music-name">{{getNowMusic.name}}</p>
					<p class="music-singer">{{getNowMusic.singer}}</p>
				</div>
		</div>
		<div id="playpause" @click="isplay()"><i v-bind:class="{'icon-play':!getIsPlay,'icon-pause':getIsPlay}"></i></div>
		<i class="music-list icon-list-music" @click="showList()"></i>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				// iconplay:true,
				// iconpause:false
			}
		},
		computed: {
			getPlayList() { //获取当前播放列表
				return this.$store.state.playlist
			},
			getNowMusic() { //获取当前歌曲
				return this.$store.state.nowMusic
			},
			getIsPlay() { //获取是否播放
				return this.$store.state.isplay
			}
		},
		methods: {
			isplay() { //播放暂停
				this.$store.dispatch('setIsPlay',!this.getIsPlay);
				// this.iconplay=!this.iconplay;
				// this.iconpause=!this.iconpause;
				// this.$emit('isplay');
			},
			showList() { //显示播放列表
				this.$store.dispatch('setIsShowMusicList',true);
			},
			showMusic() {
				this.$store.dispatch('setIsShowMusic',true);
			}
		}
	}
</script>

<style>
	#footer{
		position: fixed;
	    z-index: 10;
	    background: #fff;
	    bottom: 0;
	    height: 46px;
	    padding: 5px;
	    box-sizing: border-box;
	    left: 0;
	    right: 0;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	#music-info{
		-webkit-box-flex: 1;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    position: relative;
    	height: 100%;
	}
	#playpause{
		border: 2px solid #999;
	    border-radius: 50%;
	    width: 24px;
	    height: 24px;
	    position: relative;
	}
	#playpause:active{
		background: #ccc;
	}
	#playpause i{
		display: block;
	    position: absolute;
	    top: 50%;
	    -webkit-transform: translate3d(-50%,-50%,0);
	    transform: translate3d(-50%,-50%,0);
	    width: 22px;
	    font-size: 14px;
	    color: #333;
	    text-align: center;

	}

	#playpause i.icon-play{
		left: 55%;
	}
	#playpause i.icon-pause{
		left: 50%;
	}
	.music-list{
		margin-left: 10px;
	    display: block;
	    -webkit-box-flex: 0;
	    -ms-flex: 0 0 36px;
	    flex: 0 0 36px;
	    width: 36px;
	    height: 100%;
	    line-height: 36px;
	    text-align: center;
	    font-size: 26px;
	    color: #999;
	}
	.music-list:active{
		background: #d5d5d5;
	}
	#music-info .music-pic {
	    -webkit-box-flex: 0;
	    -ms-flex: 0 0 36px;
	    flex: 0 0 36px;
	    width: 36px;
	    height: 36px;
	}
	#music-info .music-detail {
		-webkit-box-flex: 1;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    padding: 0 5px;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    -ms-flex-pack: distribute;
	    justify-content: space-around;
	}
	#music-info .music-detail p {
	    width: 100%;
	    margin: 0;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	#music-info .music-detail p.music-name {
	    font-size: 14px;
	    font-weight: 400;
	    color: #333;
	    padding: 2px 0;
	}
	#music-info .music-detail p.music-singer {
	    color: #aaa;
	    font-size: 10px;
	    font-weight: 400;
	    padding: 2px 0;
	}

</style>