import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  //hook modal
  const [nomEntreprise, setNomEntreprise] = useState("");
  const [typeEntreprise, setTypeEntreprise] = useState("");
  

  //get data from modal and passed to entrprise list
  const nomEntrepriseHandler = (e) => {
    setNomEntreprise(e.target.value)
  };
  const addEntreprise = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'post', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({raison_social: nomEntreprise})
    }
     fetch("http://localhost:5000/entreprise", requestOptions)
      .then(response => response.json())
      .then((res) => {
        console.log(res)
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
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Entreprise</h2>
      <input type="text"
                        className="nom-entreprise"
                        id="nomEntreprise"
                        placeholder="non d'Entreprise"
                        onChange={nomEntrepriseHandler}
                        value={nomEntreprise}
      />      
      <input type="text"
                        className="Type-entreprise"
                        id="typeEntreprise"
                        placeholder="non d'Entreprise"
      /> 
      <button className='enregistrer' onClick={addEntreprise}>Enregistrer</button>
      <button className='annuler' onClick={handleClose}>Annuler</button>
    </div>
  );

  return (
    <div>
      <div style={{ width: '100%', height: '60px', backgroundColor: 'rgb(44, 102, 249)'}}>
      <button style={{ height: '40px', width: '100px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'rgb(90, 79, 206)', color: 'white', marginBottom: '10px', marginTop: '10px', marginLeft: '15px'}} type="button" onClick={handleOpen}>
        Ajouter
      </button>
      <button style={{ height: '40px', width: '100px', borderRadius: '5px', border: 'none', backgroundColor: 'rgb(235, 191, 46)', color: 'white', marginBottom: '10px', marginTop: '10px', marginLeft: '15px'}} type="button">
        Modifier
      </button>
      <button style={{ height: '40px', width: '100px', borderRadius: '5px', border: 'none', backgroundColor: 'red', color: 'white', marginBottom: '10px', marginTop: '10px', marginLeft: '15px'}} type="button">
        Supprimer
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
