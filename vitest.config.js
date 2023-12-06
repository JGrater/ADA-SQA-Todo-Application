import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '~': '/', // Example: Alias for your source directory
      '#imports': './.nuxt/imports.d.ts'
    },
  },
}