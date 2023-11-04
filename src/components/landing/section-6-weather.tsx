import { useWeather } from "@/store/weather_store";
import Title from "../commons/title";
import {useEffect} from "react";
import Image from "next/image";

export default function Section_6_Weather() {
  const {location,weather, getData} = useWeather()
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <section className="max-w-[243px] mr-2 h-[210px] border-2 rounded-sm border-main-text/80">
        <Title styles="" text="Weather"></Title>
        <section className="flex flex-col">
         <p>{location.city}</p> 
         <p>{location.country}</p> 
         <p>{weather.current}</p>
         <p>{weather.max}</p> 
         <p>{weather.min}</p>
         <Image src={weather.image} width={800} height={800} alt="text" className="w-20 h-20"></Image>
          </section>{" "}
      </section>
    </>
  );
}