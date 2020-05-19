module.exports = {
  base: '/simple-style-ui-doc-preview/',
  title: 'simple-style-ui',
  description: 'UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: [
      {
        title: '指南',
        children: ['install/','get-started/']
      },
      {
        title: '组件',
        children: [
          'components/button',
          'components/input',
          'components/popover',
          'components/tabs',
          'components/collapse'
        ]
      }
    ]
  }
}
