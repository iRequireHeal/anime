import React, {ChangeEvent, useEffect, useState} from "react";
import {SearchInput} from "./StyledSearch";
import {useDispatch} from "react-redux";
import {getInput} from "../../store/modules/Search/searchSlice";

export const Search = () => {
    const [value, setValue] = useState<string>()
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 35) {
            setValue(e.target.value)
        }
    }

    useEffect(() => {
        dispatch(getInput(value));
    }, [value, dispatch]);

    return (
        <>
            <SearchInput placeholder='Введите название' value={value} onChange={handleChange}/>
        </>
    )
}