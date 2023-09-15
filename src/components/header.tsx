"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./../app/globals.css";
import CurrentDate from "./date";
import Price from "./price";

export function Header() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center my-2 text-main-text ">
      <Price></Price>
      {pathname === "/" ? (
        <>
          <section className="flex items-center justify-center m-auto text-center">
            <Image
              src={"/flourish.png"}
              alt="dec"
              width={80}
              height={80}
              className="h-[105px] w-14"
            ></Image>
            <h1 className="flex items-center justify-center pt-5 text-6xl text-center font-header">
              Eugenia Gramajo
            </h1>
            <Image
              src={"/flourish1.png"}
              alt="dec"
              width={80}
              height={80}
              className="h-[105px] w-14 transform scaleY(-1)"
            ></Image>
          </section>
        </>
      ) : (
        <section className="flex items-center justify-center m-auto text-center">
          <Image
            src={"/flourish.png"}
            alt="dec"
            width={80}
            height={80}
            className="h-[105px] w-14"
          ></Image>
          <h1 className="flex items-center justify-center pt-5 text-6xl text-center font-header">
            {pathname[1].toUpperCase() + pathname.substring(2).toLowerCase()}
          </h1>
          <Image
            src={"/flourish1.png"}
            alt="dec"
            width={80}
            height={80}
            className="h-[105px] w-14 transform scaleY(-1)"
          ></Image>
        </section>
      )}
      <CurrentDate></CurrentDate>
    </div>
  );
}
