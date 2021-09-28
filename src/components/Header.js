import React, { useState } from "react"
import { Link } from "gatsby"
import { Transition } from "@headlessui/react"
import {
    AnnotationIcon,
    CodeIcon,
    MailIcon,
    PuzzleIcon,
    RefreshIcon,
} from "@heroicons/react/outline";

const navigation = [
    { name: "Portfolio", slug: "portfolio", icon: CodeIcon },
    { name: "Blog", slug: "blog", icon: AnnotationIcon },
    { name: "Builds", slug: "builds", icon: PuzzleIcon },
    { name: "Refresh", slug: "refresh", icon: RefreshIcon },
    { name: "Contact", slug: "contact", icon: MailIcon },
];

export default function Header() {
    const [mobileIsOpen, setMobileIsOpen] = useState(false);
    return (
        <div className="px-8 py-12">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link to="/" className="text-orange-600 hover:text-orange-700 font-bold font-logo text-3xl">jarom.dev</Link>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" onClick={() => { setMobileIsOpen(true) }} className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500" id="main-menu" aria-haspopup="true">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex md:space-x-10">
                    {navigation.map((item, itemIdx) => (
                        <Link to={`/${item.slug}`} key={itemIdx} className="mt-2 font-medium text-gray-500 hover:text-gray-900" activeClassName="text-gray-900">{item.name}</Link>
                    ))}
                </div>
            </nav>

            <Transition
                show={mobileIsOpen}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="absolute top-0 inset-x-0 z-10 pt-6 pb-2 px-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-orange-600 hover:text-orange-700 font-bold font-logo text-3xl">jarom.dev</span>
                                </div>
                                <div className="-mr-2">
                                    <button type="button" onClick={() => { setMobileIsOpen(false) }} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                                        <span className="sr-only">Close menu</span>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                                <nav className="grid gap-y-8" role="none">
                                    {navigation.map((item, itemIdx) => (
                                        <Link to={`/${item.slug}`} key={itemIdx} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" role="menuitem">
                                            <item.icon className="flex-shrink-0 w-6 h-6 text-orange-600" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <Link to="/contact" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700">Hire Me!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}