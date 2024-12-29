import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "MineLarx Docs",
  description: "基于服务器的详细文档",
  themeConfig: {
    logo: './img/logo.png',
    siteTitle: '',
    
    //大目录
    nav: [
      { text: '主页', link: '/' },
      { text: '入门', link: '/start' },
      { text: '关于我们', link: '/about' }
    ],
    
    // 侧边栏
    sidebar: [
      {
        text: '主目录',
        items: [
          { text: '入门', link: '/start' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    
    // 链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/minelarxnetwork' }
    ],
    
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 外观
    darkModeSwitchLabel: '外观',

    // 返回顶部
    returnToTopLabel: '返回顶部',

    // 菜单
    sidebarMenuLabel: '菜单',
  }
})