import * as api from '../modules/data.js'
import * as clean from '../modules/cleaning.js'
import * as render from '../modules/render.js'
import * as template from '../templates/book.js'
import * as helper from '../modules/helperFunctions.js'

const main = document.querySelector('main')
const personsBooks = document.querySelector('.yourBooks')
const sampleBooks = document.querySelector('.sampleBooks')
const detailBooks = document.querySelector('.detailBook')


// Data from Excelsheet ObA
const person = [
    { "inboekdatum": "03/16/2017", "taal": "dut", "genre": "detectiveroman", "jaar_publicatie": "2017", "PPN": "408391588", "ISBN": "9789085923978", "matsrt": "JROM", "inschrijf_datum": "11/28/2012", "woonplaats": "AMSTERDAM", "geslacht": "Mannelijk", "Lener": "23267", "Locatie": "SLV", "lencat": "JGD", "exbarc": "10000037538744", "titel": "Complot op het Schedelslo", "fm": { " auteur": "Stilton" }, "vn": { " auteur": "Geronimo" }, "kast": "B-STIL", "transtype": "Verlenging", "transdat": "01/01/2018", "geboortejaar": "2010", "postcode": "1064" },
    { "inboekdatum": "12/04/2010", "taal": "dut", "genre": "", "jaar_publicatie": "2010", "PPN": "328006041", "ISBN": "9789025857226", "matsrt": "JROM", "inschrijf_datum": "11/28/2012", "woonplaats": "AMSTERDAM", "geslacht": "Mannelijk", "Lener": "23267", "Locatie": "SLV", "lencat": "JGD", "exbarc": "10000022357911", "titel": "Dolfijnen voor Drakeneila", "fm": { " auteur": "Rood" }, "vn": { " auteur": "Lydia" }, "kast": "B-ROOD", "transtype": "Verlenging", "transdat": "01/01/2018", "geboortejaar": "2010", "postcode": "1064" },
    { "inboekdatum": "07/09/2015", "taal": "dut", "genre": "detectiveroman", "jaar_publicatie": "2012", "PPN": "39218396X", "ISBN": "9789085920816", "matsrt": "JROM", "inschrijf_datum": "11/28/2012", "woonplaats": "AMSTERDAM", "geslacht": "Mannelijk", "Lener": "23267", "Locatie": "SLV", "lencat": "JGD", "exbarc": "10000034128790", "titel": "Geheim agent Nul Nul K", "fm": { " auteur": "Stilton" }, "vn": { " auteur": "Geronimo" }, "kast": "B-STIL", "transtype": "Verlenging", "transdat": "01/01/2018", "geboortejaar": "2010", "postcode": "1064" },
    { "inboekdatum": "02/22/2016", "taal": "dut", "genre": "zeeverhaal", "jaar_publicatie": "2016", "PPN": "400902745", "ISBN": "9789085923404", "matsrt": "JROM", "inschrijf_datum": "11/28/2012", "woonplaats": "AMSTERDAM", "geslacht": "Mannelijk", "Lener": "23267", "Locatie": "SLV", "lencat": "JGD", "exbarc": "10000035760126", "titel": "Muis overboord!", "fm": { " auteur": "Stilton" }, "vn": { " auteur": "Geronimo" }, "kast": "B-STIL", "transtype": "Verlenging", "transdat": "01/01/2018", "geboortejaar": "2010", "postcode": "1064" }
]

routie({
    '': async function () {
        helper.removeDom(main)

        // Books from person
        const yourBooks = await api.getPersonalBooks(person, 'personBooks')
        const cleanedBooks = clean.ISBN(yourBooks)
        render.books(cleanedBooks, template.overviewPersonBook, main)

        // Simular books
        const genresOfBooks = helper.filterGenres(yourBooks)
        const booksPerGenre = await api.getBooksFromCategory(genresOfBooks, 'genreBooks')
        const cleanedGenreBooks = clean.ISBN(booksPerGenre)
        const randomizedBooks = helper.shuffleArray(cleanedGenreBooks)
        render.books(randomizedBooks, template.overviewGenreBook, main)

        const personBooks = document.querySelectorAll('.yourBooks article')
        filterThings(personBooks)
    },
    ':ISBN': async function (isbn) {
        helper.removeDom(main)

        const yourBooks = await api.getPersonalBooks(person, 'personBooks')
        const cleanedBooks = clean.ISBN(yourBooks)
        const genresOfBooks = helper.filterGenres(yourBooks)
        const booksPerGenre = await api.getBooksFromCategory(genresOfBooks, 'genreBooks')
        const cleanedGenreBooks = clean.ISBN(booksPerGenre)

        const allBooks = cleanedBooks.concat(cleanedGenreBooks)

        const clickedBook = allBooks.filter(book => book.isbn === isbn)
        render.books(clickedBook, template.detailBook, main)
    }
})

function filterThings(articles) {
    let genres = []

    articles.forEach(element => {
        if (element.attributes[1] != undefined) {
            genres.push(element.attributes[1].value)
        }
    })

    console.log(genres)

    articles.forEach(article => {
        const articles = document.querySelectorAll('.sampleBooks article')

        article.addEventListener('click', async function () {
            if (this.getAttribute('recommend') == "on") {
                this.setAttribute('recommend', 'off')

                genres.splice(genres.indexOf(this.getAttribute('genre')), 1)

                articles.forEach((element, i) => {
                    const elementGenre = element.getAttribute('genre')

                    genres.forEach(genre => {
                        if (elementGenre.includes(genre)) {
                            element.setAttribute('genre', genre)
                        }
                    })

                    if (genres.indexOf(element.getAttribute('genre')) > -1) {
                        element.style.display = 'block'
                    } else {
                        element.style.display = 'none'
                    }
                })


            } else if (this.getAttribute('recommend') == "off") {
                this.setAttribute('recommend', 'on')

                genres.push(this.getAttribute('genre'))

                genres.forEach(genre => {
                    console.log(genre)
                })

                console.log(genres)
            }
        })
    })
}