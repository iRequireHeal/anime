import {AnimeListStyles} from "../AnimeList/AnimeList.styles";
import {TStore, useGetSearchedListQuery} from "../../store";
import {Message} from "../Message/Message";
import {animeType} from "../../store/types/types";
import {AnimePreview} from "../AnimePreview/AnimePreview";
import {PropsT} from "../../store/types/types";
import {useSelector} from "react-redux";

export const SearchedList = ({name}: PropsT) => {
    const page = useSelector((state: TStore) => state.currentPage.page)
    const genreData: PropsT = {
        name: name,
        page: page,
    }
    const {data, isLoading, isError} = useGetSearchedListQuery(genreData)

    if (isLoading)
        return (
            <Message message={"Loading..."}/>
        )

    return (
        <AnimeListStyles>
            {data.data.map((item: animeType) => <AnimePreview key={item.id} animTypes={item}/>)}
        </AnimeListStyles>
    )
}