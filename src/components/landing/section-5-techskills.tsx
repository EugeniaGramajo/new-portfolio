import Image from "next/image";
import Title from "../commons/title";

export default function Section_5_TechSkills() {
  const data = [
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/08/tiffany-rspca-millbrook-chobham-surrey.jpg?fit=2100%2C1575&ssl=1",
  ];
  return (
    <>
      <section className="max-w-[329px] border-2  border-black h-[642px]">
        <Title styles="" text="Tech Skills"></Title>
        <p>
          !Extra, extra! Secure your seat on the time machine for an authentic
          experience. Click on the banner or button below to schedule your
          rendezvous with me on our calendar.
        </p>
        <section className="flex flex-wrap justify-center">
        {data.map((a) => 
          <section key={"a"} className="w-20 h-20 m-2">
            <Image src={a} alt="a" width={150} height={150} ></Image>
            <p>imagen</p>
          </section>
        )}
        </section>
      </section>
    </>
  );
}
