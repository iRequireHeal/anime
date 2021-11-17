import {AnimeList} from "../AnimeList/AnimeList";
import {ContentWrapperStyles} from "./ContentWrapper.styles";
import {useGetAnimeListQuery} from "../../store";

export const ContentWrapper = () => {
    const {data: animeList, isLoading: animeListLoading} = useGetAnimeListQuery('');

    const gets = async () => {
        await console.log(animeList.data)
    }

    if (!animeListLoading) {
        return (
            <ContentWrapperStyles>
                <AnimeList animePropType={animeList.data} />
            </ContentWrapperStyles>
        )
    }

    return (
        <ContentWrapperStyles>
            <button onClick={gets}>asdasd</button>
        </ContentWrapperStyles>
    )
}