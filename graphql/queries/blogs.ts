import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GET_ALL_POSTS($skip: Int, $limit: Int) {
    blogPostCollection(skip: $skip, limit: $limit) {
      skip
      items {
        title
        description
        content {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
          }
        }
      }
    }
  }
`;

// export const GET_POST_BY_ID
