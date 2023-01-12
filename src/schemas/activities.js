export default {
  name: "activities",
  title: "Activities",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        {
          title: "English",
          name: "en",
          type: "string",
        },
        {
          title: "French",
          name: "fr",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        {
          title: "English",
          name: "en",
          type: "text",
        },
        {
          title: "French",
          name: "fr",
          type: "text",
        },
      ],
    },
    {
      title: "Feature Image",
      name: "feature_image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
