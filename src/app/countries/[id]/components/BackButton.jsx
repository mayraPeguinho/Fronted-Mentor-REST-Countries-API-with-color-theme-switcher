"use client"

import { useRouter } from 'next/navigation';

export default function BackButton() {

    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return <button onClick={handleGoBack} className="w-1/3 bg-darkBlue shadow-black shadow-sm md:w-1/6 lg:w-1/12">
        Back
    </button>
}