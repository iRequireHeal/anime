import {MessageText} from "./Message.styles";

type Props = {
    message: string
}

export const Message = ({message}:Props) => {
    return(
        <MessageText>
            {message}
        </MessageText>
    )
}