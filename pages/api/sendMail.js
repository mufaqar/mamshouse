import nodemailer from "nodemailer";

export default async (req, res) => {
  const { getStartDate, getEndDate, totalprice, paymentApproved, email } =
    req.body;
  console.log("rew", req.body);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "zunairgillani54@gmail.com",
      pass: "ihtgccruyornevlv",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: `zunairgillani14@gmail.com, ${email}`,
      subject: `MAMSHOUSE | Order submitted Successfully`,
      html: ` <p><strong>Email: </strong> ${email}</p>
      <p><strong>Start Date: </strong> ${getStartDate}</p>
      <p><strong>End Date: </strong> ${getEndDate}</p>
      <p><strong>Total Price: </strong> ${totalprice}</p>
      <p><strong>Payment Transfered: </strong>  <span style=" 
      padding:6px 20px; 
      font-weight:700; 
      background: green; 
      color: white;
      border-radius: 8px;
      margin-left:10px;
      "> TRUE</span> </p><br>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
