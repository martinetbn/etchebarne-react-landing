import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Icons = {
  linkedin: () => <Icon icon="akar-icons:linkedin-fill" />,
  x: () => <Icon icon="ri:twitter-x-fill" />,
  github: () => <Icon icon="akar-icons:github-fill" />,
  email: () => <Icon icon="carbon:email" />,
};

const DATA = {
  contact: {
    github: {
      name: "GitHub",
      url: "https://github.com/martinetbn",
      icon: Icons.github,
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/martinetbn/",
      icon: Icons.linkedin,
    },
    x: {
      name: "X",
      url: "https://twitter.com/martinetbn",
      icon: Icons.x,
    },
    email: {
      name: "Send Email",
      url: "mailto:martin@etchebarne.net",
      icon: Icons.email,
    },
  },
};

export default function CustomDock() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <AnimatedThemeToggler
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full cursor-pointer"
                  )}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" />
        {Object.entries(DATA.contact).map(([name, social]) => {
          const IconComponent = social.icon;
          return (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                    target="_blank"
                  >
                    <IconComponent />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          );
        })}
      </Dock>
    </TooltipProvider>
  );
}
