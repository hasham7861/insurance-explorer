import { MouseEventHandler } from "react"
import { Button } from "react-bootstrap"

interface IButtonProps{
    variant? : string
    onClickHandler: MouseEventHandler<HTMLButtonElement>
    message: string
}

export const ActionButton = ({variant, onClickHandler, message}: IButtonProps): JSX.Element =>{
    return <Button variant={variant} onClick={onClickHandler}> {message}</Button>
}