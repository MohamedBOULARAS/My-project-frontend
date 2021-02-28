import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
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

export default function UserModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">User</h2>
      <input type="text"
                        className="code-user"
                        id="codeUser"
                        placeholder="Code d'utillisateur"
      />      
      <input type="text"
                        className="nom-utilisateur"
                        id="nomutilisateur"
                        placeholder="Nom d'itullisateur"
      /> 
      <input type="text"
                        className="nom-utilisateur-nom"
                        id="nomutilisateur"
                        placeholder="Nom "
      /> 
       <input type="text"
                        className="nom-utilisateur-prenom"
                        id="prenomutilisateur"
                        placeholder="Prenom"
      /> 
       <input type="text"
                        className="email-utilisateur"
                        id="emailutilisateur"
                        placeholder="e-mail"
      /> 
      <input type="text"
                        className="password-utilisateur"
                        id="passwordutilisateur"
                        placeholder="Mot de passe "
      /> 
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Entreprise</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Entreprise"
          inputProps={{
            name: 'entreprise',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Les Entreprises</option>
        </Select>
      </FormControl> 


      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Role"
          inputProps={{
            name: 'role',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Super admin</option>
          <option value={20}>Admin</option>
          <option value={30}>User</option>
        </Select>
      </FormControl> 





      <button className='enregistrer'>Enregistrer</button>
      <button className='annuler'>Annuler</button>
    </div>
  );

  return (
    <div>
      <div style={{ width: '100%', height: '60px', backgroundColor: 'rgb(97, 87, 211)'}}>
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
