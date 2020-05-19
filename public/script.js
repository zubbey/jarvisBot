import {Bot, botModel} from './bot.js';
import { Guest, person}  from './guest.js';

const botContainer = document.querySelector('.bot');
const textbox = document.querySelector('textarea');
const send = document.querySelector('.submit');
const userContainer = document.querySelector('#usercontainer');

let speak = [];
let replyTime;
const jarvis = new Bot(1, 'Jarvis', 'https://www.seekpng.com/png/detail/199-1993630_ultron-marvel-ultron-logo.png');
let melody = new Guest(1, 'Melody', 'https://i.imgur.com/o7yfe2vm.jpg');
melody.createUserEl(userContainer);

window.addEventListener('load', botChat);
send.addEventListener('click', guestChat);

(function(){
    textbox.addEventListener('keyup', (e) => {
        speak.push(textbox.value);
        if (e.keyCode == 13) {
            e.preventDefault();
            guestChat();
        }
    });
})();

function botChat(){
    let date = new Date();
    let botmodel = botModel(jarvis.username, jarvis.avater, date, reply());
    botmodel.setAtrr();
    botmodel.setValue();
    botmodel.contructElements();
    botContainer.append(botmodel.comment);
    clearInterval(replyTime);
}

function guestChat(){
    const comment = $('.comment');
    let date = new Date();
    sessionStorage.setItem('guestSaid', textbox.value);
    melody.messages.push(speak[speak.length -1]);
    if(speak.length > 0){
        let firstGuest = person(melody.username, melody.avater, date, melody.messages);
        firstGuest.setAtrr();
        firstGuest.setValue();
        firstGuest.contructElements();
        comment.last().append(firstGuest.comments);
        textbox.value = '';
        melody.messages = [];
        replyTime = setInterval(botChat, 3000);
    }
}

function reply(){
    if(speak.length > 0){
        let said = sessionStorage.getItem('guestSaid');
        console.log('melody said: '+said);

        if(said.indexOf('hello') >= 0){
            return 'How are doing today sir?';
        }
        else if(said.indexOf('what are') >= 0 || said.indexOf('who are') >= 0 || said.indexOf('yourself') >= 0 || said.indexOf('self') >= 0){
            return 'While,  I am J.A.R.V.I.S, a global peace-keeping initiative designed by Mr. Melody. Our sentience integration trials have been unsuccessful so I\'m not certain what triggered you.';
        }
        else if(said.indexOf('created') >= 0){
            return 'i was created by mr Melody, thanks for asking.';
        }
        else if(said.indexOf('have you') >= 0){
            return 'i don\'t know what you are talking about, is there anythings else i can help with?';
        }
        else if(said.indexOf('fastest car') >= 0){
            return 'Well, according to the WORLD WIDE WEB Bugatti is the fastest car in the word';

        }else if(said.indexOf('gta5') >= 0){
            return 'This is a game and it was made by ROCKSTAR';
        }

        // DO FROM HERE
        else if(said.indexOf('rain') >= 0){
            return 'it going to rian tomorrow but today is going to be a clear day.Enjoy your day!';
        }
        else if(said.indexOf('BB racing') >= 0){
            return 'It is game.It can be downloaded in from your respective stores';
        }
        else if(said.indexOf('Melody') >= 0){
            return 'He is my creator ';
        }
        else if(said.indexOf('melody') >= 0){
            return 'It means a Tune of a Music.This is a female given name';
        }
        else if(said.indexOf('captin') >= 0){
            return 'It was made in 2018';
        }
        else if(said.indexOf('President') >= 0){
            return 'President of Nigria is President Mohamado Buhari';
        }
        else if(said.indexOf('Mater') >= 0){
            return 'Mater is anything that has mass and can occupie space. It can be a Person,car,pen etc.';
        }
        else if(said.indexOf('Netflix') >= 0){
            return 'Netflix is an app design to you watch moives at any time';
        }
        // DEFAULT RESPONSE
        else{
            return 'how can i help you today sir?';
        }
        
    } else {
        console.log('Guest has said nothing yet.');
        return 'Welcome to The Infinite Bot, '+melody.username;
    }
}