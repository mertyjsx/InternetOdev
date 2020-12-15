
import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"


export default function Home() {
    return (
        <div>
   
            <div className="center column full-h">
            <h1>
Internet Programcılığı ödevi

                </h1>

<div className="center row ">
<Link to="form" className="margin40"> 
<Button variant="contained" color="primary">Form ödevi</Button>
</Link>
<Link to="background" className="margin40">
<Button  variant="contained" color="secondary">Arka plan rengi değiştirme</Button>
</Link>

</div>
               
               

            </div>
        </div>
    )
}
