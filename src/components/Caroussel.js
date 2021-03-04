import React from 'react'
import './Caroussel.css';
import '../App.css';
import { Button } from './Button';

 function Caroussel() {
    return (
        <div className="caroussel-container">
              <video className='video-video' src='../videos/video-3.mp4' autoPlay loop muted /> 
              <h2 className='title'>What are you waiting for ?</h2> 
              <p className='txt'>Don't waste your time</p>
              <h3 className='bio'>INFINITE, le logiciel de facturation qui 
                  <br></br>
                  aide les chefs d’entreprises et
                  <br></br>
                  commerçants à gérer leurs 
                  <br></br>
                  factures, devis et trésorerie.
              </h3>
            <div className="caroussel-btn">
              <Button
              className="btn-1"
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              >
                  Mon Compte
              </Button>
              <Button
              className="btn-2"
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              >
                  VIDEO
                  <i className="far fa-play-circle"></i>
              </Button>
          </div>
        </div>
    );
};

export default Caroussel;
