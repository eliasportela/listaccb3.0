<template>
	<div class="w3-text-teal">
    <top-bar voltar="/"></top-bar>
		<container>
		 	<p class="title-container">SELECIONE O ESTADO</p>
      <list v-for="item in itens" @click.native="selEstado">
        <list-text>
          {{item.nome}}
        </list-text>
        <list-icon>
          <i class="fa fa-angle-right"></i>
        </list-icon>
      </list>
		</container>
	</div>
</template>

<script>
import Container from '../components/commons/Container.vue'
import ListContainer from '../components/commons/ListContainer.vue'
import List from '../components/commons/List.vue'
import ListText from '../components/commons/ListText.vue'
import ListIcon from '../components/commons/ListIcon.vue'
import TopBar from './commons/TopBar.vue';

export default {
	components:{TopBar,ListContainer,Container,List,ListText,ListIcon},
		data(){
			return{
				estados:0,
				itens:[
				    {id:1,nome:"Minas Gerais"},
				    {id:1,nome:"São Paulo"},
				    {id:1,nome:"Rio de Janeiro"},
				    {id:1,nome:"Paraná"},
				    {id:1,nome:"Santa Catarina"},
				    {id:1,nome:"Espirito Santo"},
				    {id:1,nome:"Ceará"}
				  ]
			}
		},
		methods:{
			selEstado(){
				this.$router.push('sao-paulo/listas')
			}
		},
    beforeCreate() {
      document.getElementById("body").classList.remove("home");
    }

	}
</script>

<style scoped>


</style>
