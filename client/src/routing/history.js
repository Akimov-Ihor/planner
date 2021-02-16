import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const navigateToPage = (url) => history.push(url);
