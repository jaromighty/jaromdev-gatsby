import React, { useState } from "react";
import SEO from "../../components/seo";
import RefreshBanner from "../../components/refresh-banner";
import { Transition } from '@headlessui/react';

export default function SabinChiropractic() {
    const [mobileIsOpen, setMobileIsOpen] = useState(false);
    return (
        <>
            <SEO
                title="Sabin Chiropractic"
            />

            <RefreshBanner color="bg-gray-900" />
        </>
    );
}