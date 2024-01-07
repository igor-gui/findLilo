// import { useState, useEffect } from 'react';
import './App.css';
import lilo1 from './assets/images/lilo1.jpg';
import lilo2 from './assets/images/lilo2.jpg';
import lilo3 from './assets/images/lilo3.jpg';
import lilo4 from './assets/images/lilo4.jpg';
import lilo5 from './assets/images/lilo5.jpg';
import { WebSiteQRCode } from './components/QRCode';

function App() {


  return (
    <>
      <h1>PROCURA-SE GATINHA MALHADA</h1>
      <div className='imgBlock'>
        <section className="imgContainer">
          <img onClick={(e) => alert(e.currentTarget.src)} className='imgLilo' src={lilo1} alt="Gatinha com olhos azuis, mancha" />
          <img onClick={(e) => alert(e.currentTarget.src)} className='imgLilo' src={lilo2} alt="Gatinha com olhos azuis, mancha" />
          <img onClick={(e) => alert(e.currentTarget.src)} className='imgLilo' src={lilo3} alt="Gatinha com olhos azuis, mancha" />
          <img onClick={(e) => alert(e.currentTarget.src)} className='imgLilo' src={lilo4} alt="Gatinha com olhos azuis, mancha" />
          <img onClick={(e) => alert(e.currentTarget.src)} className='imgLilo' src={lilo5} alt="Gatinha com olhos azuis, mancha" />
        </section>
      </div>

      <div className="text">

        <p>Maior parte da pelagem é branca, com manchas marrons e cinza, olhos azuis e cerca de 4,5 kg. Muito dócil, um pouco assustada e não mia muito. Nos mudamos pra cá (Taquara) recentemente, então ela não conhece as ruas.
          Fugiu pela janela na manhã do dia 31/12 assustada com a casa nova, na estrada do Cafundá, perto do salão de festas Mundo Colorido.</p>
        <section className="data">

          <strong>Nome</strong>: Lilo<br />
          <strong>Idade</strong>: 10 anos<br />
          <strong>CONTATOS</strong>: <br />
          <strong> E-mail:</strong> guimaraes.igorrj@gmail.com <br />
          <strong> Whats:</strong> <a href="https://wa.link/baufp1" target='_blank'>(55) 99653-5533</a> ou <a href="https://wa.link/d1jns6" target='_blank'>(21) 97416-3622</a> <br />
          <strong> Gratifica-se:</strong> R$ 50,00
        </section>
      </div>

      {/* <section className='QRCodeGroup'>
        <WebSiteQRCode link='https://find-lilo.vercel.app/' text='Site com Informações' />
        <WebSiteQRCode link='https://wa.link/baufp1' text='WPP, Igor' />
        <WebSiteQRCode link='https://wa.link/d1jns6' text='WPP, Ian' />
      </section> */}
    </>
  );
}

export default App;
