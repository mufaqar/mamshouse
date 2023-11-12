
export default {
    name: 'booking',
    title: 'Booking',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Email',
        name: 'email',
        type: 'string',
      },
      {
        title: 'Mobile Number',
        name: 'mobile_number',
        type: 'number',
      },
      {
        name: "approved",
        type: "boolean",
        title: "Payment Pending / Payment Approved",
      },
      {
        title: 'Start Date',
        name: 'start_date',
        type: 'string',
      },
      {
        title: 'End Date',
        name: 'end_date',
        type: 'string',
      },
      {
        title: 'Total Price',
        name: 'total_price',
        type: 'string',
      },
      
    ]
  }
