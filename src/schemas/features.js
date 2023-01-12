export default {
  name: "features",
  title: "Features",
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
      name: "icon",
      title: "Icon",
      type: "file",
    },
  ],
};
