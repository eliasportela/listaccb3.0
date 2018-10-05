<template>
	<div class="w3-text-teal">
    <top-bar voltar="true"></top-bar>
		<container>
      <div class="w3-margin">
        <div class="w3-cell-row w3-center">
          <div class="w3-cell w3-cell-middle w3-disabled" style="width: 50%">
            <i class="far fa-file"></i> <br>
            Baixar Lista
          </div>
          <div class="w3-cell w3-cell-middle" style="width: 50%">
            <i class="far fa-paper-plane"></i> <br>
            Compartilhar Lista
          </div>
        </div>
      </div>
      <p class="title-container">SERVIÇOS DISPONÍVEIS</p>
      <list @click.native="selCulto()">
        <list-text class="data">
          15-02
        </list-text>
        <list-text class="texto">
          Reunião da Mocidade <br>
          São Tomas de Aquino <br>
          (Central)
        </list-text>
        <list-icon class="icone">
          <i class="fa fa-chevron-right"></i>
        </list-icon>
      </list>
      <list @click.native="selCulto()">
        <list-text class="data">
          15-02
        </list-text>
        <list-text class="texto">
          Reunião da Mocidade <br>
          Ibirapuã <br>
          (Central)
        </list-text>
        <list-icon class="icone">
          <i class="fa fa-chevron-right"></i>
        </list-icon>
      </list>
		</container>
	</div>
</template>

<script>
import Container from '../components/commons/Container.vue'
import TopBar from '../components/commons/TopBar'
import List from '../components/commons/List.vue'
import ListText from '../components/commons/ListText.vue'
import ListIcon from '../components/commons/ListIcon.vue'

export default {
	components:{TopBar,Container,List,ListText,ListIcon},
	data(){
		return{
			itens:2,
			show:false
		}
	},
	methods:{
    selCulto() {
      this.$router.push('/lista/123/sao-tomas-de-aquino-mg')
    }
	}
}
</script>

<style scoped>
.data {
	width:15%
}
.texto{
	font-size: 0.9em!important;
  text-align: center;
  font-weight: normal;
}
.icone{
	font-size: 0.8em!important;
  width: 10%;
}
</style>
