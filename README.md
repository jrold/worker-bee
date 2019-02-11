# worker-bee

**worker-bee** is a single-page resume site based on [React](https://reactjs.org/).

## Demo

Example of a [resume](https://jrold.netlify.com).

## Usage

The resume lives in the `src/workerBee.json` file.

Images referenced by `src/workerBee.json` are in the `src/static` folder.

#### Image pop-ups

To create a link with image pop-ups in an experience list, format the line like so:

`#@Link Text:image.jpg@#`

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your resume is ready to be deployed!
