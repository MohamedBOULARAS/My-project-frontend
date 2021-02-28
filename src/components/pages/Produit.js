import React from 'react';
import UserModal from '../UserModal.js';
import './Produit.css';
import { DataGrid } from '@material-ui/data-grid';





const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: "Nom du produit", headerName: "Nom du produit", width: 200 },
    { field: "Prix d'achat", headerName: "Prix d'achat", width: 300 },
    { field: "Prix de vente", headerName: "Prix de vente", width: 200 },
    { field: "Numéro de télléphone", headerName: "Numéro de télléphone", width: 200 },
    { field: "Utillisateur", headerName: "Utillisateur", width: 100 },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const produit = () => {
     
    return (
        <>
        <div className='produit-page'>
            <h2 className='produit-titre'>Produits</h2>
        </div>
        <div className='div-recherche-produit'>
          <div>
          <input type="text-produit"
                        className="produit-Recherche"
                        id="REcherche"
                        placeholder="Recherche"
      />
      </div> 
      <div className='produit-btns'>
      <button className='produit-btn-recherche'>Recherche</button>
      <button className='produit-btn-imprimer'>Imprimer</button>
        </div>     
      </div>
        <div>
            <UserModal />
        </div>
        <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={11} checkboxSelection />
    </div>        
    </>
    )
}

export default produit;
