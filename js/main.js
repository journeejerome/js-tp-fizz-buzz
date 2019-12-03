(function () {
  const FizzBuzz = {
    init() {
      document.body.className = 'js-enabled';
      document.querySelector('.sr-only').insertAdjacentHTML('afterend', `<ol id="fizzbuzz" class="grid">
        </ol>`);
      this.ol = document.querySelector('#fizzbuzz');
      this.boucle(this.ol, 1);
    },
    scroll(i){
      if(window.pageYOffset + window.innerHeight === document.body.clientHeight){
        this.boucle(this.ol,i);
      }
    },
    boucle(ol, i = 1) {
      for (this.chiffre = i; this.chiffre < (i + 100); this.chiffre += 1) {
        if (this.chiffre % 3 === 0 && this.chiffre % 5 === 0) {
          ol.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
        } else if (this.chiffre % 5 === 0) {
          ol.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
        } else if (this.chiffre % 3 === 0) {
          ol.insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
        } else {
          ol.insertAdjacentHTML('beforeend', `<li>${this.chiffre}</li>`);
        }
      }
      console.log(window.pageYOffset + window.innerHeight);
      console.log(document.body.clientHeight);
      window.addEventListener('scroll', () => {
        this.scroll(this.chiffre);
      });

    },
  };
  FizzBuzz.init();
})()

