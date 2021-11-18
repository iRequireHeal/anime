import {AnimeList} from "../AnimeList/AnimeList";
import {ContentWrapperStyles} from "./ContentWrapper.styles";
import {TStore, useGetAnimeListQuery, useGetSearchedListQuery} from "../../store";
import {useSelector} from "react-redux";


export const ContentWrapper = () => {
    const titleName = useSelector((state: TStore) => state.reducer.titleName)
    const {data: animeList, isLoading: animeListLoading} = useGetSearchedListQuery(titleName);

    console.log(titleName)

    if (!animeListLoading) {
        return (
            <ContentWrapperStyles>
                <AnimeList animePropType={animeList.data} />
            </ContentWrapperStyles>
        )
    }

    return (
        <ContentWrapperStyles>
            <button>asdasd</button>
        </ContentWrapperStyles>
    )
}