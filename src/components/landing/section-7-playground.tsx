import Image from "next/image";
import Title from "../commons/title";


export default function Section_7_Playground(){
    const data = [
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",

      ];
    return(
        <>
        <section className="max-w-[243px] mr-2 h-[128px] border-2 rounded-sm border-main-text/80">
            <Title styles="" text="Aiuda"></Title>
            <section className="flex flex-wrap">
            {data.map((a) => 
          <section key={a+Math.random()} className="w-[60px] h-[60px] m-2">
            <Image src={a} alt="a" width={150} height={150} ></Image>
            <p>imagen</p>
          </section>
        )}
     </section>   </section>
        </>
    )
}