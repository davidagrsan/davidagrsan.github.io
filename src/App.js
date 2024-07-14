import './App.css';
import TypeWriter from './components/Typewriter/Typewriter';
import { useState } from 'react';

function App() {
  const [knowMore, setKnowMore] = useState(false);
  const [buttonText, setButtonText] = useState('¿Quieres saber más sobre mí?');
  const [showMoreContent, setShowMoreContent] = useState(false);

  const knowMoreClick = () => {
    setKnowMore(!knowMore); // Invierte el estado de knowMore
    setButtonText(knowMore ? '¿Quieres saber más sobre mí?' : 'Mostrar menos');

    setTimeout(() => {
      setShowMoreContent(knowMore);
    }, 100);
  }

  const typeWritedText = [
    {text: "David Agredano"}, 
    {text: "¡Te doy la bienvenida a mi portfolio!"},
    {text: "Desarrollador Web en formación continua."},
    {text: "Criado con una pantalla delante, eso es todo lo que necesito para volar mi mente."},
    {text: "La creación de código da la libertad a mi imaginación para construir."}
  ]

  return (
    <div id='body-container'>
    <div className="top-line"></div>
    <div className="left-line"></div>
    <div className="bottom-line"></div>
      <div className="contentLeft">
        <div className="logo-container">
          <img src="/imgs/logoD.png" alt="logo-navbar"></img>
        </div>
        <div className="main">
          <div id="titles">
            <TypeWriter id="titleName" text={typeWritedText[0].text} speed={100}></TypeWriter>
            <TypeWriter id="titleDescription" text={typeWritedText[1].text} delay={1000} speed={100}></TypeWriter>
            <div className="knowMore">
              <button onClick={knowMoreClick}>{buttonText}</button>
              {/* Mostrar solo en caso de que knowMore esté activo */}
              {knowMore && <div className={`moreContent ${showMoreContent ? 'closed' : 'open'}`}>
                <div className="knowMore-descriptions">
                  <TypeWriter id="titleDescription2" text={typeWritedText[2].text} delay={100} speed={30}></TypeWriter>
                  <TypeWriter id="titleDescription3" text={typeWritedText[3].text} delay={1200} speed={30}></TypeWriter>
                  <TypeWriter id="titleDescription4" text={typeWritedText[4].text} delay={3200} speed={30}></TypeWriter>
                </div>
                <div className="knowMore-buttons">
                  <button>Mis trabajos</button>
                  <button>Más sobre mí</button>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
      <div className="contentMiddle">
        <div className='myPhoto'>
            <img src="/imgs/myPhoto.jpg" alt="portfolioPhoto"></img>
            <div id="photoInteriorBorder"></div>
            <div id='photoSecondBorder'></div>
        </div>
      </div>
      <div className='contentRight'>
        <div className="social-container">
            <ul id="social-icons">
                <li><i className="fa-solid fa-envelope"></i></li>
                <li><i className="fa-brands fa-github"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
        <div className="right-line"></div>
        <div className="email-container">
          <p>davidagredanosanchez@gmail.com</p>
        </div>
      </div>

    </div>
  );

}


export default App;
