import {Header} from "../../components/Header/Header";
import {useGetAnimeQuery, useGetGenresQuery} from "../../store";
import {useParams} from "react-router-dom";

import {
    AnimeImage,
    AnimePreviewStyles,
    SplashImage,
    TrailerWrapper,
    YVideo,
    Description,
    GenresList
} from "../../components/AnimePreview/AnimePreview.styles";

import {AnimeCard} from "../../components/AnimeCard/AnimeCard";
import {Message} from "../../components/Message/Message";
import {genresType} from "../../store/types/types";

export const AnimePage = () => {
    let {id} = useParams();
    const Id = Number(id)
    const {data: anime, isLoading} = useGetAnimeQuery(Id)
    const {data: genres, isLoading: listload} = useGetGenresQuery(Id)

    if (isLoading)
        return <Message message={"Loading"}/>

    if (!anime)
        return <Message message={"Cant find anime with this name"}/>

    const splash = anime.attributes.coverImage?.large


    return (
        <div>
            <Header isSearch={false}/>
            <SplashImage src={splash}/>
            <AnimePreviewStyles>
                <AnimeImage src={`https://media.kitsu.io/anime/poster_images/${Id}/small.jpg`} alt="why????"/>
                <AnimeCard fullInfo={anime}/>
            </AnimePreviewStyles>
            <TrailerWrapper>
                <YVideo videoId={anime.attributes.youtubeVideoId}/>
                <GenresList>
                    <Description><h1>Genres</h1></Description>
                    {listload ? <h1>Loading...</h1>:
                        genres.data?.map((item: genresType) =>
                            <Description>
                                {item.attributes.name}
                                <br/>
                            </Description>
                        )
                    }
                </GenresList>
            </TrailerWrapper>
        </div>
    )
}

