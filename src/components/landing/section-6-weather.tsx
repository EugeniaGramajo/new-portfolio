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
      <section className="max-w-[243px] h-[210px] border-2 border-black">
        <Title styles="" text="Como ta el clima"></Title>
        <section className="flex flex-col">
         <p>{location.city}</p> 
         <p>{location.country}</p> 
         <p>{weather.current}</p>
         <p>{weather.max}</p> 
         <p>{weather.min}</p>
         <Image src={weather.image} width={500} height={500} alt="text"></Image>
          </section>{" "}
      </section>
    </>
  );
}