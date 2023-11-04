import Title from "../commons/title";
import type { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setWeather } from "@/redux/weather/weather_actions"; 
import { useEffect } from "react";
import { RootState}  from "@/redux/store";

export default function Section_6_Weather() {
  const dispatch: Dispatch = useDispatch();
  const info = useSelector((store: RootState)=>store.weatherStore.weather)
  console.log(info)

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    
        const data = `${position.coords.latitude},${position.coords.longitude}`;
        dispatch(fetchWeather(data)); // Llamada a la función fetchWeather
      } catch (error) {
        console.error(error);
      }
    };
    

    getLocation();
  }, [dispatch]);

  return (
    <>
      <section className="max-w-[243px] h-[210px] border-2 border-black">
        <Title styles="" text="Como ta el clima"></Title>
        <section className="flex flex-wrap"></section>{" "}
      </section>
    </>
  );
}