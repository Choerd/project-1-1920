const cors = 'https://cors-anywhere.herokuapp.com/'
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q='
const key = '1e19898c87464e239192c8bfe422f280'
const secret = '4289fec4e962a33118340c888699438d'
const detail = 'Default'
const config = {
    Authorization: `Bearer ${secret}`
}


export async function getPersonBooks(person) {
    const books = person.map(book => {
        const url = `${cors}${endpoint}${book.ISBN}&authorization=${key}&detaillevel=${detail}&output=json`;

        const singleBook = fetch(url, config)
            .then(res => res.json())
            .then(data => data.results)
            .catch(error => console.log(error))

        return singleBook
    })

    const allBooks = Promise.all(books)
    return allBooks
}