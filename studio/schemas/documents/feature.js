export default {
  name: 'feature',
  type: 'document',
  title: 'Features',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Feature Title',
      description: 'The title of the feature'
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body of the feature'
    },
    {
      name: 'icon',
      type: 'figure',
      title: 'Icon of the feature'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'body',
      media: 'icon'
    }
  }
}
