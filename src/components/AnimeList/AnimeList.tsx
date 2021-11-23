import {AnimeListStyles} from "./AnimeList.styles";
import {animeType} from "../../store/types/types";
import {AnimePreview} from "../AnimePreview/AnimePreview";
import {TStore, useGetAnimeListQuery} from "../../store";
import {useSelector} from "react-redux";
import {Message} from "../Message/Message";

export const AnimeList = () => {
    const page = useSelector((state: TStore) => state.currentPage.page)
    const {data: animeList, isLoading: animeListLoading} = useGetAnimeListQuery(page);

    return (
        animeListLoading?
            <Message message={"Loading"}/>:
            <AnimeListStyles>
                {animeList.data.map((item: animeType) => <AnimePreview key={item.id} animTypes={item} />)}
            </AnimeListStyles>
    )
}