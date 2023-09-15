require('dotenv').config();
import React, {useState} from "react"

export default function Weather(){
    const [latitude, setLatitude] = useState("")
    console.log(process.env.WEATHER_APIKEY);

    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_APIKEY}&q=${latitude}`
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
      
            // Aquí puedes usar los datos de latitud y longitud como necesites

            setLatitude(latitude+","+longitude)

            fetch(url).then(res=>res)
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.error("El usuario denegó el permiso de geolocalización.");
                break;
              case error.POSITION_UNAVAILABLE:
                console.error("La información de ubicación no está disponible.");
                break;
              case error.TIMEOUT:
                console.error("Se agotó el tiempo de espera para obtener la ubicación.");
                break;
              default:
                console.error("Ocurrió un error al obtener la ubicación.");
                break;
            }
          }
        );
      } else {
        console.error("La geolocalización no es compatible en este navegador.");
      }
      
    return(
        <>
        
        </>
    )
}