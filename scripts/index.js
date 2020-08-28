axios
.get(`https://icanhazdadjoke.com/`, {
    headers: {
        'Accept': 'text/plain'
    }
})
.then((res)=> {
    document.querySelector('#quote').innerHTML = `"${res.data}" -Random Dad Joke`
})
