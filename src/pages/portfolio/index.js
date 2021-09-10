import React from "react"
import SEO from "../../components/seo"
import MainLayout from "../../components/layouts/Layout"

import countryk9 from "../../images/countryk9.jpg"
import harpistsprings from "../../images/harpistinthesprings.jpg"
import boers from "../../images/mount-lewis-boers.jpg"
import relativeinterest from "../../images/relativeinterest.jpg"

export default function Portfolio() {
    return (
        <>
            <SEO title="Portfolio" />

            <MainLayout>
                <div className="p-8">
                    <h2 className="text-2xl font-bold font-logo leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Portfolio
                    </h2>
                    <div className="mt-16">
                        <div className="pb-5 border-b border-gray-200">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Client Websites</h3>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-6 md:grid-cols-4 lg:col-span-3">
                            <a href="https://countryk9.dog/?ref=jaromdev" target="_blank" rel="noreferrer" className="block group">
                                <figure>
                                    <div className="relative rounded-3xl overflow-hidden transition transform duration-150 ease-in-out">
                                        <img src={countryk9} alt="Country K9" className="w-full h-auto" />
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                                    </div>
                                    <figcaption className="mt-3">
                                        <p className="flex items-baseline text-sm font-medium text-gray-900">Country K9</p>
                                    </figcaption>
                                </figure>
                            </a>

                            <a href="https://harpistinthesprings.com/?ref=jaromdev" target="_blank" rel="noreferrer" className="block group">
                                <figure>
                                    <div className="relative rounded-3xl overflow-hidden transition transform duration-150 ease-in-out">
                                        <img src={harpistsprings} alt="Harpist in the Springs" className="w-full h-auto" />
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                                    </div>
                                    <figcaption className="mt-3">
                                        <p className="flex items-baseline text-sm font-medium text-gray-900">Harpist in the Springs</p>
                                    </figcaption>
                                </figure>
                            </a>

                            <a href="https://mountlewisboers.com/?ref=jaromdev" target="_blank" rel="noreferrer" className="block group">
                                <figure>
                                    <div className="relative rounded-3xl overflow-hidden transition transform duration-150 ease-in-out">
                                        <img src={boers} alt="Mount Lewis Boers" className="w-full h-auto" />
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                                    </div>
                                    <figcaption className="mt-3">
                                        <p className="flex items-baseline text-sm font-medium text-gray-900">Mount Lewis Boers</p>
                                    </figcaption>
                                </figure>
                            </a>

                            <a href="https://relativeinterest.com/?ref=jaromdev" target="_blank" rel="noreferrer" className="block group">
                                <figure>
                                    <div className="relative rounded-3xl overflow-hidden transition transform duration-150 ease-in-out">
                                        <img src={relativeinterest} alt="Relative Interest" className="w-full h-auto" />
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                                    </div>
                                    <figcaption className="mt-3">
                                        <p className="flex items-baseline text-sm font-medium text-gray-900">Relative Interest</p>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}