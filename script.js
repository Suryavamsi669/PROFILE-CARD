// Function to check the answer to the quiz
function checkAnswer() {
    const answer = document.getElementById('quiz-answer').value;
    const message = document.getElementById('quiz-message');
    
    // Correct answer is 8 (5 + 3)
    if (answer == 8) {
      // Hide the quiz section and show the profile section
      document.getElementById('quiz-section').style.display = 'none';
      document.getElementById('profile-section').style.display = 'flex';
    } else {
      // Show an error message if the answer is incorrect
      message.textContent = "Incorrect answer, please try again.";
      message.classList.remove('hidden');
    }
  }
  