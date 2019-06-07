var title = "Introduction Quiz";
var quizQuestions = [
  // Pictures
  [
    {
      greeting: "Introduction Quiz",
      musicPic: '<img src="/img/music.jpg" alt="Pink Floyd">',
      sportsPic: '<img src="/img/sports.jpg" alt="Jon Jones">',
      moviesPic: '<img src="/img/movies.jpg" alt="Quentin Tarantino">',
      doublePic: '<img src="/img/double.jpg" alt="Samuel L. Jackson">'
    }
  ],
  // First question block
  [
    {
      question: "Hogy hívják a Pink Floyd eredeti énekesét?",
      answer: "Syd Barrett",
      image: '<img src="/img/sydBarrett.jpg">'
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
      question:
        "Melyik albumuk volt (az eladott lemezek száma alapján) a legsikeresebb?",
      answer: "The Dark Side of the Moon",
      false1: "Wish You Were Here",
      false2: "The Division Bell",
      false3: "The Wall",
      false4: "The Piper at the Gates of Dawn"
    }
  ],
  // Second question block
  [
    {
      question: "Ki jelenleg a világ legerősebb embere?",
      answer: "Hafthor Julius Bjornsson",
      image: '<img src="/img/thor.jpg">'
    },
    {
      question:
        "Ki tartja a felhúzás világrekordját erőemelő szabályrendszer szerint (472kg)?",
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
      question:
        "Melyik harcművészeti stílus képviselője nyerte az 1., 2., és 3. UFC gálát?",
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
  [
    {
      question: "Melyik híres rendező látható a mellékelt ábrán?",
      answer: "Quentin Tarantino",
      image: '<img src="/img/tarantino.jpg">'
    },
    {
      question:
        "Quentin Tarantino melyik filmjében nem játszott Samuel L. Jackson?",
      answer: "Becstelen Brigantyk",
      false1: "Kill Bill Vol. 2",
      false2: "Ponyvaregény",
      false3: "Django Elszabadul",
      false4: "Aljas Nyolcas"
    },
    {
      question:
        'Miért vette le Minnie Mink a "Mexikóiaknak és kutyáknak belépni tilos?" táblát a boltja ajtajáról, az Aljas Nyolcas c. filmben?',
      answer: "Mert megkegyelmezett a kutyáknak",
      false1: "Hogy a hóvihar ne fújja el",
      false2: "Mert szétlőtték a film időrendi elején",
      false3: "Mert xenofóbiával vádolták",
      false4: "Nem vette le"
    },
    {
      question:
        "Melyik metálegyüttes nevét ihlette a Kill Bill című film egyik eleme?",
      answer: "Five Finger Death Punch",
      false1: "Stone Sour",
      false2: "Amon Amarth",
      false3: "Slipknot",
      false4: "Cradle of Filth"
    },
    {
      question:
        'Melyik híres amerikai kultista szerepel az idén megjelenő "Once Upon a Time in Hollywood" c. filmben?',
      answer: "Charles Manson",
      false1: "Anders Breivik",
      false2: "Shoko Asahara",
      false3: "General Butt Naked",
      false4: "Lorena Bobbit"
    }
  ],
  // Fourth question block
  [
    {
      question: "Marcellus Wallace hogy néz ki?",
      answer: "Kopasz, fekete",
      false1: "Mint egy p*c$@",
      false2: "Hogy mi?",
      false3: "Nyakkendős középkorú férfi, heggel a bal arcán",
      false4: "Nem tudni",
      image: '<img src="/img/egyPicsa.jpg">'
    }
  ]
];
// Tite
document.querySelector("#pageTitle").innerHTML = title;
// h1 element
document.querySelector("#mainGreeter").innerHTML = quizQuestions[0][0].greeting;
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

// Mók
for (var i = 1; i < quizQuestions.length - 1; i++) {
  for (var j = 1; j < quizQuestions[i].length; i++) {
    randomizeQuestionOrder(i, j);
  }
}

function randomizeQuestionOrder(questionBlock, questionNumber) {
  var labelID = "#";
  console.log(labelID);
  labelID = labelID + questionBlock + questionNumber;
  console.log(labelID);
  writeContent(questionBlock, questionNumber, labelID);
}

function writeContent(questionBlock, questionNumber, labelID) {
  var keys = ["answer", "false1", "false2", "false3", "false4"];
  while (keys.length > 0) {
    var tmp = getRandomNumber(0, keys.length);
    var index = tmp + 1;
    console.log(keys[tmp]);
    labelID = labelID + index;
    console.log(labelID);
    console.log(typeof labelID);
    document.querySelector(labelID).innerHTML =
      quizQuestions[questionBlock][questionNumber].keys[tmp];
    keys.splice[tmp];
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
