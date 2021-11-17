import React from "react";
import {StyledNav} from "./Header.styles";
import {StyledLogo} from "./Header.styles";
import {Search} from "../Search/Search";

export const Header = () => {
    return (
        <StyledNav>
            <StyledLogo>Anime-chan</StyledLogo>
            <Search/>
        </StyledNav>
    )
}