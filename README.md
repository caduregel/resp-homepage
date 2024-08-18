# odin-template
Template project for The Odin Project.

## Includes:

### Webpack setup
* HTML web Plugin
* webpack.config.js folder

### Jest
* ./tests folder
* jest.config.js config folder

## Deplaying Dist to Pages
### Step one
Remove the dist directory from the project’s .gitignore file (it’s ignored by default by Yeoman).
### Step two
git add dist && git commit -m "Initial dist subtree commit"
### Step Three
git subtree push --prefix dist origin gh-pages

By, 
Liam Nehoray