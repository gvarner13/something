import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0F282F]">
      <div className="text-center">
        <h1 className="text-8xl font-black mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3E4FA] to-[#FFBCD9]">
            Something
          </span>
        </h1>
        <h2 className="font-bold text-2xl max-w-md md:text-3xl lg:text-5xl lg:max-w-2xl">
          Working on a template that lets you build something fast
        </h2>
      </div>
    </main>
  );
}
