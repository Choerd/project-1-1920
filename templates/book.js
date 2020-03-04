export const overviewPersonBook = `
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