import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs/react';

import Button from './Button';

const stories = storiesOf('Button Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add('default view', () => (
    <pre>
      process.env.STORYBOOK_CLOUD_URL: {process.env.STORYBOOK_CLOUD_URL}<br/>
      process.env.STORYBOOK_CLOUD_APPID: {process.env.STORYBOOK_CLOUD_APPID}<br/>
      process.env.STORYBOOK_CLOUD_DATABASE: {process.env.STORYBOOK_CLOUD_DATABASE}<br/>
    </pre>
))
stories.add('with text', () => (
    <Button>Hello Button</Button>
  ));
stories.add('with some emoji', () => (
    <Button>{text('Label', '😀 😎 👍 💯')}</Button>
));

// Knobs for React props
stories.add('with a button', () => (
  <Button disabled={boolean('Disabled', true)} style={color('Text Color', '#ff0033')}>
    {text('Label', 'Hello Button')}
  </Button>
));

stories.add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
});
