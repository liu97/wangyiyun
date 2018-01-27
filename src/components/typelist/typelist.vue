<template>
	<div class="typelist">
		<i class="icon" v-bind:class="iconinfo"></i>
		<div class="typelist_detail" v-bind:class="hasborder">
			<span class="name" v-text="nameinfo"></span>
			<span class="count">({{countinfo}})</span>
			<i class=" icon-volume-medium" v-bind:class="playing"></i>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['iconinfo','nameinfo','countinfo','hasborder','playing']

	}
</script>

<style>
	.typelist{
		height: 50px;
		width: 100%;
		background: #f7f7f7;
		position: relative;
		cursor: pointer;
		z-index: 8;
	}
	.typelist .icon{
		position: absolute;
		color: #c62f2f;
		font-size: 20px;
		height: 50px;
		line-height: 50px;
		left: 15px;
		float: left;
	}
	.typelist .typelist_detail{
		height: 100%;
	    line-height: 50px;
	    box-sizing: border-box;
	    font-size: 0;
	    margin-left: 50px;
	    position: relative;
	    top: 0;
	    left: 0;
	}
	.typelist .hasborder{
		border-bottom: 1px solid #ccc;
	}
	.typelist .typelist_detail .name{
		color:#333;
    	font-size: 14px;
    	margin-right: 6px;
    	vertical-align: middle;
    	font-weight: 200;
	}
	.typelist .typelist_detail .count{
		color: #aaa;
	    font-size: 10px;
	    font-weight: 400;
	    vertical-align: middle;
	}
	.typelist.isPlaying{
		font-size: 14px;
	    position: absolute;
	    top: 50%;
	    color: #c62f2f;
	    right: 5px;
	    width: 36px;
	    height: 36px;
	    line-height: 36px;
	    text-align: center;
	    -webkit-transform: translateY(-50%);
	    transform: translateY(-50%);
	}
</style>