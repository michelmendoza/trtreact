import React from "react"
import { filhosComProps } from '../utils/utils'

export default props =>
<div>

    <h1>Familia</h1>

    { filhosComProps (props) }


    {/* {React.Children.map(props.children, componenteFilho =>{
        return React.cloneElement(componenteFilho, { ...props })
    })} */}

    {/* {React.cloneElement(props.children, { ...props })} */}
        {/* { sobrenome: props.sobrenome }   */}
    
    {/* {props.children} */}

</div>