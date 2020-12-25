module.exports = (...items) => {
  let itemsStringified = [];
  items.forEach(i => {
    if (typeof i === 'object') itemsStringified.push(JSON.stringify(i));
    else itemsStringified.push(String(i));
  });
  process.stdout.write(itemsStringified.join(' '));
};
