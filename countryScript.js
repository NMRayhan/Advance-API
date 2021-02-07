fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then( data => {
        data.forEach( country=> {
            const countryDetailsDiv = document.getElementById('countryDetails');
            const countryDiv = document.createElement('div')
            countryDiv.className = "country"
            const countryName = document.createElement('h3');
            const capitalName = document.createElement('p');
            countryName.innerText = country.name;
            capitalName.innerText = country.capital;
            countryDiv.appendChild(countryName)
            countryDiv.appendChild(capitalName)
            countryDetailsDiv.appendChild(countryDiv)
        })
        
    })