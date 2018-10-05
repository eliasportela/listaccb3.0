<template>
	<div class="w3-text-white">
    <top-bar home="true" voltar=""></top-bar>
    <container>
      <div class="w3-center boas-vindas">
				<img src="../assets/logo.png" class="img-logo">
				<p class="boldbold">Lista CCB irá te auxilar a encontrar listas de batismo e diversos da Congregação Cristã no Brasil</p>
				<router-link :to="'estados'" class="w3-button w3-round w3-border w3-margin-top">
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
import TopBar from './commons/TopBar.vue'

export default {
	components:{Container,TopBar},
	name: 'Home',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
  beforeCreate() {
    document.getElementById("body").classList.add("home");
  }
}
</script>

<style scoped>
.boas-vindas{
	font-weight: bold;
  margin-top: 30px;
}

.title{
	margin-bottom: 25px;
	font-size: 0.9em
}

.img-logo{
	width: 96px;
	height: 96px
}
</style>

