export const currencyFormatter = (price) =>
  parseFloat(price)
    .toFixed()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
