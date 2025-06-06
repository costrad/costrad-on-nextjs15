"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "./separator"
import { ThemeSwitch } from "./theme-switch"

export const gettingStarted: { title: string; href: string; description: string }[] = [
    {
        title: "Why COSTrAD",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Mission & Vision",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Our Story",
        href: "/our-story",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },

]

export function WebMenu() {
    return (
        <div className="flex items-center justify-end gap-x-4 text-[1.2em] divide-x-1 divide-dotted space-x-1 ">

            <NavigationMenu className="pr-5">
                <NavigationMenuList>
                    <NavigationMenuItem>

                            <NavigationMenuLink  href="/"  className={navigationMenuTriggerStyle()}>
                                <span className="uppercase cursor-pointer">Home</span>
                            </NavigationMenuLink>

                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger><span className="uppercase cursor-pointer">About</span></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-auto sm:w-[300px] gap-3 p-2  md:grid-cols-1   ">
                                {gettingStarted.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger><span className="uppercase cursor-pointer ">Institutes</span></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid p-0 md:w-[700px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-4">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/">
                                            {/* <Icons.logo className="h-6 w-6" /> */}
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                COSTrAD
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                 The College of Sustainable Transformation and Development  &mdash; COSTrAD™
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <div className="p-2">
                                    <ListItem href="/institutes/mti" title="Minset Transformation Institute - (MTI)">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                  
                                    <ListItem href="/institutes/fdi" title="Family Development Institute - (FDI)">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                  
                                    <ListItem href="/institutes/igpp" title="Institute of Governance & Public Policy - (IGPP)">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                  
                                    <ListItem href="/institutes/iea" title="Institute of Economic Affairs - (IEA)">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                  
                                    <ListItem href="/institutes/etadi" title="Education Training & Development Institute - (ETADI)">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                  
                                    <ListItem href="/institutes/moci" title="Media of Communication Institute - (MOCI)">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                  
                                    <ListItem href="/institutes/ioasc" title="Institute of Arts, Sports & Culture - (IOASC)">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                  
                                </div>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
                                <span className="uppercase">Contact</span>
                            </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <NavigationMenuLink href="/donate" className={navigationMenuTriggerStyle()}>
                                <span className="uppercase">Donate</span>
                            </NavigationMenuLink>

                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <ThemeSwitch className='pt-2 pl-2' />

        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
