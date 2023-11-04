import Image from "next/image";
import Title from "../commons/title";
import { softSkills } from "./data";

export default function Section_4_SoftSkills(){
    return(
        <>
        <section className="max-w-[243px] mr-2 h-[278px] rounded-sm border-2 border-main-text/80">
            <Title styles="" text="Soft skills"></Title>
            <section className="flex flex-wrap">
            {softSkills.map((a) => 
          <section key={a+Math.random()} className="w-[60px] h-[60px] m-2">
            <Image src={a} alt={a+"1"} width={150} height={150} ></Image>
            <p>imagen</p>
          </section>
        )}
     </section>   </section>
        </>
    )
}