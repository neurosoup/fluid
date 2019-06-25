import { src, dest, series } from 'gulp';
import * as concat from 'gulp-concat';
import * as insert from 'gulp-insert';

type TaskCallback = (err?: Error) => void;

export async function buildShared(cb: TaskCallback) {
  src([
    './node_modules/materialize-css/js/component.js',
    './node_modules/materialize-css/js/global.js',
    './node_modules/materialize-css/js/anime.min.js',
    './node_modules/materialize-css/js/waves.js'
  ])
    .pipe(concat('shared.js'))
    .pipe(insert.prepend('var M = {};\nexport '))
    .pipe(dest('dist'));

  cb();
}

async function buildComponent(name: string, importComponentClass: boolean = false) {
  const source = [`./node_modules/materialize-css/js/${name}.js`];
  const stream = importComponentClass ? src(source).pipe(insert.prepend('import { Component } from "./shared";\n')) : src(source);
  return stream.pipe(dest('dist'));
}

export async function buildComponents(cb: TaskCallback) {
  await buildComponent('buttons', true);
  await buildComponent('cards');

  cb();
}

export const start = series(buildShared, buildComponents);

//watch('./*.+(js|ts)', { queue: true }, start);
