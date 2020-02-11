document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault()
    const num = document.querySelector('input[type="number"]').value;
    let output = "";
    fetch(`http://api.icndb.com/jokes/random/${num}`)
        .then(res => res.json())
        .then(data => {
            if (data.type === "success" && data.value.length > 0) {


                data.value.forEach(eachJoke => {
                    console.log(eachJoke.joke)
                    output += `<li>Hi</li>`
                });
            }
        })
        .catch(err => console.log(err))
    document.querySelector('.results').innerHTML = output;
}

