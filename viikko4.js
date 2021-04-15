function te1() {
     var input1 = document.getElementById('input1').value;
     var merkit = /^[A-Z]/;
     if (!merkit.test(input1)) {
         document.getElementById('tulos1').innerHTML= 'ensimmäinen kirjain on pieni'
     }else{
        document.getElementById('tulos1').innerHTML= 'ensimmäinen kirjain on iso'

     }
}

function te2() {
    var siisti= document.getElementById('input2').value.trim();
    document.getElementById('tulos2').innerHTML = siisti;
}

function te3() {
    var input3 = document.getElementById('input3').value;
    var vokaali = input3.replace(/[0-9\s&\/\\#,+()$~%.'":*?<>{}=¤!-]/g, '');
    document.getElementById('tulos3').innerHTML = vokaali.length;
}

function te4() {
    var input4 = document.getElementById('input4').value;
    var kirjaimetNumerot = /^[a-zA-Z0-9]+$/;
    if (!kirjaimetNumerot.test(input4) ) {
        document.getElementById('tulos4').innerHTML = 'annettu on muut kuin kirjaimet ja numerot';
    } else {
        document.getElementById('tulos4').innerHTML = 'annettu on ok';
    }
}

function te5() {
    var input5 = document.getElementById('input5').value;
    var numerot = /^[0-9]+$/;
    if (!numerot.test(input5)|| input5.length!==5) {
        document.getElementById('tulos5').innerHTML= ' Korjaa postinumeroa';
    } else {
        document.getElementById('tulos5').innerHTML= ' postinumero on ok';
    }
}

function te6() {
    var input6 = document.getElementById('input6').value;
    var tunnus = input6.split('');
    if (tunnus.length!==11 || !/[-A]/.test(tunnus[6]) || !/[A-Z0-9]/.test(tunnus[10])) {
        document.getElementById('tulos6').innerHTML= ' Korjaa henkilötunnus';
    } else {
        document.getElementById('tulos6').innerHTML= 'henkilötunnus on ok'
    }
}

function te7() {
    var input7 = document.getElementById('input7').value;
    var htmlTagRe = /<\/?[\w\s="/.':;#-\/\?]+>/gi;
    if (htmlTagRe.test(input7)) {
        document.getElementById('tulos7').innerHTML= ' Annettu on HTML Tag';
    } else {
        document.getElementById('tulos7').innerHTML= ' Annettu ei ole HTML Tag';
    }
}