import {AnimeList} from "../AnimeList/AnimeList";
import {StyledContentWrapper} from "./StyledContentWrapper";
import {useGetAnimeListQuery} from "../../store";

export const ContentWrapper = () => {
    const {data: animeList, isLoading: animeListLoading} = useGetAnimeListQuery('');

    const gets = async () => {
        await console.log(animeList.data)
    }

    if (!animeListLoading) {
        return (
            <StyledContentWrapper>
                <AnimeList animePropType={animeList.data} />
            </StyledContentWrapper>
        )
    }

    return (
        <StyledContentWrapper>
            <button onClick={gets}>asdasd</button>
        </StyledContentWrapper>
    )
}