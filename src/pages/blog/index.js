import React from "react"
import MainLayout from "../../components/layouts/Layout"
import SEO from "../../components/seo"

export default function Blog() {
    return (
        <>
            <SEO title="Blog" />

            <MainLayout>
                <div className="p-8">
                    <h2 className="text-2xl font-bold font-logo leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Blog
                    </h2>
                    <p className="mt-6 text-gray-600">No articles to display.</p>
                </div>
            </MainLayout>
        </>
    )
}