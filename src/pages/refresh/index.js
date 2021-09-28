import { Link } from "gatsby";
import React, { useState } from "react"
import MainLayout from "../../components/layouts/Layout"
import SEO from "../../components/seo"

import orchardChiro from "../../images/refresh-websites/orchard-chiropractic.jpg";

export default function Refresh() {
    const [sites] = useState([
        { name: "Orchard Chiropractic", slug: "orchard-chiropractic", image: orchardChiro },
    ]);
    return (
        <>
            <SEO title="Refresh Websites" />

            <MainLayout>
                <div className="p-8">
                    <h2 className="text-2xl font-bold font-logo leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Refresh Websites
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-xl">I have found that many websites out there are in need of a modern, refreshed design. Whenever I discover a website in need, I create an updated home page. This is then sent to the owner of the website in the hope of having the opportunity to build a new website for them.</p>
                    <div className="mt-16">
                        <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-6 md:grid-cols-4 lg:col-span-3">
                            {sites.map(site => (
                                <Link to={site.slug} className="block group">
                                    <figure>
                                        <div className="relative rounded-3xl overflow-hidden transition transform duration-150 ease-in-out">
                                            <img src={site.image} alt="Jalanin" className="w-full h-auto" />
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                                        </div>
                                        <figcaption className="mt-3">
                                            <p className="flex items-baseline text-sm font-medium text-gray-900">{site.name}</p>
                                        </figcaption>
                                    </figure>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}