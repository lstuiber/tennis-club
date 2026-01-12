import './style.css';
import './logic';

const app = document.getElementById("app");


app.innerHTML = `
<div>
  <div>
    <div>Player 1</div>
    <label>Score</label>
    <label id="player1-score">0</label>
    <button id="player1" class="players" value="player1">Award Point</button>
  </div>

  <div>
    <div>Player 2</div>
        <label>Score</label>
            <label id="player2-score">0</label>
    <button id="player2" class="players" value="player2">Award Point</button>
  </div>
  <h1 id="overview">Love All</h1>
</div>
`;

