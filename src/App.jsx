import './App.css'

let gameShow = document.querySelector(".game-show");
function App() {
  let toplam = 0;

  return (
    <>

      <ScoreBoard />
      <Hero />
      <GameShow />
      <Rules />
      <Modal />
    </>
  )
}
function ScoreBoard() {
  return (
    <div className="score-board">
      <div className="header">
        <img src="images/rock-paper-scissors.png" alt="" />
      </div>
      <div className="score">
        <p>Skor</p>
        <h2 className="scorepoint">0</h2>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="hero">
      <button className="paper">
        <img src="images/paper.png" alt="paper image" />
      </button>
      <button className="scissors">
        <img src="images/scissors.png" alt="scissors image" />
      </button>
      <button className="rock">
        <img src="images/rock.png" alt="rock image" />
      </button>
    </div>
  )
}

function GameShow() {
  return (
    <div className="game-show">
      <div className="show"></div>
      <div className="sonuc">
        <p className="sonucyazi"></p>
        <button className="tryagain">Yeniden Oyna</button>
      </div>
      <div className="computer-show"></div>
    </div>
  )
}

function Rules() {
  function handleModalClick() {
    modal.showModal();
  }

  return (
    <div className="rules" onClick={handleModalClick}>
      <p>Kurallar</p>
    </div>
  )
}


function Modal() {

  function handleCloseModal() {
    modal.close();
  }
  return (
    <dialog id="modal">

      <div className="rules-show">
        <div className="rules-header">
          <p>RULES</p>
          <img src="images/X.png" alt="" onClick={handleCloseModal} />
        </div>
        <div className="rules-hero">
          <img src="images/kagıt.png" className="kagıt" alt="" />
          <div className="left-beats">
            <p className="beats">Yener</p>
            <img src="images/sol.png" alt="" />
          </div>
          <img src="images/makas.png" className="makas" alt="" />
          <div className="down-right-beats">
            <p className="beats">Yener</p>
            <img src="images/sag-alt.png" alt="" />
          </div>
          <img src="images/tas.png" className="tas" alt="" />
          <div className="up-right-beats">
            <img src="images/sag-ust.png" alt="" />
            <p className="beats">Yener</p>
          </div>
        </div>
      </div>

    </dialog>
  )
}

export default App
