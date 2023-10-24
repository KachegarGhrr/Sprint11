let user = {};

document.getElementById('userForm1').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userBirthdate = document.getElementById('userBirthdate').value;
    const pitanieType = document.querySelector('input[name="pitanieType"]:checked').value;
    const isQuestion1 = document.getElementById('userQuestion1').checked;
    const isQuestion2 = document.getElementById('userQuestion2').checked;
    const isQuestion3 = document.getElementById('userQuestion3').checked;

    user = {
        name: userName,
        birthdate: userBirthdate,
        type: pitanieType,
        question1: isQuestion1,
        question2: isQuestion2,
        question3: isQuestion3
    };

    document.getElementById('fieldName').textContent = user.name;
    document.getElementById('fieldBirthdate').textContent = user.birthdate;
    document.getElementById('fieldPitanie').textContent = user.type;

    const userQuestion = [];
    if (user.question1) userQuestion.push('Занимаюсь спортом');
    if (user.question2) userQuestion.push('Курю');
    if (user.question3) userQuestion.push('Пью воду');
    document.getElementById('fieldQuestion').textContent = userQuestion.join(', ');

    document.getElementById('userForm1').classList.toggle('active');
    document.getElementById('userForm2').classList.toggle('active');
    });

    document.getElementById('userForm2').querySelector('button').addEventListener('click', function(event) {
    document.getElementById('userForm1').classList.toggle('active');
    document.getElementById('userForm2').classList.toggle('active');
    });