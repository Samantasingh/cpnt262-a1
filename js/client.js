  const submit = function() {
    console.log('submit');
  }
  const button = document.querySelector('button');
  button.addEventListener("click", changeTXT);

  const p1 = document.querySelector('p')
  const text = 'Your assignment has been successfully submitted. Check your mail for the automated comfirmation email.';
  function changeTXT() {
    p1.innerHTML = text;
  }
