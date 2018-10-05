<template>
	<div class="w3-top" :class="{'w3-teal':!home}">
		<div class="w3-bar" :class="{'w3-teal':menu}">
			<router-link to="/" class="w3-bar-item w3-button title" v-show="!voltar">LISTA CCB</router-link>
			<a class="w3-bar-item w3-button" v-show="voltar" @click="voltarHistory">
        <i class="fa fa-chevron-left"></i>
      </a>
			<button class="w3-bar-item w3-button w3-right" @click="abrirMenu">
				<i class="fa" :class="fa"></i>
			</button>
		</div>
    <div class="w3-bar-block w3-margin w3-teal w3-animate-opacity" v-show="menu">
		  <router-link :to="'/estados'" class="w3-bar-item" @click.native="abrirMenu">
		  	LISTAS
		  </router-link>
		  <router-link :to="'/sobre-nos'" class="w3-bar-item"@click.native="abrirMenu">
		  	SOBRE NÓS
		  </router-link>
		  <router-link :to="'/voluntarios'" class="w3-bar-item"@click.native="abrirMenu">
		  	VOLUNTÁRIOS
		  </router-link>
		  <router-link :to="'/login'" class="w3-bar-item"@click.native="abrirMenu">
		  	LOGIN
		  </router-link>
		</div>
	</div>
</template>

<script>
	export default {
    props: {
      voltar: String,
      home: String
    },
		data(){
			return{
				menu: false,
				fa: 'fa-bars'
			}
		},
		methods:{
			abrirMenu(){
				this.menu = !this.menu;
				this.menu === true ? this.fa = 'fa-times' : this.fa = 'fa-bars'
			},
			voltarHistory(){
        window.history.back();
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
  line-height: 26px;
}
.w3-bar {
  padding: 6px 8px;
}
</style>
