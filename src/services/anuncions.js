export const buscarAnuncios = () => {
    return fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET' 
    }).then(response => response.json());
}