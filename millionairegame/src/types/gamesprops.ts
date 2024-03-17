import Game from "./game";

export default interface GamesProps {
    games: Game[];
    isLoading: boolean;
    addGame: (game: Game) => void
}