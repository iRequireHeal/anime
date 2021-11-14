import {animeType} from "../../store/types/types";
import {StyledAnimePrev} from './StyledAnimePrev'

type animePrev = {
    animTypes: animeType
}

export const AnimePrev = ({animTypes} : animePrev) => {
    console.log(animTypes)
    return (
        <StyledAnimePrev>
            <p>id - {animTypes.id} </p>
            <p>Title - {animTypes.attributes.titles.en}</p>
            <img src={`https://media.kitsu.io/anime/poster_images/${animTypes.id}/small.jpg`} alt=""/>
        </StyledAnimePrev>
    )
}