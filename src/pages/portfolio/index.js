import React from "react";
import SEO from "../../components/seo";
import MainLayout from "../../components/layouts/Layout";

import countryk9 from "../../images/portfolio-websites/countryk9.jpg";
import harpistsprings from "../../images/portfolio-websites/harpistinthesprings.jpg";
import boers from "../../images/portfolio-websites/mount-lewis-boers.jpg";
import relativeinterest from "../../images/portfolio-websites/relativeinterest.jpg";
import gaminghusband from "../../images/portfolio-websites/the-gaming-husband.jpg";

const clients = [
    { name: "Country K9", href: "https://countryk9.dog/?ref=jaromdev", image: countryk9 },
    { name: "The Gaming Husband", href: "https://gaminghusband.com/?ref=jaromdev", image: gaminghusband },
    { name: "Harpist in the Springs", href: "https://harpistinthesprings.com/?ref=jaromdev", image: harpistsprings },
    { name: "Mount Lewis Boers", href: "https://mountlewisboers.com/?ref=jaromdev", image: boers },
    { name: "Relative Interest", href: "https://relativeinterest.com/?ref=jaromdev", image: relativeinterest },
];

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
                        <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 lg:col-span-3">
                            {clients.map(client => (
                                <a href={client.href} target="_blank" rel="noreferrer" className="block group">
                                    <figure>
                                        <div className="relative rounded-3xl overflow-hidden transition transform duration-150 ease-in-out">
                                            <img src={client.image} alt={client.name} className="w-full h-auto" />
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                                        </div>
                                        <figcaption className="mt-3">
                                            <p className="flex items-baseline text-sm font-medium text-gray-900">{client.name}</p>
                                        </figcaption>
                                    </figure>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}