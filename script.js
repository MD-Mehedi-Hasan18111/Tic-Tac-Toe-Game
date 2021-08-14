let turn = document.getElementById('turn');
let boxes = document.querySelectorAll('#main div');
let x_or_o = 0;

const winner = (box1, box2, box3) => {
    box1.classList.add('win');
    box2.classList.add('win');
    box3.classList.add('win');
    turn.innerHTML = box1.innerHTML + " is Win!";
}

const checkBox = () => {
    let box1 = document.getElementById('box-1');
    let box2 = document.getElementById('box-2');
    let box3 = document.getElementById('box-3');
    let box4 = document.getElementById('box-4');
    let box5 = document.getElementById('box-5');
    let box6 = document.getElementById('box-6');
    let box7 = document.getElementById('box-7');
    let box8 = document.getElementById('box-8');
    let box9 = document.getElementById('box-9');


    if (box1.innerHTML !== '' && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        winner(box1, box2, box3);
    }

    if (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        winner(box4, box5, box6);
    }

    if (box7.innerHTML !== '' && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        winner(box7, box8, box9);
    }

    if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        winner(box1, box4, box7);
    }

    if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        winner(box2, box5, box8);
    }

    if (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        winner(box3, box6, box9);
    }

    if (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        winner(box1, box5, box9);
    }

    if (box3.innerHTML !== '' && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        winner(box3, box5, box7);
    }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
            if (x_or_o % 2 === 0) {
                this.innerHTML = 'X';
                turn.innerHTML = 'O turn now!';
                checkBox();
                x_or_o++;
            }
            else {
                this.innerHTML = 'O';
                turn.innerHTML = 'X turn now!';
                checkBox();
                x_or_o++;
            }
        }
    }
}

// play again

const replay = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('win');
        boxes[i].innerHTML = "";
        turn.innerHTML = "Play";
    }
}