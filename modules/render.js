export function books(data, template, location) {
    data.forEach(entrie => {
        location.insertAdjacentHTML('beforeend', Mustache.render(template, entrie))
    })
}
