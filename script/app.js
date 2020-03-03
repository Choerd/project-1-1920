import * as api from '../modules/data.js'
import * as render from '../modules/render.js'
import * as template from '../templates/yourBook.js'

const section = document.querySelector('section')

// Data from Excelsheet ObA
const person = [
    { "inboekdatum": "03/16/2017", "taal": "dut", "genre": "detectiveroman", "jaar_publicatie": "2017", "PPN": "408391588", "ISBN": "9789085923978", "matsrt": "JROM", "inschrijf_datum": "11/28/2012", "woonplaats": "AMSTERDAM", "geslacht": "Mannelijk", "Lener": "23267", "Locatie": "SLV", "lencat": "JGD", "exbarc": "10000037538744", "titel": "Complot op het Schedelslo", "fm": { " auteur": "Stilton" }, "vn": { " auteur": "Geronimo" }, "kast": "B-STIL", "transtype": "Verlenging", "transdat": "01/01/2018", "geboortejaar": "2010", "postcode": "1064" },
    { "inboekdatum": "12/04/2010", "taal": "dut", "genre": "", "jaar_publicatie": "2010", "PPN": "328006041", "ISBN": "9789025857226", "matsrt": "JROM", "inschrijf_datum": "11/28/2012", "woonplaats": "AMSTERDAM", "geslacht": "Mannelijk", "Lener": "23267", "Locatie": "SLV", "lencat": "JGD", "exbarc": "10000022357911", "titel": "Dolfijnen voor Drakeneila", "fm": { " auteur": "Rood" }, "vn": { " auteur": "Lydia" }, "kast": "B-ROOD", "transtype": "Verlenging", "transdat": "01/01/2018", "geboortejaar": "2010", "postcode": "1064" },
    { "inboekdatum": "07/09/2015", "taal": "dut", "genre": "detectiveroman", "jaar_publicatie": "2012", "PPN": "39218396X", "ISBN": "9789085920816", "matsrt": "JROM", "inschrijf_datum": "11/28/2012", "woonplaats": "AMSTERDAM", "geslacht": "Mannelijk", "Lener": "23267", "Locatie": "SLV", "lencat": "JGD", "exbarc": "10000034128790", "titel": "Geheim agent Nul Nul K", "fm": { " auteur": "Stilton" }, "vn": { " auteur": "Geronimo" }, "kast": "B-STIL", "transtype": "Verlenging", "transdat": "01/01/2018", "geboortejaar": "2010", "postcode": "1064" },
    { "inboekdatum": "02/22/2016", "taal": "dut", "genre": "zeeverhaal", "jaar_publicatie": "2016", "PPN": "400902745", "ISBN": "9789085923404", "matsrt": "JROM", "inschrijf_datum": "11/28/2012", "woonplaats": "AMSTERDAM", "geslacht": "Mannelijk", "Lener": "23267", "Locatie": "SLV", "lencat": "JGD", "exbarc": "10000035760126", "titel": "Muis overboord!", "fm": { " auteur": "Stilton" }, "vn": { " auteur": "Geronimo" }, "kast": "B-STIL", "transtype": "Verlenging", "transdat": "01/01/2018", "geboortejaar": "2010", "postcode": "1064" }
]

routie({
    '': async function () {
        const yourBooks = await api.getBooks(person)
        render.books(yourBooks, template.yourBook, section)
    }
})
