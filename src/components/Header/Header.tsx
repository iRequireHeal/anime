import React from "react";
import {StyledNav} from "./StyledHeader";
import {StyledLogo} from "./StyledHeader";
import {Search} from "../Search/Search";

export const Header = () => {
    return (
        <StyledNav>
            <StyledLogo>Hentai-chan</StyledLogo>
            <Search/>
        </StyledNav>
    )
}