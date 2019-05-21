export async function getRepo(dispatch, query, actionType) {
  let response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
  let data = await response.json();
  const action = { type: actionType, repos: data.items };
  dispatch(action);
}
