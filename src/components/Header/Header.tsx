import React from "react";
import {StyledNav} from "./Header.styles";
import {StyledLogo} from "./Header.styles";
import {Search} from "../Search/Search";

type Props = {
    isSearch: boolean
}

export const Header = ({isSearch}:Props) => {
    if(isSearch) return (
        <StyledNav>
            <StyledLogo to="/">Anime-chan</StyledLogo>
            <Search />
        </StyledNav>
    )

    return (
        <StyledNav>
            <StyledLogo to="/">Anime-chan</StyledLogo>
            <div/>
        </StyledNav>
    )
}