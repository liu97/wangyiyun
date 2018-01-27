<template>
	<div class="musicsheet">
		<div class="title" @click="translate_toogle()">
			<i class="toggle icon-down" ref="toggle" ></i> 
			<div class="detail">
				<span class="name" v-text="iteminfo.name"></span> 
				<span class="count">({{iteminfo.count}})</span> 
				<i class="setting icon-setting" @click.stop=""></i>
			</div>
		</div>
		<transition name="showcontent">
			<div class="content" v-if="showcontent">
				<div class="content_detail" v-for="item in iteminfo.detail" :key="item.name" @click="show_music(item)">
					<img :src="item.info[0].img_url" class="content_img">
					<div class="content_detail_detail">
						<p class="name">{{item.name}}</p>
						<p class="count">{{item.count}}首歌曲</p>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	export default{
		props:['iteminfo'],
		data(){
			return {
				showcontent:true
			}
		},
		methods:{
			translate_toogle (){  //歌单显示隐藏
				this.$refs.toggle.style.transform=this.showcontent ? 'rotate(-90deg) translate3d(50%, 0, 0)' : 'rotate(0) translate3d(0, -50%, 0)';
				this.showcontent=!this.showcontent;
			},
			show_music (item){    //显示当前歌单
				this.$store.dispatch('setShowMusicSheet',item);
				this.$store.dispatch('isShowMusicSheet',true);
			}
		},
		// mounted() {
		//   this.$nextTick(function () {
		//     this.showsheets=this.$store.state.allInfo.music.sheets
		//   })
		// }
	}
</script>

<style>
	.musicsheet{
		position: relative;
		background: #f7f7f7;
		z-index: 8;

	}
	.musicsheet .title{
	    height: 28px;
	    line-height: 28px;
	    background: #e1e1e1;
	    position: relative;
	    z-index: 8;
	    top: 0;
	    left: 0;
	}
	.musicsheet .toggle{
		position: absolute;
	    top: 50%;
	    left: 10px;
	    font-size: 14px;
	    color: #666;
	    transition: all .5s;
	    -webkit-transform: translate3d(0,-50%,0);
	    transform: translate3d(0,-50%,0);
	}
	
	.musicsheet .detail{
		margin-left: 35px;
    	color: #666;
	}
	.musicsheet .title .name{
		display: inline-block;
	    vertical-align: middle;
	    font-weight: 400;
	    font-size: 12px;
	}
	.musicsheet .title .count{
		display: inline-block;
	    vertical-align: middle;
	    font-weight: 300;
	    font-size: 12px;
	}
	.musicsheet .content{
		z-index: 7;
	}
	.musicsheet .content_detail{
		cursor: pointer;
	}
	.musicsheet .content_detail:active {
		background: #ccc;
	}
	.musicsheet .content_img{
		position: absolute;
		padding: 5px;
	    width: 50px;
	    height: 50px;
	    -webkit-box-flex: 0;
	    -ms-flex: 0 0 50px;
	    flex: 0 0 50px;
	}
	.musicsheet .content_detail_detail{
		height: 60px;
	    padding-left: 60px;
	    -webkit-box-flex: 1;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
	    box-sizing: border-box;
	    position: relative;
	}
	.musicsheet .content .name{
		color:#333;
    	font-size: 14px;
    	margin-right: 6px;
    	vertical-align: middle;
    	font-weight: 200;
    	height: 25px;
    	line-height: 25px;
    	padding:5px 0 0 5px;
	}
	.musicsheet .content .count{
		color: #aaa;
	    font-size: 10px;
	    font-weight: 400;
	    vertical-align: middle;
	    height: 25px;
    	line-height: 25px;
    	padding-left: 5px;
	}
	.showcontent-enter-active,.showcontent-leave-active{
		transition: all .3s ease;
	}
	.showcontent-enter, .showcontent-leave-to
	{
	  transform: translateY(-10px);
	  opacity: 0;
	}
	.musicsheet .setting{
		color: #666;
		font-size: 16px;
	    position: absolute;
	    width: 28px;
	    line-height: 28px;
	    text-align: center;
	    height: 28px;
	    top: 50%;
	    right: 10px;
	    -webkit-transform: translateY(-50%);
	    transform: translateY(-50%);
	}

</style>
    