import React from 'react';
import Head from 'next/head'
import Button from "../components/Button";
import Footer from "../components/Footer";
import Dialog from '@material-ui/core/Dialog';


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className="dialogSuperContainer">
      <div className="dialogContainer">
        <h2>Déjà membre ?</h2>
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Entrez votre adresse mail"
          />
        </div>
        <div className="inputContainer">
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <Button title="Se connecter"/>

        <h2 className="codeParrainage">J'ai un code de parrainage</h2>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Entrez votre code de parrainage unique"
          />
        </div>

        <h2 className="codeParrainage">Je veux des informations</h2>
        <Button title="Contactez-nous"/>
      </div>
    </Dialog>
  );
}

export default function Home() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="superContainer">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin/>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin/>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin/>
      </Head>

    <div className="container1">
      <div className="imgContainer">
        <img src={'/logoBlanc.png'} alt="" className="logoBlanc"/>
      </div>
    </div>

      <div className="leClub vinsContainer">
        <div className="container miniContainer">
        <h2>Le club</h2>
          <p>La Carafe est un club privé créé spécialement pour les vignerons français.</p>
          <span className="mb-5">Un objectif : partager et dénicher aux enchères les meilleurs bouteilles de vin à leur apogée. </span>
          <p>Après chaque vente, faites grandir la communauté La Carafe en partageant vos codes de parrainages à vos amis vignerons</p>
          <span className="mb-5 marginBottom">N'attendez plus, rejoignez la Carafe !</span>
          <Button title="Accéder aux ventes" id="Vente" onClick={handleClickOpen}/>
        </div>
        <SimpleDialog open={open} onClose={handleClose} />
      </div>

      <img src={'/raisin.png'} className="w-100"/>

      <div className="ventes vinsContainer">
        <div className="container miniContainer">
          <h2>Les ventes</h2>
          <span className="mb-5">Les ventes ont lieu chaque année en avril et en octobre.</span>
          <p>Un mois avant chaque vente, les membres de La Carafe mettent en ligne au minimum un lot de trois bouteilles ou de deux magnums.</p>
          <p>Nos experts analysent ensuite chaque lot afin de s’assurer qu’ils entrent dans nos critères de sélection</p>
          <span className="mb-5">Le jour J, les enchères sont lancées pour une durée d’une semaine. </span>
          <p>A la fin de la semaine, les lots sont attribués aux différents gagnants qui peuvent alors déguster les perles rares dénichées.</p>
        </div>
      </div>

      <img src={'/vin.png'} alt="" className="w-100"/>


      <div className="secondPrix vinsContainer">
        <div className="container miniContainer">
          <h2>Le second prix</h2>
          <span className="mb-5">Sur La Carafe, les enchères sont ludiques et captivantes. <br/> Elles sont au second prix !</span>
          <p>Son principe est simple : pendant une semaine, les participants misent sur les lots à enveloppe cachée. Ainsi, hormis le vigneron vendeur, personne n’a connaissance des mises en jeu.</p>
          <span className="mb-5">A la fin de la semaine d’enchères, les mises sont dévoilées et les gagnants récompensés.</span>
          <p>Seulement au second prix, le gagnant d’une enchère ne paye que le prix de la deuxième enchère la plus élevée. Les acheteurs peuvent alors prendre tous les risques pour dénicher leurs futures perles rares.</p>
        </div>
      </div>

      <img src={'/verreVin.png'} alt="" className="w-100"/>

      <div className="evenements vinsContainer">
        <div className="container miniContainer">
          <h2>Les évènements</h2>
          <span className="mb-5">Les membres de La Carafe peuvent participer à notre diner de prestige organisé chaque année dans un village viticole différent.</span>
          <p>Ces évènements réunissent les meilleurs vignerons français et permettent de partager un moment fort autour d’un repas gastronomique et d’une grande diversité de vins.</p>
          <p>Une vente aux enchères au second prix a également lieu au cours de la soirée afin de vivre l’excitation du jeu tous ensemble.</p>
        </div>
      </div>

      <img src={'/tonneau.png'} alt="" className="w-100"/>

      <div className="premiereVente vinsContainer">
        <h2>Première vente : J-150</h2>
        <p className="presents">Ils seront présents</p>
        <div className="row row1">
          <div className="col">
            <img src={'/trappet.png'} alt="" className="imgTrappet"/>
          </div>
          <div className="col">
            <img src={'/ramonet.png'} alt="" className="presentImg"/>
          </div>
        </div>
        <div className="row row1">
          <div className="col">
            <img src={'/pillot.png'} alt="" className="presentImg"/>
          </div>
          <div className="col">
            <img src={'/marcColin.png'} alt="" className="imgColin"/>
          </div>
        </div>
      </div>

      <img src={'/champ.png'} alt="" className="w-100"/>

      <div className="rejoindre vinsContainer">
        <h2>Rejoignez La Carafe et partager votre cave avec les plus grands vignerons français</h2>
        <Button title="Accéder aux ventes" id="Vente2"/>
      </div>


      <Footer />
    </div>
  )
}
