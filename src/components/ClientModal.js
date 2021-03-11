import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './ClientModal.css'
import cookie from 'react-cookies'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
}));

export default function ClientModal({setClient,client}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  //cookie
  const [myCookie, setMyCookie] = useState(cookie.loadAll())


  //hook modal
  const [codeClient, setCodeClient] = useState("");
  const [raisonSocial, setRaisonSocial] = useState("");
  const [nomClient, setNomClient] = useState("");
  const [prenomClient, setPrenomClient] = useState("");
  const [emailClient, setEmailClient] = useState("");
  const [tellClient, setTellClient] = useState("");
  const [adresseClient, setAdresseClient] = useState("");
  const [activiteClient, setActiviteClient] = useState("");
  const [nifClient, setNifClient] = useState("");
  const [nisClient, setNisClient] = useState("");
  const [ribClient, setRibClient] = useState("");
  const [rcClient, setRcClient] = useState("");
  const [noteClient, setNoteClient] = useState("");

    //get data from modal and passed to client list
    const codeClientHandler = (e) => {
      setCodeClient(e.target.value)
    };
    const raisonRaisonSocialHandler = (e) => {
      setRaisonSocial(e.target.value)
    };
    const nomClientHandler = (e) => {
      setNomClient(e.target.value)
    };
    const prenomClientHandler = (e) => {
      setPrenomClient(e.target.value)
    };
    const emailClientHandler = (e) => {
      setEmailClient(e.target.value)
    };
    const tellClientHandler = (e) => {
      setTellClient(e.target.value)
    };
    const adresseClientHandler = (e) => {
      setAdresseClient(e.target.value)
    };
    const activiteClientHandler = (e) => {
      setActiviteClient(e.target.value)
    };
    const nifClientHandler = (e) => {
      setNifClient(e.target.value)
    };
    const nisClientHandler = (e) => {
      setNisClient(e.target.value)
    };
    const ribClientHandler = (e) => {
      setRibClient(e.target.value)
    };
    const rcClientHandler = (e) => {
      setRcClient(e.target.value)
    };
    const noteClientHandler = (e) => {
      setNoteClient(e.target.value)
    };

    const addClient = (e) => {
      e.preventDefault()
      var newClient = {code_client: codeClient, raison_social: raisonSocial, nom: nomClient, prenom: prenomClient, email: emailClient, tell: tellClient, adresse: adresseClient, activite: activiteClient, nif: nifClient, nis: nisClient, rib: ribClient, rc: rcClient, note: noteClient}
      const requestOptions = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': myCookie.token
          },
        body: JSON.stringify(newClient)
      }
      //fetch Post Data
      fetch("http://localhost:5000/client", requestOptions)
      .then(response => response.json())
      .then((res) => {
        console.log(res)
        setClient([...client,res.client], (""))
      })
      setOpen(false);
    }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="client-modal">
    <div  style={{modalStyle, height: '700px', width: '1200px', marginTop: '6vh', marginLeft: '13vw', borderRadius: '10px', border: 'none', boxShadow: 'black'}} className={classes.paper}>

      <h2 style={{paddingTop: '30px', paddingLeft: '30px'}} id="simple-modal-title">Client</h2>  
      <div className="contact">
      <input type="text"
                        className="code-client"
                        id="code_client"
                        placeholder="Code"
                        onChange={codeClientHandler}
                        value={codeClient}
      /> 
      <input type="text"
                        className="Raison-social"
                        id="raisonSocial"
                        placeholder="Raison social"
                        onChange={raisonRaisonSocialHandler}
                        value={raisonSocial}
      /> 
      <input type="text"
                        className="nom-du-client"
                        id="nomduclient"
                        placeholder="Nom du client "
                        onChange={nomClientHandler}
                        value={nomClient}
      /> 
       <input type="text"
                        className="prenom-du-client"
                        id="prenomduclient"
                        placeholder="Prenom du client"
                        onChange={prenomClientHandler}
                        value={prenomClient}

      /> 
       <input type="text"
                        className="email-client"
                        id="emailclient"
                        placeholder="e-mail"
                        onChange={emailClientHandler}
                        value={emailClient}
      /> 
      <input type="text"
                        className="tel-client"
                        id="emailclient"
                        placeholder="Numéro de téléphone"
                        onChange={tellClientHandler}
                        value={tellClient}
      /> 
      <input type="text"
                        className="adreese-client"
                        id="adresseclientr"
                        placeholder="Adresse du client "
                        onChange={adresseClientHandler}
                        value={adresseClient}

      /> 
      <input type="text"
                        className="activité-client"
                        id="activitéclientr"
                        placeholder="activité du client "
                        onChange={activiteClientHandler}
                        value={activiteClient}

      />
      </div>  
      <div className="info-fiscaux">
      <input type="text"
                        className="nif"
                        id="nif"
                        placeholder="NIF"
                        onChange={nifClientHandler}
                        value={nifClient}
                        
      />  
        <input type="text"
                        className="nis"
                        id="nis"
                        placeholder="NIS"
                        onChange={nisClientHandler}
                        value={nisClient}
      />  
         <input type="text"
                        className="rib"
                        id="rib"
                        placeholder="RIB"
                        onChange={ribClientHandler}
                        value={ribClient}
      /> 
        <input type="text"
                        className="rc"
                        id="rc"
                        placeholder="RC"
                        onChange={rcClientHandler}
                        value={rcClient}
      />
      </div>
      <div className="reseaux-socieaux">
      <input type="text"
                        className="client-fb"
                        id="note"
                        placeholder="FaceBook"
                        onChange={noteClientHandler}
                        value={noteClient}

      /> 
               <input type="text"
                        className="client-insta"
                        id="note"
                        placeholder="Instagram"
                        onChange={noteClientHandler}
                        value={noteClient}

      /> 
               <input type="text"
                        className="client-linkedin"
                        id="note"
                        placeholder="Linkedin"
                        onChange={noteClientHandler}
                        value={noteClient}

      /> 
      </div>
               <input type="text"
                        className="client-note"
                        id="note"
                        placeholder="Note"
                        onChange={noteClientHandler}
                        value={noteClient}

      />
      </div>
      <div className="btn-client-modal">
      <button className='client-enregistrer' onClick={addClient} onSubmit={addClient}>Enregistrer</button>
      <button className='client-annuler' onClick={handleClose}>Annuler</button>
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
