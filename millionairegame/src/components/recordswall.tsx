'use client';

import { GamesContext } from "@/providers/gamesprovider";
import { useContext } from "react";

export default function RecordsWall() {
    const { games } = useContext(GamesContext)!;

    return (
        <div className="flex justify-center items-center">
            <div className="relative h-[750px] w-full">
                <h2 className="text-[26px] font-bold text-center">Records</h2>
                {games.sort(game => game.answers.length).map(game =>
                    <div className="bg-blue-950 text-white w-[150px] flex justify-center items-center h-[45px] mx-auto text-[20px] font-bold m-[15px]">
                        {game.answers.length == 15 ? game.answers.length : game.answers.length - 1}
                    </div>)}
            </div>
        </div>
    )
}