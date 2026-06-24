import { type SchemaTypeDefinition } from "sanity";

import { jobType } from "./job";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [jobType],
};
