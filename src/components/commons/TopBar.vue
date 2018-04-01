<template>
	<div class="w3-top">
		<div class="w3-bar w3-text-white w3-padding" :class="{'w3-teal':menu}">
			<router-link to="/" class="w3-bar-item w3-button title">LISTA CCB</router-link>
			<button class="w3-bar-item w3-button w3-border w3-round w3-right" @click="abrirMenu">
				<i class="fa" :class="fa"></i>
			</button>
		</div>
		<div class="w3-bar-block w3-teal w3-padding w3-animate-opacity" v-show="menu">
		  <router-link :to="'/estados'" class="w3-bar-item w3-button w3-border-bottom w3-padding-16" @click.native="abrirMenu">
		  	LISTAS
		  </router-link>
		  <router-link :to="'/sobre-nos'" class="w3-bar-item w3-button w3-border-bottom w3-padding-16"@click.native="abrirMenu">
		  	SOBRE NÓS
		  </router-link>
		  <router-link :to="'/voluntarios'" class="w3-bar-item w3-button w3-border-bottom w3-padding-16"@click.native="abrirMenu">
		  	VOLUNTÁRIOS
		  </router-link>
		  <router-link :to="'/login'" class="w3-bar-item w3-button w3-padding-16"@click.native="abrirMenu">
		  	LOGIN
		  </router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				menu: false,
				fa: 'fa-bars'
			}
		},
		methods:{
			abrirMenu(){
				this.menu = !this.menu;
				this.menu == true ? this.fa = 'fa-times' : this.fa = 'fa-bars'
			},
			linkar(link){
				this.menu = false;
				router.push(link);
			}
		}
	}
</script>


<style>
i{
	font-size: 1.5em;
}
.title {
	font-weight: bold;
	font-size: 1.5em
}

.sidebar {
	width: 50%;
	right: 0
}
</style>