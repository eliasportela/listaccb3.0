<template>
	<div>
		<container>
			<h5 class="w3-center">LISTAS DISPONÍVEIS</h5>
			<list-container>	
				<list @click.native="infoLista">
		 			<list-text class="data">
		 				15-02
		 			</list-text>
		 			<list-text class="texto">
		 				Reunião da Mocidade - Ibiporã (Central)
		 			</list-text>
		 			<list-icon class="icone">
		 				<i class="fa fa-info-circle"></i>
		 			</list-icon>
		 		</list>
		 	</list-container>
		</container>
		<modal></modal>
	</div>
</template>

<script>

import Container from '../components/commons/Container.vue'
import ListContainer from '../components/commons/ListContainer.vue'
import List from '../components/commons/List.vue'
import ListText from '../components/commons/ListText.vue'
import ListIcon from '../components/commons/ListIcon.vue'
import Modal from '../components/commons/Modal.vue'
	
export default {
	components:{Container,List,ListText,ListIcon,ListContainer,Modal},
	data(){
		return{
			itens:2,
			showInfo:false
		}
	},
	methods:{
		infoLista(){
			this.$router.push('listas/123/regiao-de-ribeirao-preto')
		}
	}
}
</script>

<style scoped>
.data {
	width:20%
}
.texto{
	font-size: 0.8em!important
}
.icone{
	font-size: 0.8em!important	
}
</style>