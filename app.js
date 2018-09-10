let phrases = ["life is a lie", "flat earth", "triangular universe", "web development", "apple pie"];
var phrase;
var lives = 5;

function disable(selector) {
    $(selector).prop("disabled", true);
}

function locationsOfSubstring(substring,string){
    var str = string;
    var indices = [];
    for(var i=0; i<str.length;i++) {
        if (str[i] === substring) indices.push(i);
    }
    return indices;
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
$(".btn__reset").click(()=>{
    $("#overlay").slideUp(600);
}
);
displayPhrase();
$("#qwerty").click((event)=>{

    if (event.target.tagName === "BUTTON") {
        const key = event.target;
        const letter = key.innerText;
        $(key).addClass("disabled");
        disable(key);

        const matches = locationsOfSubstring(letter,phrase.replace(/\s/g, ''));

        console.log(matches.length);


        for (var i = 0; i < matches.length; i += 1) {
            const match = matches[i];
            console.log("Match --  " + match);

            $(".letter").eq(match).addClass("show");
          console.log( $(".letter").eq(match));


                // indexs of the matches
                // go through each index and update th letter accoringly 

// console.log($(".letter").eq(phrase.replace(/\s/g, '').toLowerCase()));
        }
        //     if (phrase.replace(/\s/g, '').toLowerCase().locationsOfSubstring(letter) > -1) {
        //         $(".letter").eq(phrase.replace(/\s/g, '').toLowerCase().indexOf(letter)).addClass("show");


        // }
        // if (phrase.replace(/\s/g, '').toLowerCase().indexOf(letter) > -1) {

        //     loseALife();
        // }
    }

}

);

function loseALife() {
    if (lives <= 1) {
        $("#scoreboard ol li").eq(lives - 1).remove();
        alert("You lose!")

    } else {
        lives -= 1;
        $("#scoreboard ol li").eq(lives - 1).remove();
    }
}
