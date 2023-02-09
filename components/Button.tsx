import {FC} from "react"

interface Button {
    variant: string
}

const Button: FC<Button> = ({variant})=>{
    return <div>Click</div>
}

export default Button