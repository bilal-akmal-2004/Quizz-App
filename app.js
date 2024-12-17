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
];

let scoreBoard = JSON.parse(localStorage.getItem("scores")) || [];
let gettingData = () => {
  let playerName = document.getElementById("nameOfUser").value;
  let fatherName = document.getElementById("fatherName").value;
  let idOfPlayer = document.getElementById("idOfUser").value;
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
let questionsCounter = 0;
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
    alert("Make sure to select an option !");
    return;
  }
  questionsCounter++;
  renderQuestions();
};

let mainDiv = document.getElementById("main");
let renderQuestions = () => {
  if (questions.length === questionsCounter) {
    restartButton.style.display = "block";
  }

  startButton.style.display = "none";

  if (questions.length > questionsCounter) {
    mainDiv.innerHTML = `
    <h3>${score}</h3>
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
        <input type="submit" value="Next" />
      </form>`;
    return;
  }
  scoreBoard[scoreBoard.length - 1].userScore = score;
  localStorage.setItem("scores", JSON.stringify(scoreBoard));
  mainDiv.innerHTML = `Your score : ${score}<br>
  <h3>Score Board !</h3>`;
  for (let i = 0; i < scoreBoard.length; i++) {
    mainDiv.innerHTML += ` <br>User name: ${scoreBoard[i].userName} | Score : ${scoreBoard[i].userScore}`;
  }
};

let score = 0;
let checkAns = (ans) => {
  if (questions[questionsCounter].ans === ans) {
    console.log("User selected the rigth answer ");
    score++;
  }
  console.log(score);
};

let restartQuestions = () => {
  startButton.style.display = "block";
  restartButton.style.display = "none";
  mainDiv.innerHTML = `<p>Click Start to begin the quiz!</p>`;
  questionsCounter = 0;
  score = 0;
};
