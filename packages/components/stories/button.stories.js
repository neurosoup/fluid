import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import '../dist/materialize.css';
import '../index';

import Button from './components/button.svelte';
import FAB from './components/fab.svelte';

const props = {
  group: () => ({
    disabled: boolean('Disabled', false),
    ripple: boolean('Ripple', true),
    classes: text('', '')
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
  .add('Floating', () => {
    return {
      Component: Button,
      on: {
        click: action('clicked')
      },
      withKnobs: {
        ...props.group()
      },
      props: {
        label: '',
        ...props.group(),
        floating: true,
        icon: 'add'
      }
    };
  })
  .add('Floating Action Button', () => {
    return {
      Component: FAB,
      on: {
        click: action('clicked')
      },
      withKnobs: {
        ...props.group()
      },
      props: {
        icon: 'add',
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
