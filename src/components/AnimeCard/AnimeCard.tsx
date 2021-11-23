import {
    AnimeTitle, Attribute,
    AttributeName,
    AttributesWrapper,
    Description,
    DescriptionWrapper
} from "../AnimePreview/AnimePreview.styles";
import {animeType} from "../../store/types/types";

type Props = {
    fullInfo: animeType
}

export const AnimeCard = ({fullInfo}:Props) => {
    return(
        <DescriptionWrapper>
            <AnimeTitle to={`/anime/${fullInfo.id}`}>{fullInfo.attributes.canonicalTitle}</AnimeTitle>
            <Description>{fullInfo.attributes.description}</Description>
            <AttributesWrapper>
                <AttributeName>Age rating</AttributeName>
                <Attribute>{fullInfo.attributes.ageRating}</Attribute>
            </AttributesWrapper>
            <AttributesWrapper>
                <AttributeName>Episode count</AttributeName>
                <Attribute>{fullInfo.attributes.episodeCount}</Attribute>
            </AttributesWrapper>
            <AttributesWrapper>
                <AttributeName>Show type</AttributeName>
                <Attribute>{fullInfo.attributes.showType}</Attribute>
            </AttributesWrapper>
            <AttributesWrapper>
                <AttributeName>status</AttributeName>
                <Attribute>{fullInfo.attributes.status}</Attribute>
            </AttributesWrapper>
            <AttributesWrapper>
                <AttributeName>Popularity rank</AttributeName>
                <Attribute>{fullInfo.attributes.popularityRank}</Attribute>
            </AttributesWrapper>
        </DescriptionWrapper>
    )
}

