let questionsCounter = 0;
let nextQuestion = (e) => {
  e.preventDefault();
  let radoivalue = document.getElementsByTagName("input");
  // console.log(radoivalue);
  for (let i = 0; i < radoivalue.length; i++) {
    if (radoivalue[i].checked) {
      console.log(radoivalue[i].value);
      checkAns(radoivalue[i].value);
    }
  }
  questionsCounter++;
  renderQuestions();
};

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
];

let renderQuestions = () => {
  let mainDiv = document.getElementById("main");
  if (questions.length > questionsCounter) {
    mainDiv.innerHTML = `
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
        <input type="submit" />
      </form>`;
    return;
  }
  mainDiv.innerHTML = `Your score : ${score}`;
};

let score = 0;
let checkAns = (ans) => {
  if (questions[questionsCounter].ans === ans) {
    console.log("User selected the rigth answer ");
    score++;
  }
  console.log(score);
};
