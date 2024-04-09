import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="bg-blue-200 rounded-md overflow-hidden relative h-[750px] w-[400px] flex flex-col items-center justify-center">
        <div className="absolute left-0 top-0 w-full h-full ">
          <Image src="/galaxy.jpg" alt="Galaxy" fill className="object-center object-cover"></Image>
        </div>
        <div className="z-[1] flex flex-col items-center mt-[-50px]">
          <Image src="/logo.png" alt="Logo" height={150} width={150}></Image>
          <h1 className="text-[18px] text-center max-w-[280px] pt-[18px] leading-[1.2]">Приветствуем, это <br/>Игра<br/><span className="text-pink-200 text-[20px] font-bold">"Как стать миллионером"</span></h1>
          <div className="pt-[30px]">
            <Link href="/play" className="font-bold text-[18px] bg-blue-950 px-[35px] py-[12px] hover:bg-blue-900 rounded-md">Играть</Link>
          </div>
        </div>
      </div>
  );
}
