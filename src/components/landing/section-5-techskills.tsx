import Image from "next/image";
import Title from "../commons/title";
import { techSkills } from "./data";

export default function Section_5_TechSkills() {

  return (
    <>
      <section className="max-w-[329px] border-2 mx-2 rounded-sm border-main-text/80 h-[642px]">
        <Title styles="" text="Tech Skills"></Title>
        <p>
          !Extra, extra! Secure your seat on the time machine for an authentic
          experience. Click on the banner or button below to schedule your
          rendezvous with me on our calendar.
        </p>
        <section className="flex flex-wrap justify-center">
        {techSkills.map((a) => 
          <section key={a+Math.random()} className="w-20 h-20 m-2">
            <Image src={a} alt="a" width={150} height={150} ></Image>
            <p>imagen</p>
          </section>
        )}
        </section>
      </section>
    </>
  );
}
