
export default {
  title: 'URL',
  name: 'linkText',
  type: 'object',
  fields: [
    {
      name: 'section',
      title: 'Title',
      type: 'string'
    },
    {
      title: 'slug',
      name: 'slug',
      type: 'slug',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel']
        })
    }
  ]
}
