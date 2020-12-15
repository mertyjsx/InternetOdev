import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link } from "react-router-dom"

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('white');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <div className={`background-container ${value}`}>
            <Link to="/">
        <ArrowBackIosIcon  style={{position:"absolute",left:70,top:30,fontSize:70,color:"black"}}></ArrowBackIosIcon>
        </Link>
    <FormControl component="fieldset">
      <h2 className="title">RENK SECİNİZ</h2>
      <RadioGroup  name="renk" value={value} onChange={handleChange}>
        <FormControlLabel value="kırmızı" control={<Radio />} label="Kırmızı" />
        <FormControlLabel value="mavi" control={<Radio />} label="Mavi" />
        <FormControlLabel value="sarı" control={<Radio />} label="Sarı" />
        <FormControlLabel value="yesil" control={<Radio />} label="Yeşil" />
     
      </RadioGroup>
    </FormControl>
    </div>
  );
}