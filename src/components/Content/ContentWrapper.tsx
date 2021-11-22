import {AnimeList} from "../AnimeList/AnimeList";
import {TStore} from "../../store";
import {useSelector} from "react-redux";
import {SearchedList} from "../SearchedList/SearchedList";

export const ContentWrapper = () => {
    const titleName = useSelector((state: TStore) => state.reducer.titleName)

    if(!titleName)
        return (
                <AnimeList/>
        )

    return (
            <SearchedList titleName={titleName}/>
    )
}