module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_price: (price) => `<p> ${price.toFixed(2)}</p>`,
  format_list: (list) =>
    list.split(";").reduce((ac, str) => ac + `<li>${str}</li>`, ""),
  renderStars: (rating) => {
    let result = "";
    for (let i = 1; i <= 5; i++) {
      let checked = rating >= i ? " checked" : "";
      result += `<span class='fa fa-star${checked}'></span>`;
    }
    return result;
  },
};
