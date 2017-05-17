import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import StarredRepos from './StarredRepos/StarredRepos.jsx';

injectTapEventPlugin();
class App extends React.Component {

  render () {
    return(
      <div>
        <MuiThemeProvider>
          <StarredRepos/>
        </MuiThemeProvider>
      </div>
    );
  }
}
render(<App/>, document.getElementById('app'));
