
const finalResultsRange = document.getElementById("finalResultsRange");
const finalResults = JSON.parse(localStorage.getItem('finalResults')) || [];


finalResultsRange.innerHTML = finalResults.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
