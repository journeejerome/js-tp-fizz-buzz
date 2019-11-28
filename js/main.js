(function () {
  const FizzBuzz = {
    init() {
      document.body.className = 'js-enabled';
      document.querySelector('.sr-only').insertAdjacentHTML('afterend', `<ol id="fizzbuzz" class="grid">
        </ol>`);
      this.ol = document.querySelector('#fizzbuzz');
      this.boucle(this.ol);
      //window.addEventListener('scroll', this.scroll);
    },
    boucle(ol) {
      for (this.chiffre = 0; this.chiffre <= 100; this.chiffre += 1) {
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
    },
    // scroll() {
    //   this.ol = document.querySelector('#fizzbuzz');
    //   this.chiffreActu = this.chiffre + 10;
    //
    //   for (this.chiffre = 101; this.chiffre <= this.chiffreActu; this.chiffre += 1) {
    //     if (this.chiffre % 3 === 0 && this.chiffre % 5 === 0) {
    //       ol.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
    //     } else if (this.chiffre % 5 === 0) {
    //       ol.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
    //     } else if (this.chiffre % 3 === 0) {
    //       ol.insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
    //     } else {
    //       ol.insertAdjacentHTML('beforeend', `<li>${this.chiffre}</li>`);
    //     }
    //   }
    //   this.chiffre = this.chiffre + 10;
    //   this.chiffreActu = this.chiffreActu + 10;
    // },
  };
  FizzBuzz.init();
})()

