function results() {
    var helyes1 = document.getElementById('sharknado2');
    var helyes2 = document.getElementById('regina');
    var helyes3 = document.getElementById('sotetUrasag');
    var helyes4 = document.getElementById('hiMark');
    var helyes5 = document.getElementById('beleesett');
    var helyes6 = document.getElementById('money');
    var helyes7 = document.getElementById('becauseLifeIs');
    var helyes8 = document.getElementById('ayahuasca');
    var result = 0;
    var result1 = 0;
    var result2 = 0;
    var result3 = 0;
    var result4 = 0;
    var result5 = 0;
    var result6 = 0;
    var result7 = 0;
    var result8 = 0;

    if (helyes1.checked == true) {
        result1 = result + 1
    } else {
        result1 = result + 0
    }
    if (helyes2.checked == true) {
        result2 = result1 + 1
    } else {
        result2 = result1 + 0
    }
    if (helyes3.checked == true) {
        result3 = result2 + 1
    } else {
        result3 = result2 + 0
    }
    if (helyes4.checked == true) {
        result4 = result3 + 1
    } else {
        result4 = result3 + 0
    }
    if (helyes5.checked == true) {
        result5 = result4 + 1
    } else {
        result5 = result4 + 0
    }
    if (helyes6.checked == true) {
        result6 = result5 + 1
    } else {
        result6 = result5 + 0
    }
    if (helyes7.checked == true) {
        result7 = result6 + 1
    } else {
        result7 = result6 + 0
    }
    if (helyes8.checked == true) {
        result8 = result7 + 1
    } else {
        result8 = result7 + 0
    }
    alert(result8 + ' pontod van. Gratulálok!');
};