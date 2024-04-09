'use client';

import { GamesContext } from "@/providers/gamesprovider";
import { useContext } from "react";

const payment = [
    100,
    200,
    300,
    500,
    1000,
    2000,
    4000,
    8000,
    16000,
    32000,
    64000,
    125000,
    250000,
    500000,
    1000000
]
const calculateWinPayment = (count: number) => {
    return payment.reduce((sum,r, i) => sum + (i < count ? r : 0), 0);
}

export default function RecordsWall() {
    const { games } = useContext(GamesContext)!;

    return (
        <div className="flex justify-center items-center">
            <div className="relative h-auto pb-[50px] lg:pb-[0px] lg:h-[750px] w-full">
                <h2 className="text-[26px] font-bold text-center">Рекорды</h2>
                {games.sort(game => game.answers.length).map((game, i) =>
                    <div key={i} className="rounded-lg bg-blue-950 text-white w-[150px] flex justify-center items-center h-[45px] mx-auto text-[20px] font-bold m-[15px]">
                        {calculateWinPayment(game.answers.length == 15 ? game.answers.length : game.answers.length - 1)}$
                    </div>)}
            </div>
        </div>
    )
}