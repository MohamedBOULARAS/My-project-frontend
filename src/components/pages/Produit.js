import React, { useState, useEffect, useStylesuseS } from 'react';
import ProduitModal from '../ProduitModal.js';
import './Produit.css';
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



const Produit = () => {
  const [myCookie, setMyCookie] = useState(cookie.loadAll())
  const classes = useStyles();
  // get prodact
  const [produit, setProduit] = useState([])
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
    rowsPerPage - Math.min(rowsPerPage, produit.length - page * rowsPerPage);

  //fetch get All Data
  const getProduitData = async () => {
    try {
      const data = await axios.get("http://localhost:5000/produit") 
      console.log(data.data)
      setProduit(data.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProduitData()
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
    axios.delete(`http://localhost:5000/produit/${id}`, {
      headers: {
        'Authorization': myCookie.token
      }
    })
      .then(res => {
        console.log(res)
        setProduit(produit.filter(item => item._id != id))
      })
      .catch(err => console.log(err))

  }

  const updateData = async (id) => {
    axios.put('http://localhost:5000/produit', {
      headers: {
        'Authorization': myCookie.token
      }
    })
    .then(response => response.json())
    .then((res) => {
      console.log(res)
      var newArray = produit
      var index = newArray.findIndex(x => x.id == id)
      newArray[index] = res.produit
      setProduit([...newArray])
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
      <div className='produit-page'>
        <div className='sidebar'>
          <SidBar />
        </div>
        <div className='produit-cntt'>
          <h2 className='produit-titre'>Produits et Services</h2>
          <div className='produit-div-recherche'>
            <input type="text"
              className="produit-Recherche"
              id="REcherche"
              placeholder="Recherche"
              onChange={(e) => {
                setRecherche(e.target.value);
              }}
            />
            <div className='produit-btns'>
              <button className='produit-btn-recherche'>Recherche</button>
              <button className='produit-btn-imprimer'>Imprimer</button>
            </div>
          </div>

          <div>
            <ProduitModal produit={produit} setProduit={setProduit} />
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
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Produit</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Description</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Prix achat</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Prix vente</StyledTableCell>
                    <StyledTableCell style={{ fontSize: '17px', backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                  {produit.filter(item => { //recherche
                    if (recherche == "") {
                      return item
                    } else if (
                        item.nom_du_produit.toLowerCase().includes(recherche.toLowerCase())
                     || item.prix_achat?.toString().toLowerCase().includes(recherche.toLowerCase())
                     || item.prix_vente?.toString().toLowerCase().includes(recherche.toLowerCase())) {
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
                            {item.code_produit}
                          </StyledTableCell>
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
                count={produit.length}
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

export default Produit;