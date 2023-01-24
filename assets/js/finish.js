const attemptName = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreB");
const quizResult = document.getElementById("finalScore"); 
const latestScore = localStorage.getItem("recentScore");
quizResult.innerText = `${latestScore}/23`; 


const finalResults = JSON.parse(localStorage.getItem('finalResults')) || [];
const limitFinalResults = 3; 


attemptName.addEventListener('keyup', ()  => {
    saveScoreButton.disabled = !attemptName.value
});
function saveScore(event){
    event.preventDefault();



    const score = {
        score: latestScore, 
        name: attemptName.value
    };
    finalResults.push(score);
    finalResults.sort((a, b) => b.score - a.score);
    finalResults.splice(4);

    localStorage.setItem('finalResults', JSON.stringify(finalResults));
    window.location.assign('finalResults.html');

}

