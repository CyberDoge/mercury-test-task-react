import React from 'react'
import FormBlock from 'components/centralBlock/formBlock/FormBlock';
import 'components/centralBlock/CentralBlock.css'
export default class CentralBlock extends React.Component {
    render() {
        return(
            <div className="central-block">
                <FormBlock />
            </div>
        )
    }
}