var submitButtonText = "Befejezés és kiértékelés";
var quizQuestions = [
  // Pictures
  [{
    greeting: "Introduction Quiz",
    musicPic: '<img src="/img/music.jpg" alt="Pink Floyd" class="Pic">',
    sportsPic: '<img src="/img/sports.jpg" alt="Jon Jones" class="Pic">',
    moviesPic: '<img src="/img/movies.jpg" alt="Quentin Tarantino" class="Pic">',
    doublePic: '<img src="/img/double.jpg" alt="Samuel L. Jackson" class="Pic">'
  }],
  // First question block
  [{
      question: "Hogy hívják a Pink Floyd eredeti énekesét?",
      answer: "Syd Barrett"
    },
    {
      question: "Milyen betegségben szenvedett?",
      answer: "Skizofrénia",
      false1: "AIDS",
      false2: "Alzheimer-kór",
      false3: "Parkinson-kór",
      false4: "Bőrrak"
    },
    {
      question: "Melyik tudatmódosító szerrel élt a leggyakrabban?",
      answer: "LSD",
      false1: "DMT",
      false2: "Kokain",
      false3: "Marijuana",
      false4: "Alkohol"
    },
    {
      question: "Hogy hívják az utódját, akivel végül világhírre tettek szert?",
      answer: "David Gilmour",
      false1: "Corey Taylor",
      false2: "Lemmy Kilmister",
      false3: "Ozzy Osbourne",
      false4: "Ivan Moody"
    },
    {
      question: "Melyik albumuk volt (az eladott lemezek száma alapján) a legsikeresebb?",
      answer: "The Dark Side of the Moon",
      false1: "Wish You Were Here",
      false2: "The Division Bell",
      false3: "The Wall",
      false4: "The Piper at the Gates of Dawn"
    }
  ],
  // Second question block
  [{
      question: "Ki jelenleg a világ legerősebb embere?",
      answer: "Hafthor Julius Bjornsson"
    },
    {
      question: "Ki tartja a felhúzás világrekordját erőemelő szabályrendszer szerint (472kg)?",
      answer: "Benedikt Magnusson",
      false1: "Eddie Hall",
      false2: "Cailer Woolam",
      false3: "Brian Shaw",
      false4: "Larry Wheels"
    },
    {
      question: "Mennyi a guggolás világrekordja doppingtesztelt erőemelésben?",
      answer: "490kg",
      false1: "525kg",
      false2: "345kg",
      false3: "402kg",
      false4: "275kg"
    },
    {
      question: "Melyik harcművészeti stílus képviselője nyerte az 1., 2., és 3. UFC gálát?",
      answer: "Brazil Jiu-Jitsu",
      false1: "Aikido",
      false2: "Birkózás",
      false3: "Muay Thai",
      false4: "Ökölvívás"
    },
    {
      question: "Ki jelenleg a UFC félnehézsúlyú bajnoka?",
      answer: 'Jon "Bones" Jones',
      false1: 'Daniel "DC" Cormier',
      false2: 'Alexander "The Mauler" Gustafsson',
      false3: 'Khabib "The Eagle" Nurmagomedov',
      false4: "Georges St-Pierre"
    }
  ],
  // Third question block
  [{
      question: "Melyik híres rendező látható a mellékelt ábrán?",
      answer: "Quentin Tarantino"
    },
    {
      question: "Quentin Tarantino melyik filmjében nem játszott Samuel L. Jackson?",
      answer: "Becstelen Brigantyk",
      false1: "Kill Bill Vol. 2",
      false2: "Ponyvaregény",
      false3: "Django Elszabadul",
      false4: "Aljas Nyolcas"
    },
    {
      question: 'Miért vette le Minnie Mink a "Mexikóiaknak és kutyáknak belépni tilos?" táblát a boltja ajtajáról, az Aljas Nyolcas c. filmben?',
      answer: "Mert megkegyelmezett a kutyáknak",
      false1: "Hogy a hóvihar ne fújja el",
      false2: "Mert szétlőtték az ajtót a film időrendi elején",
      false3: "Mert xenofóbiával vádolták",
      false4: "Nem vette le"
    },
    {
      question: "Melyik metálegyüttes nevét ihlette a Kill Bill című film egyik eleme?",
      answer: "Five Finger Death Punch",
      false1: "Stone Sour",
      false2: "Amon Amarth",
      false3: "Slipknot",
      false4: "Cradle of Filth"
    },
    {
      question: 'Melyik híres kultista szerepel az idén megjelenő "Once Upon a Time in Hollywood" c. filmben?',
      answer: "Charles Manson",
      false1: "Anders Breivik",
      false2: "Shoko Asahara",
      false3: "General Butt Naked",
      false4: "Lorena Bobbit"
    }
  ],
  // Fourth question block
  [{
    question: "Marcellus Wallace hogy néz ki?",
    answer: "Kopasz, fekete",
    false1: "Mint egy p*c$@",
    false2: "Hogy mi?",
    false3: "Nyakkendős középkorú férfi, heggel a bal arcán",
    false4: "Nem tudni"
  }]
];
// NEM VÁLTOZÓ SORRENDŰ CONTENT BEOLVASÁSA
// section pictures
document.querySelector("#musicPic").innerHTML = quizQuestions[0][0].musicPic;
document.querySelector("#sportsPic").innerHTML = quizQuestions[0][0].sportsPic;
document.querySelector("#moviesPic").innerHTML = quizQuestions[0][0].moviesPic;
document.querySelector("#doublePic").innerHTML = quizQuestions[0][0].doublePic;
// music section
var musicQuestionIDs = [
  "#singerName",
  "#illnessType",
  "#drugPreferency",
  "#successorName",
  "#biggestSuccess"
];
for (var i = 0; i < musicQuestionIDs.length; i++) {
  document.querySelector(musicQuestionIDs[i]).innerHTML =
    quizQuestions[1][i].question;
}
// sports section
var sportsQuestionIDs = [
  "#strongMan",
  "#deadlift",
  "#squat",
  "#martialArt",
  "#lightHeavyWeight"
];
for (var i = 0; i < sportsQuestionIDs.length; i++) {
  document.querySelector(sportsQuestionIDs[i]).innerHTML =
    quizQuestions[2][i].question;
}
// movies section
var moviesQuestionIDs = [
  "#director",
  "#samLJackson",
  "#mexicanDogs",
  "#killBill",
  "#ffdp"
];
for (var i = 0; i < moviesQuestionIDs.length; i++) {
  document.querySelector(moviesQuestionIDs[i]).innerHTML =
    quizQuestions[3][i].question;
}
// marcellus wallace section
document.querySelector("#marcellusWallace").innerHTML =
  quizQuestions[4][0].question;
document.getElementById("43").innerHTML = quizQuestions[4][0].answer;
document.getElementById("41").innerHTML = quizQuestions[4][0].false1;
document.getElementById("45").innerHTML = quizQuestions[4][0].false2;
document.getElementById("42").innerHTML = quizQuestions[4][0].false3;
document.getElementById("44").innerHTML = quizQuestions[4][0].false4;
// Submit button
document.getElementById("submitQuiz").innerHTML = submitButtonText;
// BEOLVASÁS VÉGE

// VÁLTOZÓ TARTALMÚ CONTENT BEOLVASÁSA

for (var i = 1; i < quizQuestions.length; i++) {
  for (var j = 1; j < quizQuestions[i].length; j++) {
    console.log("1 quizQuestions.length: " + quizQuestions.length);
    console.log("2 quizQuestions[i].length: " + quizQuestions[i].length);
    randomizeQuestionOrder(i, j);
  }
}
// Content Shuffle

function randomizeQuestionOrder(questionBlock, questionNumber) {
  var labelID = "";
  labelID = labelID + questionBlock + questionNumber;
  // Két számjegyű
  console.log("3 labelID before index: " + labelID);
  // String
  console.log("4 typeof LabelID before index: " + typeof labelID);
  writeContent(questionBlock, questionNumber, labelID);
}

function writeContent(questionBlock, questionNumber, labelID) {
  var objectKeys = Object.keys(quizQuestions[questionBlock][questionNumber]);
  objectKeys.splice(0, 1);
  var index = [1, 2, 3, 4, 5];
  var iterator = 0;
  while (index.length > 0) {
    var tmp = getRandomNumber(1, objectKeys.length + 1);
    if (index.includes(tmp)) {
      var tmpLabelID = "";
      tmpLabelID = labelID + index[index.indexOf(tmp)];
      switch (iterator) {
        case 0:
          document.getElementById(tmpLabelID).innerHTML =
            quizQuestions[questionBlock][questionNumber].answer;
          index.splice(index.indexOf(tmp), 1);
          iterator++;
          break;
        case 1:
          document.getElementById(tmpLabelID).innerHTML =
            quizQuestions[questionBlock][questionNumber].false1;
          index.splice(index.indexOf(tmp), 1);
          iterator++;
          break;
        case 2:
          document.getElementById(tmpLabelID).innerHTML =
            quizQuestions[questionBlock][questionNumber].false2;
          index.splice(index.indexOf(tmp), 1);
          iterator++;
          break;
        case 3:
          document.getElementById(tmpLabelID).innerHTML =
            quizQuestions[questionBlock][questionNumber].false3;
          index.splice(index.indexOf(tmp), 1);
          iterator++;
          break;
        case 4:
          document.getElementById(tmpLabelID).innerHTML =
            quizQuestions[questionBlock][questionNumber].false4;
          index.splice(index.indexOf(tmp), 1);
          iterator++;
          break;
      }
    } else {
      continue;
    }
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Submit section

function determineResult() {
  var pointsScored = 0;
  pointsScored = countScore();
  if (!checkMarcellusWallace()) {
    alert("Az elért pontszámod:\n\n" + pointsScored);
  } else {
    determineEndResult(pointsScored);
  }
}

function countScore() {
  var score = 0;
  for (var i = 1; i < quizQuestions.length; i++) {
    for (var j = 1; j < quizQuestions[i].length; j++) {
      score += checkAnswer(i, j);
    }
  }
  score += checkTextAnswer();
  return score;
}

function checkAnswer(block, number) {
  var radioID = "";
  radioID = radioID + block + "-" + number + "-";
  var labelID = "";
  labelID = labelID + block + number;
  for (var i = 1; i <= 5; i++) {
    var radioLabel = "";
    var radioNumber = "";
    radioLabel = labelID + i;
    radioNumber = radioID + i;
    if (document.getElementById(radioNumber).checked) {
      if (document.getElementById(radioLabel).innerHTML == quizQuestions[block][number].answer) {
        return 1;
      }
    }
  }
  return 0;
}

function checkTextAnswer() {
  var textScore = 0;
  var answer1 = "";
  var answer2 = "";
  var answer3 = "";
  answer1 = quizQuestions[1][0].answer;
  answer2 = quizQuestions[2][0].answer;
  answer3 = quizQuestions[3][0].answer;
  if (answer1 == document.getElementById('singerNameAnswer').value) {
    textScore += 2;
  }
  if (answer2 == document.getElementById('strongManAnswer').value) {
    textScore += 2;
  }
  if (answer3 == document.getElementById('directorAnswer').value) {
    textScore += 2;
  }
  return textScore;
}

function checkMarcellusWallace(score) {
  if (document.getElementById('4-1').checked ||
    document.getElementById('4-2').checked ||
    document.getElementById('4-3').checked ||
    document.getElementById('4-4').checked ||
    document.getElementById('4-5').checked) {
    return true;
  }
  return false;
}

function determineEndResult(score) {
  if (document.getElementById('4-1').checked ||
    document.getElementById('4-5').checked == true) {
    alert('Vesztettél!\n\nSamuel L. Jackson golyót röpített beléd.');
  } else if (document.getElementById('4-3').checked == true) {
    score *= 2;
    alert('Az elért pontszámod:\n\n' + score);
  } else {
    alert('Az elért pontszámod:\n\n' + '0');
  }
}