'use server';

import { redirect } from 'next/navigation';

import { createMessageId, formatPhoneNumber } from '@/utils';
import { sendEmail } from '@/utils/sendEmail';

import { createEmailTemplate } from '@/emails/contactMessage';

export type FormState = {
  error: string | null;
  customerName: string | null;
  email: string | null;
  phone: string | null;
  message: string | null;
} | null;

async function sendContactMessage(
  _prevState: FormState | null,
  formData: FormData
) {
  const messageId = createMessageId();
  const customerName = formData.get('customerName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;
  try {
    const formattedMessage = {
      id: messageId,
      name: customerName.trim(),
      email: email.toLowerCase().trim(),
      phone: formatPhoneNumber(phone),
      message: message.trim(),
    };

    const { text, html } = createEmailTemplate(formattedMessage);

    await sendEmail({
      to: process.env.TO_EMAIL_ADDRESS,
      from: process.env.FROM_EMAIL_ADDRESS,
      subject: `Contact message from ${customerName} [#${messageId}]`,
      replyTo: formattedMessage.email,
      bcc: process.env.BCC_EMAIL_ADDRESS,
      text,
      html,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unknown error occurred sending the message.';
    console.error(errorMessage);
    return {
      error: `Something went wrong. Please try sending your message again. You can also email us directly at ${process.env.TO_EMAIL_ADDRESS} or call (920) 452-7995.`,
      customerName,
      email,
      phone,
      message,
    };
  }
  redirect('/contact/success');
}

export { sendContactMessage };
