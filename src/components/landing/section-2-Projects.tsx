import Image from "next/image";
import Title from "../commons/title";

export default function Section_2_Projects() {
  return (
    <>
      <section className="max-w-[588px] border-2 border-black h-[357px]">
        <Title
          styles=""
          text="🎩 Technological Adventure: A Programming Pioneer 🎩 "
        ></Title>
        <p>
          Exploring a Fresh Horizon in Code In a gesture reminiscent of the
          space age, this bold programmer has challenged the frontiers of code.
          Her projects, imbued with the spirit of exploration from the golden
          years, bridge nostalgia with the future. Join us on her journey
          towards the technological marvels of tomorrow!
        </p>
        <section className="w-[555px] h-[189px] m-auto">
          <Image
            src="https://i.pinimg.com/1200x/20/c9/01/20c901349eb7e92472a87090f2d91061.jpg"
            alt="a"
            width={150}
            height={150}
            className="w-[555px] h-[189px] object-cover"
          ></Image>
        </section>{" "}
      </section>
    </>
  );
}
