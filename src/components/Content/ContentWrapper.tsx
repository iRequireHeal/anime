import {AnimeList} from "../AnimeList/AnimeList";
import {StyledContentWrapper} from "./StyledContentWrapper";
import {useGetAnimeListQuery, useGetCategoriesQuery} from "../../store";

export const ContentWrapper = () => {
    const {data, isLoading, isError} = useGetAnimeListQuery(null);

    const gets = async () => {
        await console.log(data.data)
    }

    if (!isLoading) {
        return (
            <StyledContentWrapper>
                <AnimeList animePropType={data.data}/>
            </StyledContentWrapper>
        )
    }

    return (
        <StyledContentWrapper>
            <button onClick={gets}>asdasd</button>
        </StyledContentWrapper>
    )
}