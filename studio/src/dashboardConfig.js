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
                  buildHookId: '5eb75164588cea9b85bfb62d',
                  title: 'Sanity Studio',
                  name: '15-minutes-of-same-studio',
                  apiId: '4dc595a4-4dca-4bef-bc45-faeac9ef3236'
                },
                {
                  buildHookId: '5eb75164588ceaca42bfb830',
                  title: 'Blog Website',
                  name: '15-minutes-of-same',
                  apiId: 'c6c0d935-b83b-47e8-971c-a1a0a5b5ef27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kpapke/15-minutes-of-same',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://15-minutes-of-same.netlify.app', category: 'apps' }
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
