import React, {useState, useEffect} from 'react';
import SimpleModal from '../Modal.js';
import './entreprise.css';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


 

const Entreprise = () => {
  const classes = useStyles();
  const [entreprise, setEntreprise] = useState([])
  const [recherche, setRecherche] = useState("")



const getEntrepriseData = async () => {
  try{
    const data = await axios.get("http://localhost:5000/entreprise")
    console.log(data.data)
    setEntreprise(data.data)
  }
  catch (e){
    console.log(e)
  }
}

useEffect(() => {
  getEntrepriseData()
}, [])
  

     
    return (
        <>
        <div className='entreprise-page'>
            <h2 className='entreprise-titre'>Entreprise</h2>
        </div>
        <div className='div-recherche'>
          <div>
          <input type="text"
                        className="entreprise-Recherche"
                        id="REcherche"
                        placeholder="Recherche"
                        onChange={(e) => {
                          setRecherche(e.target.value);
                        }}
          />
          </div> 
          <div className='entreprise-btns'>
            <button className='entreprise-btn-recherche'>Recherche</button>
            <button className='entreprise-btn-imprimer'>Imprimer</button>
          </div>     
        </div>
        <div>
            <SimpleModal />
        </div>
        <div>
        <TableContainer style={{backgroundColor: 'rgb(255, 255, 255)'}} component={Paper}>
      <Table style={{backgroundColor: 'rgb(255, 255, 255)'}} className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontSize: '17px', backgroundColor: 'rgba(97, 87, 211, 0.406)', color: 'black'}}>Entreprise</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
                {entreprise.filter(item => {
        if (recherche =="") {
          return item
        }
        else if (item.raison_social.toLowerCase().includes(recherche.toLowerCase())){
          return item
        }
      })
      .map(item =>{
        return (
          <StyledTableRow>
          <StyledTableCell style={{backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey'}} component="th" scope="row">
             {item.raison_social}
          </StyledTableCell>
        </StyledTableRow>
    );
      } )}

        </TableBody>
      </Table>
    </TableContainer>

    
          


        </div>        
    </>
    )
}

export default Entreprise;
