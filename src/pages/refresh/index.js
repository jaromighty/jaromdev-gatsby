import React from "react"
import MainLayout from "../../components/layouts/Layout"
import SEO from "../../components/seo"

export default function Refresh() {
    return (
        <>
            <SEO title="Refresh Websites" />

            <MainLayout>
                <div className="p-8">
                    <h2 className="text-2xl font-bold font-logo leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Refresh Websites
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-xl">I have found that many websites out there are in need of a modern, refreshed design. Whenever I discover a website in need, I create an updated home page. This is then sent to the owner of the website in the hope of having the opportunity to build a new website for them.</p>
                </div>
            </MainLayout>
        </>
    )
}