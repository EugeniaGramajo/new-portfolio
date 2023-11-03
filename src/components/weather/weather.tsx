import React, { useState, useEffect } from "react";
import { env } from "../../env.config";
import axios from "axios";

export default function Weather() {
  const [lat, setLatitude] = useState("");

  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatitude(`${latitude},${longitude}`);
          console.log("asd",lat)
          const url = `http://api.weatherapi.com/v1/forecast.json?key=${env.weather_api_key}&q=${lat}`;
          
          
           axios.get(url).then(res=>console.log(res))
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
  }, [lat]); // Asegúrate de pasar un arreglo vacío como segundo argumento para que useEffect se ejecute solo una vez.

  return // Puedes renderizar lo que quieras aquí
}
