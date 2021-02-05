import React from "react"

export default function RefreshBanner({ color }) {
    return (
        <div className={`fixed top-0 left-0 z-20 w-full ${color}`}>
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="pr-16 sm:text-center sm:px-16">
                    <p className="font-medium text-white">
                        <span className="md:hidden">
                            Checkout my website too!
                        </span>
                        <span className="hidden md:inline">
                            Be sure to checkout my website while you're here!
                        </span>
                        <span className="block sm:ml-2 sm:inline-block">
                            <a href="/" target="_blank" className="text-white font-bold underline"> Visit site <span aria-hidden="true">&rarr;</span></a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}