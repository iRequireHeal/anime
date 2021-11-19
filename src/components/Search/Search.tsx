import React, {ChangeEvent, useEffect, useState} from "react";
import {SearchInput} from "./StyledSearch";
import {useDispatch} from "react-redux";
import {setInput} from "../../store/modules/Search/searchSlice";

export const Search = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 35) {
            setValue(e.target.value)
        }
    }

    useEffect(()=>{
        dispatch(setInput(value))
    })

    return (
        <>
            <SearchInput placeholder='Введите название' value={value} onChange={handleChange}/>
        </>
    )
}