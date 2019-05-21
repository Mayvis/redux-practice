export async function getRepo(dispatch, query) {
  let response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
  let data = await response.json();
  const action = { type: 'SET_REPOS', repos: data.items };
  dispatch(action);
}
