const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = {
  getValue: () => {
    return dayjs(Date.now()).utc().startOf('day').toDate();
  }
};
