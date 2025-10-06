import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/api/graphql",
  documents: ["app/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./app/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        gqlTagName: "gql", // or your custom tag
        useTypeImports: true, // 👈 add this
      },
    },
    "./app/graphql/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};
export default config;
