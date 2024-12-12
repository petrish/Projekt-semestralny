document.addEventListener("DOMContentLoaded", () => {
    const scoreElement = document.getElementById("score");
    const clickButton = document.getElementById("click-button");
    const resetButton = document.getElementById("clear-button")
  
    let score = 0;
  
    clickButton.addEventListener("click", () => {
      score++;
      scoreElement.textContent = score;
    });

    resetButton.addEventListener("click", () => {
        score = 0;
        scoreElement.textContent = score;
    })
  });
  