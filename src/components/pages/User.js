import React from 'react';
import UserModal from '../UserModal.js';
import './User.css';
import { DataGrid } from '@material-ui/data-grid';





const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: "Nom de l'utillisateur", headerName: "Nom de l'utillisateur", width: 200 },
    { field: "Adresse e-mail", headerName: "Adresse e-mail", width: 300 },
    { field: "Entreprise", headerName: "Entreprise", width: 200 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
    { field: "Role", headerName: "Role", width: 100 },
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
  
  const user = () => {
     
    return (
        <>
        <div className='user-page'>
            <h2 className='user-titre'>Users</h2>
        </div>
        <div className='div-recherche-user'>
          <div>
          <input type="text-user"
                        className="user-Recherche"
                        id="REcherche"
                        placeholder="Recherche"
      />
      </div> 
      <div className='user-btns'>
      <button className='user-btn-recherche'>Recherche</button>
      <button className='user-btn-imprimer'>Imprimer</button>
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

export default user;
