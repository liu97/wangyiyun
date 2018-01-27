<template>
	<transition name="nowmusicsheetup">
		<div class="nowMusicSheet" v-if="getShowInfo" ref="bg" :style="getBackgroundImage"  @scroll="scrollEvent">
			<div class="songheaderheader">
				<i class="back icon-back" @click="hide_music_sheet()"></i> 
				<p class="title">歌单</p> 
				<i class="search icon-search"></i> 
				<i class="menu icon-list-circle"></i> 
			</div>
			<div class="songheader" :style="getBackgroundImage" ref="songheader">
			</div>
			<div class="songsheetdisc" ref="top">
				<div class="songsheetimg">
					<img v-if="getSongSheet.info" :src="getSongSheet.info[0].img_url" alt="" class="songSheetImg"> 
					<span class="info">i</span>
				</div> 
				<div class="disc">
					<p v-if="getSongSheet.name" class="songsheetname">{{getSongSheet.name}}</p> 
					<div class="user">
						<img src="../../../static/images/userlogo.jpg" alt="" class="avatar"> 
						<p  class="songsheetuser">{{getUser.name}}</p> 
						<i class="icon-right"></i>
					</div>
				</div>
				<div class="do">
					<div class="list active">
						<i class="icon-add"></i>
						<span>收藏</span>
					</div>
					<div class="list">
						<i class="icon-msg"></i>
						<span>评论</span>
						
					</div>
					<div class="list">
						<i class="icon-share"></i>
						<span>分享</span>
					</div>
					<div class="list">
						<i class="icon-download"></i>
						<span>下载</span>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="bottom_warpper">
					<div class="info" @click="changeMusic(getSongSheetInfo[0])">
						<i class="icon-music"></i>
						<span>播放全部</span>
						<span class="count">(共{{getSongSheet.count}}首)</span>
					</div>
					<div class="right-setting">
						<i class="icon-menu"></i>
						<span>多选</span>
					</div>
				</div>
				<div class="warpper">
					<div class="songwarpper" v-for="(song,index) in getSongSheetInfo" @click="changeMusic(song);">
						<div class="song">
							<div class="song_list">
								<i class="iconIndex icon-volume-medium" v-if="getNowMusic.id==song.id&&sheetName==getSongSheet.name"></i>
								<span v-text="index+1" v-if="getNowMusic.id!=song.id||sheetName!=getSongSheet.name"></span>
							</div>
							<div class="song_info">
								<span class="name">{{song.name}}</span>
								<span class="singer">{{song.singer}}</span>
							</div>
						</div>
						<i class="rightSetting icon-list-circle" @click.stop=""></i>
					</div>
				</div>
			</div>
		</div>
	</transition>	
</template>

<script>

	export default{
		data (){
			return {
				nowmusicsheet: {},
				sheetName: '',
				songingIndex:-1
			}
		},
		computed: {
			getSongSheet() { // 获取当前歌单信息
				this.nowmusicsheet=this.$store.state.nowMusicSheet;
				return this.$store.state.nowMusicSheet ? this.$store.state.nowMusicSheet : ''
			},
			getUser(){  //获取用户信息
				return this.$store.state.nowMusicSheet.user ? this.$store.state.nowMusicSheet.user : ''
			},
			getShowInfo(){ //是否显示歌单
				return this.$store.state.isShowMusicSheet ? this.$store.state.isShowMusicSheet : ''
			},
			getBackgroundImage(){  //获取头部图片背景
				return {backgroundImage:'url('+this.$store.state.nowMusicSheet.info[0].img_url+')'}
			},
			getSongSheetInfo(){   // 获取歌曲信息
				return this.$store.state.nowMusicSheet.info ?  this.$store.state.nowMusicSheet.info : ''
			},
			getNowMusic() {
				return this.$store.state.nowMusic ?  this.$store.state.nowMusic : ''
			}
		},
		methods: {
			hide_music_sheet(){//隐藏歌单
				this.$store.dispatch('isShowMusicSheet',false);
			},
			scrollEvent () {//鼠标滑动事件
				// alert(this.$refs.songsheet.scrollTop)
				let opacity = this.$refs.bg.scrollTop / (this.$refs.top.offsetHeight + this.$refs.songheader.offsetHeight)
				if (this.$refs.bg.scrollTop < this.$refs.top.offsetHeight + this.$refs.songheader.offsetHeight) {
					this.$refs.songheader.style.opacity = opacity
					this.$refs.songheader.style.filter = `alpha(opacity:${opacity * 100})`
				} else {
					this.$refs.songheader.style.opacity = 1
					this.$refs.songheader.style.filter = `alpha(opacity:${100})`
				}
			},
			changeMusic(music){//改变当前播放歌曲
				if(music.id!=this.getNowMusic.id||this.sheetName!=this.getSongSheet.name){
					this.$store.dispatch('setNowMusic',music);
					this.$store.dispatch('setPlaylist',this.getSongSheetInfo);
					this.isplay();
					this.songingIndex=music.id;
					this.sheetName=this.getSongSheet.name;
				}

			},
			isplay(){
				this.$store.dispatch('setIsPlay',true);
				this.$emit('play');
			}
		}
	}
</script>

<style>
	.nowmusicsheetup-enter-active,.nowmusicsheetup-leave-active{
		transition: all .3s ease;
	}
	.nowmusicsheetup-enter{
		transform: translateY(100%);
		opacity: 0;
	}
	.nowmusicsheetup-leave-to{
		transform: translateX(100%);
		opacity: 0;
	}
	.nowMusicSheet{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		z-index: 9;
		background-size:5800%;
		background-position: center;
		overflow: auto;
	}
	.nowMusicSheet .songheader{
		position: fixed;
		width: 98%;
		padding: 0 1%;
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items:center;
		z-index: 8;
		background-size:5800%;
		background-position:center;
		opacity: 0;
		filter:alpha(opacity=0);
	}
	.nowMusicSheet .songheaderheader{
		position: fixed;
		width: 98%;
		padding: 0 1%;
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items:center;
		z-index: 9;
	}
	.nowMusicSheet .back{
	    width: 36px;
	    height: 36px;
	    text-align: center;
	    line-height: 36px;
	    font-size: 22px;
	    color: #fff;
	    position: relative;
	}
	.nowMusicSheet .title{
	    font-size:18px;
	    color: #fff;
	    font-weight: 400;
		height: 36px;
		line-height: 36px;
		width: calc(100% - 128px);
		padding-left: 5px;
		position: relative;
	}
	.nowMusicSheet .search{
	    width: 46px;
	    height: 36px;
	    line-height: 36px;
	    text-align: right;
	    font-size: 22px;
	    color: #fff;
	    position: relative;
	}
	.nowMusicSheet .menu{
	    width: 46px;
	    height: 36px;
	    line-height: 36px;
	    text-align: left;
	    font-size: 22px;
	    color: #fff;
	    position: relative;
	    right: -10px;
	    position: relative;
	}
	.nowMusicSheet .user{
		width: 100%;
	    height: 30px;
	    line-height: 30px;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.nowMusicSheet .avatar{
		width: 20px;
	    height: 20px;
	    border-radius: 50%;
	}
	.songsheetuser{
		text-indent: 6px;
	    max-width: calc(100% - 40px);
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    color: #f0f0f0;
	    font-size: 12px;
	    color: #fff;
	}
	.nowMusicSheet .user .icon-right{
		width: 20px;
	    height: 20px;
	    text-align: center;
	    line-height: 20px;
	    font-size: 12px;
	    color: #fff;
	}
	.nowMusicSheet .songsheetdisc{
		margin-top: 50px;
		padding: 20px;
		overflow:hidden;
		zoom:1;
	}
	.songsheetimg{
		position: relative;
	    width: 100px;
	    height: 100px;
	    float: left;
	    margin-left: 10px;
	}
	.songsheetimg>img{
		width: 100px;
		height: 100px;
	}
	.nowMusicSheet .songsheetdisc .info{
		display: block;
	    position: absolute;
	    bottom: 2px;
	    right: 2px;
	    width: 16px;
	    height: 16px;
	    border: 1px solid #f0f0f0;
	    border-radius: 50%;
	    text-align: center;
	    line-height: 16px;
	    color: #fff;
	    font-weight: 400;
	    background: rgba(0,0,0,.4);
	}
	.nowMusicSheet .disc{
		float: left;
	    width: calc(100% - 125px);
	    margin-left: 15px;
	    padding-top: 10px;
	    height: 100px;
	}
	.songsheetname{
		height: 41px;
	    line-height: 20px;
	    font-size: 14px;
	    font-weight: 500;
	    overflow: hidden;
	    color: #fff;
	}
	.nowMusicSheet .do{
		float: left;
		width: 100%;
		height: 50px;
		padding-bottom: 10px;
		/*display: flex;
		justify-content:space-between;*/
		color:#fff;
	}
	.nowMusicSheet .do .list{
		float: left;
		width: 25%;
		text-align: center;
		height: 50px;
		font-size: 12px;
	}
	.nowMusicSheet .do .list i{
		display: block;
	    height: 28px;
	    font-size: 18px;
	    line-height: 28px;
	    
	}
	.nowMusicSheet .active{
		color: rgba(255,255,255,0.5);
	}
	.nowMusicSheet .bottom{
		width: 100%;
		background: #eee;
		position: relative;
		top: 0;
		left: 0;
	}
	.nowMusicSheet .bottom_warpper{
		height: 42px;
    	line-height: 42px;
    	border-bottom: 1px solid #ddd;
	}
	.nowMusicSheet .bottom_warpper{
		position: relative;
	}
	.nowMusicSheet .bottom_warpper .info:active{
		background: #d5d5d5;
	}
	.nowMusicSheet .bottom_warpper .info{
		float: left;
		width: 100%;
	}
	.nowMusicSheet .bottom_warpper .info i{
		height: 42px;
	    width: 42px;
	    line-height: 42px;
	    text-align: center;
	    font-size: 16px;
	    margin-right: 5px;
	    margin-left: 10px;
	    vertical-align: middle;
	    color: #666;
	}
	.nowMusicSheet .bottom_warpper .info span{
	    display: inline-block;
	    vertical-align: middle;
	    font-size: 14px;
	    color: #333;
	}
	.nowMusicSheet .bottom_warpper .info span.count{
		font-size: 10px;
	    margin-left: 5px;
	    font-weight: 400;
	    color: #aaa;
	}
	.nowMusicSheet .right-setting{
		position: absolute;
		top:0;
		right: 0;
		cursor: pointer;
		width: 80px;
	}
	.nowMusicSheet .right-setting:active{
		background: #d5d5d5;
	}
	.nowMusicSheet .right-setting i{
		height: 42px;
	    width: 42px;
	    line-height: 42px;
	    text-align: center;
	    font-size: 16px;
	    margin-right: 2px;
	    vertical-align: middle;
	    color: #666;
	    margin-left: 15px;
	}
	.nowMusicSheet .right-setting span{
	    font-size: 12px;
	    color: #666;
	    padding-right: 15px;
	}
	.nowMusicSheet .warpper{
		padding-bottom: 51px;
		position: relative;
	}
	.nowMusicSheet .song{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 54px;
	}
	.nowMusicSheet .songwarpper{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		height: 54px;
	}
	.nowMusicSheet .song:active{
		background: #d5d5d5;
	}
	.nowMusicSheet .song_list{
		position: relative;
		top:0;
		left: 0;
		width: 54px;
    	height: 54px;
    	text-align: center;
    	line-height: 54px;
    	font-size: 16px;
    	font-weight: 500;
    	color: #bababa;
    	float: left;
	} 
	.nowMusicSheet .song_list .iconIndex{
		color: #c62f2f;
	}
	.nowMusicSheet .song_info{
		float: left;
		height: 53px;
    	width: calc(100% - 54px);
    	position: relative;
    	top: 0 ;
    	left: 0;
    	border-bottom: 1px solid #ddd; 
	}
	.nowMusicSheet .song_info .name{
		display: block;
		font-size: 14px;
	    color: #333;
	    padding-top: 8px;
	    font-weight: 400;
	    width: 80%;
	    height: 18px;
	}
	.nowMusicSheet .song_info .singer{
		display: block;
		font-size: 10px;
	    color: #aaa;
	    padding: 6px 0;
	    font-weight: 400;
	    width: 80%;
	    height: 18px;
	}
	.nowMusicSheet .warpper .rightSetting{
		position: absolute;
	    right: 0;
	    top: 0;
	    width: 54px;
	    height: 54px;
	    line-height: 54px;
	    font-size: 14px;
	    text-align: center;
	    color: #aaa;
	    cursor: pointer;
	}
	.nowMusicSheet .warpper .rightSetting:active{
		background: #d5d5d5;
	}
</style>