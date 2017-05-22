# mappedinChallenge
### About
This is a recreation of axiomaticdesign fiddle that fetches axiomaticdesign's starred GitHub repos and displays them on a page using Reactjs. This project was created on the Windows Operating system so the installation steps are for a Windows machine.
The app makes use of the following technologies:
- React
- Webpack
- Webpack Dev Server
- Babel
- CSS loader
- React-Bootstrap
- Material UI
- FontAwesome
- React Dom

### Requirements
Download and install the following tools:
- Latest version of mozilla firefox or chrome browser
- node ^6.10.3 https://nodejs.org/en/download/
- npm ^4.5.0
npm comes packaged with the node installation but you may have to update npm after installation because npm gets updated more frequently than node

### Installation
Download the zip file or clone the repository.
To clone the repository
- In your terminal, cd into the folder you want to clone the app into
```
git clone https://github.com/Adeyosola/mappedinChallenge.git
```
- cd into project directory
- install dependencies with the command
`npm install`

### To Run The Project
After project dependencies have been installed, start webpack with the command
`npm run start`
After webpack has started, type in http://localhost:8080/ in your browser to view the webpage


### Explanation
The app makes use of the fetch function to make an Ajax call to the Github api to retrieve the list of axiomatic starred repositories. And uses the state of the StarredRepos component to show when the call is completed. When the call is completed, the returned json response is set to the state of the component. The returned json object is an array hence the component uses an array object to receive the response.

I used the componentDidMount() lifecycle hook to make the api call because the api call is to one repository. If the challenge included making an api call to different repositories or allowed user interaction where api calls are made based on user input, this will fail. Because even though the github api url has changed, the component was not re-mounted hence, the starred repositories of the new github api will not be rendered.

I also used the Card component from Material UI for styling.

### Making it Better
Currently the css styles are written inline which is not a very good practice. I tried to use css modules for styling the component but ran into issues with the extract-text-webpack-plugin that is supposed to extract all the css styles into a single css bundle. The css file was extracted but for some reason was not applied to the component. As at the time of submission of this challenge I have not been able to resolve the issue.

### References
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- https://developer.github.com/v3/
- http://www.material-ui.com/#/components/card
- https://css-tricks.com/css-modules-part-3-react/
- http://javascriptplayground.com/blog/2016/07/css-modules-webpack-react/
- https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Thanks
