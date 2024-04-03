"use client";

import { cn } from "@/util/cn"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const InputPlaylist = ({className} : {className? : string}) => { 
  const bodyParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleInput = (term :string)  => {
    const params = new URLSearchParams();
    if (term) {
      const match = term.match(/playlist\/(.*?)\?/);
      if (match) {
        params.set('query', match[1]);
      }
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
      <form action="">
        <input
        type="text"
        className={cn(
          "flex h-10 my-10 w-full rounded-md border bg-slate-700 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onChange={(e) => handleInput(e.target.value)}
      />
      </form>
    )
  }