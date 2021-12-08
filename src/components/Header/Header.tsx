import React from "react";
import {StyledNav, StyledLogo, StyledGenres} from "./Header.styles";
import {Search} from "../Search/Search";
import {useDispatch} from "react-redux";
import {setPage} from "../../store/modules/Pages/PageSlice";

type Props = {
    isSearch: boolean
}

export const Header = ({isSearch}: Props) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setPage(0))
    }

    if (isSearch) return (
        <StyledNav>
            <div>
                <StyledLogo to="/" onClick={handleClick} >Anime-chan</StyledLogo>
                <StyledGenres to="/genres">genres</StyledGenres>
                <StyledGenres to="/favourite">favourite</StyledGenres>
            </div>
            <Search/>
        </StyledNav>
    )

    return (
        <StyledNav>
            <div >
                <StyledLogo to="/" onClick={handleClick} >Anime-chan</StyledLogo>
                <StyledGenres to="/genres">genres</StyledGenres>
                <StyledGenres to="/favourite">favourite</StyledGenres>
            </div>
            <div style={{width: "316px"}}/>
        </StyledNav>
    )
}