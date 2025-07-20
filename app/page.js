import Image from "next/image";
import vectorimg from '../assets/vector.png'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <section className="flex justify-center items-center px-25 py-10">
        <div className="w-[900] justify-end mr-8">
          <Image src={vectorimg} alt="img" height={800} width={1600} className="rounded-4xl bg-transparent"></Image>
        </div>
        <div className="text-white items-end">
          <p className="text-3xl font-bold">Instantly Shorten and Share Your Links!</p>
          <p className="text-lg">Make your long URLs short and sweet. Our free URL shortener helps you create concise links for easy sharing.</p>
          <div className="items-center justify-center my-2"><Link href="/shorten"><button className='rounded-4xl bg-violet-800 font-bold px-10 py-3 cursor-pointer'>Try Now</button></Link></div>
        </div>
      </section>
    </main>
  );
}
