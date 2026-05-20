import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
    runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
  },
  kit: {
    adapter: adapter(),
    alias: {
      '@/*': 'src/*',
      $components: 'src/lib/components',
      $hooks: 'src/lib/hooks',
      $server: 'src/lib/server',
      $state: 'src/lib/state',
      '$utils.js': 'src/lib/utils.js',
      $utils: 'src/lib/utils.js',
    },
  },
};

export default config;
