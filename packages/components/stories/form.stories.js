import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import '../dist/materialize.css';
import '../index';

import InputField from './components/inputField.svelte';

const props = {
  group: () => ({
    type: select(
      'Type',
      {
        Text: 'text',
        Email: 'email'
      },
      'text'
    )
  })
};

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return {
      Component: InputField,
      on: {
        submit: action('submitted')
      },
      withKnobs: {},
      props: {
        name: 'inputField',
        label: 'First name',
        type: 'text'
      }
    };
  })
  .add('Disabled', () => {
    return {
      Component: InputField,
      on: {
        submit: action('submitted')
      },
      withKnobs: {
        ...props.group()
      },
      props: {
        ...props.group(),
        name: 'inputField',
        disabled: true,
        label: 'Disabled',
        placeholder: "I'm not editable"
      }
    };
  })
  .add('Placeholder', () => {
    return {
      Component: InputField,
      on: {
        submit: action('submitted')
      },
      withKnobs: {},
      props: {
        label: 'First name',
        name: 'inputField',
        placeholder: 'Placeholder',
        type: 'text'
      }
    };
  })
  .add('Helper text', () => {
    return {
      Component: InputField,
      on: {
        submit: action('submitted')
      },
      withKnobs: {},
      props: {
        label: 'Email',
        name: 'inputField',
        helperText: 'Helper text',
        validation: false,
        type: 'email'
      }
    };
  })
  .add('Validation', () => {
    return {
      Component: InputField,
      on: {
        submit: action('submitted')
      },
      withKnobs: {},
      props: {
        name: 'inputField',
        label: 'Email',
        type: 'email',
        required: true,
        errorText: 'Not a valid email',
        successText: 'This is a valid email'
      }
    };
  });
