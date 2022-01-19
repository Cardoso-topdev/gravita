import { createClient } from "urql";

const client = createClient({
  url: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CTF_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CTF_ENVIRONMENT}`,
  fetchOptions: () => {
    const token = process.env.NEXT_PUBLIC_CTF_ACCESS_TOKEN;
    return {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    };
  },
});

export default client;
