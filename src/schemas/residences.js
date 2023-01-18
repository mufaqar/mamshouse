export default {
  name: "residences",
  title: "Residences",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
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
      name: "location",
      title: "Location",
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
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title[en]",
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
      title: "Feature Banner",
      name: "feature_banner",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "short_info",
      title: "Short Info",
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
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "price_per_unit",
      title: "Price per unit",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        {
          title: "English",
          name: "en",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
                {
                  type: "text",
                  name: "alt",
                  title: "Alternative text",
                  description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
          ],
        },
        {
          title: "French",
          name: "fr",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
                {
                  type: "text",
                  name: "alt",
                  title: "Alternative text",
                  description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: "Features",
      name: "features",
      type: "array",
      of: [{ type: "features" }],
    },

    {
      name: "departure",
      title: "Departure",
      type: "string",
    },
    {
      name: "travelers",
      title: "Travelers",
      type: "string",
    },
    {
      name: "arrival",
      title: "Arrival",
      type: "number",
    },
  ],
};
