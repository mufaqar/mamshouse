export const config = {
     api: {
       bodyParser: false,
     },
   };
   
   const handler = async (req, res) => {
     if (req.method === "POST") {
       // Code here
     } else {
       res.setHeader("Allow", "POST");
       res.status(405).end("Method Not Allowed");
     }
   };
   
   export default handler;