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
    console.log(phrase);
    if (event.target.tagName === "BUTTON") {
        const key = event.target;
        const letter = key.textContent;
        $(key).addClass("disabled");
        disable(key);
            for (var i = 0; i < phrase.length; i += 1) {
                var character = phrase[i];
        // console.log(phrase[i],phrase.length, i);
        console.log("Letter : " + letter.toLowerCase() + " character " + character.toLowerCase());
                if (letter.toLowerCase() === character.toLowerCase()) {
                    $(".letter").eq(i).addClass("show");
                    console.log("Match -      Letter : " + letter.toLowerCase() + " character " + character.toLowerCase());
                }

                console.log("Letter : " + letter.toLowerCase() + " character " + character.toLowerCase());
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