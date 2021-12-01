import React from "react";
import {StyledNav, StyledLogo, StyledGenres} from "./Header.styles";
import {Search} from "../Search/Search";

type Props = {
    isSearch: boolean
}

export const Header = ({isSearch}: Props) => {
    if (isSearch) return (
        <StyledNav>
            <div>
                <StyledLogo to="/">Anime-chan</StyledLogo>
                <StyledGenres to="/genres">genres</StyledGenres>
            </div>
            <Search/>
        </StyledNav>
    )

    return (
        <StyledNav>
            <StyledLogo to="/">Anime-chan</StyledLogo>
            <div/>
        </StyledNav>
    )
}