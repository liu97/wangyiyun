<template>
	<div id="mymusic">
		<type-list iconinfo="icon-music" nameinfo="我的音乐" countinfo="28" playing="isPlaying" hasborder="hasborder"></type-list>
		<type-list iconinfo="icon-zuijinplay" nameinfo="最近播放" countinfo="100" playing="" hasborder="hasborder"></type-list>
		<type-list iconinfo="icon-diantai" nameinfo="我的电台" countinfo="1" playing="" hasborder="hasborder"></type-list>
		<type-list iconinfo="icon-collect" nameinfo="我的收藏" countinfo="5" playing=""></type-list>
		<music-sheet v-for="item in items" :iteminfo="item" :key="item.name"></music-sheet>  <!-- 我的歌单 -->
	</div>	
</template>

<script>
	import typelist from '../typelist/typelist.vue'
	import musicsheet from '../musicsheet/musicsheet.vue'
	export default{
		components:{
			'type-list': typelist,
			'music-sheet': musicsheet
		},
		computed: {
			items () { //获取store的我的歌单信息
				return this.$store.state.allInfo.music.sheets
			}
		},
	}
</script>

<style>
	#mymusic{
	    background: #fff;
	    overflow: auto;
	    left: 0;
	    right: 0;
	    z-index: 8;  
	    position: fixed;
	    top: 50px;  
    	bottom:46px;
	}

</style>