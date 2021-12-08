import {FlippingPageWrapper, FlippingButton} from "./FlippingButtons.styles"
import {useDispatch} from "react-redux";
import {nextPage, prevPage} from "../../store/modules/Pages/PageSlice";
import React from "react";

export const FlippingButtons = () => {
    const dispatch = useDispatch()

    const handleNext = () => {
        dispatch(nextPage())
    }
    const handlePrev = () => {
        dispatch(prevPage())
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, choosenFunction: typeof handleNext) => {
        document!.querySelectorAll('button').forEach(item => item.disabled = true)
        choosenFunction()
        setTimeout(switchButton, 500)
    }

    const switchButton = () => {
        document!.querySelectorAll('button').forEach(item => item.disabled = !item.disabled)
    }

    return (
        <FlippingPageWrapper>
            <FlippingButton onClick={(e) => handleClick(e, handlePrev)}>previous</FlippingButton>
            <FlippingButton onClick={(e) => handleClick(e, handleNext)}>next</FlippingButton>
        </FlippingPageWrapper>
    )
}