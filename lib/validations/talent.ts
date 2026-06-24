import { z } from "zod";

export const talentSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),

  phone: z.string().min(7, "Please enter a valid phone number"),

  email: z.email("Please enter a valid email"),

  city: z.string().min(2, "Please enter your city"),

  state: z.string().min(1, "Please select a state"),

  zip: z.string().min(3, "Please enter a zip code"),

  authStatus: z
    .string()
    .min(1, "Please select employment authorization status"),

  positionSeeking: z.string().optional(),

  message: z.string().max(5000).optional(),

  smsConsent: z.boolean().refine((value) => value, {
    message: "Please provide consent to receive text messages.",
  }),
});
