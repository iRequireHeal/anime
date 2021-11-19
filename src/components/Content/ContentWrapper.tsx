import {AnimeList} from "../AnimeList/AnimeList";
import {TStore, useGetAnimeListQuery, useGetSearchedListQuery} from "../../store";
import {useSelector} from "react-redux";
import {Message} from "../Message/Message";
import {stat} from "fs";


export const ContentWrapper = () => {
    const titleName = useSelector((state: TStore) => state.reducer.titleName)
    const page = useSelector((state: TStore) => state.currentPage.page)
    const {data: animeSearchList, isLoading: animeSearchListLoading} = useGetSearchedListQuery(titleName);
    const {data: animeList, isLoading: animeListLoading} = useGetAnimeListQuery(page);

    if (titleName.trim()) {
        return (
            animeSearchListLoading ? (
                <Message message={"Loading..."}/>
            ): (
                <AnimeList animePropType={animeSearchList.data} />
            )
        )
    }
    else {
        return (
            animeListLoading ? (
                <Message message={"Loading..."}/>
            ): (
                <AnimeList animePropType={animeList.data} />
            )
        )
    }
}