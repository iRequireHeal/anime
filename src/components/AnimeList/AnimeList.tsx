import {AnimeListStyles} from "./AnimeList.styles";
import {animeType} from "../../store/types/types";
import {AnimePrev} from "../AnimePrev/AnimePrev";
import {useGetAnimeListQuery} from "../../store";

type  animProp = {
    animePropType: Array<animeType>
}

export const AnimeList = ({animePropType}: animProp) => {

    return (
        <AnimeListStyles>
            {animePropType.map((item) => <AnimePrev key={item.id} animTypes={item} />)}
        </AnimeListStyles>
    )
}