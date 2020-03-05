export const overviewPersonBook = `
<h1>Jouw boeken</h1>
<p>Zet de boeken uit die je niet in je aangeraden boeken wilt zien</p>
<section class="yourBooks">
{{#.}}

{{#genres}}<article recommend="on" genre={{genres}}>{{/genres}}
{{^genres}}<article>{{/genres}}
    <a>
        <div>
            <div class="front">
                <img src={{coverimages.1}}>
            </div>

            <div class="back">
                <h1>{{titles.0}}</h1>

                {{#summaries.0}}<p>{{summaries.0}}</p>{{/summaries.0}}
                {{^summaries.0}}<p>Geen samenvatting beschikbaar</p>{{/summaries.0}}
            </div>
        </div>
    </a>
</article>
{{/.}}
</section>
`

export const overviewGenreBook = `
<h1>Aangeraden boeken</h1>
<p>Boeken die mogelijk interessant zijn op basis van jouw leeshistorie</p>
<section class="sampleBooks">
{{#.}}
    <article genre={{genres}}>
    <a href="#{{isbn}}">
        <div>
            <div class="front">
                <img src={{coverimages.1}}>
            </div>

            <div class="back">
                <h1>{{titles.0}}</h1>

                {{#summaries.0}}<p>{{summaries.0}}</p>{{/summaries.0}}
                {{^summaries.0}}<p>Geen samenvatting beschikbaar</p>{{/summaries.0}}
            </div>
        </div>
    </a>
</article>
{{/.}}
</section>
`

export const detailBook = `
{{#.}}
<article>
    <img src={{coverimages.1}}>

    <h1>{{titles.0}}</h1>

    {{#summaries.0}}<p>{{summaries.0}}</p>{{/summaries.0}}
    {{^summaries.0}}<p>Geen samenvatting beschikbaar</p>{{/summaries.0}}
</article>
{{/.}}
`

export const home = `
<div class="home-options">
    <a href="#orienteren">Oriënteren voor een werkstuk/spreekbeurt</a>
    <a href="#gerelateerd_boeken">Zoeken naar gerelateerde boeken</a>
</div>
`

export const genres = `
<section>
{{#.}}
    <a href="#genre/{{genre}}">
        <article class="orient-genre">
            <p>{{genre}}</p>
        </article>
    </a>
{{/.}}
</section>
`

export const genresDetails = `
<section class="sampleBooks">
{{#.}}
    <article genre={{genres}}>
    <a href="#{{isbn}}">
        <div>
            <div class="front">
                <img src={{coverimages.1}}>
            </div>

            <div class="back">
                <h1>{{titles.0}}</h1>

                {{#summaries.0}}<p>{{summaries.0}}</p>{{/summaries.0}}
                {{^summaries.0}}<p>Geen samenvatting beschikbaar</p>{{/summaries.0}}
            </div>
        </div>
    </a>
</article>
{{/.}}
</section>`