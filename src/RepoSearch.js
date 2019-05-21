import React from 'react';
import { connect } from 'react-redux';
import { getRepo } from './Api/api';
import { SEARCH_INPUT, SET_REPOS } from './Store/action';

function RepoSearch(props) {
  console.log(props.repos);
  return (
    <div>
      <form
        onSubmit={(e) => props.handleSubmit(e, props.search)}
      >
        <h1>Search</h1>
        <input
          type="text"
          name="repos"
          value={props.search}
          onChange={props.onSearchInputChanged}
        />
        <p>{props.search}</p>
        <button>Submit</button>
      </form>
      <ul>
        {props.repos.map(repo => (
          <li key={repo.id}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    search: state.main.searchInput,
    repos: state.main.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchInputChanged: (e) => {
      console.log('search repo', e.target.value);
      const action = { type: SEARCH_INPUT, search: e.target.value };
      dispatch(action);
    },
    handleSubmit: (e, query) => {
      e.preventDefault();
      return getRepo(dispatch, query, SET_REPOS);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);