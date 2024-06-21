import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

type Data = {
  message: string;
};

interface FormData {
  email: string;
  message: string;
  sessionType: 'single' | 'couple';
  name: string;
  birthdate: string;
  birthtime: string;
  birthplace: string;
  partnerName?: string;
  partnerBirthdate?: string;
  partnerBirthtime?: string;
  partnerBirthplace?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    email,
    message,
    sessionType,
    name,
    birthdate,
    birthtime,
    birthplace,
    partnerName,
    partnerBirthdate,
    partnerBirthtime,
    partnerBirthplace,
  } = req.body as FormData;

  let emailContent = `Email: ${email}\n\nMessage:\n${message}\n\nSession Type: ${sessionType}\n`;

  if (sessionType === 'single') {
    emailContent += `\nName: ${name}\nBirthdate: ${birthdate}\nBirth Time: ${birthtime}\nBirth Place: ${birthplace}\n`;
  } else if (sessionType === 'couple') {
    emailContent += `\nYour Name: ${name}\nYour Birthdate: ${birthdate}\nYour Birth Time: ${birthtime}\nYour Birth Place: ${birthplace}\n`;
    emailContent += `\nPartner's Name: ${partnerName}\nPartner's Birthdate: ${partnerBirthdate}\nPartner's Birth Time: ${partnerBirthtime}\nPartner's Birth Place: ${partnerBirthplace}\n`;
  }

  const msg = {
    to: process.env.FIXED_RECIPIENT_EMAIL as string,
    from: 'synchcosmic@gmail.com',
    replyTo: email,
    subject: 'New Contact Form Submission',
    text: emailContent,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Email sending failed' });
  }
};

export default handler;
