import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

import Alert from "@material-ui/lab/Alert";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    height:"100%",
    padding: theme.spacing(4, 1, 3),
  },
}));


export default function SimpleModal({open,handleClose,state,cancel}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={`${classes.paper} responsive-w-100 relative`}>
        <CancelPresentationIcon onClick={cancel} className="cancel needHover" fontSize="large" color="error" ></CancelPresentationIcon>
    <h2>Adı: {state.Ad}</h2>
    <h2>Soyadı: {state.Soyadı}</h2>
    <h2>email: {state.email}</h2>
    <h2>Cinsiyet: {state.Cinsiyet}</h2>
    <h2>Doğum Tarihi: {state.date}</h2>
    <h2>Bölüm: {state.Bölüm}</h2>
    <h2>Şehir: {state.Sehir}</h2>
    <Alert style={{ marginTop: 50 }} severity="success">
             Kayıt Başarılı
            </Alert>
    </div>
  );



 
  return (
    <div className="test">
  
      <Modal
      style={{overflowY:"auto",alignSelf:"center",top:"10%",height:"80vh"}}
        open={open}
        onClose={handleClose}
        state={state}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      {body}
      </Modal>
    </div>
  );
}