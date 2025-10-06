import { graphql } from "~/graphql";

export const GET_CONNECTION_REQUESTS = graphql(`
  query GetConnectionRequests($userId: JSON) {
    ConnectionRequests(
      where: {
        OR: [{ sender: { equals: $userId } }, { receiver: { equals: $userId } }]
      }
    ) {
      docs {
        id
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
        message
        createdAt
      }
    }
  }
`);
