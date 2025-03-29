export default {
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'ayu-dark',
            dark: 'ayu-dark',
            light: 'ayu-dark',
          },
          langs: [
            'vue-html',
            'bash',
            'typescript',
            'console',
          ],
        },
      },
    },
    renderer: {
      anchorLinks: true,
    },
  }
}