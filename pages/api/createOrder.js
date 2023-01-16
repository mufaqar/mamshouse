import sanityClient from "@sanity/client";
const moment = require('moment');

export default async function create(req, res) {
  const { title, getStartDate, getEndDate, totalprice, paymentApproved, name, email, mobile} = req.body;
  const config = {
    projectId: "5x5wnf9u",
    dataset: "production",
    useCdn: false,
    token:
      "skrDAeBk3tz1Dr4Yo3DIZlARomfTD13JEjnkN23A1XPejoWGFYbnj2PHBvkCTZRFocFevdHmIEYMOEDOpIFkHFqsDPRcujOIm2y4SitswFsYx6hQYCq5LlD3dB2lgs4rP1RDIrHeejWr1m7yOcJnEEdKcpWRwh2ag1i93VgKIcQoB4rryeey",
  };
  const client = sanityClient(config);
  try {
    await client.create({
      _type: "booking",
      title,
      start_date: moment(getStartDate).format('LL'),
      end_date: moment(getEndDate).format('LL'),
      total_price: `$ ${totalprice}`,
      approved: paymentApproved,
      name,
      email,
      mobile_number: mobile,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }
  console.log("Order submitted");
  return res.status(200).json({ message: 'Comment submitted' })
}
