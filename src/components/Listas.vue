<template>
  <div class="w3-text-teal">
    <top-bar voltar="estados"></top-bar>
    <container>
      <p class="title-container">LISTAS DISPONÍVEIS</p>
      <list @click.native="selLista">
        <list-text>
          Região de Guaxupé
        </list-text>
        <list-icon>
          <i class="fa fa-angle-right"></i>
        </list-icon>
      </list>
      <list @click.native="selLista">
        <list-text>
          Região de Alfenas
        </list-text>
        <list-icon>
          <i class="fa fa-angle-right"></i>
        </list-icon>
      </list>
      <list @click.native="selLista">
        <list-text>
          Região de Poços de Caldas
        </list-text>
        <list-icon>
          <i class="fa fa-angle-right"></i>
        </list-icon>
      </list>
    </container>
  </div>
</template>

<script>

import TopBar from '../components/commons/TopBar'
import Container from '../components/commons/Container.vue'
import List from '../components/commons/List.vue'
import ListText from '../components/commons/ListText.vue'
import ListIcon from '../components/commons/ListIcon.vue'

export default {
	components:{TopBar,Container,List,ListText,ListIcon},
	data(){
		return{
			itens:2
		}
	},
	methods:{
		selLista(){
			this.$router.push('/123/regiao-de-ribeirao-preto')
		}
	}
}
</script>

<style scoped>
</style>
