import {AnimeList} from "../AnimeList/AnimeList";
import {TStore} from "../../store";
import {useSelector} from "react-redux";
import {SearchedList} from "../SearchedList/SearchedList";
import {FlippingButtons} from "../FlippingButtons/FlippingButtons";

export const ContentWrapper = () => {
    const titleName = useSelector((state: TStore) => state.reducer.titleName)

    if (!titleName)
        return (
            <>
                <FlippingButtons/>
                <AnimeList/>
                <FlippingButtons/>
            </>
        )

    return (
        <>
            <FlippingButtons/>
            <SearchedList name={titleName} page={0}/>
            <FlippingButtons/>
        </>
    )
}