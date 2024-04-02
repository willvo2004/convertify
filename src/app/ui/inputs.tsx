  "use client"

  import { cn } from "@/util/cn";
  import { AnimatePresence, motion } from "framer-motion";
  import { useState, createContext, useContext } from "react";
  import { inter } from "./fonts";
  import { InputPlaylist } from "./inputForPlaylist/inputLinkForPlaylist";

  const SelectedMusicStreamingServicesContext = createContext<{
    selectedMusicStreamingServices: string[];
    setSelectedMusicStreamingServices: React.Dispatch<React.SetStateAction<string[]>>;
    }>(null as any); // Provide an initial value

  export const HoverEffect = ({
    items,
    className,
  }: {
    items: string[],
    className?: string;
  }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedMusicStreamingServices, setSelectedMusicStreamingServices] = useState<string[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (selectedMusicStreamingServices.includes((e.target as HTMLElement).textContent!)) {
          setSelectedMusicStreamingServices(selectedMusicStreamingServices.filter((item) => item !== (e.target as HTMLElement).textContent!));
        } else {
          setSelectedMusicStreamingServices([...selectedMusicStreamingServices, (e.target as HTMLElement).textContent!]);
        }
    }

    return (
      <SelectedMusicStreamingServicesContext.Provider value={{ selectedMusicStreamingServices, setSelectedMusicStreamingServices }}>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
          className
        )}
      >
        {items.map((item, idx) => (
            <motion.div
              key={idx} 
              className=
                "relative group block p-2 h-full w-full"
        
              onMouseEnter={() => {
                  setHoveredIndex(idx);
              }} 
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => {if (selectedMusicStreamingServices.length < 2) {
                handleClick(e);
              }}}
              whileTap={{ scale: 0.9 }}>    
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item}</CardTitle>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col justify-center content-center">
        <FromTo />
        <ClearButton />
        {selectedMusicStreamingServices.length == 2 ? <InputPlaylist /> : null}
      </div>
      </SelectedMusicStreamingServicesContext.Provider>
    );
  };

  export const Card = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full p-1 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
          className
        )}
      >
        <div className="relative z-50">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };
  export const CardTitle = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <h4 className={cn(`text-zinc-100 font-bold tracking-wide m-2 text-center ${inter.className} antialiased`, className)}>
        {children}
      </h4>
    );
  };

  const FromTo = () => {
    const { selectedMusicStreamingServices }= useContext(SelectedMusicStreamingServicesContext);
    return (
      <div className="flex justify-between gap-12">
        {selectedMusicStreamingServices.map((item) => (
          <span className="text-neutral-200 text-4xl" key={item}>
            {item}
          </span>
        ))}
      </div>
    );
  }

  const ClearButton = () => {
    const {selectedMusicStreamingServices, setSelectedMusicStreamingServices} = useContext(SelectedMusicStreamingServicesContext);
    
    const handleClick = () => {
      selectedMusicStreamingServices.length > 0 && (setSelectedMusicStreamingServices([]));
      console.log(selectedMusicStreamingServices);
    }
    return (
      <div className="flex justify-center content-center">
        {selectedMusicStreamingServices.length > 0 ? (
        <button className="bg-neutral-200 dark:bg-slate-800 text-neutral-900 dark:text-neutral-200 p-2 rounded-lg" onClick={handleClick}>
          Clear
        </button>
       ) : null}
      </div>
    );
  }

