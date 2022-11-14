Handlebars.registerHelper('renderStars', (rating) => {
    let result = '';
    for (let i = 1; i <= 5; i++) {
        let checked = rating >= i ? ' checked' : '';
        result += `<span class='fa fa-star${checked}'></span>`;
    }
    return new Handlebars.SafeString(result);
});