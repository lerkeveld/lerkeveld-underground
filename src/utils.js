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
  if (date === null || date === undefined)
    return null;
  return date.toLocaleDateString(
    'nl-be',
    {'day': '2-digit', 'month': '2-digit', 'year': 'numeric'}
  );
};

export function formatMoney(cents) {
    return "€" + parseFloat(cents / 100).toFixed(2);
};

export function sorted(array, func) {
    if (array === null || array === undefined)
        return null;
    return array.sort((i1, i2) => {
        if (func(i1) > func(i2)) {return 1;}
        if (func(i1) < func(i2)) {return -1;}
        return 0;
    });
};

export function findFirstNotNull(array) {
    const index = array.findIndex((e) => e !== null);
    return index === -1 ? null : array[index];
};
