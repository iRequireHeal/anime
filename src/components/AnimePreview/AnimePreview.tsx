import {animeType} from "../../store/types/types";
import {AnimePreviewStyles, AnimeTitle, AnimeImage, Description, AgeRating, DescriptionWrapper, Title} from './AnimePreview.styles'

type animePreview = {
    animTypes: animeType
}

export const AnimePreview = ({animTypes}: animePreview ) => {
    return (
        <AnimePreviewStyles>
            <AnimeImage src={`https://media.kitsu.io/anime/poster_images/${animTypes.id}/small.jpg`} alt=""/>
            <DescriptionWrapper>
                <Title>
                    <AgeRating>
                        {animTypes.attributes.ageRating}
                    </AgeRating>
                    <AnimeTitle to={`/anime/${animTypes.id}`}>{animTypes.attributes.canonicalTitle}</AnimeTitle>
                </Title>
                <Description>
                    {animTypes.attributes.description}
                </Description>
            </DescriptionWrapper>
        </AnimePreviewStyles>
    )
}