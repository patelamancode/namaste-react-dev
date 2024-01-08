# Laying the Foundation

# we use scripts in papckahge.json file to make short command like

we use npm run start/ npm start rather than npx parcel index.html
or npm run build/ npm build rather than npx parcel build index.html

we can write or create react element by usning React.createElement(), but it is not developer friendly, So facebook devs introduce JSX.

# JSX is not html, it has similar syntax than html.

JSX is not javascript, not understood by JS engine. It only understand bby using parcel dependency(behind the scene)
JSX code - transpiled before reaches to JS engine - Parcel transpiled by using - another depency known as Babel- then JS engine understand transpiled react code

- JSX senetize data before sending to browser for render (it prevent injection attack thhrough api,if attacker want to run their script or js by your app in browser to steel cockies or session data of machine), JSXprevent or senetize the datafor free.

# React component

1: Class component
2: Functional component (JS function whick return some JSX known as react functioneal components)

- using component inside components known as #$ component-compositoin $#
