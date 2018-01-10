import React from 'react';
import { storiesOf } from '@storybook/react';

import SimpleButton from './SimpleButton';

storiesOf(SimpleButton, module)
  .add('Small Button', () => <SimpleButton with={ 100 }/>)
  .add('Big Button', () => <SimpleButton/>);
