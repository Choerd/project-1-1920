export function books(data, template, location) {
    location.insertAdjacentHTML('beforeend', Mustache.render(template, data))
}
