var quizQuestions = [
    // Pictures
    [{
        greeting: 'Introduction Quiz',
        musicPic: '<img src="/img/music.jpg">',
        sportsPic: '<img src="/img/sports.jpg">',
        moviesPic: '<img src="/img/movies.jpg">',
        doublePic: '<img src="/img/double.jpg">',
    }],
    // First question block
    [{
            question: 'Hogy hívják a Pink Floyd eredeti énekesét?',
            answer: 'Syd Barrett',
            image: '<img src="/img/sydBarrett.jpg">'
        },
        {
            question: 'Milyen betegségben szenvedett?',
            answer: 'Skizofrénia',
            false1: 'AIDS',
            false2: 'Alzheimer-kór',
            false3: 'Parkinson-kór',
            false4: 'Bőrrak',
        },
        {
            question: 'Melyik tudatmódosító szerrel élt a leggyakrabban?',
            answer: 'LSD',
            false1: 'DMT',
            false2: 'Kokain',
            false3: 'Marijuana',
            false4: 'Alkohol',
        },
        {
            question: 'Hogy hívják az utódját, akivel végül világhírre tettek szert?',
            answer: 'David Gilmour',
            false1: 'Corey Taylor',
            false2: 'Lemmy Kilmister',
            false3: 'Ozzy Osbourne',
            false4: 'Ivan Moody',
        },
        {
            question: 'Melyik albumuk volt (az eladott lemezek száma alapján) a legsikeresebb?',
            answer: 'The Dark Side of the Moon',
            false1: 'Wish You Were Here',
            false2: 'The Division Bell',
            false3: 'The Wall',
            false4: 'The Piper at the Gates of Dawn',
        },
    ],
    // Second question block
    [{
        question: 'Ki jelenleg a világ legerősebb embere?',
        answer: 'Hafthor Julius Bjornsson',
        image: '<img src="/img/thor.jpg">'
    }, {
        question: 'Ki tartja a felhúzás világrekordját erőemelő szabályrendszer szerint (472kg)?',
        answer: 'Benedikt Magnusson',
        false1: 'Eddie Hall',
        false2: 'Cailer Woolam',
        false3: 'Brian Shaw',
        false4: 'Larry Wheels',
    }, {
        question: 'Mennyi a guggolás világrekordja doppingtesztelt erőemelésben?',
        answer: '490kg',
        false1: '525kg',
        false2: '345kg',
        false3: '402kg',
        false4: '275kg',
    }, {
        question: 'Melyik harcművészeti stílus képviselője nyerte az 1., 2., és 3. UFC gálát?',
        answer: 'Brazil Jiu-Jitsu',
        false1: 'Aikido',
        false2: 'Birkózás',
        false3: 'Muay Thai',
        false4: 'Ökölvívás',
    }, {
        question: 'Ki jelenleg a UFC félnehézsúlyú bajnoka?',
        answer: 'Jon "Bones" Jones',
        false1: 'Daniel "DC" Cormier',
        false2: 'Alexander "The Mauler" Gustafsson',
        false3: 'Khabib "The Eagle" Nurmagomedov',
        false4: 'Georges St-Pierre',
    }, ],
    // Third question block
    [{
        question: 'Melyik híres rendező látható a mellékelt ábrán?',
        answer: 'Quentin Tarantino',
        image: '<img src="/img/tarantino.jpg">'
    }, {
        question: 'Quentin Tarantino melyik filmjében nem játszott Samuel L. Jackson?',
        answer: 'Becstelen Brigantyk',
        false1: 'Kill Bill Vol. 2',
        false2: 'Ponyvaregény',
        false3: 'Django Elszabadul',
        false4: 'Aljas Nyolcas',
    }, {
        question: 'Miért vette le Minnie Mink a "Mexikóiaknak és kutyáknak belépni tilos?" táblát a boltja ajtajáról, az Aljas Nyolcas c. filmben?',
        answer: 'Mert megkegyelmezett a kutyáknak',
        false1: 'Hogy a hóvihar ne fújja el',
        false2: 'Mert szétlőtték a film időrendi elején',
        false3: 'Mert xenofóbiával vádolták',
        false4: 'Nem vette le',
    }, {
        question: 'Melyik metálegyüttes nevét ihlette a Kill Bill című film egyik eleme?',
        answer: 'Five Finger Death Punch',
        false1: 'Stone Sour',
        false2: 'Amon Amarth',
        false3: 'Slipknot',
        false4: 'Cradle of Filth',
    }, {
        question: 'Melyik híres amerikai kultista szerepel az idén megjelenő "Once Upon a Time in Hollywood" c. filmben?',
        answer: 'Charles Manson',
        false1: 'Anders Breivik',
        false2: 'Shoko Asahara',
        false3: 'General Butt Naked',
        false4: 'Lorena Bobbit',
    }, ],
    // Fourth question block
    [{
        question: "Marcellus Wallace hogy néz ki?",
        answer: 'Kopasz, fekete',
        false1: 'Mint egy p*c$@',
        false2: 'Hogy mi?',
        false3: 'Nyakkendős középkorú férfi, heggel a bal arcán',
        false4: 'Nem tudni',
        image: '<img src="/img/egyPicsa.jpg">'
    }, ],
];

document.querySelector('#mainGreeter').innerHTML = quizQuestions[0].greeting;