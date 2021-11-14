import {AnimePrev} from "../AnimePrev/AnimePrev";
import {StyledContentWrapper} from "./StyledContentWrapper";
import {useGetAnimeListQuery} from "../../store";


export const ContentWrapper = () => {
    const {data, isLoading, isError} = useGetAnimeListQuery(null);

    const gets = async () => {
        await console.log(data.data)
    }

    if(!isLoading) {
        return data.data.map((item: object) => <AnimePrev anime={item}/>)
    }


    return (
        <StyledContentWrapper>
            <button onClick={gets}>asdasd</button>
        </StyledContentWrapper>
    )
}