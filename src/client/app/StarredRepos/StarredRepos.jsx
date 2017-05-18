import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Card, CardTitle, CardText, CardHeader} from 'material-ui/Card';
import {Row, Col, Grid} from 'react-bootstrap';
import FontIcon from 'material-ui/FontIcon';
import style from './Style.css';
const a ={ textDecoration: "underline", color: "#00F"};
const back={
  padding: 0,
  margin: 0,
  listStyle: "none",

  display: "-webkit-box",
  display: "-moz-box",
  display: "-ms-flexbox",
  display: "-webkit-flex",
  display: "flex",
  WebkitFlexFlow: "row wrap",
  flexFlow: "row wrap",
  textAlign: "center"
  };

const fork={color: "#808080", fontSize: "14px"};

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
      <Row className="show-grid">
        <Col xs={6} xsOffset={3}>
          <h1>Starred repos for axiomatic design</h1>
        </Col>
        <Col xs={12} md={6} xsOffset={3}>
          {this.state.repos.map(repo =>
            <div>
              <Card key={repo.id}>
                <div style={back}>
                  <FontAwesome name='star' size='2x' style={{color: 'yellow'}}/>
                  <a style = {a} href = {repo.html_url}>
                    <CardTitle title={repo.full_name} titleColor={"blue"}/>
                  </a>
                </div>
                <CardText>
                  {repo.description}<br/>
                  <div >
                    <FontAwesome name='star' />
                    <a style={fork} href= {repo.stargazers_url}>{repo.stargazers_count}</a>
                    {'  \u00A0 '}
                    <FontAwesome name='code-fork' />
                    <a style={fork} href= {repo.forks_url}>{repo.forks_count}</a>
                  </div>
                </CardText>

              </Card>
              <br/>
            </div>
          )}
        </Col>
        </Row>
      </div>
    );
  }
}
