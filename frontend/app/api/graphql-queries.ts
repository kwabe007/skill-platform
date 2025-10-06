import { gql } from "@apollo/client";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type {
  GetConnectionRequestsQuery,
  GetConnectionRequestsQueryVariables,
} from "~/graphql/generated";

export const GET_CONNECTION_REQUESTS: TypedDocumentNode<
  GetConnectionRequestsQuery,
  GetConnectionRequestsQueryVariables
> = gql`
  query GetConnectionRequests($userId: JSON) {
    ConnectionRequests(
      where: {
        OR: [{ sender: { equals: $userId } }, { receiver: { equals: $userId } }]
      }
    ) {
      docs {
        sender {
          id
          fullName
          email
          company {
            name
            description
          }
        }
        receiver {
          id
          fullName
          company {
            name
            description
          }
        }
        id
        createdAt
      }
    }
  }
`;
