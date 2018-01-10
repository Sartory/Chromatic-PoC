import { configure } from '@storybook/react';
//import the chromatic addon
import 'react-chromatic/storybook-addon';
import '@storybook/addon-knobs/register'

// If you have a global CSS file, import it here:
import '../src/index.css';

// Load a X.story.js file for each of your components/X.js:
const req = require.context('../src/components', true, /\.story\.js$/)
configure(() => {
  req.keys().forEach((filename) => {
    console.log("Story of component " + filename + " loaded");
    return req(filename);
  });
}, module);
