import React, { useState } from "react";
import { Link } from "gatsby"
import SEO from "../../components/seo";
import RefreshBanner from "../../components/refresh-banner";
import { Transition } from '@headlessui/react';

export default function OrchardChiropractic() {
    const [mobileIsOpen, setMobileIsOpen] = useState(false);
    const [chiroIsOpen, setChiroIsOpen] = useState(false);
    const [youIsOpen, setYouIsOpen] = useState(false);
    return (
        <>
            <SEO
                title="Orchard Chiropractic"
            />

            <RefreshBanner color="bg-red-600" />

            <div className="mt-16 md:mt-12 relative bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
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
                <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                    <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
                        <div className="flex items-center flex-1">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link to="#">
                                    <span className="sr-only">Orchard Chiropractic</span>
                                    <img className="h-8 w-auto sm:h-10" src="/orchard-chiro.svg" alt="" />
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <button type="button" onClick={() => { setMobileIsOpen(true) }} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500" id="main-menu" aria-haspopup="true">
                                        <span className="sr-only">Open main menu</span>
                                        {/* <!-- Heroicon name: menu --> */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden md:flex md:ml-10 md:space-x-10">
                                <Link to="#" className="font-medium text-gray-500 hover:text-gray-900">Home</Link>

                                <div className="relative group" onMouseEnter={() => setChiroIsOpen(true)} onMouseLeave={() => setChiroIsOpen(false)}>
                                    <button type="button" className="bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium group-hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        <span>About Chiropractic</span>
                                        <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <Transition
                                        show={chiroIsOpen}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <div className="absolute left-1/2 transform -translate-x-1/2 pt-3 px-2 w-screen max-w-xs sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    <Link to="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                                        <p className="text-base font-medium text-gray-900">
                                                            How does it work?
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            Learn about the main causes of joint dysfunction.
                                                        </p>
                                                    </Link>

                                                    <Link to="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                                        <p className="text-base font-medium text-gray-900">
                                                            Its history
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            All about the history of Chiropractic.
                                                        </p>
                                                    </Link>

                                                    <Link to="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                                        <p className="text-base font-medium text-gray-900">
                                                            Phases of degeneration
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            Learn why you need regular treatment.
                                                        </p>
                                                    </Link>

                                                    <Link to="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                                        <p className="text-base font-medium text-gray-900">
                                                            What is a subluxation?
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            Learn about a common spinal ailment.
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>

                                <Link to="#" className="font-medium text-gray-500 hover:text-gray-900">About Us</Link>

                                <div className="relative group" onMouseEnter={() => setYouIsOpen(true)} onMouseLeave={() => setYouIsOpen(false)}>
                                    <button type="button" className="bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium group-hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        <span>About You</span>
                                        <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <Transition
                                        show={youIsOpen}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <div className="absolute left-1/2 transform -translate-x-1/2 pt-3 px-2 w-screen max-w-xs sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    <Link to="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                                        <p className="text-base font-medium text-gray-900">
                                                            FAQs
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            Answers to common questions about Chiropractic.
                                                        </p>
                                                    </Link>

                                                    <Link to="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                                        <p className="text-base font-medium text-gray-900">
                                                            Wellness tips
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            Good practices for activities in your daily life.
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <Transition
                        show={mobileIsOpen}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img className="h-8 w-auto" src="/orchard-chiro.svg" alt="" />
                                        </div>
                                        <div className="-mr-2">
                                            <button type="button" onClick={() => { setMobileIsOpen(false) }} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                                                <span className="sr-only">Close main menu</span>
                                                {/* <!-- Heroicon name: x --> */}
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                                        <nav className="grid gap-y-8" role="none">
                                            <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" role="menuitem">
                                                <span className="ml-3 text-base font-medium text-gray-900">How does Chiropractics work?</span>
                                            </Link>

                                            <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" role="menuitem">
                                                <span className="ml-3 text-base font-medium text-gray-900">History of Chiropractic</span>
                                            </Link>

                                            <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" role="menuitem">
                                                <span className="ml-3 text-base font-medium text-gray-900">Phases of degeneration</span>
                                            </Link>

                                            <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" role="menuitem">
                                                <span className="ml-3 text-base font-medium text-gray-900">What is a subluxation?</span>
                                            </Link>

                                            <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" role="menuitem">
                                                <span className="ml-3 text-base font-medium text-gray-900">FAQs</span>
                                            </Link>

                                            <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" role="menuitem">
                                                <span className="ml-3 text-base font-medium text-gray-900">Wellness tips</span>
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">About Us</Link>

                                        <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Blog</Link>

                                        <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Contact</Link>

                                        <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Reviews</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>

                    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                                <h1>
                                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                        <span className="block text-gray-900">Welcome to</span>
                                        <span className="block text-red-600">Orchard Chiropractic</span>
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Rexburg, Idaho Chiropractor Dr. Todd Orchard and his team are committed to bringing the world better health and a better way of life by teaching and practicing the true principles of chiropractic care.
                                </p>
                                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                    <p className="text-base font-medium text-gray-900">
                                        Get Our FREE Health &amp; Wellness Updates!
                                    </p>
                                    <form action="#" method="POST" className="mt-3 sm:flex">
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input type="text" id="email" className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-red-500 focus:border-red-500 sm:flex-1 border-gray-300" placeholder="Enter your email" />
                                        <button type="submit" className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                                            Sign up now
                                        </button>
                                    </form>
                                    <p className="mt-3 text-sm text-gray-500">
                                        We care about the protection of your data. Read our{' '}
                                        <Link to="#" className="font-medium text-gray-900 underline">Privacy Policy</Link>.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                                <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
                                    <defs>
                                        <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
                                    <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                                </svg>
                                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                    <button type="button" className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        <span className="sr-only">Watch our video to learn more</span>
                                        <img className="w-full" src="/what-is-chiropractic.png" alt="" />
                                        <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                                            <svg className="h-20 w-20 text-red-500" fill="currentColor" viewBox="0 0 84 84">
                                                <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                                                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Services we offer</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Nunc rutrum dui vel elit
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                                        {/* <!-- Heroicon name: hand --> */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Chiropractic Care
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        We provide advanced spinal correction utilizing ‘state of the art’ chiropractic techniques. Never in the history of chiropractic have we been able to provide the level of help and expertise that now exists. These newer correction methods are even safer, more comfortable and more effective than ever before.
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                                        {/* <!-- Heroicon name: thumb-up --> */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Corrective Exercises
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        We teach our patient’s special ‘redprint’ exercises designed just for them to help strengthen and correct their own unique problem. These exercises can be performed in the comfort of your own home and can improve the effectiveness of your spinal correction by as much as 30-40%.
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                                        {/* <!-- Heroicon name: scale --> */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Lifestyle Advice
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        We often find it helpful to ‘coach’ our patients on certain activities they should avoid or do differently to avoid aggravating their particular health challenge. Our goal is to help every patient achieve a fulfilling and happy lifestyle full of the activities they enjoy most.
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                                        {/* <!-- Heroicon name: presentation-chart-bar --> */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Spinal &amp; Postural Screenings
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Posture and spinal screenings can reveal important health information and unlock the door to improved health and well-being. We provide screenings at community events, health fairs and places of employment. Contact us today to arrange a screening at your event or workplace.
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
                            <p className="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>
                        </div>
                        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                            <li>
                                <div className="space-y-4">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="object-cover shadow-lg rounded-lg" src="https://rexburgidahochiropractor.com/wp-content/uploads/footer-images/todd-orchard.jpg" alt="" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3>Dr. Todd Orchard</h3>
                                            <p className="text-red-600">Owner, Doctor of Chiropractics</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="space-y-4">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3>Courtney Henry</h3>
                                            <p className="text-red-600">Front Desk Receptionist</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="space-y-4">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3>Jenny Wilson</h3>
                                            <p className="text-red-600">Licensed Massage Therapist</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            Blog
                        </h2>
                        <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                            <p className="text-xl text-gray-500">
                                Get weekly articles in your inbox on how to grow your business.
                            </p>
                            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input id="email-address" type="email" required className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 lg:max-w-xs" placeholder="Enter your email" />
                                </div>
                                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                                    <button type="button" className="w-full bg-red-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:inline-flex">
                                        Notify me
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                        <div>
                            <p className="text-sm text-gray-500">
                                <time dateTime="2020-11-18">Nov 18, 2020</time>
                            </p>
                            <Link to="#" className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">
                                    An Overview of Frozen Shoulder Relief Using Chiropractic Care
                                </p>
                                <p className="mt-3 text-base text-gray-500">
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                </p>
                            </Link>
                            <div className="mt-3">
                                <Link to="#" className="text-base font-semibold text-red-600 hover:text-red-500">
                                    Read full article
                            </Link>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                <time dateTime="2020-11-11">Nov 11, 2020</time>
                            </p>
                            <Link to="#" className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">
                                    6 Neck Mobility Exercises That Will Change Your Life
                                </p>
                                <p className="mt-3 text-base text-gray-500">
                                    Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.
                                </p>
                            </Link>
                            <div className="mt-3">
                                <Link to="#" className="text-base font-semibold text-red-600 hover:text-red-500">
                                    Read full article
                                </Link>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                <time dateTime="2020-11-04">Nov 4, 2020</time>
                            </p>
                            <Link to="#" className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">
                                    3 Hip Mobility Exercises You Should Do To Help Increase Flexibility
                                </p>
                                <p className="mt-3 text-base text-gray-500">
                                    Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.
                                </p>
                            </Link>
                            <div className="mt-3">
                                <Link to="#" className="text-base font-semibold text-red-600 hover:text-red-500">
                                    Read full article
                                </Link>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                <time dateTime="2020-10-28">Oct 28, 2020</time>
                            </p>
                            <Link to="#" className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">
                                    How Chiropractic Helps People Eliminate Pain Without Relying on Painkillers
                                </p>
                                <p className="mt-3 text-base text-gray-500">
                                    Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.
                                </p>
                            </Link>
                            <div className="mt-3">
                                <Link to="#" className="text-base font-semibold text-red-600 hover:text-red-500">
                                    Read full article
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                        <div className="hidden md:block">
                            <iframe title="location" className="rounded-lg shadow-lg" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?hl=en&amp;client=safari&amp;q=Orchard+Chiropractic+160+E.+Valley+River+Drive+%233+Rexburg,+Idaho+83440&amp;ie=UTF8&amp;hq=Orchard+Chiropractic+160+E.+Valley+River+Drive+%233+Rexburg,+Idaho+83440&amp;hnear=&amp;radius=15000&amp;t=m&amp;cid=8627116595682099802&amp;ll=43.841894,-111.774988&amp;spn=0.024762,0.051413&amp;z=14&amp;iwloc=A&amp;output=embed" width="600" height="400" frameBorder="0"></iframe>
                        </div>
                        <div className="relative flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                Contact Us
                            </h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        {/* <!-- Heroicon name: phone --> */}
                                        <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>
                                            (208) 656-8883
                                        </p>
                                        <p className="mt-1">
                                            Mon, Wed, Fri 9am to 12pm, 2pm to 5pm MST
                                        </p>
                                        <p className="mt-1">
                                            Tue, Thur 9am to 12pm, 2pm to 4pm MST
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                        {/* <!-- Heroicon name: location-marker --> */}
                                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>
                                            160 E Valley River Drive #3
                                        </p>
                                        <p className="mt-1">
                                            Rexburg, Idaho 83440
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-white" aria-labelledby="footerHeading">
                <h2 id="footerHeading" className="sr-only">Footer</h2>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8 xl:col-span-1">
                            <img className="h-10" src="/orchard-chiro-gray.svg" alt="Company name" />
                            <p className="text-gray-500 text-base">
                                Making the world a better place through individualized patient care.
                            </p>
                            <div className="flex space-x-6">
                                <Link to="#" className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </Link>

                                <Link to="#" className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </Link>

                                <Link to="#" className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                    Topics
                                </h3>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <ul className="mt-4 space-y-4">
                                            <li>
                                                <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                    Allergies &amp; Colds
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                    Arthritis
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                    Carpal Tunnel Syndrome
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                    Disc Problems
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="mt-4 space-y-4">
                                            <li>
                                                <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                    Fibromyalgia
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                    Headaches
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                    Neck &amp; Back Pain
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                    Sciatica
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Company
                                        </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                About
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                Blog
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                Contact
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                Reviews
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Legal
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                Healthcare Disclaimer
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                HIPAA Privacy Policy
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                Privacy Policy
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="text-base text-gray-500 hover:text-gray-900">
                                                Terms of Service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                            <div className="text-center md:order-2">
                                <p className="inline-flex text-center text-base leading-6 text-gray-400">
                                    Made with
                                <svg className="h-6 w-6 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                    </svg>
                                by
                                <Link className="pl-1 hover:underline" to="#" target="_blank">Jarom Rial</Link>
                                </p>
                            </div>
                            <div className="mt-8 md:mt-0 md:order-1">
                                <p className="text-center text-base leading-6 text-gray-400">
                                    &copy; 2020 Orchard Chiropractic. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

                * {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
        </>
    );
}