# Creating a repository for your site
![create repo](/public/imgs/initrepo.png)

# Getting Started with Create React App

```
create-react-app create_git_page --template typescript  
```
![create react app](/public/imgs/createapp.png)
# install page dependencies
```
npm install --save-dev gh-pages
```
![install gh-pages](/public/imgs/install.png)

# add homepage key-value to package.json (in first line)
```
# url in format: https://<username>.github.io/<repo_name>
"homepage":"https://xqcao.github.io/creategitpages"
```
![add homepage url](/public/imgs/homeurl.png)

# add script to package.json
```
"deploy": "gh-pages -d build"
```
![add script](/public/imgs/script.png)

#  push to github repository
```
git add .
git commit -m "v1 react app"
git branch -M main
git push -u origin main
```


# build and deploy
```
npm run build
npm run deploy
```

# open browser [create git pages view](https://xqcao.github.io/creategitpages)