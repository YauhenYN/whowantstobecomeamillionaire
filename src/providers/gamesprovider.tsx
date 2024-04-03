import Game from "@/types/game";
import GamesProps from "@/types/gamesprops";
import { createContext, useEffect, useState } from "react";

export const GamesContext = createContext<GamesProps | null>(null);

const localStorageName = "secretword";

export default function GamesProvider({ children }: { children: React.ReactNode }) {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedGames = localStorage.getItem(localStorageName);
        if (storedGames) setGames(JSON.parse(storedGames));
        setIsLoading(false);
    }, []);

    function addGame(game: Game) {
        setGames(games => {
            const newGames = [...games];
            newGames.push(game);
            localStorage.setItem(localStorageName, JSON.stringify(newGames));
            return newGames;
        });
    }

    return (
        <GamesContext.Provider value={{ games, isLoading, addGame }}>
            {children}
        </GamesContext.Provider>
    );
}