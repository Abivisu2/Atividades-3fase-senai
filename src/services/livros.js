export const buscarLivros = () => {
    return fetch('https://fakerapi.it/api/v1/books/', {
        method: 'GET'
    }).then (response => response.json());
}