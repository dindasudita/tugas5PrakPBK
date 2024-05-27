<template>
  <div class="app-container">
    <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated class="custom-header">
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="./assets/bagLogo.png">
          </q-avatar>
          <q-toolbar-title class="custom-title">
            OurBag
          </q-toolbar-title>
          <span class="mall-star">
              Bags
              <q-btn flat round dense icon="shopping_bag" class="q-mr-sm" />
              Mall
              <q-btn flat round dense icon="store" class="q-mr-sm" />
              Star
              <q-btn flat round dense icon="star" class="q-mr-sm" />
            </span>
          <q-btn flat round dense icon="person" />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <Carousel />
          <CardPict />
        </q-page>
      </q-page-container>

      <q-footer elevated class="custom-footer">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            Copyright 2024 OurBag-Dinda All Right Reserved
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import CardPict from './components/CardPict.vue'

export default {
  components: {
    Carousel,
    CardPict
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap')

.app-container
  background-color: #FFF1F2 
  height: 100vh
  width: 100vw

.custom-header
  background-color: #ba1641 
  color: #fee5e6 

.custom-footer
  background-color: #ba1641 
  color: #fee5e6
  text-align: center
  font-size: small

.custom-title
  font-family: 'Poetsen One', sans-serif
  
.mall-star
  margin-left: auto
  display: flex
  align-items: center
</style>