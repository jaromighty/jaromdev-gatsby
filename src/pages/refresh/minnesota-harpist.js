import React, { useState } from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import { Transition } from '@headlessui/react'

export default function MinnesotaHarpist() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <SEO
                title="Minnesota Harpist"
            />

            <div className="relative bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-0">
                    <svg className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
                        <defs>
                            <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
                        <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
                    </svg>
                </div>
                <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
                    <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
                        <div className="flex items-center flex-1">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link to="#" aria-label="Home">
                                    <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg" alt="Logo" />
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <button type="button" onClick={() => { setIsOpen(!isOpen) }} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10">
                                <Link to="#" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
                                <Link to="#" className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Repertoire</Link>
                                <Link to="#" className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">FAQs</Link>
                                <Link to="#" className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Contact</Link>
                            </div>
                        </div>
                    </nav>

                    <Transition
                        show={isOpen}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div className="rounded-lg shadow-md">
                                <div className="rounded-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg" alt="" />
                                        </div>
                                        <div className="-mr-2">
                                            <button type="button" onClick={() => { setIsOpen(!isOpen) }} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3">
                                        <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Home</Link>
                                        <Link to="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Repertoire</Link>
                                        <Link to="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">FAQs</Link>
                                        <Link to="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>

                    <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                                    St. Paul, Minnesota
                                </div>
                                <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                                    Natalie Ruotsinoja Durk
                                    <br />
                                    <span className="text-indigo-600">Professional Harpist</span>
                                </h2>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                                </p>
                            </div>
                            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                                <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784">
                                    <defs>
                                        <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
                                    <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                                </svg>
                                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                    <button type="button" className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:ring">
                                        <img className="w-full" src="http://minnesotaharpist.com/yahoo_site_admin/Linkssets/images/natalie_back_cover.202171533_std.jpg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div>
                        <h2 className="text-base leading-6 font-semibold text-indigo-600 uppercase tracking-wide">Everything you need</h2>
                        <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900">All-in-one platform</p>
                        <p className="mt-4 text-lg leading-7 text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                            <div className="flex space-x-3">
                                {/* <!-- Heroicon name: check --> */}
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="space-y-2">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Weddings</dt>
                                    <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                                        <span className="text-base leading-6 text-gray-500">You can manage phone, email and chat conversations all from a single mailbox.</span>
                                    </dd>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {/* <!-- Heroicon name: check --> */}
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="space-y-2">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Corporate Functions</dt>
                                    <dd className="flex space-x-3">
                                        <span className="text-base leading-6 text-gray-500">You can manage phone, email and chat conversations all from a single mailbox.</span>
                                    </dd>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {/* <!-- Heroicon name: check --> */}
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="space-y-2">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Private Parties</dt>
                                    <dd className="flex space-x-3">
                                        <span className="text-base leading-6 text-gray-500">You can manage phone, email and chat conversations all from a single mailbox.</span>
                                    </dd>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {/* <!-- Heroicon name: check --> */}
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="space-y-2">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Church Services</dt>
                                    <dd className="flex space-x-3">
                                        <span className="text-base leading-6 text-gray-500">You can manage phone, email and chat conversations all from a single mailbox.</span>
                                    </dd>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {/* <!-- Heroicon name: check --> */}
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="space-y-2">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Bridal &amp; Baby Showers</dt>
                                    <dd className="flex space-x-3">
                                        <span className="text-base leading-6 text-gray-500">Find what you need with advanced filters, bulk actions, and quick views.</span>
                                    </dd>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {/* <!-- Heroicon name: check --> */}
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="space-y-2">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Funerals</dt>
                                    <dd className="flex space-x-3 lg:border-t-0 lg:py-0 lg:pb-4">
                                        <span className="text-base leading-6 text-gray-500">Find what you need with advanced filters, bulk actions, and quick views.</span>
                                    </dd>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {/* <!-- Heroicon name: check --> */}
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="space-y-2">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Holiday Parties</dt>
                                    <dd className="flex space-x-3">
                                        <span className="text-base leading-6 text-gray-500">Find what you need with advanced filters, bulk actions, and quick views.</span>
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                        <div className="xl:w-0 xl:flex-1">
                            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                                Interested in my services?
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200" id="newsletter-headline">
                                Feel free to contact me for more information.
                            </p>
                        </div>
                        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-6">
                            <form className="" aria-labelledby="newsletter-headline">
                                <input aria-label="Name" type="text" name="name" required className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out" placeholder="Enter your name" />
                                <input aria-label="Email address" type="email" name="email" required className="appearance-none w-full mt-3 px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out" placeholder="Enter your email" />
                                <div className="mt-3 rounded-md sm:flex-shrink-0">
                                    <button className="flex items-center justify-center px-5 py-3 shadow border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                                        Contact me
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-white">
                <div className="max-w-screen-xl mx-auto pt-12 pb-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <Link to="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </Link>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <h4 class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                            A Professional Harpist in Minnesota
                        </h4>
                        <p class="mt-4 text-base leading-6 text-gray-500">
                            natalie@minnesotaharpist.com
                            <br className="sm:hidden" />
                            <span className="hidden sm:inline px-2">•</span>
                            612-239-3229
                        </p>
                    </div>
                </div>

                <div className="max-w-screen-xl mx-auto pt-6 pb-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center md:justify-start md:order-2">
                        <p className="inline-flex text-center text-base leading-6 text-gray-400">
                            Made with
                            <svg className="h-6 w-6 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                            </svg>
                            by
                            <Link className="pl-1 hover:underline" href="#" target="_blank">Jarom Rial</Link>
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base leading-6 text-gray-400">
                            &copy; 2020 Minnesota Harpist. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </>
    );
}