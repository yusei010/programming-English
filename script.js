const wordList = [ 

{ japanese: "関数型プログラミングがソフトウェア開発者の間で注目されている。", english: "Functional programming has been gaining popularity among software developers." }, 

{ japanese: "走る", english: "run" }, 

{ japanese: "大きい", english: "big" } 

]; 

 

function generateWordList() { 

const container = document.getElementById("wordContainer"); 

 

wordList.forEach((word, index) => { 

const block = document.createElement("div"); 

 

// 日本語表示 

const jp = document.createElement("p"); 

jp.textContent = `意味：${word.japanese}`; 

block.appendChild(jp); 

 

// 英語表示ボタン 

const button = document.createElement("button"); 

button.textContent = "英語を見る・聞く"; 

button.onclick = () => showAnswer(index); 

block.appendChild(button); 

 

// 英語の表示エリア 

const answer = document.createElement("p"); 

answer.id = `answer${index}`; 

answer.style.color = "blue"; 

block.appendChild(answer); 

 

container.appendChild(block); 

}); 

} 

 

function showAnswer(index) { 

const english = wordList[index].english; 

const answerElement = document.getElementById(`answer${index}`); 

answerElement.textContent = english; 

 

// 読み上げ機能 

const utterance = new SpeechSynthesisUtterance(english); 

utterance.lang = "en-US"; // アメリカ英語の音声で読み上げ 

utterance.rate = 1; 

speechSynthesis.speak(utterance); 

} 

 

generateWordList(); 
    


