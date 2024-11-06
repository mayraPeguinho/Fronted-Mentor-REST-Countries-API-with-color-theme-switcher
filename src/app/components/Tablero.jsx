"use client"
import { Suspense } from 'react';
import useStore from '../store';
import Loading from '../loading';
import TableroServer from './TableroServer';


export default function Tablero() {
    const search = useStore((state) => state.search);

    return (
        <Suspense fallback={<Loading />}>
            <TableroServer search={search} />
        </Suspense>
    );
}
