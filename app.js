let phrases = [
    "life is a lie",
    "flat earth",
    "triangular universe",
    "web development",
    "apple pie"
];
var phrase;
var lives = 5;

function disable(selector) {
    $(selector).prop("disabled", true);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayPhrase() {
    phrase = phrases[randomInt(0, 4)];
    console.log(phrase);
    for (var i = 0; i < phrase.length; i += 1) {
        var character = phrase[i];
        if (character === " ") {
            letter = `<li class='space'>${character}</li>`;
        } else {
            letter = `<li class='letter'>${character}</li>`;
        }
        $("#phrase ul").append(letter);
    }
}
$(".btn__reset").click(() => {
    $("#overlay").slideUp(600);
});
displayPhrase();
$("#qwerty").click((event) => {

    if (event.target.tagName === "BUTTON") {
        const key = event.target;
        const letter = key.innerText;
        $(key).addClass("disabled");
        disable(key);
            for (var i = 0; i < phrase.length; i += 1) {
                var character = phrase.replace(/\s/g, '').toLowerCase()[i];

        
                if (letter.toLowerCase() === character) {
                    $(".letter").eq(i).addClass("show");
                    console.log($(".letter").eq(i), i);
                    console.log("Match -      Letter : " + letter.toLowerCase() + " character " + character.toLowerCase());
                    console.log("\nPhrase: " + phrase + " \nIndex: " + i + "\n Character: " + character.toLowerCase() + " \nLetter: " + letter.toLowerCase());
                }

    
            }
    }
})

function loseALife() {
    if (lives <= 0) {} else {
        lives -= 1;
        $("#scoreboard ol li")[lives].remove();
    }
}

function guess(letter) {


}