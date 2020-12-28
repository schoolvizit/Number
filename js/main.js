function click() {
  let input = document.querySelector('.content__input');
  let yes = document.querySelector('.yes');
  let no = document.querySelector('.no');
  // let out = document.querySelector('.content__out');
  let val = input.value;
      val = parseInt(val);

  if (isNaN(val)) {
    alert('Введите цифру от 0 до 10');
  }
  else {
    if (val == random) {
      out = document.querySelector('.content__out-1 img').style.display = 'block';
      yes.play();
      setTimeout(location.reload.bind(location), 10000);
    }
    else {
      no.play();
      alert('Не верно!!!');
      input.value = '';
      // out = document.querySelector('.content__out-2 img').style.display = 'block';
      // setTimeout(location.reload.bind(location), 3000);
    }
  }
}

document.querySelector('.btn').onclick = click;

let random = Math.random();
    random = random * 10;
    random = Math.round(random);
    console.log(random);



