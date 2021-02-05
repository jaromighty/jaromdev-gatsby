import React from "react"
import Header from "../Header"
import Footer from "../Footer"

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}