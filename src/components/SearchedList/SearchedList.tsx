import {AnimeListStyles} from "../AnimeList/AnimeList.styles";
import {useGetSearchedListQuery} from "../../store";
import {Message} from "../Message/Message";
import {animeType} from "../../store/types/types";
import {AnimePreview} from "../AnimePreview/AnimePreview";

type Props = {
    titleName: string
}

export const SearchedList = ({titleName}: Props) => {
    const {data, isLoading, isError} = useGetSearchedListQuery(titleName)

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