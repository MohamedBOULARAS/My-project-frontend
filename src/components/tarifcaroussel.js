import React from 'react';
import './tarifcaroussel.css';
import { Button } from './Button';

 function TarifCaroussel() { 
    return (
        <div className="tarif-container">
              <h2 className='tarif-title'>On vous propose <strong>plusieur Offres <br></br></strong> selons vos besoins</h2> 
            <div className='mokhtar'>
            <div className='tarif-card'>
            <div className='tarif-type'>
                <h2 className='type'>Starter</h2>
                <h3>20 000 DZD</h3>
                <h4>année</h4>
            </div>
            <div className='tarif-1-offre'>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Facturation client</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Gestion des utilisateurs</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Envoi des factures par e-amail</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Création de devis et proforma</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>facture d'avoir</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Cacher et signature</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Support technique 6/7</h4></div>
            <div className='check'><h4 className='check-line-users'>2 Utillisateurs</h4></div>
            <div className='check'><h4 className='check-line-users'>5 Go de Stokage</h4></div>
            </div>
            </div>
            <div className='tarif-card'>
            <div className='tarif-type'>
                <h2 className='type'>Starup</h2>
                <h3>30 000 DZD</h3>
                <h4>année</h4>
            </div>
            <div className='tarif-1-offre'>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Facturation client</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Gestion des utilisateurs</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Envoi des factures par e-amail</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Création de devis et proforma</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>facture d'avoir</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Cacher et signature</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Support technique 6/7</h4></div>
            <div className='check'><h4 className='check-line-users'>2 Utillisateurs</h4></div>
            <div className='check'><h4 className='check-line-users'>5 Go de Stokage</h4></div>
            </div>
            </div>
            <div className='tarif-card'>
            <div className='tarif-type'>
                <h2 className='type'>Business</h2>
                <h3>40 000 DZD</h3>
                <h4>année</h4>
            </div>
            <div className='tarif-1-offre'>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Facturation client</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Gestion des utilisateurs</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Envoi des factures par e-amail</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Création de devis et proforma</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>facture d'avoir</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Cacher et signature</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Support technique 6/7</h4></div>
            <div className='check'><h4 className='check-line-users'>2 Utillisateurs</h4></div>
            <div className='check'><h4 className='check-line-users'>5 Go de Stokage</h4></div>
            </div>
            </div>
            <div className='tarif-card-entreprise'>
            <div className='tarif-type'>
                <h2 className='type'>Entreprise</h2>
                <h4 className='entreprise'>Contactez nous</h4>
                <h4 className='ilimité'>ilimité</h4>
            </div>
            <div className='tarif-1-offre'>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Facturation client</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Gestion des utilisateurs</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Envoi des factures par e-amail</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Création de devis et proforma</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>facture d'avoir</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Cacher et signature</h4></div>
            <div className='check'><i class="far fa-check-circle"></i><h4 className='check-line'>Support technique 6/7</h4></div>
            <div className='check'><h4 className='check-line-users'>Utillisateurs ilimité</h4></div>
            <div className='check'><h4 className='check-line-users'>Stokage ilimité</h4></div>
            <div> <button className='contactezNous'>Contactez nous</button></div>
            </div>
            </div>
            </div>
          
          <div className='email-offre'>
              <div className='mail-offre'>
              <Button
              className="getstarted"
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              >
                  GET STARTED
              </Button>
              <h2 className='h2'>Ecriver votre email pour resevoir l'offre en détails</h2>
              <p className='p'>INFINITE, le logiciel parfait pour les entrepreneurs, starteups, PME's et les entreprises </p>
              <div className='send'>
              <input type="email"
                        className="form-mail"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter votre email"
                    />
                    <button
                        type="submit"
                        className="btn-mail"
                    >
                        Envoyer
                </button>
                </div>
                </div>
          </div>
        </div>
    );
};

export default TarifCaroussel;
