import Directory from 'directory-helpers';

function withProject(test) {
  return async () => {
    const project = new Directory('project');
    try {
      await test(project);
    } finally {
      await project.remove();
    }
  };
}

describe('build-html', () => {
  it('acts during the compile stage', async () => {
    const directory = new Directory('.');
    const {stage} = await directory.read('package.json');
    expect(stage).toBe('compile');
  });

  it('compiles src/index.html into dist/index.html', withProject(async (project) => {
    await project.write({
      'src/index.html': `
        <!doctype html>
        <meta charset="utf-8">
        <script async src="dist.js"></script>
        <div id="root"></div>
      `
    });

    await project.execJs(`
      import { run } from 'esnext-async';
      import buildHtml from '../src';
      run(async () => {
        await buildHtml();
      });
    `);

    expect(await project.read('dist/index.html')).toBe([
      '<!DOCTYPE html>',
      '<meta charset=utf-8>',
      '<script async src=dist.js></script>',
      '<div id=root></div>',
      '\n'
    ].join(''));
  }));
});
