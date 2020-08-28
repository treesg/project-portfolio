axios
.get(`https://api.kanye.rest`)
.then((res)=> {
    document.querySelector('#quote').innerHTML = `"${res.data.quote}" -Random Quote from Kanye West`
})
