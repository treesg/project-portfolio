function getPortfolio(){
    axios
    .get(`https://ironrest.herokuapp.com/mia-aug2020-webdevs`)
    .then((res)=> {
        for (let i=0; i < res.data.length; i++) {
            document.querySelector("#list").innerHTML += `<li><a href=" ${res.data[i].website}" target="blank">${res.data[i].first_name} ${res.data[i].last_name}</a></li>`
        }
    })
}

getPortfolio()