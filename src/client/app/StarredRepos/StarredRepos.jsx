import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {Row, Col, Grid} from 'react-bootstrap';

export default class StarredRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {repos: [] };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/axiomaticdesign/starred")
    .then( (response) => { return response.json() })
    .then( (json) => {this.setState({repos: json});});
  };
  render() {
    return (
      <div>
        <h1>Starred repos for <span>axiomatic design</span></h1>
        {this.state.repos.map(repo =>
          <Card key={repo.id}>
            <FontAwesome name='star' size='2x' style={{ color: 'yellow' }} />
            <a href = {repo.html_url}>
              <CardTitle title={repo.full_name} titleColor={"blue"}/>
            </a>
            <CardText>
              {repo.description}<br/>
              <FontAwesome name='star' /><a href= {repo.stargazers_url}>{repo.stargazers_count}</a>
              <FontAwesome name='code-fork' /><a href= {repo.forks_url}>{repo.forks_count}</a>
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}
