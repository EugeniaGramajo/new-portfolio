import Image from "next/image";
import Title from "../commons/title";
import Weather from "../weather/weather";


export default function Section_6_Weather(){
    const data = [
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
        "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
      ];
    return(
        <>
        <section className="max-w-[243px] h-[210px] border-2 border-black">
            <Title styles="" text="Como ta el clima"></Title>
            <section className="flex flex-wrap">
            {data.map((a) => 
          <section key={"a"} className="w-[60px] h-[60px] m-2">
            <Image src={a} alt="a" width={150} height={150} ></Image>
            <p>imagen</p>
            <Weather></Weather>
          </section>
          
        )}
     </section>   </section>
        </>
    )
}