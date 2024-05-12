let imgBox = document.getElementById('imgBox')
let qrImage = document.getElementById('qrImage')
let qrText = document.getElementById('qrText')

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        imgBox.classList.add('show-img')
    } else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        }, 1000)
    }
}

function downloadQR() {
    const link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'qr_code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

