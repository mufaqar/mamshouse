export default {
  name: "residences",
  title: "Residences",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Feature Poster",
      name: "feature_poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "short_info",
      title: "Short Info",
      type: "text",
    },
    {
     name: 'gallery',
     title: 'Gallery',
     type: 'array',
     of: [{ type: 'image', 
     options: {
       hotspot: true,
     },}]
    },
    {
     name: "price_per_unit",
     title: "Price per unit",
     type: "string",
   },
   {
     name: "description",
     title: "Description",
     type: "text",
   },
   {
     title: 'Features',
     name: 'features',
     type: 'array',
     of: [{type: 'features'}],
   }
  ],
};
