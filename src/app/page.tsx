"use client"

import { TypewriterEffectSmooth} from "./ui/typewriter-effect";
import CardDisplay from "./ui/card/card";
import { inter, lustiana } from "./ui/fonts";
export default function Home() {
  
  const words = [
    {
      text: "Move",
    },
    {
      text: "any",
    },
    {
      text: "playlist",
    },
    {
      text: "with",
    },
    {
      text: "Convert ify.",
      className: "text-blue-500 dark:text-blue-300",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className={`text-neutral-600 dark:text-neutral-200 text-xs sm:text-base ${inter.className} antialiased` }>
        Paste in any public playlist link to get started
      </p>
      <TypewriterEffectSmooth words={words} />
      <CardDisplay />
    
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
  );
}
