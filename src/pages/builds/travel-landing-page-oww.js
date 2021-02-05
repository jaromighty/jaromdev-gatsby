import React, { useState } from "react"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import BuildsBackButton from "../../components/BuildsBackButton"
import { Transition } from "@headlessui/react"

export default function TravelLandingPage() {
    const [mobileIsOpen, setMobileIsOpen] = useState(false);
    return (
        <>
            <SEO title="Travel Landing Page - OWW" />

            <BuildsBackButton />

            <div className="relative overflow-hidden">
                <div className="p-4 md:p-8">
                    <div className="bg-light-blue-100 rounded-2xl md:rounded-4xl p-6 pb-64 md:p-8 lg:py-12 lg:px-16 xl:px-24">
                        <nav className="relative flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <svg className="h-4 w-auto lg:h-6" width="279px" height="40px" viewBox="0 0 279 40">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g>
                                            <polygon fill="#242E37" points="0 0 6 0 6 40 0 40"></polygon>
                                            <polygon fill="#242E37" points="36 0 42 0 42 40 36 40"></polygon>
                                            <polygon fill="#5D7EF7" points="16 10 26 10 26 30 16 30"></polygon>
                                            <path d="M82.008,37.336 C88.68,37.336 93.096,33.496 93.096,26.248 L93.096,3.304 L84.888,3.304 L84.888,26.248 C84.888,28.744 83.736,29.992 81.768,29.992 C79.656,29.992 78.408,28.6 78.408,25.72 L70.248,25.72 C70.248,33.304 75.096,37.336 82.008,37.336 Z M110.148,37.384 C114.132,37.384 116.964,35.56 118.452,33.208 L118.452,37 L126.66,37 L126.66,10.216 L118.452,10.216 L118.452,14.008 C117.012,11.656 114.18,9.832 110.196,9.832 C103.62,9.832 98.388,15.112 98.388,23.56 C98.388,32.008 103.62,37.384 110.148,37.384 Z M112.596,30.232 C109.524,30.232 106.74,27.832 106.74,23.56 C106.74,19.288 109.524,16.984 112.596,16.984 C115.716,16.984 118.452,19.336 118.452,23.608 C118.452,27.88 115.716,30.232 112.596,30.232 Z M141.12,37 L141.12,1.48 L132.912,1.48 L132.912,37 L141.12,37 Z M157.5,37.384 C161.484,37.384 164.316,35.56 165.804,33.208 L165.804,37 L174.012,37 L174.012,10.216 L165.804,10.216 L165.804,14.008 C164.364,11.656 161.532,9.832 157.548,9.832 C150.972,9.832 145.74,15.112 145.74,23.56 C145.74,32.008 150.972,37.384 157.5,37.384 Z M159.948,30.232 C156.876,30.232 154.092,27.832 154.092,23.56 C154.092,19.288 156.876,16.984 159.948,16.984 C163.068,16.984 165.804,19.336 165.804,23.608 C165.804,27.88 163.068,30.232 159.948,30.232 Z M188.472,37 L188.472,22.456 C188.472,18.808 190.488,16.792 193.608,16.792 C196.728,16.792 198.744,18.808 198.744,22.456 L198.744,37 L206.904,37 L206.904,21.352 C206.904,14.152 202.776,9.928 196.584,9.928 C192.984,9.928 190.104,11.512 188.472,13.768 L188.472,10.216 L180.264,10.216 L180.264,37 L188.472,37 Z" fill="#5D7EF7" fillRule="nonzero"></path>
                                            <path d="M216.816,37.384 C219.696,37.384 221.664,35.416 221.664,32.968 C221.664,30.424 219.696,28.456 216.816,28.456 C213.888,28.456 211.92,30.424 211.92,32.968 C211.92,35.416 213.888,37.384 216.816,37.384 Z" fill="#242E37" fillRule="nonzero"></path>
                                            <path d="M245.184,37 L245.184,3.304 L236.976,3.304 L236.976,37 L245.184,37 Z M259.644,37 L259.644,22.456 C259.644,18.808 261.66,16.792 264.78,16.792 C267.9,16.792 269.916,18.808 269.916,22.456 L269.916,37 L278.076,37 L278.076,21.352 C278.076,14.152 273.948,9.928 267.756,9.928 C264.156,9.928 261.276,11.512 259.644,13.768 L259.644,10.216 L251.436,10.216 L251.436,37 L259.644,37 Z" fill="#242E37" fillRule="nonzero"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="-mr-2 flex items-center md:hidden">
                                <button onClick={() => setMobileIsOpen(true)} className="bg-white rounded-xl p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex text-base text-gray-800 lg:text-lg font-medium md:space-x-6 lg:space-x-16">
                                    <Link to="#" className="hover:text-blue-500 px-3 py-2">Promotions</Link>
                                    <Link to="#" className="hover:text-blue-500 px-3 py-2">Gallery</Link>
                                    <Link to="#" className="hover:text-blue-500 px-3 py-2">About Us</Link>
                                    <Link to="#" className="hover:text-blue-500 px-3 py-2">Contact</Link>
                                </div>
                            </div>
                        </nav>

                        <Transition
                            show={mobileIsOpen}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-90"
                            enterTo="opacity-100 scale-100"
                            leave="duration-150 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-90"
                        >
                            <div className="absolute top-0 inset-x-0 p-8 transition transform origin-top-right md:hidden">
                                <div className="rounded-xl shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <svg className="h-4 w-auto" width="279px" height="40px" viewBox="0 0 279 40">
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g>
                                                        <polygon fill="#242E37" points="0 0 6 0 6 40 0 40"></polygon>
                                                        <polygon fill="#242E37" points="36 0 42 0 42 40 36 40"></polygon>
                                                        <polygon fill="#5D7EF7" points="16 10 26 10 26 30 16 30"></polygon>
                                                        <path d="M82.008,37.336 C88.68,37.336 93.096,33.496 93.096,26.248 L93.096,3.304 L84.888,3.304 L84.888,26.248 C84.888,28.744 83.736,29.992 81.768,29.992 C79.656,29.992 78.408,28.6 78.408,25.72 L70.248,25.72 C70.248,33.304 75.096,37.336 82.008,37.336 Z M110.148,37.384 C114.132,37.384 116.964,35.56 118.452,33.208 L118.452,37 L126.66,37 L126.66,10.216 L118.452,10.216 L118.452,14.008 C117.012,11.656 114.18,9.832 110.196,9.832 C103.62,9.832 98.388,15.112 98.388,23.56 C98.388,32.008 103.62,37.384 110.148,37.384 Z M112.596,30.232 C109.524,30.232 106.74,27.832 106.74,23.56 C106.74,19.288 109.524,16.984 112.596,16.984 C115.716,16.984 118.452,19.336 118.452,23.608 C118.452,27.88 115.716,30.232 112.596,30.232 Z M141.12,37 L141.12,1.48 L132.912,1.48 L132.912,37 L141.12,37 Z M157.5,37.384 C161.484,37.384 164.316,35.56 165.804,33.208 L165.804,37 L174.012,37 L174.012,10.216 L165.804,10.216 L165.804,14.008 C164.364,11.656 161.532,9.832 157.548,9.832 C150.972,9.832 145.74,15.112 145.74,23.56 C145.74,32.008 150.972,37.384 157.5,37.384 Z M159.948,30.232 C156.876,30.232 154.092,27.832 154.092,23.56 C154.092,19.288 156.876,16.984 159.948,16.984 C163.068,16.984 165.804,19.336 165.804,23.608 C165.804,27.88 163.068,30.232 159.948,30.232 Z M188.472,37 L188.472,22.456 C188.472,18.808 190.488,16.792 193.608,16.792 C196.728,16.792 198.744,18.808 198.744,22.456 L198.744,37 L206.904,37 L206.904,21.352 C206.904,14.152 202.776,9.928 196.584,9.928 C192.984,9.928 190.104,11.512 188.472,13.768 L188.472,10.216 L180.264,10.216 L180.264,37 L188.472,37 Z" fill="#5D7EF7" fillRule="nonzero"></path>
                                                        <path d="M216.816,37.384 C219.696,37.384 221.664,35.416 221.664,32.968 C221.664,30.424 219.696,28.456 216.816,28.456 C213.888,28.456 211.92,30.424 211.92,32.968 C211.92,35.416 213.888,37.384 216.816,37.384 Z" fill="#242E37" fillRule="nonzero"></path>
                                                        <path d="M245.184,37 L245.184,3.304 L236.976,3.304 L236.976,37 L245.184,37 Z M259.644,37 L259.644,22.456 C259.644,18.808 261.66,16.792 264.78,16.792 C267.9,16.792 269.916,18.808 269.916,22.456 L269.916,37 L278.076,37 L278.076,21.352 C278.076,14.152 273.948,9.928 267.756,9.928 C264.156,9.928 261.276,11.512 259.644,13.768 L259.644,10.216 L251.436,10.216 L251.436,37 L259.644,37 Z" fill="#242E37" fillRule="nonzero"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="-mr-2">
                                            <button onClick={() => setMobileIsOpen(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="px-2 pt-2 pb-3">
                                            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Promotions</Link>
                                            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Gallery</Link>
                                            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About Us</Link>
                                            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>

                        <main className="mt-16 lg:mt-24 xl:mt-48">
                            <h1 className="max-w-full text-4xl tracking-tight font-black text-gray-800 md:leading-none lg:text-5xl md:max-w-xs lg:max-w-md xl:text-8xl xl:max-w-3xl">
                                Let's make your best trip ever!
                            </h1>

                            <div className="max-w-full mt-8 bg-gray-50 p-4 rounded-2xl md:max-w-xs lg:max-w-md xl:max-w-3xl xl:mt-24 xl:p-8">
                                <form action="#">
                                    <input type="text" className="block w-full font-base leading-loose bg-gray-200 border-none rounded-xl placeholder-gray-400 xl:text-2xl xl:p-8 xl:tracking-normal focus:ring-2 focus:ring-light-blue-300 focus:border-light-blue-300 focus:bg-gray-50 focus:placeholder-gray-300" placeholder="Hi! search for your destination here..." />
                                    <div className="flex">
                                        <div className="mt-2 flex-1 xl:mt-4">
                                            <ul className="inline-flex flex-wrap text-gray-300 text-sm xl:text-xl">
                                                <li className="px-1 xl:py-2 xl:px-4">
                                                    <Link to="#">#mountain</Link>
                                                </li>
                                                <li className="px-1 xl:py-2 xl:px-4">
                                                    <Link to="#">#beach</Link>
                                                </li>
                                                <li className="px-1 xl:py-2 xl:px-4">
                                                    <Link to="#">#climbing</Link>
                                                </li>
                                                <li className="px-1 xl:py-2 xl:px-4">
                                                    <Link to="#">#hill</Link>
                                                </li>
                                                <li className="px-1 xl:py-2 xl:px-4">
                                                    <Link to="#">#ocean</Link>
                                                </li>
                                                <li className="px-1 xl:py-2 xl:px-4">
                                                    <Link to="#">#surfing</Link>
                                                </li>
                                                <li className="px-1 xl:py-2 xl:px-4">
                                                    <Link to="#">#dive</Link>
                                                </li>
                                                <li className="px-1 xl:py-2 xl:px-4">
                                                    <Link to="#">#sail</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <button type="submit" className="text-gray-50 p-3 rounded-xl bg-blue-500 mt-2 xl:p-8 xl:mt-4">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>

                    <div className="-mt-56 relative px-6 md:-mt-64 lg:-mt-72 xl:-mt-128">
                        <div className="relative mx-auto w-full rounded-lg md:max-w-xxs md:ml-auto md:mr-2 lg:max-w-xs lg:mr-12 xl:max-w-2xl xl:mr-32">
                            <button type="button" className="relative block w-full bg-white rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <img className="w-full" src="https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&h=800&q=80" alt="" />
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                    <svg className="h-20 w-20 text-blue-500" fill="currentColor" viewBox="0 0 84 84">
                                        <circle opacity="0.7" cx="42" cy="42" r="42" fill="white" />
                                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="relative mt-12 px-6 xl:px-16 xl:flex xl:-mt-48">
                        <div className="xl:order-2 xl:ml-32 xl:pl-2 xl:self-end xl:max-w-xl xl:mb-16">
                            <h2 className="font-bold text-4xl leading-normal xl:text-7xl xl:leading-relaxed">Popular Destinations</h2>
                            <p className="mt-4 xl:mt-8 text-gray-500 text-xl xl:text-3xl">Suspendisse porro quisquam velit, sed quia non eius.</p>
                            <button type="button" className="mt-8 xl:mt-20 inline-flex items-center px-8 py-4 xl:px-12 xl:py-8 border border-transparent text-lg xl:text-2xl font-medium rounded-3xl shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                More Destinations
                            </button>
                        </div>
                        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 xl:order-1 xl:max-w-3xl xl:mx-8 xl:gap-16">
                            <div className="group flex flex-col">
                                <img className="rounded-3xl" src="https://images.unsplash.com/photo-1598751337485-0d57b0c50b83?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=800&q=80" alt="" />
                                <div className="mt-4 font-medium text-lg">Mattis, Elementum</div>
                                <div className="text-gray-400 text-base">17 places to visit</div>
                            </div>
                            <div className="flex flex-col">
                                <img className="rounded-3xl" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80" alt="" />
                                <div className="mt-4 font-medium text-lg">Vitae, Sagittis</div>
                                <div className="text-gray-400 text-base">23 places to visit</div>
                            </div>
                            <div className="flex flex-col">
                                <img className="rounded-3xl" src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80" alt="" />
                                <div className="mt-4 font-medium text-lg">Pellentesque, Vivamus</div>
                                <div className="text-gray-400 text-base">13 places to visit</div>
                            </div>
                            <div className="flex flex-col">
                                <img className="rounded-3xl" src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=800&q=80" alt="" />
                                <div className="mt-4 font-medium text-lg">Commodo, Lectus</div>
                                <div className="text-gray-400 text-base">31 places to visit</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-48">
                        <div className="px-6 xl:px-24 lg:flex lg:items-center lg:justify-between">
                            <h2 className="font-bold text-4xl leading-normal xl:text-7xl xl:leading-relaxed">Special Offer</h2>
                            <p className="mt-4 xl:mt-8 text-gray-500 text-xl xl:text-3xl xl:max-w-2xl xl:mr-14">Suspendisse porro quisquam velit, sed quia non eius.</p>
                        </div>
                        <div className="mt-6 px-6 xl:px-24 sm:overflow-x-auto sm:overflow-y-hidden">
                            <div className="sm:inline-flex sm:space-x-6 xl:space-x-20">
                                <div className="sm:w-72 md:w-80 xl:w-96 sm:flex-shrink-0 sm:pb-8">
                                    <div className="flex flex-col">
                                        <img className="rounded-3xl" src="https://images.unsplash.com/photo-1533070434345-ffc06cc52d17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&h=1300&q=80" alt="" />
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-yellow-500 font-medium">team tour</p>
                                            <p className="text-blue-500"><span className="font-medium">$445</span>/person</p>
                                        </div>
                                        <p className="mt-2 text-gray-900 font-semibold text-xl">Freedom after adveturers roam</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="inline-flex">
                                                <svg className="w-6 h-6 text-gray-300 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                Magna
                                            </p>
                                            <p className="inline-flex text-yellow-500">
                                                <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                4.3
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:w-72 md:w-80 xl:w-96 sm:flex-shrink-0">
                                    <div className="pt-8 sm:pt-0 flex flex-col">
                                        <img className="rounded-3xl" src="https://images.unsplash.com/photo-1524760324845-fdfbc60c7667?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&h=1300&q=80" alt="" />
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-yellow-500 font-medium">solo tour</p>
                                            <p className="text-blue-500"><span className="font-medium">$315</span>/person</p>
                                        </div>
                                        <p className="mt-2 text-gray-900 font-semibold text-xl">Relax then fly like going with the flow</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="inline-flex">
                                                <svg className="w-6 h-6 text-gray-300 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                Nostrud
                                            </p>
                                            <p className="inline-flex text-yellow-500">
                                                <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                4.5
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:w-72 md:w-80 xl:w-96 sm:flex-shrink-0">
                                    <div className="pt-8 sm:pt-0 flex flex-col">
                                        <img className="rounded-3xl" src="https://images.unsplash.com/photo-1521488517399-2b4ed09655fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&h=1300&q=80" alt="" />
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-yellow-500 font-medium">team tour</p>
                                            <p className="text-blue-500"><span className="font-medium">$380</span>/person</p>
                                        </div>
                                        <p className="mt-2 text-gray-900 font-semibold text-xl">Satisfaction is above the clouds</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="inline-flex">
                                                <svg className="w-6 h-6 text-gray-300 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                Maliqua
                                            </p>
                                            <p className="inline-flex text-yellow-500">
                                                <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                4.1
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:w-72 md:w-80 xl:w-96 sm:flex-shrink-0">
                                    <div className="pt-8 sm:pt-0 flex flex-col">
                                        <img className="rounded-3xl" src="https://images.unsplash.com/photo-1544551763-39875156aa61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1300&q=80" alt="" />
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-yellow-500 font-medium">team tour</p>
                                            <p className="text-blue-500"><span className="font-medium">$410</span>/person</p>
                                        </div>
                                        <p className="mt-2 text-gray-900 font-semibold text-xl">The important thing is being happy</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="inline-flex">
                                                <svg className="w-6 h-6 text-gray-300 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                Cupidatat
                                            </p>
                                            <p className="inline-flex text-yellow-500">
                                                <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                4.6
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:w-72 md:w-80 xl:w-96 sm:flex-shrink-0">
                                    <div className="pt-8 sm:pt-0 flex flex-col">
                                        <img className="rounded-3xl" src="https://images.unsplash.com/photo-1556537574-18fc40abb2bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1300&q=80" alt="" />
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-yellow-500 font-medium">solo tour</p>
                                            <p className="text-blue-500"><span className="font-medium">$335</span>/person</p>
                                        </div>
                                        <p className="mt-2 text-gray-900 font-semibold text-xl">Hear the mighty water falling</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="inline-flex">
                                                <svg className="w-6 h-6 text-gray-300 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                Adipisci
                                            </p>
                                            <p className="inline-flex text-yellow-500">
                                                <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                4.4
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-12 px-6 xl:px-24">
                        <h2 className="font-bold text-4xl leading-normal xl:text-7xl xl:leading-relaxed">From the Blog</h2>
                        <div className="mt-6 xl:grid xl:grid-cols-2 xl:gap-32">
                            <div className="flex flex-col">
                                <div className="relative mx-auto w-full">
                                    <button type="button" className="relative block w-full bg-white rounded-3xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        <img className="w-full" src="https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                                        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                            <svg className="h-20 w-20 text-blue-500" fill="currentColor" viewBox="0 0 84 84">
                                                <circle opacity="0.7" cx="42" cy="42" r="42" fill="white" />
                                                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <h3 className="mt-4 sm:mt-6 text-2xl font-semibold">Story of water world adveturers</h3>
                                <p className="pt-3 text-lg md:text-xl text-gray-400">Excepteur sint occeacat cupidatat non proident, sunt in culpa qui officia. <Link to="#" className="underline text-yellow-500">visit more</Link></p>
                                <p className="pt-4">by : <span className="font-medium">Patricia Sanantha</span></p>
                            </div>
                            <div className="mt-8 xl:mt-0 flex flex-col sm:grid sm:gap-8 sm:grid-cols-2 xl:flex xl:flex-col">
                                <div className="flex items-center xl:justify-between max-h-24 xl:max-h-32">
                                    <div className="ml-4 order-2 xl:order-1">
                                        <h3 className="font-semibold xl:text-xl">Mus maruis vitae ultricies leo.</h3>
                                        <p className="text-gray-400 text-sm xl:text-base pt-1">@erico.namansya</p>
                                    </div>
                                    <div className="w-24 xl:w-32 order-1 flex-shrink-0 xl:order-2">
                                        <img className="w-full rounded-2xl xl:rounded-3xl" src="https://images.unsplash.com/photo-1610985687189-ea4e90dc84a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80" alt="" />
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0 flex items-center xl:justify-between max-h-24 xl:max-h-32">
                                    <div className="ml-4 order-2 xl:order-1">
                                        <h3 className="font-semibold xl:text-xl">Enim facilisis gravida neque a cras semper.</h3>
                                        <p className="text-gray-400 text-sm xl:text-base pt-1">@salasya.nasha</p>
                                    </div>
                                    <div className="w-24 xl:w-32 order-1 flex-shrink-0 xl:order-2">
                                        <img className="w-full rounded-2xl xl:rounded-3xl" src="https://images.unsplash.com/photo-1443632864897-14973fa006cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80" alt="" />
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0 flex items-center xl:justify-between max-h-24 xl:max-h-32">
                                    <div className="ml-4 order-2 xl:order-1">
                                        <h3 className="font-semibold xl:text-xl">Velit laoreet id donex ultrices tincidunt.</h3>
                                        <p className="text-gray-400 text-sm xl:text-base pt-1">@onionarsyid</p>
                                    </div>
                                    <div className="w-24 xl:w-32 order-1 flex-shrink-0 xl:order-2">
                                        <img className="w-full rounded-2xl xl:rounded-3xl" src="https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&h=1000&q=80" alt="" />
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0 flex items-center xl:justify-between max-h-24 xl:max-h-32">
                                    <div className="ml-4 order-2 xl:order-1">
                                        <h3 className="font-semibold xl:text-xl">Aliquam eleifend mi in nulla posuere aliquam.</h3>
                                        <p className="text-gray-400 text-sm xl:text-base pt-1">@asyifananda</p>
                                    </div>
                                    <div className="w-24 xl:w-32 order-1 flex-shrink-0 xl:order-2">
                                        <img className="w-full rounded-2xl xl:rounded-3xl" src="https://images.unsplash.com/photo-1551244072-5d12893278ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-blue-50 rounded-3xl">
                        <div className="p-8 lg:py-16 lg:px-24 xl:py-32 flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-bold xl:text-5xl">Book Your Tour Dates Now</h2>
                            <div className="mt-4 p-2 xl:p-4 bg-white rounded-3xl w-full lg:mt-12 xl:max-w-3xl">
                                <form className="sm:flex sm:space-x-1 xl:space-x-3" action="#">
                                    <div className="relative rounded-2xl">
                                        <input className="block w-full pr-10 border-none bg-gray-100 placeholder-gray-400 rounded-2xl xl:text-xl xl:p-4 focus:ring-2 focus:border-blue-500 focus:bg-white" type="text" placeholder="Destination" />
                                        <div className="absolute inset-y-0 right-0 pr-3 xl:pr-4 flex items-center pointer-events-none">
                                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:mt-0 relative rounded-2xl">
                                        <input className="block w-full pr-10 border-none bg-gray-100 placeholder-gray-400 rounded-2xl xl:text-xl xl:p-4 focus:ring-2 focus:border-blue-500 focus:bg-white" type="text" placeholder="Schedule" />
                                        <div className="absolute inset-y-0 right-0 pr-3 xl:pr-4 flex items-center pointer-events-none">
                                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:mt-0 relative rounded-2xl">
                                        <button type="submit" className="flex items-center justify-center p-2 xl:p-5 w-full bg-blue-500 rounded-2xl focus:ring-2 focus:border-blue-500">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <footer className="mt-16">
                        <div className="sm:px-6 lg:py-16 lg:px-24">
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <h3 className="text-3xl font-bold xl:text-5xl">Start growing with digital now</h3>
                                <button type="button" className="mt-8 lg:mt-0 inline-flex items-center px-8 py-4 xl:px-12 xl:py-8 border border-transparent text-lg xl:text-2xl font-medium rounded-3xl shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Get Destinations
                                </button>
                            </div>
                            <div className="mt-8 xl:grid xl:grid-cols-3 xl:gap-8">
                                <div className="space-y-8 xl:col-span-1">
                                    <p className="text-gray-500 text-base">Aliquam id diam maecenas mi. Cras ornare arcu dui vivamus arcu felis bibendum.</p>
                                    <div className="flex space-x-6">
                                        <Link to="#" className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Facebook</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                            </svg>
                                        </Link>

                                        <Link to="#" className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Instagram</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
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
                                <div className="mt-12 grid grid-cols-2 gap-1 sm:gap-8 xl:mt-0 xl:col-span-2 xl:self-end">
                                    <div className="md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Company</h3>
                                            <ul className="mt-4 space-y-4">
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">Appraise</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">Careers</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">Mortgage</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">How does it work?</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-12 md:mt-0">
                                            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About Us</h3>
                                            <ul className="mt-4 space-y-4">
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">Who we are</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">Jobs</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">Terms &amp; Services</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">Privacy Policy</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="md:grid md:grid-cols-1 md:gap-8">
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contact</h3>
                                            <ul className="mt-4 space-y-4">
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">+00123456789</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="text-base text-gray-700 hover:text-gray-900">help@realadvisor.com</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

                <div className="flex items-center justify-center py-4 text-gray-400">
                    Original design by <a className="underline ml-1" href="https://dribbble.com/shots/14306834-Jalanin-Travel-Landing-Page" target="_blank" rel="noreferrer">Piko Rizky Dwinanto</a>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </>
    )
}