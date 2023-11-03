"use client";
import Section_1_Fullstack from "@/components/landing/section-1-Fullstack";
import Section_2_Projects from "@/components/landing/section-2-Projects";
import Section_3_Calendly from "@/components/landing/section-3-calendly";
import Section_4_SoftSkills from "@/components/landing/section-4-softSkills";
import Section_5_TechSkills from "@/components/landing/section-5-techskills";
import Section_6_Weather from "@/components/landing/section-6-weather";
import Section_7_Playground from "@/components/landing/section-7-playground";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
    <main className="flex flex-col items-center min-h-fit text-main-text">
      <section className="flex flex-col justify-between xl:flex-row">
        <section>
          <Section_1_Fullstack/>
          <hr className="my-1 border border-main-text"></hr>
          <Section_2_Projects/>
        </section>
        <div className="m-1 bg-main-text h-[797px]">.</div>
        <section className="flex flex-col">
          <Section_3_Calendly/>
          <hr className="my-1 border border-main-text"></hr>
          <section className="flex">
            <Section_5_TechSkills/>
            <section>
            <Section_4_SoftSkills/>
            <hr className="my-1 border border-transparent"></hr>
            <Section_6_Weather/>
            <hr className="my-1 border border-transparent"></hr>
            <Section_7_Playground/>
          </section>
          </section>

        </section>
      </section>
    </main>
    </Provider>
  );
}
