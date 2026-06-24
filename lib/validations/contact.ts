import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(100),

  company: z.string().min(2, "Please enter your company name").max(100),

  email: z.email("Please enter a valid email"),

  phone: z.string().min(7, "Please enter a valid phone number").max(25),

  serviceArea: z.enum([
    "oracle-staffing",
    "remote-oracle",
    "services",
    "technology",
  ]),

  message: z.string().min(10, "Please tell us more").max(2000),

  smsConsent: z.boolean().refine((val) => val === true, {
    message: "Please provide consent to receive text messages.",
  }),
});
