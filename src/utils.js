export function serializeDate(date) {
  if (date === null)
    return null;

  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export function formatDate(date) {
  if (date === null)
    return null;
  return date.toLocaleDateString(
    'nl-be',
    {'day': '2-digit', 'month': '2-digit', 'year': 'numeric'}
  );
};

export function formatMoney(cents) {
    return "€" + parseFloat(cents / 100).toFixed(2);
};
