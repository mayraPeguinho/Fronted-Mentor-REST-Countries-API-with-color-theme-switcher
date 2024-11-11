'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

export default function Select({ name }) {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSelect = (term) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('region', term)
        } else {
            params.delete('region')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return <>
        <label htmlFor={name} />
        <select className="w-1/2 min-w-[200px] md:w-1/6 px-8 py-5 rounded-lg focus:outline-none" id={name} defaultValue={searchParams.get('region')?.toString()} onChange={(e) => { handleSelect(e.target.value) }}>
            <option key="nothing" value="">Filter by Region</option>
            {options.map(element => <option key={element} value={element}>{element}</option>)}
        </select>
    </>
}
