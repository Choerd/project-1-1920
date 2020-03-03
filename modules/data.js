export async function getBooks(person) {
    let books

    if (JSON.parse(localStorage.getItem('personBooks')) === null) {
        console.log('Data from Fetch')
        const book = person.map(book => {
            return fetchData(book.ISBN)
        })

        const rawBooks = await Promise.all(book)
        books = rawBooks.flat()

        localStorage.setItem('personBooks', JSON.stringify(rawBooks.flat()))
    } else {
        console.log('Data from LocalStorage')
        books = JSON.parse(localStorage.getItem('personBooks'))
    }

    return books
}

async function fetchData(query) {
    const cors = 'https://cors-anywhere.herokuapp.com/'
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q='
    const key = '1e19898c87464e239192c8bfe422f280'
    const secret = '4289fec4e962a33118340c888699438d'
    const detail = 'Default'
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`
    const config = {
        Authorization: `Bearer ${secret}`
    }
    const response = await fetch(url, config)
    const data = await response.json()
    return data.results
}