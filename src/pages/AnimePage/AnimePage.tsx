import {Header} from "../../components/Header/Header";
import {useGetAnimeQuery} from "../../store";

import {useLocation} from "react-router-dom";
import {
    AnimeImage,
    AnimeTitle,
    Description,
    DescriptionWrapper,
    AnimePrevStyles,
    AttributesWrapper,
    Attribute,
    AttributeName
} from "../../components/AnimePrev/AnimePrev.styles";

export const AnimePage = () => {
    const location = useLocation()


    return (
        <div>
            <Header/>
            <AnimePrevStyles>
                <AnimeImage src={`https://media.kitsu.io/anime/poster_images/${location.state.id}/small.jpg`} alt=""/>
                <DescriptionWrapper>
                    <AnimeTitle>{location.state.attributes.titles.en}</AnimeTitle>
                    <Description>{location.state.attributes.description}</Description>

                    <AttributesWrapper>
                        <AttributeName>Age rating</AttributeName>
                        <Attribute>{location.state.attributes.ageRating}</Attribute>
                    </AttributesWrapper>
                    <AttributesWrapper>
                        <AttributeName>Episode count</AttributeName>
                        <Attribute>{location.state.attributes.episodeCount}</Attribute>
                    </AttributesWrapper>
                    <AttributesWrapper>
                        <AttributeName>Show type</AttributeName>
                        <Attribute>{location.state.attributes.showType}</Attribute>
                    </AttributesWrapper>
                    <AttributesWrapper>
                        <AttributeName>status</AttributeName>
                        <Attribute>{location.state.attributes.status}</Attribute>
                    </AttributesWrapper>
                    <AttributesWrapper>
                        <AttributeName>Popularity rank</AttributeName>
                        <Attribute>{location.state.attributes.popularityRank}</Attribute>
                    </AttributesWrapper>
                </DescriptionWrapper>
            </AnimePrevStyles>
        </div>
    )
}