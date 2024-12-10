function completeSurvey() {
    const form = document.getElementById('survey-form');
    const questions = form.querySelectorAll('.question');
    const resultsContent = document.getElementById('results-content');
    const errorMessage = document.getElementById('error-message');
    const results = document.getElementById('results');

    let allAnswered = true;
    let answers = [];

    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            answers.push(selectedOption.value);
        } else {
            allAnswered = false;
        }
    });

    if (allAnswered) {
        resultsContent.innerHTML = '';
        answers.forEach((answer, index) => {
            resultsContent.innerHTML += `<p>${index + 1}. ${answer}</p>`;
        });
        results.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.classList.remove('hidden');
        results.classList.add('hidden');
    }
}
