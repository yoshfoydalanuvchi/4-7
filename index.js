// 1.
function kvadratIldiz(son) {
  return son ** 0.5;
}

// 2.
function ayirma(son1, son2) {
  return son1 - son2;
}

// 3.
function takrorla(str, n) {
  return str.repeat(n);
}

// 4
function kub(son) {
  return Math.pow(son, 3);
}

// 5
function butunBolish(son1, son2) {
  return Math.floor(son1 / son2);
}

// 6
function asrniAniqla(yil) {
  if (yil % 100 == 0) {
    return yil / 100;
  } else {
    return Math.floor(yil / 100) + 1;
  }
}

// 7 ?

// 8
function unlilarSoni(str) {
  let unlilar = ["a", "e", "i", "o", "u"];
  let soni = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < unlilar.length; j++) {
      if (unlilar[j] == str[i]) {
        soni++;
      }
    }
  }
  return soni;
}

// 9 ..

// 10 ..

// 11
function daraja(asos, daraja) {
  return Math.pow(asos, daraja);
}

// 12
function boshliqlarniolib(str) {
  // ..
}

// 13
function birlashtirishString(str1, str2) {
  return str1 + str2;
}

// 14
function tasodifiySon(min, max) {
  // ..
}

// 15
function boshHarflarniKatta(str) {
  // ..
}
// 1
function massivYigindisi(massiv) {
  let yigindi = 0;
  for (let i = 0; i < massiv.length; i++) {
    yigindi += massiv[i];
  }
  return yigindi;
}

// 2
function engKattaElement(massiv) {
  let engKatta = massiv[0];
  for (let i = 1; i < massiv.length; i++) {
    if (massiv[i] > engKatta) {
      engKatta = massiv[i];
    }
  }
  return engKatta;
}

// 3
function teskariMassiv(massiv) {
  let teskari = [];
  for (let i = massiv.length - 1; i >= 0; i--) {
    teskari.push(massiv[i]);
  }
  return teskari;
}

// 4
function musbatSonlar(massiv) {
  let musbat = [];
  for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] > 0) {
      musbat.push(massiv[i]);
    }
  }
  return musbat;
}

// 5
function kvadratgaOshirish(massiv) {
  let kvadrat = [];
  for (let i = 0; i < massiv.length; i++) {
    kvadrat.push(massiv[i] * massiv[i]);
  }
  return kvadrat;
}

// 6 ..

// 7
function massivlarniBirlashtirish(massiv1, massiv2) {
  return massiv1.concat(massiv2);
}

// 8
function toqSonlarSoni(massiv) {
  let soni = 0;
  for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] % 2 !== 0) {
      soni++;
    }
  }
  return soni;
}

// 9
function elementlargaSonQoshish(massiv, son) {
  let natija = [];
  for (let i = 0; i < massiv.length; i++) {
    natija.push(massiv[i] + son);
  }
  return natija;
}

// 10
function engKichikElement(massiv) {
  let engKichik = massiv[0];
  for (let i = 1; i < massiv.length; i++) {
    if (massiv[i] < engKichik) {
      engKichik = massiv[i];
    }
  }
  return engKichik;
}
