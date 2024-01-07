Ep-1 :
Injecting react in JS by using CDNs in scripttag

##Ep-2:
code before production, we need to optimize code locally:

need to peform -

- code splitting
  *Chunking
  *compressing
  *bundling
  *minified code
  \*compress images and reduce bundle size

Creating own production ready app just similar as create-react-app :

npm : it is everything but not a node package manager, it has no full form
It manage packages, but only stands for node packages.

package.json file is configuration of npm. it creates by initializing npm

What is bundler ? it is imp package (few are webpack, parcel, Vite)

Diffrence between dev dependency and normal dependency
dev dependency is only used during development of app while normal dependency used in development as well as in production.

\*no need to put that things on github, which we can regenerate, like node_module
itis created with help of package and package-lock.json file, So we need to send these 2 files.

Parcel gives super power :

- create dev build
- create local server (localhost:1234)
- HMR (hot module replacement) responsible for auto refrese as per change in code.
- It has FIle watching algorithm (written in c++)
- Caching - faster build(so reload time in minimized)
- Image optimization
- minification
- bundling
- compress
- consistent hasing
- code splitting
- Diffrential Bundling ( to support older browsers )
- Diagnstics : better error handling view
  ----for more check parcel.org

# Parcel Build :

when use "npx pacel build index.html" > it might gives err, bcz in package.json file main:"App.js" or "index.js", So need to remove this main file before buiilding it.

Parcel create a dist folder, which shows hosted app over browser by bundling it.

# command for generating dev build by parcel : npx parcel index.html

# command for generating production ready build by parcel : npx build parcel index.html

# Browserslist : is used for setting browser compatibilty, it takes params in array
