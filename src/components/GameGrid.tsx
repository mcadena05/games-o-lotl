import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GarmeCardSkelecton from "./GarmeCardSkelecton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props{
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) =>{
    const {data, error, isLoading} = useGames(gameQuery);
    const skelectons = [1, 2, 3, 4, 5, 6];
    

    return(
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl:5}} padding={10} spacing={3}>
            {isLoading && skelectons.map(skelecton => <GameCardContainer key={skelecton}><GarmeCardSkelecton ></GarmeCardSkelecton></GameCardContainer>)}
            {data.map((game) => (
                <GameCardContainer key={game.id}><GameCard  game={game}></GameCard></GameCardContainer>
            ))}
        </SimpleGrid>
        </>
    )
}

export default GameGrid;