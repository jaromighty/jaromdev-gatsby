import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import MainLayout from "../components/layouts/Layout"

export default function Home() {
    return (
        <>
            <SEO title="Home" />
            
            <MainLayout>
                <div className="p-8">
                    <div className="bg-gray-200 rounded-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:pt-24 xl:pb-48 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-extrabold text-gray-700 font-logo sm:text-4xl">
                                    <span className="block text-orange-700 md:text-6xl lg:text-8xl">Need a website?</span>
                                    <span className="block sm:mt-2">I know a guy.</span>
                                </h2>
                                <p className="mt-8 text-lg leading-6 text-orange-600">Hello, my name is Jarom. I'm a professional Web Developer. I've had the privilege of working with some spectacular clients. I hope you're next!</p>
                                <Link to="/portfolio" className="mt-8 bg-orange-500 border border-transparent rounded-xl shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-100 hover:text-red-200">View my portfolio</Link>
                            </div>
                        </div>
                        <div className="hidden md:block -mt-6 md:-mt-36 lg:mt-0 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                            <img className="transform translate-x-6 translate-y-6 lg:translate-x-0 xl:-translate-x-28 xl:translate-y-12 rounded-md object-contain object-right-top" src="/homepage-short.png" alt="Jarom Rial" />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
