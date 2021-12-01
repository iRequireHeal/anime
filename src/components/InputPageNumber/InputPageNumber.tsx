import {PageInput, PageInputWrapper, PageButton} from "./Input.styles";
import {setPage} from "../../store/modules/Pages/PageSlice";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

export const InputPageNumber = () => {
    const [page, setPages] = useState(0);
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPages(Number(e.target.value))
    }

    const handleClick = () => {
        dispatch(setPage(page))
    }

    return (
        <PageInputWrapper>
            <PageInput type={"number"} min={0} max={1200} onChange={(event) => handleChange(event)}/>
            <PageButton onClick={handleClick}>set</PageButton>
        </PageInputWrapper>
    )
}