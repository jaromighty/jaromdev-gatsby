import React from "react"
import SEO from "../components/seo"
import MainLayout from "../components/layouts/Layout"

export default function Contact() {
    return (
        <>
            <SEO title="Contact" />
            
            <MainLayout>
                <div className="p-8">
                    <h2 class="text-2xl font-bold font-logo leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Get in touch
                </h2>
                    <div className="mt-16">
                        <p class="mt-3 text-lg leading-6 text-gray-500">
                            Thank you for your interest in my services. Please contact me by text message or email.
                    </p>
                        <dl class="mt-8 mb-4 text-base leading-6 text-gray-500">
                            <div class="mt-6">
                                <dt class="sr-only">Phone number</dt>
                                <dd class="flex">
                                    {/* <!-- Heroicon name: phone --> */}
                                    <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span class="ml-3">
                                        +1 (719) 229-6776
                                </span>
                                </dd>
                            </div>
                            <div class="mt-3">
                                <dt class="sr-only">Email</dt>
                                <dd class="flex">
                                    {/* <!-- Heroicon name: mail --> */}
                                    <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span class="ml-3">
                                        jarom.rial@gmail.com
                                </span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}