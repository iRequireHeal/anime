import {FlippingButtonWrapper, FlippingButton} from "./FlippingButtons.styles"
import {useDispatch} from "react-redux";
import {nextPage, firstPage, prevPage} from "../../store/modules/Pages/PageSlice";

export const FlippingButtons = () => {
    const dispatch = useDispatch()

    const handleNext = () => {
        dispatch(nextPage())
    }
    const handlePrev = () => {
        dispatch(prevPage())
    }
    const handleFirst = () => {
        dispatch(firstPage())
    }

    return (
        <FlippingButtonWrapper>
            <FlippingButton onClick={handlePrev}>previous</FlippingButton>
            <FlippingButton onClick={handleFirst}>first</FlippingButton>
            <FlippingButton onClick={handleNext}>next</FlippingButton>
        </FlippingButtonWrapper>
    )
}