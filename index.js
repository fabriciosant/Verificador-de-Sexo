function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var formAno = document.getElementById('txtano')
    var resultado = document.getElementById('res')

    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        alert('ERRO!! Verifique os dados e tente novamente!')
    }else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(formSex[0].checked){ 
            genero = 'Homem'   
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-menino.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-Hjovem.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-homem.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idoso.jpg')
            }
        } else if(formSex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-menina.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-Mjovem.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-mulher.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idosa.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectado ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}