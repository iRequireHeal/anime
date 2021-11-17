import {Link} from "react-router-dom";
import {FlippingButtonWrapper, FlippingButton} from "./FlippingButton.styles"

export const FlippingButtons = () => {
    return(
        <FlippingButtonWrapper>
            <FlippingButton to="anime/">Kokoko</FlippingButton>
        </FlippingButtonWrapper>
    )
}