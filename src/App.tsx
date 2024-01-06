import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [imgArray, setImgArray] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateImages = () => {
      const copy: JSX.Element[] = [];
      for (let i = 1; i <= 4; i++) {
        const catImage = <img key={i} className='imgLilo' src={`./src/assets/images/lilo${i}.jpg`} alt="Imagem da gatinha" />;
        copy.push(catImage);
      }
      setImgArray(copy);
    };

    generateImages();
  }, []);

  return (
    <>
      <h1>PROCURA-SE GATINHA MALHADA</h1>
      <div>
        {imgArray}
      </div>

      <div className="text">

      <p>Maior parte da pelagem é branca, com manchas marrons e cinza, olhos azuis e cerca de 4,5 kg. Muito dócil, um pouco assustada e não mia muito. Nos mudamos pra cá (Taquara) recentemente, então ela não conhece as ruas.
      Fugiu pela janela na manhã do dia 31/12 assustada com a casa nova, na estrada do Cafundá, perto do salão de festas Mundo Colorido.</p>
      <section className="data">

      <strong>Nome</strong>: Lilo<br />
      <strong>Idade</strong>: 10 anos<br />
      <strong>CONTATOS</strong>: <br />
      <strong> E-mail:</strong> guimaraes.igorrj@gmail.com <br />
      <strong> Whats:</strong> (55) 99653-5533 ou (21) 97416-3622 <br />
      <strong> Gratifica-se:</strong> R$ 50,00
      </section>
      </div>
    </>
  );
}

export default App;