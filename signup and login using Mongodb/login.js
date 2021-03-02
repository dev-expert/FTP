fetch("http://localhost:2021/login")
    .then(res => res.text())
    .then(text => console.log(text))