# Project Boilerplate for React / TypeScript / ESLint / Webpack / Babel / Jest / with Directory Aliasing.
This boilerplate is an extension of Vincent Chee’s blog post, [‘How to Set Up a React TypeScript Project form Scratch with Babel and Webpack’](https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d). I extended Vincent's boilerpate in three ways:
1. I replaced [TSLint](https://palantir.github.io/tslint/) with [ESLint](https://eslint.org/) (TSLint has been deprecated in favor of ESLint).
2. I added Jest and React Testing Library.
3. I added webpack-aware directory aliasing support for ESLint and Jest.

## Running Locally
Make sure you have [Node.js](https://nodejs.org/) installed.
```
git clone https://github.com/patrick-s-young/react-ts-eslint-webpack-babel.git
cd react-ts-eslint-webpack-babel
npm install
npm start
npm test
```

## Built With
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [TypeScript](https://www.typescriptlang.org/) - Extends JavaScript by adding types.
* [ESLint](https://eslint.org/) - An analysis tool for identifying problematic patterns found in JavaScript code.
* [Webpack](https://webpack.js.org/) - A static module bundler for JavaScript applications.
* [Babel](https://babeljs.io/) - A toolchain for converting ECMAScript 2015+ code into a backwards compatible JavaScript.
* [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - A family of packages helps you test UI components in a user-centric way.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Aknowledgements
* [Patrick Young](https://github.com/patrick-s-young) extending the work of [Vincent Chee](https://github.com/davinchee), [Gaurav Gupta](https://medium.com/swlh/react-testing-getting-jest-to-play-nicely-with-webpack-static-assets-imports-74b1c1472234), and [Mark A](https://dev.to/macmacky/how-to-configure-webpack-with-react-testing-library-from-the-ground-up-4occ).
* [Eric Stallings](https://github.com/EricStallings) for the inspiration.
