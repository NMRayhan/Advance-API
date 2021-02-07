fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const country = data[i]
            const countryContainer = document.getElementById('ShowCountry');
            const countryDiv = document.createElement('div')
            countryDiv.className = "country"
            const countryDetails =
                `<h3 class="country-name">${country.name}</h3>
                <p class="capital-name">${country.capital}</p>
                <button onclick="showCountryDetails('${country.name}')">Details</button>
                `
            countryDiv.innerHTML = countryDetails;
            countryContainer.appendChild(countryDiv)
        }

    });

const showCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderCountryInfo(data[0]);
        })
}

const renderCountryInfo = country => {
    const countryDetails = document.getElementById('countryDetails');
    countryDetails.innerHTML = `
        <h2>Name : ${country.name}</h2>
        <p>Capital : ${country.capital}</p>
        <p>Numeric Code : ${country.numericCode}</p>
        <img src="${country.flag}" alt="">
        `
}