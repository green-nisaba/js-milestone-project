/* Declaring virables 
*
*/
const attemptName = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreB");
const quizResult = document.getElementById("finalScore"); 
const latestScore = localStorage.getItem("recentScore");
quizResult.innerText = `${latestScore}/23`; 

/* Getting data from local storage 
* or returning an empty array if nothing
* is there so far
*/

const finalResults = JSON.parse(localStorage.getItem('finalResults')) || [];


attemptName.addEventListener('keyup', ()  => {
    saveScoreButton.disabled = !attemptName.value
});

/* To set score and name 
* and display 4
* highest scores
*/

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

