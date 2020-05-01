export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'imageSection' },
        { type: 'mailchimp' },
        { type: 'textSection' },
        { type: 'testimonial' },
        { type: 'feature' },
      ],
    },
    {
      name: 'feature',
      type: 'array',
      description: 'Publish one or more persons and set a reference to them here.',
      title: 'Feature',
      of: [
        {
          type: 'reference',
          to: [{ type: 'feature' }]
        }
      ]
    },
    {
      name: 'plan',
      type: 'array',
      description: 'Publish one or more persons and set a reference to them here.',
      title: 'Plan',
      of: [
        {
          type: 'reference',
          to: [{ type: 'plan' }]
        }
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
