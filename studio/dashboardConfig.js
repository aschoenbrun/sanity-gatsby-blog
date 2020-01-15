export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1f2a748225f3a5986f3ccb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nn6itgty',
                  apiId: '762abf27-c220-4bdd-82b5-e7d9ae3c41b1'
                },
                {
                  buildHookId: '5e1f2a74fda87cd117a8b0fb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5vzpbe7z',
                  apiId: 'c4f31ed0-ba38-4db7-ac14-ec5e0c37db66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aschoenbrun/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5vzpbe7z.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
