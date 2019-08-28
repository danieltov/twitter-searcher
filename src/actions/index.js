import axios from 'axios'

export const getData = async (store, input, request = axios) => {
  const status = 'LOADING'
  store.setState({ status })
  try {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const userUrl = `https://api.twitter.com/1.1/users/show.json?screen_name=${input}`
    const tweetsUrl = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${input}`
    const config = {
      headers: {
        Authorization:
          'Bearer AAAAAAAAAAAAAAAAAAAAACcR%2FwAAAAAAa%2BLTPME0kHq1aHBrSmYo8AJmdEw%3DUObh6gRSOoRzqEA1WCys2DzfgZO4NwHnSt78lIS2sf3AxwAmIo'
      }
    }
    const [userResp, tweetsResp] = await Promise.all([
      request.get(proxyurl + userUrl, config),
      request.get(proxyurl + tweetsUrl, config)
    ])
    const isError = userResp.errors || tweetsResp.errors
    const status = !isError ? 'SUCCESS' : 'FAIL'
    const user = userResp.data
    const tweets = tweetsResp.data
    store.setState({ user, tweets, status })
    console.log(store.state)
  } catch (error) {
    console.error(error)
    const is404 = error.response && error.response.status === 404
    const status = is404 ? 'NOT_FOUND' : 'ERROR'
    store.setState(status)
    console.log(store.state)
  }
}
