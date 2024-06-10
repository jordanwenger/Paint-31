
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




