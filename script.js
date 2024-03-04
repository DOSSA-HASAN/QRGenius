const generateCode = document.querySelector('#generateQR');

const userInput = document.querySelector('#linkInput');

const QRimg = document.querySelector('#QRimg');

const imgContainer = document.querySelector('#imgContainer');




generateCode.addEventListener('click', ()=>{

    imgContainer.style.marginTop = '50px';
    imgContainer.style.border = '1px solid black';

    let linkText = userInput.value;

    let apiUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${linkText}&amp;size=100x100`

    QRimg.setAttribute('src', apiUrl)

    userInput.value= ''



})

// margin-top: 50px; border: 1px solid black;