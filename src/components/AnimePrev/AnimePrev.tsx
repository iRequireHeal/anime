import {animeType, categoriesType} from "../../store/types/types";
import {AnimePrevStyles, AnimeTitle, AnimeImage, Description, AgeRating, DescriptionWrapper, Title} from './AnimePrev.styles'
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getId, selectId} from "../../store/modules/СurrentAnime/currentAnimeSlice";

type animePrev = {
    animTypes: animeType
}

export const AnimePrev = ({animTypes}: animePrev ) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setId = () => {
        dispatch(getId(animTypes.id));
        navigate('/anime', {state: animTypes});
    }

    return (
        <AnimePrevStyles>
            <AnimeImage src={`https://media.kitsu.io/anime/poster_images/${animTypes.id}/small.jpg`} alt=""/>
            <DescriptionWrapper>
                <Title>
                    <AgeRating>
                        {animTypes.attributes.ageRating}
                    </AgeRating>
                    <AnimeTitle onClick={setId}>{animTypes.attributes.canonicalTitle}</AnimeTitle>
                </Title>
                <Description>
                    {animTypes.attributes.description}
                </Description>
            </DescriptionWrapper>
        </AnimePrevStyles>
    )
}