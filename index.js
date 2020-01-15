let queryString = window.location.search;
console.log(queryString);
let urlParams = new URLSearchParams(queryString);
let perfil = urlParams.get('perfil')
console.log(perfil);