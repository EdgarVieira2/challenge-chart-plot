import React from 'react'
import Button from '@material-ui/core/Button'
import LineChart from './Chart'

//I chose the material-ui because it was better suited to the project


function Footer (){
    return(
        <div>
            <Button onClick={LineChart} variant="contained" color="primary" disableElevation>
                GENERATE CHART
            </Button>
        </div>
    )
}
export default Footer

