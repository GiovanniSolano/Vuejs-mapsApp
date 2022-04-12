import axios from "axios";


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZ2lvdmFubmkyOCIsImEiOiJja2RzNHh4bDQwZWplMnNtcHluaGJ2eXJ0In0.YMFQLyEOwGMVglQ45BAxow'
    }
});


export default searchApi;