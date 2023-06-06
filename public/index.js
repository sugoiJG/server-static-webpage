let ulElement = document.querySelector('.ul-container')



fetch('http://localhost:3000/data').then((res) => {
    res.json().then((data) => {
        console.log(data)
            data.forEach((singleFood) => {
            let foodLi = document.createElement('li');
            foodLi.textContent = singleFood.name;
            ulElement.appendChild(foodLi)
        })
    })
})



