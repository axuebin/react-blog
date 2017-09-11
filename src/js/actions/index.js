import fetch from 'isomorphic-fetch';

export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';

function requestIssues() {
  return {
    type: REQUEST_ISSUES,
  };
}

function receiveIssues(json) {
  return {
    type: RECEIVE_ISSUES,
    posts: json,
  };
}

function fetchIssues() {
  return (dispatch) => {
    dispatch(requestIssues());
    return fetch('https://api.github.com/repos/axuebin/react-blog/issues?creator=axuebin&labels=blog')
      .then(response => response.json())
      .then(json => dispatch(receiveIssues(json)))
      .catch(e => console.log(e));
  };
}

function shouldFetchIssues(state) {
  if (!state) {
    return true;
  }
  return !state.items.length;
}

export function fetchIssuesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchIssues(getState())) {
      return dispatch(fetchIssues());
    }
    return Promise.resolve();
  };
}
