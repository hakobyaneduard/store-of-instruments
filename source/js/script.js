(function () {
  const contactCountryChangeBtn = document.querySelector('.contact-country__change-current');
  const contactCountryOtherBtn = document.querySelectorAll('.contact-country__change-btn');

  if (contactCountryChangeBtn && contactCountryOtherBtn) {
    contactCountryChangeBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      this.classList.toggle('active');
    })

    contactCountryOtherBtn.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        const currentCountry = contactCountryChangeBtn.textContent;
        contactCountryChangeBtn.textContent = this.textContent
        this.textContent = currentCountry;
      })
    });
  }

})();
