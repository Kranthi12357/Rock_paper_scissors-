let user_score = 0;
let comp_score = 0;
const user_span = document.getElementById('user-score');
const comp_span = document.getElementById('comp-score');
const result = document.querySelector('.result > p');
const score_board = document.querySelector('.score-board');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

function compc() {
    const choices = ['r','p','s'];
    let i = [(Math.floor(Math.random()*3))];
    return choices[i];
    }
function convert(letter) {
    if (letter === 'r') return 'rock';
    if (letter === 'p') return 'paper';
    return 'scissor';
}
function win(user_choice,comp_choice) {
 user_score++;
 let s = "user".fontsize(3).sub();
 let p = "user".fontsize(3).sub();
 user_span.innerHTML = user_score;
 comp_span.innerHTML = comp_score;
 result.innerHTML = `${convert(user_choice)}${s}  beats  ${convert(comp_choice)}${p} you win`;

}
function lose(user_choice,comp_choice) {
    comp_score++;
    let s = "user".fontsize(3).sub();
    let p = "user".fontsize(3).sub();
    user_span.innerHTML = user_score;
    comp_span.innerHTML = comp_score;
    result.innerHTML = `${convert(user_choice)}${s}  beats  ${convert(comp_choice)}${p} you lost `;

}
function draw(user_choice,comp_choice) {
    let s = "user".fontsize(3).sub();
    let p = "user".fontsize(3).sub();
    user_span.innerHTML = user_score;
    comp_span.innerHTML = comp_score;
    result.innerHTML = `${convert(user_choice)}${s}  beats  ${convert(comp_choice)}${p} draw`;
}

function game(user_choice) {
    comp_choice = compc()
    console.log(comp_choice)
    switch (user_choice+comp_choice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(user_choice,comp_choice)
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(user_choice,comp_choice)
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            draw(user_choice,comp_choice)
            break;
    }

}





function main() {
    rock.addEventListener('click', function () {
        game('r')
    })

    paper.addEventListener('click', function () {
        game('p')
    })

    scissor.addEventListener('click', function () {
        game('s')
    })
}
main()