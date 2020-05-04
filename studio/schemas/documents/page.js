export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Hero sections',
      of: [
        {type: 'hero'},
        {type: 'imageSection'},
        {type: 'mailchimp'},
        {type: 'textSection'},
        {type: 'testimonial'}
      ]
    },
    {
      name: 'featureTitle',
      type: 'string',
      title: 'Feature Title'
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          type: 'reference',
          to: [{type: 'feature'}]
        }
      ]
    },
    {
      name: 'customersTitle',
      type: 'string',
      title: 'Customers Title'
    },
    {
      name: 'customersSubTitle',
      type: 'string',
      title: 'Customers SubTitle'
    },
    {
      name: 'customers',
      type: 'array',
      title: 'Customers',
      of: [
        {
          type: 'reference',
          to: [{type: 'customer'}]
        }
      ]
    },
    {
      name: 'plansTitle',
      type: 'string',
      title: 'Plans Title'
    },
    {
      name: 'plansSubTitle',
      type: 'string',
      title: 'Plans SubTitle'
    },
    {
      name: 'plans',
      type: 'array',
      title: 'Plans',
      of: [
        {
          type: 'reference',
          to: [{type: 'plan'}]
        }
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    }
  }
}
