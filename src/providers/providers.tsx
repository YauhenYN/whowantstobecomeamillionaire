'use client';

import GamesProvider from "./gamesprovider";


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <GamesProvider>
            {children}
        </GamesProvider>
    );
}