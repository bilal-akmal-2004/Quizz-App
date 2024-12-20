let questions = [
  {
    Q: "What is the full form of JS ?",
    options: ["Javascript", "Jupitor", "Jason", "Jasper"],
    ans: "Javascript",
  },
  {
    Q: "What is the full form of PY ?",
    options: ["Python", "Parse", "Packets", "Pet"],
    ans: "Python",
  },
  {
    Q: "Who made the nuclear bomb ?",
    options: ["Elon Musk", "Batman", "Openheimer", "Albert Einstein"],
    ans: "Openheimer",
  },
  {
    Q: "What is vscode full form ?",
    options: ["Very secure code", "Visual studio code", "VS code", "None"],
    ans: "Visual studio code",
  },
  {
    Q: "What is the full form of CSS ?",
    options: [
      "Style Sheets",
      "Cascading Style Sheets",
      "Consistent Style Sheets",
      "Cascading Sheets",
    ],
    ans: "Cascading Style Sheets",
  },
  {
    Q: "What is the full form of HTML ?",
    options: [
      "Horizontaltext Markup Language",
      "Hightext Markup Language",
      "Hyper Markup Language",
      "Hypertext Markup Language",
    ],
    ans: "Hypertext Markup Language",
  },
  {
    Q: "What is the full form of C++ ?",
    options: ["C++", "C+", "C+++", "Code++"],
    ans: "C++",
  },
  {
    Q: "JavaScript is a _______ language ?",
    options: ["Programming", "Scripting", "Both", "None"],
    ans: "Scripting",
  },
  {
    Q: "JavaScript is case _______ ?",
    options: ["Sensitive", "Insensitive", "Both", "None"],
    ans: "Sensitive",
  },
  {
    Q: "JavaScript is used for _______ ?",
    options: ["Client-side", "Server-side", "Both", "None"],
    ans: "Client-side",
  },
];

let score = 0;
let scoreBoard = JSON.parse(localStorage.getItem("scores")) || [];
let gettingData = () => {
  let playerName = document.getElementById("nameOfUser").value;
  let fatherName = document.getElementById("fatherName").value;
  let idOfPlayer = document.getElementById("idOfUser").value;
  if (!playerName || !fatherName || !idOfPlayer) {
    showModal("All fields are required!");
    return;
  }
  let userExists = scoreBoard.some((user) => user.id === idOfPlayer);
  if (userExists) {
    showModal("User ID already exists! Please retry.");
    return;
  }
  let mainModalDiv = document.getElementById("modalAskingName");
  scoreBoard = [
    ...scoreBoard,
    {
      userName: playerName,
      userScore: 0,
      fatherName: fatherName,
      id: idOfPlayer,
    },
  ];
  localStorage.setItem("scores", JSON.stringify(scoreBoard));
  mainModalDiv.style.display = "none";
};

let startButton = document.getElementById("startButton");
let restartButton = document.getElementById("restartButton");
let checkAnswers = document.getElementById("checkButton");
let questionsCounter = 0;
// this to move to the nesxt question
let nextQuestion = (e) => {
  e.preventDefault();
  let radoivalue = document.getElementsByTagName("input");
  // console.log(radoivalue);
  let radioCheck = false;
  for (let i = 0; i < radoivalue.length; i++) {
    if (radoivalue[i].checked) {
      console.log(radoivalue[i].value);
      checkAns(radoivalue[i].value);
      radioCheck = true;
      break;
    }
  }
  if (radioCheck == false) {
    showModal("Please select an option before moving to the next question!");
    return;
  }
  questionsCounter++;
  renderQuestions();
};

let mainDiv = document.getElementById("main");
let correctionDiv = document.getElementById("selectionCorrectionDiv");
let timer;
let timeLeft = 30;

// this for the timer
let startTimer = () => {
  timeLeft = 30;
  document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(timer);
      if (questionsCounter < questions.length - 1) {
        showModal("Time's up! Moving to the next question.");
        questionsCounter++;
        renderQuestions();
      } else {
        showModal("Time's up! Quiz completed.");
        questionsCounter++;
        renderQuestions();
      }
    }
  }, 1000);
};

// this for renderering quesiton
let renderQuestions = () => {
  clearInterval(timer);

  startButton.style.display = "none";
  checkButton.style.display = "none";

  if (questions.length > questionsCounter) {
    // Calculate completion percentage
    let completionPercentage = Math.round(
      ((questionsCounter + 1) / questions.length) * 100
    );

    mainDiv.innerHTML = `
    <h3>Correct answers: ${score}/${questions.length}</h3>
    <div id="timer">Time Left: 30s</div> <!-- Timer Display -->
    <form onsubmit="nextQuestion(event)">
        <p>${questions[questionsCounter].Q}</p>
        <label for="radio-1">${questions[questionsCounter].options[0]}</label>
        <input type="radio" name="Q" id="radio-1" value="${questions[questionsCounter].options[0]}" />
        <label for="radio-2">${questions[questionsCounter].options[1]}</label>
        <input type="radio" name="Q" id="radio-2" value="${questions[questionsCounter].options[1]}" />
        <label for="radio-3">${questions[questionsCounter].options[2]}</label>
        <input type="radio" name="Q" id="radio-3" value="${questions[questionsCounter].options[2]}" />
        <label for="radio-4">${questions[questionsCounter].options[3]}</label>
        <input type="radio" name="Q" id="radio-4" value="${questions[questionsCounter].options[3]}" />
        <input id="nextInputButton" type="submit" value="Next" />
    </form>
    <div id="completionBarContainer">
        <div id="completionBar" style="width: ${completionPercentage}%;"></div>
    </div>
    `;

    startTimer();
    return;
  }

  // If quiz is over
  restartButton.style.display = "block";
  checkButton.style.display = "block";
  scoreBoard[scoreBoard.length - 1].userScore = score;
  localStorage.setItem("scores", JSON.stringify(scoreBoard));
  // sorting og the hiehsset scoreer here
  let highestScoreArrayOfObject = [];

  // Manual sorting using nested loops
  for (let i = 0; i < scoreBoard.length; i++) {
    for (let j = i + 1; j < scoreBoard.length; j++) {
      // Compare scores first (higher score comes first)
      if (
        scoreBoard[i].userScore < scoreBoard[j].userScore || // If the current score is less
        (scoreBoard[i].userScore === scoreBoard[j].userScore &&
          scoreBoard[i].id > scoreBoard[j].id) // If scores are equal, compare IDs
      ) {
        // Swap the objects
        let temp = scoreBoard[i];
        scoreBoard[i] = scoreBoard[j];
        scoreBoard[j] = temp;
      }
    }
  }
  console.log(scoreBoard);
  mainDiv.innerHTML = `Your result : ${Math.round(
    (score / questions.length) * 100
  )}% | Correct answers: ${score}/${questions.length}<br>
  <h3>Top Scores !</h3>`;
  for (let i = 0; i < 3; i++) {
    mainDiv.innerHTML += ` <br>Name: ${
      scoreBoard[i].userName
    } | Percentage: ${Math.round(
      (scoreBoard[i].userScore / questions.length) * 100
    )}%`;
  }
};

// this is for the checing answer is correct or no

let checkAns = (ans) => {
  if (questions[questionsCounter].ans === ans) {
    console.log("User selected the rigth answer ");
    score++;
  }
  console.log(score);
};

// this is for the restart question
let restartQuestions = () => {
  clearInterval(timer);
  mainDiv.classList.remove("overFlowScroll");
  quizContainer.style.height = "";
  startButton.style.display = "block";
  restartButton.style.display = "none";
  checkAnswers.style.display = "none";
  mainDiv.innerHTML = `<p>Click Start to begin the quiz!</p>`;
  questionsCounter = 0;
  score = 0;
};

// here is the code for the pop pup messages
let showModal = (message) => {
  document.getElementById("modalMessage").innerText = message;
  document.getElementById("popupModal").style.display = "block";
};

let closeModal = () => {
  document.getElementById("popupModal").style.display = "none";
};

// this is to check answer after the completion of quiz

let quizContainer = document.getElementById("quiz-container");
let checkAnswersOptions = () => {
  mainDiv.innerHTML = ``;
  for (let i = 0; i < questions.length; i++) {
    quizContainer.style.height = "500px";
    mainDiv.classList.add("overFlowScroll");
    mainDiv.innerHTML += `
<h3>${questions[i].Q}</h3>
<h4>1: ${questions[i].options[0]}</h4>
<h4>2: ${questions[i].options[1]}</h4>
<h4>3: ${questions[i].options[2]}</h4>
<h4>3: ${questions[i].options[3]}</h4>
<h4 style="color: green; text-decoration: underline;">Right Answer : ${questions[i].ans}</h3>`;
  }
  checkAnswers.style.display = "none";
};
