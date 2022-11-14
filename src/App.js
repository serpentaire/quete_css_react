import React from 'react';
import './style.scss';

function App() {
  return (
    <div className="card">
        <div className="card__image">
          <img src="https://www.cieletespace.fr/media/default/0001/22/2022-07-16-0131_9-LTsatLD3-Saturn_ZWO%20ASI290MM%20Mini_lapl5_ap94_WNR-62d5.jpeg" alt = "image1"/>
        </div>
        <div className="card__copy">
            <h1>Saturne</h1>
            <h2>La planète aux anneaux</h2>
          <p>
          Saturne est la sixième planète du Système solaire par ordre d'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse.
          Son rayon moyen de 58 232 km est environ neuf fois et demi celui de la Terre et sa masse de 568,46 × 1024 kg est 95 fois plus grande. Orbitant en moyenne à environ 1,4 milliard de kilomètres du Soleil (9,5 unités astronomiques), sa période de révolution vaut un peu moins de 30 années tandis que sa période de rotation est estimée à 10 h 33 min.
          </p>
        </div>
      </div>
  );
}

export default App;
