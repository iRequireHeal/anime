import {animeType} from "../../store/types/types";
import {StyledAnimePrev, AnimeTitle, AnimeImage, Description, AgeRating, DescriptionWrapper, Title} from './StyledAnimePrev'

type animePrev = {
    animTypes: animeType
}

export const AnimePrev = ({animTypes}: animePrev) => {
    return (
        <StyledAnimePrev>
            <AnimeImage src={`https://media.kitsu.io/anime/poster_images/${animTypes.id}/small.jpg`} alt=""/>

            <DescriptionWrapper>
                <Title>
                    <AgeRating>
                        {animTypes.attributes.ageRating}
                    </AgeRating>
                    <AnimeTitle href={'#'}>{animTypes.attributes.titles.en}</AnimeTitle>
                </Title>

                <Description>
                    {animTypes.attributes.description}
                </Description>
            </DescriptionWrapper>

        </StyledAnimePrev>
    )
}