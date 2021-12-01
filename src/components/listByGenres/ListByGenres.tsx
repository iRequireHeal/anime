import {AnimeListStyles} from "../AnimeList/AnimeList.styles";
import {TStore, useGetByGenreQuery} from "../../store";
import {Message} from "../Message/Message";
import {animeType, genreListT} from "../../store/types/types";
import {AnimePreview} from "../AnimePreview/AnimePreview";
import {useParams} from "react-router-dom";
import {FlippingButtons} from "../FlippingButtons/FlippingButtons";
import {useSelector} from "react-redux";
import {Genre} from "./ListByGenres.styles";

export const ListByGenres = () => {
    const {genre} = useParams()
    const page = useSelector((state: TStore) => state.currentPage.page)
    const genreData: genreListT = {
        genres: genre,
        page: page,
    }
    const {data, isLoading, isError} = useGetByGenreQuery(genreData)

    if (isLoading)
        return (
            <Message message={"Loading..."}/>
        )

    if (isError)
        return (
            <Message message={"ERROR!"}/>
        )


    return (
        <AnimeListStyles>
            <FlippingButtons/>
            <Genre>Genre: {genre}</Genre>
            {data.data.length ? data.data.map((item: animeType) => <AnimePreview key={item.id} animTypes={item}/>) :
                <Message message={'Seems theres no anime with this genre'}/>}
        </AnimeListStyles>
    )
}