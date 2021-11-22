import {Header} from "../../components/Header/Header";
import {useGetAnimeQuery} from "../../store";
import {useParams} from "react-router-dom";
import {
    AnimeImage,
    AnimePreviewStyles,
} from "../../components/AnimePreview/AnimePreview.styles";

import {AnimeCard} from "../../components/AnimeCard/AnimeCard";
import {Message} from "../../components/Message/Message";

export const AnimePage = () => {
    let {id} = useParams();
    const Id = Number(id)
    const {data: anime, isLoading} = useGetAnimeQuery(Id)

    if (isLoading)
        return <Message message={"Loading"}/>

    if (!anime)
        return <Message message={"Cant find anime with this name"}/>

    return (
        <div>
            <Header isSearch={false}/>
            <AnimePreviewStyles>
                <AnimeImage src={`https://media.kitsu.io/anime/poster_images/${Id}/small.jpg`} alt=""/>
                <AnimeCard fullInfo={anime}/>
            </AnimePreviewStyles>
        </div>
    )
}

