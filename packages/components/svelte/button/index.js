export * from '../../node_modules/materialize-css/js/cash';
export * from '../../dist/shared';

import '../../dist/buttons';
export const FloatingActionButton = M.FloatingActionButton;

import SvelteButton from './Button.svelte';
export const Button = SvelteButton;
