import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

type Payload = {
  name: string;
  link: string;
};

const sendEmail = async (
  email: string,
  subject: string,
  payload: Payload,
  template: string
) => {
    try {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: 465,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD, // naturally, replace both with your real credentials or an application-specific password
          },
        });
    
        const source = fs.readFileSync(path.join(__dirname, template), "utf8");
        const compiledTemplate = handlebars.compile(source);
        const options = () => {
          return {
            from: process.env.FROM_EMAIL,
            to: email,
            subject: subject,
            html: compiledTemplate(payload),
          };
        };
    
        // Send email
        transporter.sendMail(options(), (error, info) => {
          if (error) 
            return error;
        //   } else {
        //     return res.status(200).json({
        //       success: true,
        //     });
        //   }
        });
      } catch (error) {
        return error;
      }
    };
    
    /*
    Example:
    sendEmail(
      "youremail@gmail.com,
      "Email subject",
      { name: "Eze" },
      "./templates/layouts/main.handlebars"
    );
    */
    
   
   
   

export default sendEmail;
