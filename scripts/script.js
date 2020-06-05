//'use strict';
window.onload = () => {
  let bttns = document.querySelectorAll('.pnav__buton');
  let cards = document.querySelectorAll('.pcards__item');

  for (let i = 0; i < bttns.length; i++) {
    let Bdata = bttns[i].dataset.b;

    bttns[i].onclick = () => {
      for (let i = 0; i < cards.length; i++) {
        let Cdata = cards[i].dataset.c;

        if (Cdata == Bdata || Bdata == 'all') {
          //   //элемент.classList.toggle('класс');
          let aval = cards[i].classList.contains('hidden');

          if (aval) {
            cards[i].classList.remove('hidden');
          }
        } else {
          cards[i].classList.add('hidden');
        }
        // cards[i].classList.toggle('hidden');}
      }
    };
  }
  //---------------
  // let Tags = document.querySelectorAll('.pcards__about');
  // let Txt = document.querySelectorAll('.pcards__text');

  // for (let i = 0; i < Txt.length; i++) {
  //   var Div = window.getComputedStyle(Tags[i]);
  //   let Dh = Math.round(parseFloat(Div.height));
  //   // console.log(Dh);
  //   var Text = window.getComputedStyle(Txt[i]);
  //   let Tm = parseFloat(Text.margin);
  //   let Th = Math.floor(parseFloat(Text.height));
  //   // console.log(Th);
  //   if (!Dh <= Th + Tm * 2) {
  //     //console.log('Вычисления нужны');
  //     let Calc = Math.round((Dh - Th) / 2);
  //     // console.log(Calc);
  //     Txt[i].style.marginTop = `${Calc}px`;
  //   } else {
  //     // console.log('Вычисления не нужны');
  //   }
  // }
  //----------------------------------------------
  // Напишите функцию camelize(str), которая преобразует строки вида
  // «my-short-string» в camelCase

  function camelize(strq) {
    //console.log(arr);
  }

  let str = 'толик-петька-васька-олежка';
  let arr = str.split('-');
  console.log(arr);
  let r = '';
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let k = '';
    for (let j = 1; j < val.length; j++) {
      k += val[j];
    }
    r += val[0].toUpperCase() + k;
  }
  console.log(r);

  ///
}; //window.onload;
