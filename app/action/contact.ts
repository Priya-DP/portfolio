"use server";

import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { contactFormSchema, ContactFormData } from "@/lib/validation/contact";
import { revalidatePath } from "next/cache";

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the form data
    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Validation failed",
      };
    }

    const { name, email, subject, message } = validatedFields.data;

    // Insert into database
    await db.insert(contactMessages).values({
      name,
      email,
      subject,
      message,
    });

    revalidatePath("/");

    return {
      success: true,
      message: "Message sent successfully! I will get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
