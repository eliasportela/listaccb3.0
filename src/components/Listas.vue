<template>
	<container>
		<h5 class="w3-center">LISTAS DISPONÍVEIS</h5>
		<list-container>	
			<list @click.native="selLista">
	 			<list-text>
	 				Região de Ribeirão Preto
	 			</list-text>
	 			<list-icon>
	 				<i class="fa fa-angle-right"></i>
	 			</list-icon>
	 		</list>
	 	</list-container>
	</container>
</template>

<script>

import Container from '../components/commons/Container.vue'
import ListContainer from '../components/commons/ListContainer.vue'
import List from '../components/commons/List.vue'
import ListText from '../components/commons/ListText.vue'
import ListIcon from '../components/commons/ListIcon.vue'
	
export default {
	components:{Container,List,ListText,ListIcon,ListContainer},
	data(){
		return{
			itens:2 
		}
	},
	methods:{
		selLista(){
			this.$router.push('123/regiao-de-ribeirao-preto')
		}
	}
}
</script>

<style scoped>
</style>