<template>
	<div class="w3-text-teal">
    <top-bar voltar="true"></top-bar>
		<container>
      <p class="title-container w3-center">
        <span><b>São Tomas de Aquino</b></span><br>
        <span><b>(Central)</b></span><br>
        <span>Reunião da Mocidade</span>
      </p>
      <div class="w3-border w3-padding">
        <div class="w3-cell-row linha">
          <div class="w3-cell l1">
            <i class="fa fa-map-marker"></i>
          </div>
          <div class="w3-cell">
            Central
          </div>
        </div>
        <div class="w3-cell-row linha">
          <div class="w3-cell l1">
            <i class="fa fa-calendar"></i>
          </div>
          <div class="w3-cell">
            21/11/2017
          </div>
        </div>
        <div class="w3-cell-row linha">
          <div class="w3-cell l1">
            <i class="fa fa-clock"></i>
          </div>
          <div class="w3-cell">
            14:00
          </div>
        </div>
        <div class="w3-cell-row linha">
          <div class="w3-cell l1">
            <i class="fa fa-user"></i>
          </div>
          <div class="w3-cell">
            Daniel Campos
          </div>
        </div>
        <div class="w3-cell-row linha">
          <div class="w3-cell l1">
            <i class="fa fa-music"></i>
          </div>
          <div class="w3-cell">
            Esdras Louvo
          </div>
        </div>
      </div>
      <div class="w3-margin-top">
        <div class="w3-cell-row w3-center">
          <div class="w3-cell w3-cell-middle" style="width: 50%">
            <i class="far fa-heart"></i> <br>
            Eu vou
          </div>
          <div class="w3-cell w3-cell-middle" style="width: 50%">
            <i class="far fa-paper-plane"></i> <br>
            Compartilhar
          </div>
        </div>
        <div class="w3-padding">
          <b>50 pessoas irão</b>
        </div>
      </div>
		</container>

    <div class="w3-modal" :class="{'show':show}">
      <div class="w3-modal-content">
        <div class="w3-container w3-teal w3-padding-16 w3-top">
          <a href="javascript:" @click="show = false">
            <i class="fa fa-chevron-left"></i> Voltar
          </a>
        </div>
        <div class="w3-container conteudo" style="padding-top: 60px">

        </div>
      </div>
    </div>

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
	}
}
</script>

<style scoped>
.title-container{
  font-weight: normal;
}
.linha{
  padding: 16px;
  border-bottom: 1px solid #ccc
}
.linha:last-child{
  border-bottom: none;
}
.l1{
  width: 15%
}
.conteudo{
  padding: 0 10px 20px 10px;
}
.w3-modal{
  padding: 0;
}
.w3-modal-content{
  background-color: #fcfdff;
  margin: 0;
}
</style>
