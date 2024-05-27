<template>
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        navigation
        padding
        arrows
        height="300px"
        class="custom-carousel text-white rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="../assets/forCarousel/download (4).jpeg" alt="Style Image" class="q-mt-md"/>
        </q-carousel-slide>
        <q-carousel-slide name="ManBag" class="column no-wrap flex-center">
          <img src="../assets/forCarousel/carouselManBag.jpeg" alt="Man Bag Image" class="q-mt-md"/>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <img src="../assets/forCarousel/blueBag.jpeg" alt="Blue Bag Image" class="q-mt-md"/>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img src="../assets/forCarousel/carouselWomanBag.jpeg" alt="Map Image" class="q-mt-md"/>
        </q-carousel-slide>
      </q-carousel>
    </div>
</template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const slide = ref('style');
      
      return {
        slide
      }
    }
  }
  </script>
  
  <style>
  .custom-carousel .q-carousel__control {
    color: #ba1641; 
  }
  
  .custom-carousel .q-carousel__arrow--left,
  .custom-carousel .q-carousel__arrow--right {
    color: #ba1641; 
  }
  
  .custom-carousel .q-carousel__arrow-container {
    background-color: transparent; 
  }
  </style>
  