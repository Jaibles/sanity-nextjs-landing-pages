export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ea604c53ea009a5f34ef408',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-28242wfz',
                  apiId: 'a6f36ea6-435b-4caf-9147-cd7f2dd8482b'
                },
                {
                  buildHookId: '5ea604c503d6d43290082a74',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9xvkia1k',
                  apiId: 'fa2c6402-b5fd-4834-ab26-f985a7eda92b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jaibles/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9xvkia1k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
