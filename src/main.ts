import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lvdmFubmkyOCIsImEiOiJja2RzNHh4bDQwZWplMnNtcHluaGJ2eXJ0In0.YMFQLyEOwGMVglQ45BAxow';


if(!navigator.geolocation) {
    throw new Error('Tu navegador no soporta el GeoLocation')
}

createApp(App).use(store).use(router).mount('#app')
