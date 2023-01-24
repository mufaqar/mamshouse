import nodemailer from "nodemailer";

export default async (req, res) => {
    //  const { name, email, message } = req.body;
     const transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
       port: 465,
       secure: true,
       auth: {
         user: 'gillanix007@gmail.com',
         pass: 'ewktztcrvvcudufm',
       }
     });
   
     try {
       await transporter.sendMail({
         from: 'gillanix007@gmail.com',
         to: "zunairgillani54@gmail.com",
         subject: `Order`,
         html: `<p>You have got a new Order</p>`
       });
     } catch (error) {
       return res.status(500).json({ error: error.message || error.toString() });
     }
     return res.status(200).json({ error: "" });
   };