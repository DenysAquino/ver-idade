function verificar () {
    let ano = new Date
    let ano1 = ano.getFullYear()
    let anoF = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if (anoF.value == 0 || Number(anoF.value) > ano1 ) {
        alert('Data inválida tente novamente!')
    }else {
        let fSex = document.getElementsByName('radsex')
        let idade = ano1 - Number(anoF.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fSex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    //Criança
                    img.setAttribute('src', 'foto-crianca-m.jpg')
                }else if (idade < 20) {
                    //Jovem
                    img.setAttribute('src', 'jovem-m.jpg')
                }else if(idade <= 50) {
                    //Adulto
                    img.setAttribute('src', 'adulto-m.jpg')
                }else {
                    //Idoso
                    img.setAttribute('src', 'idoso-m.jpg')
                }
            }else {
                genero = 'Mulher'
                if (idade < 10) {
                    //Criança
                    img.setAttribute('src', 'crianca-f.jpg')
                }else if (idade < 20) {
                    //Jovem
                    img.setAttribute('src', 'jovem-f.jpg')
                }else if(idade < 50) {
                    //Adulta
                    img.setAttribute('src', 'adulto-f.jpg')
                }else {
                   //Idosa
                   img.setAttribute('src', 'idoso-f.jpg')
                }
        }res.innerHTML = `Identificamos ${genero} de ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign = 'center'
        
    }    
   
}