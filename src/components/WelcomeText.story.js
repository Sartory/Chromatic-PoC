import React from 'react';
import { storiesOf } from '@storybook/react';

import WelcomeText from './WelcomeText';

storiesOf('WelcomeText', module)
  .add('Hello Matthias', () => <WelcomeText name="Matthias" />)
  .add('Hello Lilian', () => <WelcomeText name="Lilian" />)
  .add('Hello Alex', () => <WelcomeText name="Alex" />);
