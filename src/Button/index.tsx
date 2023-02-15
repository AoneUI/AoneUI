import React ,{Component} from 'react'

interface ButtonProps {
    children?: string
}
const AButton:React.FunctionComponent<ButtonProps> = (props) =>{
    return (
        <button>
            {props.children ? props.children : ""}
        </button>
    )
}
export default AButton;