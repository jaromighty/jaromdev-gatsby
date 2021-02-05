import React from "react"
import { Link } from "gatsby"

export default function BuildsBackButton() {
    return (
        <div className="fixed inset-y-0 top-0 left-0 z-50">
            <Link to="/builds" className="inline-flex bg-orange-600 text-white p-4">
                <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Builds
            </Link>
        </div>
    )
}