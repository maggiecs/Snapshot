export const displayTimestamp = date => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };
 
  const postDate = new Date(date);
  const month = months[postDate.getMonth()];
  const day = postDate.getDate();
  const year = postDate.getFullYear();
  const seconds = Math.floor((new Date() - postDate) / 1000);

  if (seconds > 604800) {
    return `${month} ${day}, ${year}`;
  } else {
    return displayTimeAgo(date);
  }
};

const displayTimeAgo = date => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let timestamp;

  let interval = Math.floor(seconds/86400);
  if (interval >= 1) {
    timestamp = interval + " day";
  } else {
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      timestamp = interval + " hour";
    } else {
      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        timestamp = interval + " minute";
      } else {
        timestamp = interval + " second";
      }
    }
  }

  if (interval > 1) {
    return timestamp + "s ago";
  } else {
    return timestamp + " ago";
  }
};
