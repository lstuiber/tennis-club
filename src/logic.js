
// can specify anonymous function and do everything right away
// document.addEventListener("click", function(e) {
//     alert("test");
// });

// can specify a normal function and separate logic out
document.addEventListener('DOMContentLoaded', () => {
    const players = document.querySelectorAll('.players');
players.forEach((btn) => {
  btn.addEventListener('click', handleEvent);
});
});

const stopPlay = () => {
        const players = document.querySelectorAll('.players');
    players.forEach((btn) => {
  btn.removeEventListener('click', handleEvent);
});
}

let points = [0,0];

function handleEvent(event) {
    const player = event.target.value;
    const playerScore = document.getElementById(`${player}-score`);
    updateScore(playerScore, player);
}


const updateScore = (playerScore, player) => {
        const lastChar = player[player.length - 1];
        const playerPos = lastChar % 2;
        points[playerPos]++;

    let currentScore = Number(playerScore.textContent);
    // this logic updates the visual score
    if (points[playerPos] < 3) {
        currentScore += 15;
        
    }
    if (points[playerPos] == 3) {
        currentScore += 10;
    }
    if (points[playerPos] > 3) {
        // this will check endgame scenarios
        if (checkPoint(points) >= 2) {
            checkWinner(points);
        }
    }
    playerScore.textContent = currentScore;
    console.log(checkPoint(points));
}
// get absolute returns point diff for adv/dis adv
const checkPoint = (points) => {
    const pointDiff = Math.abs(points[0] - points[1]);
    return pointDiff;
}
// if there is a winner, stop the match
const checkWinner = (points) => {
    if (points[0] - points[1] > 0 || points[1] - points[0] > 0) {
        stopPlay();
    }
}