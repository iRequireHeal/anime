import React, {ChangeEvent, useState} from "react";
import {SearchInput} from "./StyledSearch";
import {useGetAnimeListQuery} from "../../store";

export const Search = () => {
    const [value, setValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length<35) setValue(e.target.value)
    }

    return (
        <>
        <SearchInput placeholder='Введите название' value={value} onChange={handleChange} />
        </>
    )
}