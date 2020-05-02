// customer.js
export default {
  name: 'customer',
  type: 'document',
  title: 'Customer Maps',
  fields: [
    {
      name: 'customer',
      type: 'string',
      title: 'Customer'
    },
    {
      name: 'mapTitle',
      type: 'string',
      title: 'Map Title'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Map image'
    },
    {
      name: 'mapUrl',
      type: 'url',
      title: 'Map URL'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your map.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
