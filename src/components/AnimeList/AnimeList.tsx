import {AnimeListStyles} from "./AnimeList.styles";
import {animeType} from "../../store/types/types";
import {AnimePrev} from "../AnimePrev/AnimePrev";

type  animProp = {
    animePropType: Array<animeType>
}

export const AnimeList = ({animePropType}: animProp) => {
    console.log(animePropType)

    return (
        <AnimeListStyles>
            {animePropType.map((item) => <AnimePrev key={item.id} animTypes={item} />)}
        </AnimeListStyles>
    )
}