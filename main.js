// Server Setup

// Show Today


const date = new Date();
const day = Math.round(date.getDate());
const month = date.getMonth() + 1;



if(Number(month) == 7) {
    const today = day;
    document.getElementById(`${today}`).classList.toggle("current");
    document.getElementById('current-day').innerText = `${today}`;
    document.getElementById('complete').innerText = `${Math.round((today * 100) / 31)}`;
    document.getElementById('remaining').innerText = `${Math.round(((31 - today) * 100) / 31)}`;
    // document.getElementById('score').innerText = `${today / 31}`;

} else {

}

// Celebrate 

const button = document.getElementById('submit');

button.addEventListener('click', function() {
    if(document.getElementById('check').checked) {
        var triangle = confetti.shapeFromPath({ path: 'M20 10 L20 0 L9 10z' });
        confetti({
            shapes: [triangle]
        });
    }
});


// GALLERY POP-UP

const imCase = document.getElementById("im-case");
const xMark = document.getElementById('xmark');

document.querySelectorAll('#imagee').forEach(image => {
    image.addEventListener('click', function() {
        imCase.style.opacity = 1;
        imCase.classList.toggle('hid');
        document.getElementById('pop').src = image.getAttribute('src');
    })
})

xMark.addEventListener('click', function() {
    imCase.style.opacity = 0;
    setTimeout(function() {
        imCase.classList.toggle('hid')
    }, 400)
})




