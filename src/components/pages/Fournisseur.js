import React, { useState, useEffect, useStylesuseS } from 'react';
import FournisseurModal from '../FournisseurModal.js';
import './Fournisseur.css';
import axios from 'axios';
import SidBar from '../Sidebar.js';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import NavFCT from '../NavBarFct.js'
import { Button } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import cookie from 'react-cookies'

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



const Fournisseur = () => {
  const [myCookie, setMyCookie] = useState(cookie.loadAll())
  const classes = useStyles();
  // get client
  const [fournisseur, setFournisseur] = useState([])
  const [open, setOpen] = React.useState(false);

  //recherche
  const [recherche, setRecherche] = useState("")
  //checkbox
  const [checkedItems, setChekedItems] = useState([]);
  const [checked, setChecked] = React.useState(true);
  // pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const HandleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const HandleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, fournisseur.length - page * rowsPerPage);

  //fetch get All Data
  const getFournisseurtData = async () => {
    try {
      const data = await axios.get("http://localhost:5000/fournisseur") 
      console.log(data.data)
      setFournisseur(data.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getFournisseurtData()
  }, [])

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleCheck = (e, index) => { //checkbox rows
    checkedItems.includes(index) ?
      setChekedItems(checkedItems.filter(item => item !== index))
      : setChekedItems([...checkedItems, index])
  }
  const deleteSelected = async (id) => { //delete client
    console.log(myCookie)
    axios.delete(`http://localhost:5000/fournisseur/${id}`, {
      headers: {
        'Authorization': myCookie.token
      }
    })
      .then(res => {
        console.log(res)
        setFournisseur(fournisseur.filter(item => item._id != id))
      })
      .catch(err => console.log(err))

  }

  const updateData = async (id) => {
    axios.put('http://localhost:5000/fournisseur', {
      headers: {
        'Authorization': myCookie.token
      }
    })
    .then(response => response.json())
    .then((res) => {
      console.log(res)
      var newArray = fournisseur
      var index = newArray.findIndex(x => x.id == id)
      newArray[index] = res.fournisseur
      setFournisseur([...newArray])
    })
    setOpen(false);
  }


const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


  return (
    <>
      <NavFCT />
      <div className='fournisseur-page'>
        <div className='sidebar'>
          <SidBar />
        </div>
        <div className='fournisseur-cntt'>
          <h2 className='fournisseur-titre'>Fournisseurs</h2>
          <div className='fournisseur-div-recherche'>
            <input type="text"
              className="fournisseur-Recherche"
              id="REcherche"
              placeholder="Recherche"
              onChange={(e) => {
                setRecherche(e.target.value);
              }}
            />
            <div className='fournisseur-btns'>
              <button className='fournisseur-btn-recherche'>Recherche</button>
              <button className='fournisseur-btn-imprimer'>Imprimer</button>
            </div>
          </div>

          <div>
            <FournisseurModal fournisseur={fournisseur} setFournisseur={setFournisseur} />
          </div>
          <div>
            <TableContainer style={{ backgroundColor: 'rgb(255, 255, 255)' }} component={Paper}>
              <Table style={{ backgroundColor: 'rgb(255, 255, 255)' }} className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <Checkbox
                      style={{ marginLeft: '15px', marginTop: '7px' }}
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Code</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Fournisseur</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>e-mail</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Tell</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Adresse</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                  {fournisseur.filter(item => { //recherche
                    if (recherche == "") {
                      return item
                    } else if (
                        item.raison_social.toLowerCase().includes(recherche.toLowerCase())
                     || item.tell?.toString().toLowerCase().includes(recherche.toLowerCase())
                     || item.email.toLowerCase().includes(recherche.toLowerCase()) 
                     || item.code_fournisseur?.toString().toLowerCase().includes(recherche.toLowerCase())
                     || item.nom.toLowerCase().includes(recherche.toLowerCase())) {
                      return item
                    }
                  })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) //pagination
                    .map((item) => { //création de tableau
                      return (
                        <StyledTableRow>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            <Checkbox
                              checked={checkedItems.includes(item._id)}
                              onChange={e => handleCheck(e, item._id)}
                              color="primary"
                              inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.code_fournisseur}
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.raison_social}
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.email}
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.tell}
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey' }} component="th" scope="row">
                            {item.adresse}
                          </StyledTableCell>
                          <StyledTableCell style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px medium grey'}} component="th" scope="row">
                            <Button  onClick={handleOpen}><i class="fas fa-pen"></i></Button>
                            <Button  onClick={() => deleteSelected(item._id)}><i  class="fas fa-trash-alt"></i></Button>
                          </StyledTableCell>
                          
                        </StyledTableRow>
                      );
                    })}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15, 25, 50, 100]}
                component="div"
                count={fournisseur.length}
                page={page}
                onChangePage={HandleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={HandleChangeRowsPerPage}
              />
            </TableContainer>

          </div>
        </div>
      </div>
    </>
  )
}

export default Fournisseur;