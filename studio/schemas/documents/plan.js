// plan.js
export default {
  type: 'document',
  name: 'plan',
  title: 'Plans',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string'
    },
    {
      name: 'priceMonthly',
      title: 'Price Monthly',
      type: 'string'
    },
    {
      name: 'priceAnnually',
      title: 'Price Annually',
      type: 'string'
    },
    {
      name: 'included',
      title: 'Whats Included',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
