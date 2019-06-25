import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import '../dist/materialize.css';

import Button from './components/button.svelte';

const props = {
  group: () => ({
    disabled: boolean('Disabled', false),
    ripple: boolean('Ripple', true),
    classList: text('', '')
  })
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Raised', () => {
    return {
      Component: Button,
      on: {
        click: action('clicked')
      },
      withKnobs: {
        ...props.group()
      },
      props: {
        label: 'Button',
        ...props.group()
      }
    };
  })
  .add('Flat', () => {
    return {
      Component: Button,
      on: {
        click: action('clicked')
      },
      withKnobs: {
        ...props.group()
      },
      props: {
        label: 'Button',
        ...props.group(),
        flat: true
      }
    };
  });
