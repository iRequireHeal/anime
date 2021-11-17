import {Header} from "../../components/Header/Header";
import {useGetAnimeListQuery, useGetAnimeQuery} from "../../store";
import {animeType} from "../../store/types/types";

import {useLocation, useParams} from "react-router-dom";
import {
    AnimeImage,
    AnimeTitle,
    Description,
    DescriptionWrapper,
    AnimePrevStyles,
    AttributesWrapper,
    Attribute,
    AttributeName
} from "../../components/AnimePrev/AnimePrev.styles";
import {AnimeCard} from "../../components/AnimeCard/AnimeCard";

export const AnimePage = () => {
    let {id} = useParams();
    const Id = Number(id)
    const {data: anime, isLoading} = useGetAnimeQuery(Id)
    async function asdasd() {
        await console.log(anime)
    }

    if (!anime)
       return <h1>Loading</h1>

    return (
        <div>
            <Header/>
            <AnimePrevStyles>
                <AnimeImage src={`https://media.kitsu.io/anime/poster_images/${Id}/small.jpg`} alt=""/>
                <AnimeCard fullInfo={anime} />
            </AnimePrevStyles>
        </div>
    )
}

