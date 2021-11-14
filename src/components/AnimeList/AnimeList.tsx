import {StyledAnimeList} from "./StyledAnimeList";
import {animeType} from "../../store/types/types";
import {AnimePrev} from "../AnimePrev/AnimePrev";

type  animProp = {
    animePropType: Array<animeType>
}

export const AnimeList = ({animePropType}: animProp) => {
    console.log(animePropType)
    return (
        <StyledAnimeList>
            {animePropType.map((item) => <AnimePrev animTypes={item} />)}
        </StyledAnimeList>
    )
}