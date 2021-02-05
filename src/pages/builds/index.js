import React from "react"
import { Link } from "gatsby"
import MainLayout from "../../components/layouts/Layout"
import SEO from "../../components/seo"

import jalanin from "../../images/jalanin.png"

export default function Builds() {
    return (
        <>
            <SEO title="Builds" />

            <MainLayout>
                <div className="p-8">
                    <h2 className="text-2xl font-bold font-logo leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Builds
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-xl">Each webpage listed here are based on web designs I found. I tried to keep to the design as much as possible. In some instances, I took a small number of creative liberties.</p>
                    <div className="mt-16">
                        <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-6 md:grid-cols-4 lg:col-span-3">
                            <Link to="travel-landing-page-oww" className="block group">
                                <figure>
                                    <div className="relative rounded-3xl overflow-hidden transition transform duration-150 ease-in-out">
                                        <img src={jalanin} alt="Country K9" className="w-full h-auto" />
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                                    </div>
                                    <figcaption className="mt-3">
                                        <p className="flex items-baseline text-sm font-medium text-gray-900">Jalanin - Travel Landing Page</p>
                                    </figcaption>
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}