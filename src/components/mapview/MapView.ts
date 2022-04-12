import Mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';


export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const {userLocation, isUserLocationReady} = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {

            if(!mapElement.value) throw new Error('Div Element no exists');
            if(!userLocation.value) throw new Error('User location no exists');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/dark-v10', // style URL
                center: userLocation.value, 
                zoom: 15 
            });

            const myLocationPopup = new Mapboxgl.Popup() //{offset: [0, 0]}
                .setLngLat(userLocation.value)
                .setHTML(
                    `
                    <h4>Aqui estoy</h4>
                    <p>Actualmente</p>
                    `
                );

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map);

            // Establecer el mapa en Vuex

            setMap(map);

        }

        onMounted(() => {
            
            if(isUserLocationReady.value) 
                return initMap()            
            
        });

        watch(isUserLocationReady, (newVal) => {
            if(isUserLocationReady.value)
            initMap()
        });

        return {
            isUserLocationReady,
            mapElement
        }

    }
});