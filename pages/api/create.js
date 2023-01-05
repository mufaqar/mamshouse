import sanityClient from "@sanity/client";

export default async function create(req, res) {
    const { title } = req.body;
    console.log(title)
  const config = {
    projectId: "5x5wnf9u",
    dataset: "production",
    useCdn: false,
    token: "skrDAeBk3tz1Dr4Yo3DIZlARomfTD13JEjnkN23A1XPejoWGFYbnj2PHBvkCTZRFocFevdHmIEYMOEDOpIFkHFqsDPRcujOIm2y4SitswFsYx6hQYCq5LlD3dB2lgs4rP1RDIrHeejWr1m7yOcJnEEdKcpWRwh2ag1i93VgKIcQoB4rryeey"
  };
  const client = sanityClient(config);
  try {
    await client.create({
      _type: 'booking', 
      title,
    });
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit comment`, err})
  }
  console.log("comment submitted")
  // return res.status(200).json({ message: 'Comment submitted' })
}