function evaluation() {
    var firstAnswer = document.querySelectorAll('INPUT[name=animal]');
    // var secondAnswer = document.querySelectorAll('INPUT[name:award]');
    // var thirdAnswer = document.querySelectorAll('INPUT[name:common]');
    // var fourthAnswer = document.querySelectorAll('INPUT[name:whoWas]');
    // var fifthAnswer = document.querySelectorAll('INPUT[name:sit]');

    for (var i = 0; i < firstAnswer.length; i++)
        if (firstAnswer[i].checked == true) {
            alert(firstAnswer[i].value);
        }


    // for (var i = 0; i < secondAnswer.length; i++)
    //     if (secondAnswer[i].checked == true) {
    //         var secondReply = parseInt(secondAnswer[i].value);
    //     }
    // for (var i = 0; i < thirdAnswer.length; i++)
    //     if (thirdAnswer[i].checked == true) {
    //         var thirdReply = parseInt(thirdAnswer[i].value);
    //     }
    // for (var i = 0; i < fourthAnswer.length; i++)
    //     if (fourthAnswer[i].checked == true) {
    //         var fourthReply = parseInt(fourthAnswer[i].value);
    //     }
    // for (var i = 0; i < fifthAnswer.length; i++)
    //     if (fifthAnswer[i].checked == true) {
    //         var fifthReply = parseInt(fifthAnswer[i].value);
    //     }

    // var pontSzam = firstReply + secondReply + thirdReply + fourthReply + fifthReply

    // if (pontSzam < 3) {
    //     alert('Stupid vagy!');
    // } else if (pontSzam < 5) {
    //     alert('Egész ügyes!');
    // } else {
    //     alert('Nagyon ügyes!');
    // }

}