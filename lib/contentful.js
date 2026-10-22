import { createClient } from 'contentful';

export async function fetchChallenges() {
  const { CONTENTFUL_SPACE_ID: space, CONTENTFUL_ACCESS_TOKEN: accessToken } = process.env;
  if (!space || !accessToken) return [];

  const client = createClient({ space, accessToken });
  const entries = await client.getEntries({ content_type: 'dailyChallenge' });
  return entries.items
    .map((item) => item.fields?.text)
    .filter((text) => typeof text === 'string' && text.trim().length > 0);
}
