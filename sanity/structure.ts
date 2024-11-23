import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content") // Set the title of the root list
    .items([
      S.documentTypeListItem("author") // Use `documentTypeList` for a clearer structure
        .title("Authors"),
      S.documentTypeListItem("startup") // Use `documentTypeList` for a clearer structure
        .title("Startups"),
    ]);
