import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './FctClientModal.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import 'date-fns';

//table import
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ProduitModal from './ProduitModal.js';


//table parametre
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  //date
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  table: {
    minWidth: 700,
  },
}));



export default function FctClientModal({setFctClient, fctClient}) {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  //date
  const [selectedDate, setSelectedDate] = React.useState(new Date(''));



  //hook modal
  const [numFacture, setNumFacture] = useState("");
  const [typeFacture, setTypeFacture] = useState("");
  const [dateFacture, setDateFacture] = useState(new Date());
  const [quantite, setQuantite] = useState("");
  const [dateEnvoi, setDateEnvoi] = useState(new Date());
  const [dateEcheance, setDateEcheance] = useState(new Date());
  const [numeroBc, setNumeroBc] = useState("");
  const [noteFacture, setNoteFacture] = useState("");
  const [remarqueFacture, setRemarqueFacture] = useState("");
  const [prixHt, setPrixHt] = useState("");
  const [prixRemise, setPrixRemise] = useState("");
  const [prixFrais, setPrixFrais] = useState("");
  const [prixTva, setPrixTva] = useState("");
  const [prixTimbre, setPrixTimbre] = useState("");
  const [prixTtc, setPrixTtc] = useState("");
  const [produit, setProduit] = useState([]);


      //get data from modal and passed to facture list list
    const numFactureHandler = (e) => {
      setNumFacture(e.target.value)
    };
    const typeFactureHandler = (e) => {
      setTypeFacture(e.target.value)
    };
    const dateFactureHandler = (e) => {
      setDateFacture(e.target.value)
    };
    const quantiteHandler = (e) => {
        setQuantite(e.target.value)
      };
    const dateEnvoiHandler = (e) => {
      setDateEnvoi(e.target.value)
    };
    const dateEcheanceHandler = (e) => {
      setDateEcheance(e.target.value)
    };
    const numeroBcHandler = (e) => {
      setNumeroBc(e.target.value)
    };
    const noteFactureHandler = (e) => {
        setNoteFacture(e.target.value)
      };
      const remarqueFactureHandler = (e) => {
        setRemarqueFacture(e.target.value)
      };
      const prixHtHandler = (e) => {
        setPrixHt(e.target.value)
      };
      const prixRemiseHandler = (e) => {
        setPrixRemise(e.target.value)
      };
      const prixFraisHandler = (e) => {
        setPrixFrais(e.target.value)
      };
      const prixTvaHandler = (e) => {
        setPrixTva(e.target.value)
      };
      const prixTimbreHandler = (e) => {
        setPrixTimbre(e.target.value)
      };
      const prixTtcHandler = (e) => {
        setPrixTtc(e.target.value)
      };

     const addFctClient = (e) => {
      e.preventDefault()
      var newFctClient = {numero_de_facture: numFacture, type_facture: typeFacture, date_de_facture: dateFacture, quantite: quantite, date_envoi: dateEnvoi, date_echeance: dateEcheance, numero_bc: numeroBc, note: noteFacture, remarque: remarqueFacture, prix_ht: prixHt, prix_remise: prixRemise, prix_frais: prixFrais, prix_tva: prixTva, prix_timbre: prixTimbre, prix_ttc: prixTtc}
      const requestOptions = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newFctClient)
      }
      //fetch Post Data
      fetch("http://localhost:5000/facture", requestOptions)
      .then(response => response.json())
      .then((res) => {
        console.log(res)
        setFctClient([...fctClient,res.fctClient], (""))
      })
      setOpen(false);
    }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const body = (
    <div style={{modalStyle, height: '750px', width: '1400px', marginTop: '2vh', marginLeft: '6vw', borderRadius: '10px', border: 'none', boxShadow: 'black'}} className={classes.paper}>
      <h2 style={{paddingTop: '5px', paddingLeft: '30px', paddingBottom: '-90px'}} id="simple-modal-title">Facture</h2> 
      <div className="typefct-ttcfct">
      <div className="fctclient-info-1">
          <div className="typefct-datefct">
      <FormControl style={{height: '40px', width: '200px'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Type de facture</InputLabel>
          <Select
            native
            value={setTypeFacture}
            onChange={typeFactureHandler}
            label="Type de facture"
            inputProps={{
              name: 'Type de facture',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>{typeFacture}</option>
          </Select>
        </FormControl>  
        <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Date de la facture"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       </form>
       </div>
       <div className="nfct-clientfct">
         <input type="text"
                        className="num-fctclient"
                        id="num-fctclient"
                        placeholder="N° de facture"
                        onChange={numFactureHandler}
                        value={numFacture}
        /> 
        <FormControl style={{height: '30px', width: '420px', marginLeft: '0px'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Client</InputLabel>
          <Select
            native
            value={age}
            label="Client"
            inputProps={{
              name: 'client',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Les Clients</option>
          </Select>
        </FormControl> 
        </div>
        </div> 
        <div className="fctclient-info-2">
       <div className="envoi-echeance">
      <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Date d'envoi"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       </form>

        <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Date d'écheance"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       </form>
       </div>
       <div className="bc-note">
        <input type="text"
                        className="numBC"
                        id="numBc"
                        placeholder="numéro de bon de commande"
                        onChange={numeroBcHandler}
                        value={numeroBc}
                        style={{height: '50px', width: '210px', border: '2px solid rgb(192, 190, 190)', borderRadius: '5px', marginTop: '10px', paddingLeft: '10px'}}
        /> 
        <input type="text"
                        className="notefctclient"
                        id="notefctclient"
                        placeholder="note"
                        onChange={noteFactureHandler}
                        value={noteFacture}
        /> 
        </div>
        </div>  
        <div className="fctclient-info-3">
        <div className="ht-ttc">
        <div className="ht-totalht">
        <input type="text"
                        className="prixht"
                        id="prixht"
                        placeholder="Prix HT"
                        onChange={prixHtHandler}
                        value={prixHt}
                        style={{height: '40px', width: '200px', border: '2px solid rgb(192, 190, 190)', borderRadius: '5px', marginTop: '5px', paddingLeft: '10px'}}
        /> 
                <input type="text"
                        className="remise"
                        id="remise"
                        placeholder="Remise"
                        onChange={prixRemiseHandler}
                        value={prixRemise}
                        style={{height: '40px', width: '200px', border: '2px solid rgb(192, 190, 190)', borderRadius: '5px', marginTop: '5px', paddingLeft: '10px'}}

        /> 
                <input type="text"
                        className="frais"
                        id="frais"
                        placeholder="Frais de services"
                        onChange={prixFraisHandler}
                        value={prixFrais}
                        style={{height: '40px', width: '200px', border: '2px solid rgb(192, 190, 190)', borderRadius: '5px', marginTop: '5px', paddingLeft: '10px'}}

        /> 
                <input type="text"
                        className="Totalht"
                        id="totalht"
                        placeholder="Total HT"
                        onChange={noteFactureHandler}
                        value={noteFacture}
                        style={{height: '40px', width: '200px', border: '2px solid rgb(192, 190, 190)', borderRadius: '5px', marginTop: '5px', paddingLeft: '10px'}}

        /> 
        </div>
        <div className="tva-ttc">
                <input type="text"
                        className="tva"
                        id="tva"
                        placeholder="TVA"
                        onChange={prixTvaHandler}
                        value={prixTva}
                        style={{height: '40px', width: '200px', border: '2px solid rgb(192, 190, 190)', borderRadius: '5px', marginTop: '5px', paddingLeft: '10px'}}

        /> 
                <input type="text"
                        className="timbre"
                        id="timbre"
                        placeholder="Timbre"
                        onChange={prixTimbreHandler}
                        value={prixTimbre}
                        style={{height: '40px', width: '200px', border: '2px solid rgb(192, 190, 190)', borderRadius: '5px', marginTop: '5px', paddingLeft: '10px'}}

        /> 
                <input type="text"
                        className="ttc"
                        id="ttc"
                        placeholder="Total TTC"
                        onChange={prixTtcHandler}
                        value={prixTtc}
                        style={{height: '40px', width: '200px', border: '2px solid rgb(192, 190, 190)', borderRadius: '5px', marginTop: '5px', paddingLeft: '10px'}}

        /> 
        </div>
        </div>
        </div>
        </div>
        <div className="prodact-modal">
        <ProduitModal produit={produit} setProduit={setProduit} />
        </div>
        <div className="prodact-table">
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }} align="left">Code</StyledTableCell>
            <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }} align="left">Designation</StyledTableCell>
            <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }} align="left">PU</StyledTableCell>
            <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }} align="left">Quantité</StyledTableCell>
            <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }} align="left">PT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produit.map((item) => (
            <StyledTableRow>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.nom_du_produit}
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.discription}
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.prix_achat} DZD
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.prix_vente}
                          </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

      <div className="btn-user-modal">
      <button className='user-enregistrer' onClick={addFctClient} onSubmit={addFctClient}>Enregistrer</button>
      <button className='user-annuler' onClick={handleClose}>Annuler</button>
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ width: '100%', height: '60px', backgroundColor: 'rgb(67, 140, 245)'}}>
      <button style={{ height: '40px', width: '100px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'transparent', color: 'white', marginBottom: '10px', marginTop: '10px', marginLeft: '15px'}} type="button" onClick={handleOpen}>
        AJOUTER
      </button>

      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
