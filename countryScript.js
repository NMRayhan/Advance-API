fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const country = data[i]
            const countryContainer = document.getElementById('countryDetails');
            const countryDiv = document.createElement('div')
            countryDiv.className = "country"
            const countryDetails =
                `<h3 class="country-name">${country.name}</h3>
                <p class="capital-name">${country.capital}</p>
                `
            countryDiv.innerHTML = countryDetails;
            countryContainer.appendChild(countryDiv)
        }

    });



// data.forEach( country=> {
        //     const countryDetailsDiv = document.getElementById('countryDetails');
        //     const countryDiv = document.createElement('div')
        //     countryDiv.className = "country"
        //     const countryName = document.createElement('h3');
        //     const capitalName = document.createElement('p');
        //     countryName.innerText = country.name;
        //     capitalName.innerText = country.capital;
        //     countryDiv.appendChild(countryName)
        //     countryDiv.appendChild(capitalName)
        //     countryDetailsDiv.appendChild(countryDiv)
        // })