export const JOBS_QUERY = `
  *[_type == "job" && isActive == true]
  | order(displayOrder asc) {

    _id,

    title,

    refCode,

    manager,

    experience,

    type,

    location,

    platform,

    salary,

    benefits,

    modules,

    description,

    responsibilities,

    skills,

    displayOrder,

    isActive
  }
`;
