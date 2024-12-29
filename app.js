let allQuestions = [
  {
    Q: "What is the full form of JSON?",
    options: ["JavaScript Object Notation", "JavaScript Oriented Notation"],
    ans: "JavaScript Object Notation",
  },
  {
    Q: "What is the capital of France?",
    options: ["Paris", "London", "Madrid"],
    ans: "Paris",
  },
  {
    Q: "What is 2 + 2?",
    options: ["3", "4", "5"],
    ans: "4",
  },
  {
    Q: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant"],
    ans: "Lion",
  },
  {
    Q: "What is the extension for JavaScript files?",
    options: [".js", ".java", ".jsx", ".py"],
    ans: ".js",
  },
  {
    Q: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    ans: "Mars",
  },
  {
    Q: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    ans: "Cascading Style Sheets",
  },
  {
    Q: "Which animal is the largest mammal on Earth?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Shark"],
    ans: "Blue Whale",
  },
  {
    Q: "Which data type is not present in JavaScript?",
    options: ["Number", "Boolean", "String", "Integer"],
    ans: "Integer",
  },
  {
    Q: "Who invented JavaScript?",
    options: ["Brendan Eich", "Tim Berners-Lee", "Bill Gates", "Elon Musk"],
    ans: "Brendan Eich",
  },
  {
    Q: "What does RAM stand for?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Run Access Memory",
    ],
    ans: "Random Access Memory",
  },
  {
    Q: "Which is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Kangaroo"],
    ans: "Cheetah",
  },
  {
    Q: "What is the output of 'console.log(typeof null)' in JavaScript?",
    options: ["null", "object", "undefined"],
    ans: "object",
  },
  {
    Q: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Orientation Model",
      "Digital Object Management",
    ],
    ans: "Document Object Model",
  },
  {
    Q: "Which bird is a universal symbol of peace?",
    options: ["Dove", "Eagle", "Crow"],
    ans: "Dove",
  },
  {
    Q: "Which function is used to parse a string to an integer in JavaScript?",
    options: ["parseInt", "toString", "parseString", "toInt"],
    ans: "parseInt",
  },
  {
    Q: "What is the tallest land animal?",
    options: ["Elephant", "Giraffe", "Kangaroo", "Camel"],
    ans: "Giraffe",
  },
  {
    Q: "What is the file extension for HTML files?",
    options: [".html", ".ht", ".web", ".doc"],
    ans: ".html",
  },
  {
    Q: "Which animal is known to have a memory span of up to 20 years?",
    options: ["Elephant", "Dog", "Dolphin"],
    ans: "Elephant",
  },
  {
    Q: "Which JavaScript keyword is used to define a variable?",
    options: ["let", "const", "var", "All of these"],
    ans: "All of these",
  },
  {
    Q: "What is the smallest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Earth"],
    ans: "Mercury",
  },
  {
    Q: "Which animal is known to be the fastest swimmer?",
    options: ["Sailfish", "Dolphin", "Shark", "Blue Whale"],
    ans: "Sailfish",
  },
  {
    Q: "Which JavaScript method is used to add an element to the end of an array?",
    options: ["push()", "pop()"],
    ans: "push()",
  },
  {
    Q: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language"],
    ans: "Structured Query Language",
  },
  {
    Q: "Which bird can fly backward?",
    options: ["Hummingbird", "Eagle", "Sparrow", "Pigeon"],
    ans: "Hummingbird",
  },
  {
    Q: "Which JavaScript operator is used to compare both value and type?",
    options: ["===", "==", "=", "!="],
    ans: "===",
  },
  {
    Q: "What is the output of 'console.log(1 + '1')' in JavaScript?",
    options: ["2", "'11'", "NaN", "Error"],
    ans: "'11'",
  },
  {
    Q: "Which programming language is primarily used for machine learning?",
    options: ["Python", "Java", "C++", "JavaScript"],
    ans: "Python",
  },
  {
    Q: "Which is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Peacock", "Albatross"],
    ans: "Ostrich",
  },
  {
    Q: "What does API stand for?",
    options: ["Application Programming Interface", "None of these"],
    ans: "Application Programming Interface",
  },
  {
    Q: "Which JavaScript keyword is used to declare a constant?",
    options: ["const", "let", "var", "final"],
    ans: "const",
  },
  {
    Q: "Which animal is known as man's best friend?",
    options: ["Dog", "Cat"],
    ans: "Dog",
  },
  {
    Q: "Which company created the Java programming language?",
    options: ["Sun Microsystems", "Microsoft", "Apple", "Google"],
    ans: "Sun Microsystems",
  },
  {
    Q: "What is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    ans: "Pacific Ocean",
  },
  {
    Q: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    ans: "Paris",
  },
  {
    Q: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    ans: "Mars",
  },
  {
    Q: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmit Protocol",
      "Hyper Transfer Text Protocol",
      "High Text Transfer Protocol",
    ],
    ans: "HyperText Transfer Protocol",
  },
  {
    Q: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    ans: "Bill Gates",
  },
  {
    Q: "Which animal is known as the King of the Jungle?",
    options: ["Elephant", "Tiger", "Lion", "Cheetah"],
    ans: "Lion",
  },
  {
    Q: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    ans: "Pacific Ocean",
  },
  {
    Q: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "India"],
    ans: "Japan",
  },
  {
    Q: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "H2", "CO2"],
    ans: "H2O",
  },
  {
    Q: "Which programming language is known for its 'Write Once, Run Anywhere' philosophy?",
    options: ["C++", "Java", "Python", "JavaScript"],
    ans: "Java",
  },
  {
    Q: "What is the capital city of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Hokkaido"],
    ans: "Tokyo",
  },
  {
    Q: "Which of these is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    ans: "Jupiter",
  },
  {
    Q: "Who invented the telephone?",
    options: [
      "Nikola Tesla",
      "Alexander Graham Bell",
      "Thomas Edison",
      "Michael Faraday",
    ],
    ans: "Alexander Graham Bell",
  },
  {
    Q: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    ans: "Nile River",
  },
  {
    Q: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    ans: "Vatican City",
  },
  {
    Q: "Which language is primarily used for Android app development?",
    options: ["Java", "Swift", "Python", "C#"],
    ans: "Java",
  },
  {
    Q: "What do cows drink?",
    options: ["Milk", "Water", "Juice", "Soda"],
    ans: "Water",
  },
  {
    Q: "Which is the most famous fruit that doesn’t have a seed?",
    options: ["Banana", "Apple", "Orange", "Mango"],
    ans: "Banana",
  },
  {
    Q: "How many months have 28 days?",
    options: ["1", "12", "6", "3"],
    ans: "12",
  },
  {
    Q: "What is the only vegetable that is never eaten raw?",
    options: ["Potato", "Carrot", "Cucumber", "Spinach"],
    ans: "Potato",
  },
  {
    Q: "Which animal can be seen on the logo of the World Wildlife Fund?",
    options: ["Elephant", "Panda", "Tiger", "Lion"],
    ans: "Panda",
  },
];
let questions = [];

// here are the suffling of quesiton and making sure it have 10 quesiotns
let shuffleQuestions = () => {
  let indexDone = [];
  for (let i = 0; i < allQuestions.length; i++) {
    let randomIndex = Math.floor(Math.random() * allQuestions.length);
    if (!indexDone.includes(randomIndex)) {
      questions.push(allQuestions[randomIndex]);
      indexDone.push(randomIndex);
    }
    if (indexDone.length === 10) {
      return;
    }
  }
};
shuffleQuestions();
// shuffling of option when user try agian the quiz or retry after completing it once
let retryShuffleOption = () => {
  for (let i = 0; i < questions.length; i++) {
    let options = questions[i].options;
    for (let j = 0; j < options.length; j++) {
      let randomIndex = Math.floor(Math.random() * options.length);

      // before shuffle,forex: j=0  and randomindex = 2
      // options: ["Paris", "London", "Berlin", "Madrid"],
      [options[j], options[randomIndex]] = [options[randomIndex], options[j]];
      //After options: ["Berlin", "London", "Paris", "Madrid"],
    }
  }
};

// all the initialization of variables hher

let totalQuestions = questions.length;
let answersData = [];
let score = 0;
let scoreBoard = JSON.parse(localStorage.getItem("scores")) || [];
let startButton = document.getElementById("startButton");
let restartButton = document.getElementById("restartButton");
let checkAnswers = document.getElementById("checkButton");
let allScoreBoard = document.querySelector("#scoreBoardButton");
let questionsCounter = 0;
let mainDiv = document.getElementById("main");
let correctionDiv = document.getElementById("selectionCorrectionDiv");
let timer;
let timeLeft = 30;
let idCheckFlage = false;
let quizContainer = document.getElementById("quiz-container");
quizContainer.style.display = "none";
// validation area
let validationForInputs = (e) => {
  let target = e.target;
  let value = target.value;

  // Validation for playerName
  if (target.id === "nameOfUser" && value.length < 3) {
    target.nextElementSibling.innerHTML =
      "Name must be at least 3 characters long.";
  } else if (target.id === "nameOfUser") {
    target.nextElementSibling.innerHTML = "";
  }

  // Validation for fatherName
  if (target.id === "fatherName" && value.length < 3) {
    target.nextElementSibling.innerHTML =
      "Father's name must be at least 3 characters long.";
  } else if (target.id === "fatherName") {
    target.nextElementSibling.innerHTML = "";
  }

  // Validation for idOfPlayer
  if (target.id === "idOfUser") {
    if (!value.startsWith("123-")) {
      target.nextElementSibling.innerHTML = "ID must start with '123-' .";
      idCheckFlage = false;
    } else if (value.length < 7) {
      target.nextElementSibling.innerHTML =
        "Make sure to have 3 more characters after 123- .";
      idCheckFlage = false;
    } else {
      target.nextElementSibling.innerHTML = "";
      idCheckFlage = true;
    }
  }
};

let gettingData = () => {
  quizContainer.style.display = "flex";
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
  if (!idCheckFlage) {
    showModal("Make sure to follow the format of id.");
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

// this to move to the nesxt question
let nextQuestion = (e) => {
  e.preventDefault();
  let radoivalue = document.getElementsByTagName("input");
  // console.log(radoivalue);
  let radioCheck = false;
  for (let i = 0; i < radoivalue.length; i++) {
    if (radoivalue[i].checked) {
      console.log(radoivalue[i].value);
      answersData.push(radoivalue[i].value);
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
        answersData.push("");
        questionsCounter++;
        renderQuestions();
      } else {
        showModal("Time's up! Quiz completed.");
        questionsCounter++;
        answersData.push("");
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
    //  this for the rendeing questions accordinly
    let optionsHtml = "";
    questions[questionsCounter].options.forEach((option, index) => {
      optionsHtml += `
        <div class="labels_And_Options">
          <input type="radio" name="Q" id="radio-${
            index + 1
          }" value="${option}" />
          <label for="radio-${index + 1}">${option}</label>
        </div>
      `;
    });

    // Render the question and options
    mainDiv.innerHTML = `
      <h3>Correct answers: ${score}/${questions.length}</h3>
      <h3>Questions left: ${totalQuestions--}</h3>
      <div id="timer"></div>
      <form onsubmit="nextQuestion(event)">
          <p>${questions[questionsCounter].Q}</p>
          ${optionsHtml}
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
  allScoreBoard.style.display = "block";
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
  // Displaying top 3 scorers
  for (let i = 0; i < 3 && i < scoreBoard.length; i++) {
    if (scoreBoard[i].userName) {
      // Ensure 'userName' exists
      mainDiv.innerHTML += ` <br>Name: ${
        scoreBoard[i].userName
      } | Percentage: ${Math.round(
        (scoreBoard[i].userScore / questions.length) * 100
      )}%`;
    }
  }
};

// this is for the checing answer is correct or no

let checkAns = (ans) => {
  if (questions[questionsCounter].ans === ans) {
    console.log("User selected the rigth answer ");
    score++;
  }
};

// this is for the restart question
let restartQuestions = () => {
  answersData = [];
  totalQuestions = questions.length;
  clearInterval(timer);
  mainDiv.classList.remove("overFlowScroll");
  quizContainer.style.height = "";
  startButton.style.display = "block";
  restartButton.style.display = "none";
  checkAnswers.style.display = "none";
  allScoreBoard.style.display = "none";
  mainDiv.innerHTML = `<p>Click Start to begin the quiz!</p>`;
  questionsCounter = 0;
  score = 0;
  retryShuffleOption();
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

let checkAnswersOptions = () => {
  mainDiv.innerHTML = ""; // Clear the main div
  quizContainer.style.height = "500px";
  mainDiv.classList.add("overFlowScroll");
  questions.forEach((question, i) => {
    let userAnswer = answersData[i]; // The user's selected answer
    let correctAnswer = question.ans;

    // Generate the options with proper highlighting
    // options: ["Javascript", "Jupitor", "Jason", "Jasper"],
    let optionsHTML = question.options
      .map((option) => {
        if (option === correctAnswer) {
          // Correct answer - highlight in green
          return `<h4 style="color: green;">✔ ${option}</h4>`;
        } else if (option === userAnswer) {
          // Wrong answer - highlight in red
          return `<h4 style="color: red;">✘ ${option}</h4>`;
        } else {
          // Other options - no special styling
          return `<h4>- ${option}</h4>`;
        }
      })
      .join("");
    if (userAnswer === "") {
      optionsHTML += `<h4 style="color: red;">User didn't select.</h4>`;
    }
    // Append the question and options to the main div
    mainDiv.innerHTML += `
      <div>
        <p><strong>Q${i + 1}: ${question.Q}</strong></p>
        ${optionsHTML}
      </div>
    `;
  });
  checkAnswers.style.display = "none";
};

// this function is for chechking all the scores presnt in the local storage
let allScoreShow = () => {
  mainDiv.innerHTML = ""; // Clear the main div
  quizContainer.style.height = "500px";
  mainDiv.classList.add("overFlowScroll");
  mainDiv.innerHTML = `<h1>Score Board !</h1>`;
  for (let i = 0; i < scoreBoard.length; i++) {
    mainDiv.innerHTML += `${i + 1})${
      scoreBoard[i].userName
    } | Percentage: ${Math.round(
      (scoreBoard[i].userScore / questions.length) * 100
    )}%<br>`;
  }

  allScoreBoard.style.display = "none";
};
