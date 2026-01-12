
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
    const matchOverview = document.getElementById('overview');
    updateMatch(playerScore, player, matchOverview);
}


const updateMatch = (playerScore, player, overview) => {
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
        console.log("check test", points[playerPos])
        // this will check endgame scenarios
        if (checkPoint(points) >= 2) {
            checkWinner(points);
        }
    }
    playerScore.textContent = currentScore;
    overview.textContent = checkLead(points, currentScore);
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

const checkLead = (points, currentScore) => {
    console.log("checklead")
    if (points[0] - points[1] == 0) {
            if (points[0] < 3 && points[1] < 3) {
                return `${currentScore} All`;
            }
        return "Deuce"
    }
    if (points[0] - points[1] > 0) {
            if (points[0] - points[1] >= 2 && (points[0] > 3 || points[1] > 3)){
            console.log("test1")
            return "Player 2 Winner"
        }
        if (points[1] - points[0] >= 2 && (points[0] > 3 || points[1] > 3)){
            console.log("test2")
            return "Player 1 Winner"
        }
            return "Player 2 ADV";
        }
    if (points[0] - points[1] < 0) {
            if (points[0] - points[1] >= 2 && (points[0] > 3 || points[1] > 3)){
            console.log("test1")
            return "Player 2 Winner"
        }
        if (points[1] - points[0] >= 2 && (points[0] > 3 || points[1] > 3)){
            console.log("test2")
            return "Player 1 Winner"
        }
            return "Player 1 ADV";
        }

    return "Test";
}
