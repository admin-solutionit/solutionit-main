import { defineField, defineType } from "sanity";

export const jobType = defineType({
  name: "job",
  title: "Jobs",
  type: "document",

  fields: [
    //   Job Title
    defineField({
      name: "title",
      title: "Job Title",
      description:
        "Official title of the position as it will appear on the Careers page.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Ref Code
    defineField({
      name: "refCode",
      title: "Reference Code",
      description:
        "Internal reference number for the job opening. Example: 1413.",
      type: "string",
    }),

    // Manager
    defineField({
      name: "manager",
      title: "Hiring Manager",
      description: "Name of the hiring manager.",
      type: "string",
    }),

    // Experience
    defineField({
      name: "experience",
      title: "Experience",
      description:
        "Required experience for this role. Example: 8+ years or Senior Level.",
      type: "string",
    }),

    // Employment Type
    defineField({
      name: "type",
      title: "Employment Type",
      description: "Choose the type of employment offered for this position.",
      type: "string",

      options: {
        list: [
          { title: "Full Time", value: "Full-time" },
          { title: "Part Time", value: "Part-time" },
          { title: "Contract", value: "Contract" },
          { title: "Internship", value: "Internship" },
        ],
      },
    }),

    // Location
    defineField({
      name: "location",
      title: "Location",
      description:
        "Job location. Example: Remote, Boston MA, Hybrid, Client-site.",
      type: "string",
    }),

    // Platform
    defineField({
      name: "platform",
      title: "Platform / Primary Technology",
      description: "Primary technology or platform associated with this role.",
      type: "string",
    }),

    // Salary
    defineField({
      name: "salary",
      title: "Salary",
      description:
        "Optional. Annual salary or salary range displayed on the Careers page.",
      type: "string",
    }),

    // Benefits
    defineField({
      name: "benefits",
      title: "Benefits",
      description:
        "Benefits offered for this role. Example: Medical · Dental · Vision · PTO.",
      type: "string",

      initialValue: "Medical · Dental · Vision · PTO · 401K",
    }),

    // Modules
    defineField({
      name: "modules",
      title: "Modules",
      description:
        "Key modules, domains, or technologies related to this role.",
      type: "array",

      of: [
        {
          type: "string",
        },
      ],
    }),

    // Description
    defineField({
      name: "description",
      title: "Description",
      description:
        "Overview of the role. Supports paragraphs, headings, bold text and lists.",
      type: "text",

      rows: 5,
    }),

    // Responsibilty
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      description:
        "Describe the key responsibilities of this role. You can use paragraphs or bullet points.",
      type: "text",

      rows: 8,
    }),

    // Skills
    defineField({
      name: "skills",
      title: "Skills",
      description:
        "Add required skills one at a time. These will appear as tags.",
      type: "array",

      of: [
        {
          type: "string",
        },
      ],
    }),

    // Display Order
    defineField({
      name: "displayOrder",
      title: "Display Order",
      description:
        "Controls the order in which jobs appear. Lower numbers appear first.",
      type: "number",

      initialValue: 0,
    }),

    // is Active
    defineField({
      name: "isActive",
      title: "Active Job",
      description:
        "Disable this to hide the job from the website without deleting it.",

      type: "boolean",

      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      location: "location",
      type: "type",
    },

    prepare({ title, location, type }) {
      return {
        title,
        subtitle: `${type || ""} • ${location || ""}`,
      };
    },
  },
});
