import React, {useState} from 'react';
import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import Level from './components/level/Level';

function App() {
  const easyLevel = ['rock', 'paper', 'scissors']; // list easy
  const bonusLevel = ['rock', 'paper', 'scissors', 'lizard', 'spock']; // list bonus

  const [count, setCount] = useState(0); // count
  const [show, setShow] = useState(true); // modal
  const [gameElements, setGameElements] = useState([]); // elements for game
  const [message, setMessage] = useState(''); // message

  const [startGame, setStartGame] = useState({user: false, figureUser: '', randomFigure: ''});

  // modal show
  const handleClickModal = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  // select level
  const handleClickLevel = (level) => {
    if (level === 'easy') {
      setGameElements(easyLevel)
    }

    if (level === 'bonus') {
      setGameElements(bonusLevel);
    }
  }

  // again game
  const handleClickAgain = () => {
    setMessage('');
    setStartGame({user: false, figureUser: '', randomFigure: ''});
  }

  // return menu
  const handleClickReturnMenu = () => {
    setMessage('');
    setStartGame({user: false, figureUser: '', randomFigure: ''});
    setGameElements([]);
    setCount(0);
  }


  const handleClickFigures = (figure) => {
    let randomFigure = '';
 
    if(gameElements.length === 3) {
      randomFigure = (easyLevel[Math.floor(Math.random()*easyLevel.length)]);
    }

    if(gameElements.length === 5) {
      randomFigure = bonusLevel[Math.floor(Math.random()*bonusLevel.length)];
    }

    setStartGame({user: true, figureUser: figure, randomFigure: randomFigure});

    if (figure === randomFigure) {
      setMessage('so so...');
    }

    if ((figure === 'rock' && randomFigure === 'scissors')
    || (figure === 'rock' && randomFigure === 'lizard')
    || (figure === 'lizard' && randomFigure === 'spock')
    || (figure === 'lizard' && randomFigure === 'paper')
    || (figure === 'paper' && randomFigure === 'rock')
    || (figure === 'paper' && randomFigure === 'spock')
    || (figure === 'spock' && randomFigure === 'rock')
    || (figure === 'spock' && randomFigure === 'scissors')
    || (figure === 'scissors' && randomFigure === 'lizard')
    || (figure === 'scissors' && randomFigure === 'paper')) {
      setCount(count + 1);
      setMessage('You win');
    }

    if ((figure === 'rock' && randomFigure === 'paper')
    || (figure === 'rock' && randomFigure === 'spock')
    || (figure === 'lizard' && randomFigure === 'rock')
    || (figure === 'lizard' && randomFigure === 'scissors')
    || (figure === 'paper' && randomFigure === 'lizard')
    || (figure === 'paper' && randomFigure === 'scissors')
    || (figure === 'spock' && randomFigure === 'paper')
    || (figure === 'spock' && randomFigure === 'lizard')
    || (figure === 'scissors' && randomFigure === 'spock')
    || (figure === 'scissors' && randomFigure === 'rock')) {
      setMessage('You lose');
      setCount(0);
    }

  }


  return (
    <div className="wrap">
      <div className="wrap__box">
        <Header figures={gameElements} count={count} />

        {
          gameElements.length === 0
           ? '' :
          <Level
            handleClickAgain={handleClickAgain}
            elements={gameElements}
            messageTotal={message}
            gameStart={startGame}
            handleClickFigure={handleClickFigures} />
        }


        { gameElements.length === 0 ?
          <div className="button-box">
            <div className="button" onClick={() => handleClickLevel('easy')}>Simple game</div>
            <div className="button" onClick={() => handleClickLevel('bonus')}>Bonus game</div>
        </div> : '' }

        { gameElements.length === 0 ? '' : <Footer show={handleClickModal} goMenu={handleClickReturnMenu} /> }
          
      </div>

      { show ? '' : <Modal show={handleClickModal} rule={gameElements.length} /> }

    </div>
  );
}

export default App;
