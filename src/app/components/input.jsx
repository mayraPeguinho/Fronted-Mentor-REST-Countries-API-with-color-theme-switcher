'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';

export default function Input({ name }) {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleInput = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('country', term)
    } else {
      params.delete('country')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return <>
    <label htmlFor={name} className="sr-only"> Search for a country </label>
    <input
      className="w-full min-w-[200px] md:w-1/3 px-8 py-5 rounded-lg focus:outline-none"
      id={name}
      type="text"
      onChange={(e) => { handleInput(e.target.value) }}
      defaultValue={searchParams.get('country')?.toString()}
      placeholder="Search for a country..." />
  </>
}