document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  e.preventDefault()
  const num = document.querySelector('input[type="number"]').value;

  fetch(`http://api.icndb.com/jokes/random/${num}`)
    .then(res => res.json())
    .then(data => {
      let output = "";

      if (data.type === "success") {
        if (num > 0 && num < 21) {

          data.value.forEach(eachJoke => {
            console.log(eachJoke.joke)
            output += `<li>${eachJoke.joke}</li>`
          });
        }
        else {
          output = '<h2 style="color:red;">You must enter the number between 1 and 20</h2>';
        }
        document.querySelector('.output').innerHTML = output;
      }
    })
    .catch(err => console.log(err))
}

