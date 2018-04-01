<template>
	<div>
		<container>
			<div class="w3-center boas-vindas">
				<img src="../assets/logo.png" class="img-logo">
				<h4 class="">Lista CCB irá te auxilar a encontrar listas de batismo e diversos da Congregação Cristã no Brasil</h4>
				<router-link :to="'estados'" class="w3-button w3-teal w3-margin-top">
					<i class="fa fa-search"></i>
					BUSCAR LISTAS
				</router-link>
			</div>
		</container>
		<div class="w3-display-bottommiddle title">
			<a href="https://facebook.com/listaccb" target="_blank"><i class="fab fa-facebook-square"></i>
			 facebook.com/listaccb</a>
		</div>
	</div>
</template>

<script>

import Container from "./commons/Container.vue"
export default {
	components:{Container},
	name: 'Home',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<style scoped>
.boas-vindas{
	font-weight: bold;
}

.title{
	margin-bottom: 50px;
	color: #fff;
	font-size: 0.8em
}

.img-logo{
	width: 96px;
	height: 96px
}
</style>

