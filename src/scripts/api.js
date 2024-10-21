return fetch('https://nomoreparties.co/v1/:wff-cohort-24'/users/me , {
  headers: {
    authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });