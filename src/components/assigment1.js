import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import DatePicker from "react-datepicker";
import Alert from "@material-ui/lab/Alert";
import "react-datepicker/dist/react-datepicker.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Modal from "../components/Modal";
import {Link} from "react-router-dom"

import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit">Orkun Mert Yiğit 1915101001</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [check, setcheck] = React.useState(false);
  const [error, seterror] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setstate] = React.useState({
    Ad: "",
    Soyadı: "",
    Parola: "",
    Cinsiyet: "",
    DoğumTarihi: "",
    Ülke: "",
    Şehir: "",
    Bölüm: "",
    email: "",
  });

  const Validate = () => {
    if (!state.Ad) {
      return "lütfen Adınızı giriniz !";
    }
    if (!state.Soyadı) {
      return "lütfen Soyadınızı giriniz !";
    }
    if (!state.Parola) {
      return "lütfen Parola giriniz !";
    }
    if (!state.Cinsiyet) {
      return "lütfen Cinsiyet seçiniz !";
    }

    if (!state.email) {
      return "lütfen email giriniz !";
    }
    if (!state.email.includes("@")) {
      return "lütfen email formatını düzgün giriniz !";
    }
    if (!state.date) {
      return "lütfen Doğum tarigi giriniz !";
    }

    if (!state.Ulke) {
      return "lütfen Ülke seçiniz !";
    }

    if (!state.Sehir) {
      return "lütfen Sehir seçiniz !";
    }

    if (!state.Bölüm) {
      return "lütfen Bölüm giriniz !";
    }

    if (!check) {
      return "sözleşmeyi kabul ediniz !";
    }

    return false;
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(Validate());
    if (Validate()) {
      seterror(Validate());
    } else {
      seterror(false);
      //openmodal
      setOpen(true);
    }
  };

  const handleChange = (name, val) => {
    setstate({ ...state, [name]: val });
  };
  console.log(state);
  console.log(check);

  return (
    <Container component="main" maxWidth="xs" className="relative">
        <Link to="/">
        <ArrowBackIosIcon  style={{position:"absolute",left:10,top:30,fontSize:40,color:"red"}}></ArrowBackIosIcon>
        </Link>

      <Modal open={open} cancel={() => setOpen(false)} state={state}></Modal>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Kayıt Ol
        </Typography>
        <form className={classes.form} noValidate>
          <div className="row">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Ad"
              label="Adı"
              name="Ad"
              autoComplete="Ad"
              autoFocus
              style={{ marginRight: 10 }}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Soyadı"
              label="Soyadı"
              name="Soyadı"
              autoComplete="Soyadı"
              autoFocus
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Parola"
            label="Parola"
            type="Parola"
            id="Parola"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            autoComplete="current-password"
          />

          <FormControl
            component="fieldset"
            style={{ marginTop: 20, marginLeft: 10 }}
          >
            <FormLabel component="legend">Cinsiyet</FormLabel>
            <RadioGroup
              name="Cinsiyet"
              className="row"
              value={state.Cinsiyet}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <FormControlLabel
                value="kadın"
                control={<Radio />}
                label="Kadın"
              />
              <FormControlLabel
                value="erkek"
                control={<Radio />}
                label="Erkek"
              />
            </RadioGroup>
          </FormControl>

          <FormControl
            style={{ marginTop: 10 }}
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Doğum yeri{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={state.Ulke}
              name="Ulke"
              fullWidth
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              label="Ülke"
            >
              <MenuItem value={"Türkiye"}>Türkiye</MenuItem>
              <MenuItem value={"Almanya"}>Almanya</MenuItem>
              <MenuItem value={"Amerika"}>Amerika</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{ marginTop: 10 }}
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Şehir
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={state.Sehir}
              name="Sehir"
              fullWidth
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              label="Şehir"
            >
              <MenuItem value={"Antalya"}>Antalya</MenuItem>
              <MenuItem value={"İstanbul"}>İstanbul</MenuItem>
              <MenuItem value={"Isparta"}>Isparta</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{ marginTop: 10 }}
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Bölüm
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={state.Bölüm}
              name="Bölüm"
              fullWidth
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              label="Bölüm"
            >
              <MenuItem value={"Bilgisayar Mühendisliği"}>
                Bilgisayar Mühendisliği
              </MenuItem>
              <MenuItem value={"Tıp"}>Tıp</MenuItem>
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            autoFocus
          />
          <div className="row center">
            <p style={{ marginRight: 20 }}>doğum tarihi :</p>

            <input
              type="date"
              className="date"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              name="date"
            ></input>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setcheck(e.target.checked)}
                value={check}
                color="primary"
              />
            }
            label="Sözleşmeyi Kabul Ediyorum"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onsubmit}
          >
            Kayıt Ol
          </Button>

          {error && (
            <Alert style={{ marginTop: 10 }} severity="error">
              {error}
            </Alert>
          )}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
