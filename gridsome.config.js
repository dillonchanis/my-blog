// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dillon Chanis',
  siteDescription: 'Dillon Chanis is a software engineer and writes about languages and architecture.',
  siteUrl: 'dillonchanis.com',
  titleTemplate: `%s | Dillon Chanis`,

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: ['@gridsome/remark-prismjs']
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      },
    },

    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Dillon Chanis',
          feed_url: 'https://dillonchanis.com/feed.xml',
          site_url: 'https://dillonchanis.com',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://dillonchanis.com' + node.path,
          author: 'Dillon Chanis',
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    },
  ],

  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss')()]
      }
    }
  },

  templates: {
    Post: '/blog/:title',
    Tag: '/blog/tag/:id',
  },
}
