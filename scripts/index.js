axios
.get(`https://api.kanye.rest`)
.then((res)=> {
    console.log(res.data.quote)
    document.querySelector('#quote').innerHTML = `"${res.data.quote}" -Random Quote from Kanye West`
})