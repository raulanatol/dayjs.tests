const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

module.exports = {
  getValue: () => {
    return dayjs(Date.now()).utc().startOf('day').toDate();
  }
};
