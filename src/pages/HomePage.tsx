import {Header} from "../components/Header/Header";
import {ContentWrapper} from "../components/Content/ContentWrapper";
import {Footer} from "../components/Footer/Footer";

export const HomePage = () => {

    return (
        <div>
            <Header isSearch={true}/>
            <ContentWrapper/>
            <Footer/>
        </div>
    );
};

