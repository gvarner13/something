import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0F282F]">
      <div>
        <div className="text-center">
          <h1 className="text-8xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3E4FA] to-[#FFBCD9]">
              Something
            </span>
          </h1>
          <h2 className="font-bold text-2xl max-w-md md:text-3xl lg:text-4xl lg:max-w-2xl">
            Working on a{" "}
            <span className="underline decoration-[#FFA8C5]">template</span>{" "}
            that lets you build something fast
          </h2>
        </div>
        <div className="flex">
          <svg
            viewBox="0 0 109 113"
            width="109"
            height="113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z"
              fill="url(#a)"
            />
            <path
              d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z"
              fill="url(#b)"
              fill-opacity=".2"
            />
            <path
              d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z"
              fill="#3ECF8E"
            />
            <defs>
              <linearGradient
                id="a"
                x1="53.974"
                y1="54.974"
                x2="94.163"
                y2="71.829"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#249361" />
                <stop offset="1" stop-color="#3ECF8E" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="36.156"
                y1="30.578"
                x2="54.484"
                y2="65.081"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 256 154"
            width="256"
            height="154"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <linearGradient
                x1="-2.778%"
                y1="32%"
                x2="100%"
                y2="67.556%"
                id="a"
              >
                <stop stop-color="#2298BD" offset="0%" />
                <stop stop-color="#0ED7B5" offset="100%" />
              </linearGradient>
            </defs>
            <path
              d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
              fill="url(#a)"
            />
          </svg>
        </div>
      </div>
      <div>
        <div></div>
        <div>Made with 🧠 by gvarner</div>
      </div>
    </main>
  );
}
