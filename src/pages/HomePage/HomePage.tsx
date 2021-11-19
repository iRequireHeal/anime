import {Header} from "../../components/Header/Header";
import {ContentWrapper} from "../../components/Content/ContentWrapper";
import {FlippingButtons} from "../../components/FlippingButtons/FlippingButtons";

export const HomePage = () => {
    return(
        <div>
            <Header/>
            <FlippingButtons/>
            <ContentWrapper/>
            <FlippingButtons/>
        </div>
    )
}