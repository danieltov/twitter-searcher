export const getTweets = async user => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}`;
  return await fetch(proxyurl + url, {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer AAAAAAAAAAAAAAAAAAAAACcR%2FwAAAAAAa%2BLTPME0kHq1aHBrSmYo8AJmdEw%3DUObh6gRSOoRzqEA1WCys2DzfgZO4NwHnSt78lIS2sf3AxwAmIo'
    }
  })
    .then(res => res.json())
    .then(result => console.log(result), error => console.error(error));
};

export const getUser = async user => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `https://api.twitter.com/1.1/users/show.json?screen_name=${user}`;
  return await fetch(proxyurl + url, {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer AAAAAAAAAAAAAAAAAAAAACcR%2FwAAAAAAa%2BLTPME0kHq1aHBrSmYo8AJmdEw%3DUObh6gRSOoRzqEA1WCys2DzfgZO4NwHnSt78lIS2sf3AxwAmIo'
    }
  })
    .then(res => res.json())
    .then(result => console.log(result), error => console.error(error));
};
