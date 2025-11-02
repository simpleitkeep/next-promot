import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }

  try {
    const { name, email, company, website, challenge } = req.body;

    console.log('Form submission:', { name, email, company, website, challenge });

    // TODO: Add email sending logic here
    // Example: await sendEmail({ to: 'your@email.com', ... });

    return res.status(200).json({ 
      message: 'Thank you! We will contact you within 24 hours.', 
      success: true 
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      message: 'Something went wrong. Please try again.', 
      success: false 
    });
  }
}