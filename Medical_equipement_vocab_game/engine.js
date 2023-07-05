var wordsList = new Array();
var imageObj = new Image();
var imgDeck = new Array();
var wordAttempt;
var wordQuest;
var wordPlay;
var wordID;
var randImg;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-"
var word;
var letCount;
wordsList[0] = 'brace';
wordsList[1] = 'cast';
wordsList[2] = 'catheter';
wordsList[3] = 'crutches';
wordsList[4] = 'defibrillator';
wordsList[5] = 'forceps';
wordsList[6] = 'incubator';
wordsList[7] = 'sling';
wordsList[8] = 'splint';
wordsList[9] = 'stethoscope';
wordsList[10] = 'syringe';
wordsList[11] = 'tongue-depressor';
wordsList[12] = 'wheelchair';
wordsList[13] = 'ultrasound';

imgDeck[0] = 'tool0.png';
imgDeck[1] = 'tool1.png';
imgDeck[2] = 'tool2.png';
imgDeck[3] = 'tool3.png';
imgDeck[4] = 'tool4.png';
imgDeck[5] = 'tool5.png';
imgDeck[6] = 'tool6.png';
imgDeck[7] = 'tool7.png';
imgDeck[8] = 'tool8.png';
imgDeck[9] = 'tool9.png';
imgDeck[10] = 'tool10.png';
imgDeck[11] = 'tool11.png';
imgDeck[12] = 'tool12.png';
imgDeck[13] = 'tool13.png';


function initialize() {
  
    var keyLetters = document.getElementById('keyLetters');
    var curImage = document.getElementById('curImage');
    var curWord = document.getElementById('curWord');
    drawKeys();
     dispWord();
}
// drawing keyboard
function drawKeys() {
    for (var i = 0; i < alphabet.length; i++) {
        var kbLetter = document.createElement('div');
        kbLetter.innerHTML = alphabet[i];
        kbLetter.className = 'letterbox';
        kbLetter.onclick = function () {
            selectLetter(this);
        };
        key_board.appendChild(kbLetter);
    }
} // drawing keyboard

// displaying current word placeholders and images
function dispWord() {
    letCount = 0;
    wordID = Math.floor(Math.random() * wordsList.length);
    word = wordsList[wordID];
    console.log(word)
    curWord.innerHTML = '';
    for (var i = 0; i < word.length; i++) {
        var box = document.createElement('div');
        box.id = 'letter' + i;
        box.className = 'emptybox';
        box.onclick = function () {
            removeLetter(this);
        }
        curWord.appendChild(box);
    }
    curImage.src = '';
    var curImage_split = curImage.src.split('/').pop();
    curImage_split = imgDeck[wordID];
    curImage.src = 'Medical_equipement_vocab_game/images/' + curImage_split;
}
// end of displaying current word placeholders and images

// printing letters in divs for current word

function selectLetter(selected) {
    //var letter= selected.innerHTML;
    for (var i = 0; i < curWord.childElementCount; i++) {
        curWord.children[letCount].innerHTML = selected.innerHTML;
    }
    letCount++;
    if (curWord.children != "") {
        var chk_btn=document.getElementById("check_word");
        chk_btn.style.display="block"
        chk_btn.addEventListener("click",testAnswer, "false")
        
    }
    
} // end of printing letters in divs for current word

// removing letters
function removeLetter(selected) {
    selected.innerHTML = '';
    letCount = 0;
} // end of removing letters

// input test

function testAnswer() { 
    
    
    wordPlay = new Array();
    for (var i = 0; i < curWord.childElementCount; i++) {
        wordPlay.push(curWord.children[i].innerHTML);
        wordAttempt = wordPlay.join('').toLowerCase();
    }

    if (wordAttempt == word) {
        const correct_imo = document.getElementById('correct');
            
        correct_imo.style.visibility = 'visible';
        setTimeout(() => {
            
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden'; 
        randImg = imgDeck[wordID];
        removeWordImg();
        console.log(wordsList)
        if (wordsList.length == 0){
            alert("game over")
        }else dispWord();
        correct_imo.style.visibility = 'hidden';
          }, 2000); // 👈️ time in milliseconds
       
    }else{ 
        const false_imo = document.getElementById('false');
        false_imo.style.visibility = 'visible';
        
        setTimeout(() => {
            false_imo.style.visibility = 'hidden';
            for (let i = 0; i < curWord.children.length; i++) {
           
                    curWord.children[i].innerHTML="";
            
              }
              removeWordImg()
              wordsList.push(word)
              dispWord();
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 2000); // 👈️ time in milliseconds

          
          

    }

    function removeWordImg() {
       
        var pos = wordsList.indexOf(word);
        wordsList.splice(pos, 1);
        imgDeck.splice(pos, 1);
    }
    
   

}
