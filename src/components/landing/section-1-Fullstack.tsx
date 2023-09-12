import Image from "next/image";
import Title from "../commons/title";

export default function Section_1_Fullstack() {
  return (
    <>
      <div className="max-w-[588px] max-h-[425px] m-auto border-2 border-black">
        <Title styles="text-center font-bold" text="Full-Stack Developer"></Title>
        <section className="">
          <section className="flex">
            <Image
              alt="profile-picture"
              src="https://www.ocregister.com/wp-content/uploads/2018/07/072918_NWS-OCR-adoptalfie-1.jpg?w=1024"
              width={250}
              height={250}
              className="w-[270px] h-[215px] rounded-lg m-auto"
            ></Image>
            <p className="m-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              lobortis ultrices lobortis. Sed interdum nisi in lectus lobortis
              malesuada. Ut sodales metus quis enim interdum molestie vel sit
              amet arcu. Duis tincidunt ipsum id mi euismod tempor. Duis nec
              urna quis justo posuere finibus. Aliquam a consectetur leo, tempor
              mollis tellus. aiudaaaads a sdas dasd asdasd asdas asdasd asdas da adsasd
              
            </p>
          </section>
          <p className="m-1">
            Donec rutrum felis a tincidunt condimentum. Nam fermentum in massa
            quis blandit. Aenean velit arcu, cursus ut posuere accumsan,
            condimentum et magna. Quisque auctor diam a ante scelerisque, quis
            efficitur lectus ultricies. Aenean egestas neque nibh, vitae mollis
            urna commodo nec. Aliquam semper rutrum justo eget faucibus. Vivamus
            semper, augue sed auctor feugiat, mi risus suscipit nibh, a porta
            magna leo id ligula. 
          </p>
        </section>
      </div>
    </>
  );
}
