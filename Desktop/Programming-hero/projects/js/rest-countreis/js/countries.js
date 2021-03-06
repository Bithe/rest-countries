const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displatCountreis(data))
}
const displatCountreis = countries => {
    //  

    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    console.log(countries[0]);

    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
    <div class="country">
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
    </div>
    `
}

loadCountries();