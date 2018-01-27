<template>
	<div class="header">
		<div class="header_warper">
			<i class="menu icon-menu"></i> <!-- @click="showMueu" -->
			<div class="centermenu" ><!-- @click="hideMenu" -->
				<router-link tag="i" to="/mymusic">
					<i class="music icon-music"  ></i><!-- :class= "selectIndex===0?'active':''" -->
				</router-link>
				<router-link tag="i" to="/findmusic">
					<i class="find icon-wangyi"></i>
				</router-link>
				<router-link tag="i" to="/community">
					<i class="community icon-community"></i>
				</router-link>
			</div>
			<!-- <router-link tag="i" to="/search"> -->
				<i class="search icon-search"></i>
			<!-- </router-link> -->
		</div>
		<router-view></router-view>     <!-- 根据路由，内容的显示 -->
		<!-- <Counter class="counter"></Counter> -->
	</div> 
</template>

<script>
	


</script>

<style>
	.header{
		position: fixed;
	    top: 0;  
    	bottom:0;
	    left: 0;
	    right: 0;
	    z-index:8;
	}
	.header_warper{
		background: #c62f2f;
		height: 50px;
		display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
		justify-content: space-between;
	}
	.header .centermenu{
		font-size: 23px;
		line-height: 50px;
	}
	.header i{
		cursor: pointer;
		color: #eee;
	}
	.centermenu i.router-link-active i {
	    color: #ccafaf;
	}
	.header .menu{
		font-size: 26px;
		float: left;
		padding:0 15px;
		line-height: 50px;
	}
	.header .music,.header .find,.header .community{
		padding: 0 10px;
		
	}
	.header .search{
		float: right;
		font-size: 26px;
		padding:0 15px;
		line-height: 50px;
	}
</style>