import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrambleIn from "@/components/fancy/text/scramble-in";

export default function Body() {
  return (
    <div className="w-dvw h-dvh flex flex-col gap-6 items-center justify-center">
      <Avatar className="size-36 sm:size-42 select-none animate-in slide-in-from-top fade-in-0 duration-1000">
        <AvatarImage draggable={false} src="https://github.com/martinetbn.png" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 items-center select-none">
        <span className="text-4xl font-semibold text-center">
          <ScrambleIn text="Martin Etchebarne" />
        </span>
        <div className="text-center text-gray-700 dark:text-gray-400">
          <ScrambleIn text="software developer" />
        </div>
      </div>
    </div>
  );
}
