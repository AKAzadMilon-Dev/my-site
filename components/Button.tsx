import {FC} from "react"
import styles from "./button.module.css"

interface Button {
    variant: string
}

const Button: FC<Button> = ({variant})=>{
    return <div className={styles.item}>Click</div>
}

export default Button