import Image from "next/image";
import { AddForm } from "@/app/waitlist-form";
import { SVGProps } from "react";

function LogosTailwindcssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.67em"
      height="1em"
      viewBox="0 0 256 154"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosTailwindcssIcon0"
          x1="-2.778%"
          x2="100%"
          y1="32%"
          y2="67.556%"
        >
          <stop offset="0%" stopColor="#2298BD"></stop>
          <stop offset="100%" stopColor="#0ED7B5"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosTailwindcssIcon0)"
        d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
      ></path>
    </svg>
  );
}

function LogosSupabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.98em"
      height="1em"
      viewBox="0 0 256 263"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosSupabaseIcon0"
          x1="20.862%"
          x2="63.426%"
          y1="20.687%"
          y2="44.071%"
        >
          <stop offset="0%" stopColor="#249361"></stop>
          <stop offset="100%" stopColor="#3ECF8E"></stop>
        </linearGradient>
        <linearGradient
          id="logosSupabaseIcon1"
          x1="1.991%"
          x2="21.403%"
          y1="-13.158%"
          y2="34.708%"
        >
          <stop offset="0%"></stop>
          <stop offset="100%" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosSupabaseIcon0)"
        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
      ></path>
      <path
        fill="url(#logosSupabaseIcon1)"
        fillOpacity=".2"
        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
      ></path>
      <path
        fill="#3ECF8E"
        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
      ></path>
    </svg>
  );
}

function LogosNextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosNextjsIcon0"
          x1="55.633%"
          x2="83.228%"
          y1="56.385%"
          y2="96.08%"
        >
          <stop offset="0%" stopColor="#FFF"></stop>
          <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="logosNextjsIcon1"
          x1="50%"
          x2="49.953%"
          y1="0%"
          y2="73.438%"
        >
          <stop offset="0%" stopColor="#FFF"></stop>
          <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
        </linearGradient>
        <circle id="logosNextjsIcon2" cx="128" cy="128" r="128"></circle>
      </defs>
      <mask id="logosNextjsIcon3" fill="#fff">
        <use href="#logosNextjsIcon2"></use>
      </mask>
      <g mask="url(#logosNextjsIcon3)">
        <circle cx="128" cy="128" r="128"></circle>
        <path
          fill="url(#logosNextjsIcon0)"
          d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418"
        ></path>
        <path
          fill="url(#logosNextjsIcon1)"
          d="M163.556 76.8h17.067v102.4h-17.067z"
        ></path>
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-[#0F282F]">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-8xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3E4FA] to-[#FFBCD9]">
              Something
            </span>
          </h1>
          <h2 className="font-bold text-2xl max-w-md md:text-3xl lg:text-4xl lg:max-w-2xl mb-4">
            Working on a{" "}
            <span className="underline decoration-[#FFA8C5]">template</span>{" "}
            that lets you build something fast
          </h2>
        </div>
        <div className="flex gap-4 justify-center p-4">
          <LogosTailwindcssIcon className="text-6xl" />
          <LogosNextjsIcon className="text-6xl" />
          <LogosSupabaseIcon className="text-6xl" />
        </div>
        <div className="flex justify-center text-center">
          <div className="max-w-xl lg:max-w-lg">
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Sound interesting? Sign up below for the waitlist and get updates
              as this develops.
            </p>
            <AddForm />
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <div className="origin-bottom -rotate-6 flex bg-[#A3E4FA] p-2 text-black rounded-lg hover:scale-110 transition ease-in-out justify-between items-center">
          <div className="text-4xl pr-2 animate-bounce">🧠</div>
          <div>
            Powered by{" "}
            <a
              href="https://twitter.com/GSVarner"
              className="underline decoration-dashed underline-offset-4"
            >
              @gsvarner
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
