import { fetchWeatherData } from '@/helpers/weather_helpers'
import { create } from 'zustand'

type Weather = {
    location: {
    city: string,
    country:string,
    localtime:string, 
    },
    astro:{
     sunrise:string,
    sunset:string,
    moonrise:string,
    moonset:string   
    },
    weather:{
    max: string,
    min:string,
    current:string,
    image:string,    
    today: string, 
    }
    getData:()=>void
    
    
}

export const useWeather = create<Weather>()((set)=>({
    location:{
        city:"",
        country:"",
        localtime:"",
    },
    astro:{
        moonrise:"",
        moonset:"",
        sunrise:"",
        sunset:""
    },
    weather:{
        current:"",
        image:"",
        max:"",
        min:"",
        today:""
    },

    getData: async ()=>{
    const data = await fetchWeatherData()
    set(()=>({
        location:data.location,
        astro:data.astro,
        weather:data.weather
    }))
    }
}))