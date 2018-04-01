<template>
	<div>
		<container>
		 	<h5 class="w3-center">SELECIONE O ESTADO</h5>
		 	<list-container>
			 	<list v-for="item in itens" @click.native="selEstado" key="item.id">
					<list-text>
						{{item.nome}}
					</list-text>
					<list-icon>
						<i class="fa fa-angle-right"></i>
					</list-icon>
			 	</list>
		 	</list-container>
		</container>
	</div>
</template>

<script>

import Container from '../components/commons/Container.vue'
import ListContainer from '../components/commons/ListContainer.vue'
import List from '../components/commons/List.vue'
import ListText from '../components/commons/ListText.vue'
import ListIcon from '../components/commons/ListIcon.vue'
	
export default {
	components:{ListContainer,Container,List,ListText,ListIcon},
		data(){
			return{
				estados:0,
				itens:[{id:1,nome:"Minas Gerais"}]
			}
		},
		methods:{
			selEstado(){
				this.$router.push('sao-paulo')
			}
		}
	}
</script>

<style scoped>
	

</style>