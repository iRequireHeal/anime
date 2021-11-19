import {AnimeListStyles} from "./AnimeList.styles";
import {animeType} from "../../store/types/types";
import {AnimePreview} from "../AnimePreview/AnimePreview";

type  animProp = {
    animePropType: Array<animeType>
}

export const AnimeList = ({animePropType}: animProp) => {

    return (
        <AnimeListStyles>
            {animePropType.map((item) => <AnimePreview key={item.id} animTypes={item} />)}
        </AnimeListStyles>
    )
}