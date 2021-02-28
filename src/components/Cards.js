import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>INFINITE le meilleur logiciel de facturation sur le Web</h1>
            <h3 className='h3'>Facturer et gérer vos clients en toute facilité</h3>
            <div className="cards__container">
                <div className='cards__wrapper'>
                <i class="fas fa-upload"></i>
                <h2>Créer vos clients en toute simplicité</h2>
                <h4>Importer votre liste des <br></br> clients dans un fichier excel</h4>
                </div>
                <div className='cards__wrapper'>
                <i class="fas fa-share-square"></i>
                <h2>Envoyer facilement vos facture</h2>
                <h4>Envoyer vos facture <br></br> directement a partir du logiciell</h4>
                </div>
                <div className='cards__wrapper'>
                <i class="far fa-file"></i>
                <h2>Gérer les facture de vos fournisseurs</h2>
                <h4>Suivez vos fournisseur <br></br> et ménimiser les érreurs </h4>
                </div>
            </div>

            <div className="cards__container">
                <div className='cards__wrapper'>
                <i class="fas fa-upload"></i>
                <h2>Créer vos clients en toute simplicité</h2>
                <h4>Importer votre liste des <br></br> clients dans un fichier excel</h4>
                </div>
                <div className='cards__wrapper'>
                <i class="fas fa-share-square"></i>
                <h2>Envoyer facilement vos facture</h2>
                <h4>Envoyer vos facture directement <br></br> directement a partir du logiciell</h4>
                </div>
                <div className='cards__wrapper'>
                <i class="far fa-file"></i>
                <h2>Gérer les facture de vos fournisseurs</h2>
                <h4>Suivez vos fournisseur <br></br> et ménimiser les érreurs </h4>
                </div>
            </div>

        </div>
    )
}

export default Cards;
