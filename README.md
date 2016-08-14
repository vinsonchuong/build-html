# build-html
[![Build Status](https://travis-ci.org/vinsonchuong/build-html.svg?branch=master)](https://travis-ci.org/vinsonchuong/build-html)

Compile and minify a html entry point for an application.

## Installing
`build-html` is available as an
[npm package](https://www.npmjs.com/package/build-html).

## Usage
Add `build-bin` and `build-html` to the `package.json`.

```json
{
  "name": "project",
  "private": true,
  "scripts": {
    "build": "build"
  },
  "devDependencies": {
    "build-bin": "^0.0.6",
    "build-html": "^0.0.1"
  }
}
```

From the command line, run:
```bash
npm run build
```

`build-html` will read `src/index.html`, minify it and save the result to
`dist/index.html`.

## Development
### Getting Started
The application requires the following external dependencies:
* Node.js

The rest of the dependencies are handled through:
```bash
npm install
```

Run tests with:
```bash
npm test
```
