import type { Config } from 'tailwindcss';
import FlowbitePlugin from 'flowbite/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'],

  theme: {
    extend: {}
  },

  plugins: [FlowbitePlugin]
} satisfies Config;
