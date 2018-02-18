<!-- <template>
	<transition name="isshowmusic">
		<div class="musicinfo" v-if="getIsShowMusic">
			<div class="content-header">
				<i class="back icon-back"></i> 
				<div class="musicTopDetail">
					<p class="name">修炼爱情</p> 
					<p class="singer">林俊杰</p>
				</div> 
				<i class="share icon-share"></i>
			</div> 
			<div class="content-wrapper" >
				<div class="cd">
					<div class="swith-line">
						<div class="triger"></div>
					</div> 
					<div class="cd-content" >
						<div class="wrapper animate ">
							<div class="cd-bg"></div> 
							<img alt="" class="img" src="http://oiq8j9er1.bkt.clouddn.com/music_%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85.jpg">
						</div>
					</div>
				</div> 
				<div class="musicDo">
					<i class="icon icon-like"></i> 
					<i class="icon icon-download"></i> 
					<i class="icon icon-msg"></i> 
					<i class="icon icon-list-circle-small"></i>
				</div>
			</div> 
			<div class="lrc-wrapper">
				<div class="volume-range">
					<div class="range">
						<span class="span-left">00:00</span> 
						<i class="rangeicon icon-volume-medium" ></i> 
						<div class="duration">
							<span class="currentProgress" >
							</span> 
							<span class="ball" >
							</span>
						</div> 
						<span class="span-right">00:00</span>
					</div>
				</div> 
				<div class="lrc">
					<div class="div-lrc"></div>
				</div>
			</div> 
			<div class="content-footer">
				<div class="div-range">
					<div class="range">
						<span class="span-left">02:04</span> 
						<i class="rangeicon icon-volume-medium"></i> 
						<div class="duration">
							<span class="currentProgress"></span> 
							<span class="ball"></span>
						</div> 
						<span class="span-right">04:47</span>
					</div>
				</div> 
				<div class="musicDetailCtrl">
					<i class="playType icon-music-shunxu"></i> 
					<i class="prev icon-prevdetail"></i> 
					<i class="playPause icon-pause-detail"></i> 
					<i class="next icon-nextdetail"></i> 
					<i class="menu icon-list-music"></i>
				</div>
			</div>
		</div>
	</transition>		
</template>
<script>
	export default{
		data(){
			return {}
		},
		methods:{

		},
		computed:{
			getIsShowMusic(){
				return this.$store.state.isShowMusic;
			}
		}
	}
</script>
<style>
	.isshowmusic-enter-active,.isshowmusic-leave-active{
		transition: all .3s ease;
	}
	.isshowmusic-enter{
		transform:translateY(100%);
		opacity: 0;
	}
	.isshowmusic-leave-to{
		transform:translateX(100%);
	}
	.musicinfo{
		width: 100%;
		height: 100%;
		background: red;
		position: fixed;
		z-index: 11;
	}
	.musicinfo .content-header{
		position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    height: 10vh;
	    padding-top: 1vh;
	    box-sizing: border-box;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.musicinfo .content-header .back,  .content-header .share {
	    width: 50px;
	    -webkit-box-flex: 0;
	    -ms-flex: 0 0 50px;
	    flex: 0 0 50px;
	    height: 8vh;
	    color: #fff;
	    font-size: 24px;
	    line-height: 8vh;
	    text-align: center;
	}
	.musicinfo .content-header .musicTopDetail {
	    -webkit-box-flex: 1;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    color: #fff;
	    width: calc(100% - 100px);
	}
	.content-header .musicTopDetail .name {
	    font-size: 14px;
	    font-weight: 400;
	}
	.content-header .musicTopDetail .singer {
	    margin: 0;
	    color: #fff;
	    font-size: 12px;
	    padding: 4px 0;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;
	}
	.content-header .share {
	    width: 50px;
	    -webkit-box-flex: 0;
	    -ms-flex: 0 0 50px;
	    flex: 0 0 50px;
	    height: 8vh;
	    color: #fff;
	    font-size: 24px;
	    line-height: 8vh;
	    text-align: center;
	}
	.musicinfo .content-wrapper {
	    position: absolute;
	    top: 10vh;
	    left: 0;
	    bottom: 20vh;
	    right: 0;
	    overflow: hidden;
	}
	.musicdetail .detailcontent .content-wrapper .cd .swith-line {
	    width: 80%;
	    height: 1px;
	    background-image: linear-gradient(270deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));
	    margin: 0 auto;
	}
	.content-wrapper .cd .swith-line .triger {
	    position: absolute;
	    top: -14px;
	    left: 50%;
	    -webkit-transform: translate3d(-16px,0,0);
	    transform: translate3d(-16px,0,0);
	    width: 90px;
	    height: 140px;
	    background-image: url(/static/images/swith.png);
	    background-size: cover;
	    -webkit-transform-origin: 14px 16px;
	    transform-origin: 14px 16px;
	    transition: all .3s;
	    z-index: 5;
	}
	.content-wrapper .cd .cd-content,  .content-wrapper .cd .cd-content .wrapper {
	    width: 44vh;
	    height: 44vh;
	    position: relative;
	    margin: 0 auto;
	    margin-top: 20px;
	}
	.content-wrapper .cd .cd-content .wrapper .cd-bg {
	    width: 44vh;
	    height: 44vh;
	    position: absolute;
	    top: 0;
	    left: 50%;
	    -webkit-transform: translate3d(-50%,0,0);
	    transform: translate3d(-50%,0,0);
	    background: url(/static/images/cd-mine.png);
	    background-size: 100%;
	    z-index: 2;
	}
	.content-wrapper .cd .cd-content .wrapper .img {
	    position: absolute;
	    display: block;
	    width: 28vh;
	    height: 28vh;
	    top: 8vh;
	    transition: all .3s;
	    left: 50%;
	    -webkit-transform: translate3d(-50%,0,0);
	    transform: translate3d(-50%,0,0);
	    z-index: 1;
	}
	.musicdetail .detailcontent .content-wrapper .musicDo {
	    width: 70vw;
	    position: absolute;
	    height: 40px;
	    left: 50%;
	    bottom: 0;
	    -webkit-transform: translate3d(-50%,0,0);
	    transform: translate3d(-50%,0,0);
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    -ms-flex-pack: distribute;
	    justify-content: space-around;
	}
	.content-wrapper .musicDo i {
	    display: inline-block;
	    width: 40px;
	    line-height: 40px;
	    text-align: center;
	    color: hsla(0,0%,100%,.8);
	    font-size: 20px;
	}
	.lrc-wrapper {
	    position: absolute;
	    top: 10vh;
	    left: 0;
	    bottom: 20vh;
	    right: 0;
	    overflow: visible;
	}
	.lrc-wrapper .volume-range {
	    height: 30px;
	    line-height: 30px;
	}
	.lrc-wrapper .volume-range .range {
	    width: 90%;
	    height: 100%;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    margin: 0 auto;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    display: flex;
	    box-sizing: border-box;
	    padding: 0 10px;
	}
	.lrc-wrapper .volume-range .range .span-left {
	    font-size: 12px;
	    color: hsla(0,0%,100%,.8);
	    margin-right: 10px;
	    display: none;
	}
	.lrc-wrapper .volume-range .range .span-right {
	    font-size: 12px;
	    color: hsla(0,0%,100%,.8);
	    margin-left: 10px;
	    display: none;
	}
	.lrc-wrapper .volume-range .range .rangeicon {
	    font-size: 14px;
	    color: hsla(0,0%,100%,.7);
	    margin-right: 10px;

	}
	.lrc-wrapper .volume-range .range .duration {
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    height: 2px;
	    border-radius: 1px;
	    background: hsla(0,0%,96%,.3);
	    margin: 0 auto;
	    font-size: 0;
	    cursor: pointer;
	    position: relative;
	}
	.lrc-wrapper .volume-range .range .duration .currentProgress {
	    display: inline-block;
	    width: 0;
	    height: 2px;
	    background: red;
	    float: left;
	    background: #c62f2f;
	}
	.lrc-wrapper .volume-range .range .duration .ball {
	    position: absolute;
	    width: 14px;
	    height: 14px;
	    left: -7px;
	    background: #fff;
	    border-radius: 50%;
	    cursor: pointer;
	}
    .lrc-wrapper .lrc {
	    position: relative;
	    height: calc(100% - 30px);
	    overflow-y: scroll;
	    box-sizing: border-box;
	    transition: all .3s;
	}
	.lrc-wrapper .lrc .div-lrc {
	    padding: 50% 0;
	    position: relative;
	}
	.content-footer {
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    height: 18vh;
	    color: #fff;
	    background-image: linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,.4),transparent,transparent);
	}
	.content-footer .div-range {
	    height: 6vh;
	}
	.content-footer .div-range .range {
	    width: 90%;
	    height: 100%;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    margin: 0 auto;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    display: flex;
	    box-sizing: border-box;
	    padding: 0 10px;
	}
	.content-footer .div-range .range .span-left {
	    font-size: 12px;
	    color: hsla(0,0%,100%,.8);
	    margin-right: 10px;
	}
	.content-footer .div-range .range .rangeicon {
	    font-size: 14px;
	    color: hsla(0,0%,100%,.7);
	    margin-right: 10px;
	}
	.content-footer .div-range .range .duration {
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    height: 2px;
	    border-radius: 1px;
	    background: hsla(0,0%,96%,.3);
	    margin: 0 auto;
	    font-size: 0;
	    cursor: pointer;
	    position: relative;
	}
	.content-footer .div-range .range .span-right {
	    font-size: 12px;
	    color: hsla(0,0%,100%,.8);
	    margin-left: 10px;
	}
	.content-footer .musicDetailCtrl {
	    height: 12vh;
	    width: 100%;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    font-size: 0;
	}
	.musicDetailCtrl i.menu,.musicDetailCtrl i.playType {
	    font-size: 20px;
	    color: #e1e1e1;
	}
	.musicDetailCtrl i.playPause {
	    font-size: 46px;
	}
	.musicDetailCtrl i {
	    display: inline-block;
	    font-size: 28px;
	    width: 20vw;
	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	}
</style> -->