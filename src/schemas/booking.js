
export default {
    name: 'booking',
    title: 'Booking',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'object',
        fields:[
            {
                title: "English",
                name:'en',
                type: 'string'
            },
            {
                title: 'French',
                name:'fr',
                type: 'string'
            }
        ]
      }
    ]
  }