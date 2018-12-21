$(document).ready(function () {


    var random = Math.floor(Math.random() * 120) + 19;
    var targetNumber;

    targetNumber = random;
    $('#target-number').text(targetNumber);

    var numberOne = Math.floor(Math.random() * 12) + 1;
    var numberTwo = Math.floor(Math.random() * 12) + 1;
    var numberThree = Math.floor(Math.random() * 12) + 1;
    var numberFour = Math.floor(Math.random() * 12) + 1;






    var counter = 0;
    var win = 0;
    var loss = 0;
    $('.wins').text('Wins: ' + win);
    $('.loss').text('Losses: ' + loss);


    function newGame() {
        random = Math.floor(Math.random() * 120) + 19;
        targetNumber = random;
        $('#target-number').text(targetNumber);

        numberOne = Math.floor(Math.random() * 12) + 1;
        numberTwo = Math.floor(Math.random() * 12) + 1;
        numberThree = Math.floor(Math.random() * 12) + 1;
        numberFour = Math.floor(Math.random() * 12) + 1;
        counter = 0;
        $('#counter').text(counter);
    }

    function wins() {
        alert('You Win!');
        win++;
        $('.wins').text('Wins: ' + win)
        newGame();
    }

    function lose() {
        alert('You Lose!');
        loss++;
        $('.loss').text('Losses: ' + loss);
        newGame();
    }


    $('#numberOne').on('click', function() {
        counter = counter + numberOne;
        $('#counter').text(counter);
        console.log(numberOne);
            if(counter === targetNumber) {
                wins();
            } 
            else if(counter > targetNumber) {
                lose();
            }
    })

    $('#numberTwo').on('click', function() {
        counter = counter + numberTwo;
        $('#counter').text(counter);
        console.log(numberTwo);
            if(counter === targetNumber) {
                wins();
            } 
            else if(counter > targetNumber) {
                lose();
            }
    })
    $('#numberThree').on('click', function() {
        counter = counter + numberThree;
        $('#counter').text(counter);
        console.log(numberThree);
            if(counter === targetNumber) {
                wins();
            } 
            else if(counter > targetNumber) {
                lose();
            }
    })
    $('#numberFour').on('click', function() {
        counter = counter + numberFour;
        $('#counter').text(counter);
        console.log(numberFour);
            if(counter === targetNumber) {
                wins();
            } 
            else if(counter > targetNumber) {
                lose();
            }
    })
});