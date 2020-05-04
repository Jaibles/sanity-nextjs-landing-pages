// session.js
export default {
  name: 'session',
  type: 'document',
  title: 'Session',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'sessionType',
      type: 'string',
      title: 'Session type',
      options: {
        list: [
          { value: 'keynote', title: 'Keynote' },
          { value: 'talk', title: 'Talk' },
          { value: 'break', title: 'Break' },
          { value: 'firesideChat', title: 'Fireside Chat' },
          { value: 'panel', title: 'Panel' }
        ]
      }
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'portableText',
      title: 'Description'
    },
  ],
  preview: {
    select: {
      title: 'title',
      sessionType: 'sessionType',
      persons: 'persons',
      firstPerson: 'person.0.name',
      media: 'mainImage'
    },
    prepare ({title, media, sessionType, persons, firstPerson}) {
      const renderPersons = (persons = [], firstPerson) => {
        if (!persons || persons.length === 0) return ''
        if (persons.length === 1) return firstPerson
        return `${firstPerson} and ${persons.length - 1} more`
      }
      return {
        title,
        media,
        subtitle: `${sessionType} ${renderPersons(persons, firstPerson)}`
      }
    }
  }
}
