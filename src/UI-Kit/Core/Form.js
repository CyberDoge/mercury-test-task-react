import React from "react";
import classJoiner from "../../service/ComponentService";
export default function Form(props){
    const mutatedProps = {};
    for(const property in props){
        if(property === 'className'){
            mutatedProps[property] = classJoiner(props[property], "form central-block__content")
        }
    }

    return (
        <form
        {...mutatedProps}>
                {mutatedProps.children}
        </form>
    )

}