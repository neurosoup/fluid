import { storiesOf } from '@storybook/svelte';
import { withKnobs, select } from '@storybook/addon-knobs';

import '../dist/materialize.css';
import '../index';

import Preloader from './components/preloader.svelte';

const props = {
  group: () => ({}),
  circularGroup: () => ({
    size: select(
      'Size',
      {
        Tiny: 'tiny',
        Small: 'small',
        Medium: '',
        Big: 'big'
      },
      ''
    )
  })
};

storiesOf('Preloader', module)
  .addDecorator(withKnobs)
  .add('Circular', () => {
    return {
      Component: Preloader,
      withKnobs: { ...props.circularGroup() },
      props: {
        color: 'blue',
        ...props.circularGroup()
      }
    };
  })
  .add('Indeterminate', () => {
    return {
      Component: Preloader,
      withKnobs: { ...props.group() },
      props: {
        color: 'blue',
        type: 'indeterminate',
        ...props.group()
      }
    };
  });
