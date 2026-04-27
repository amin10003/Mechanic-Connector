 export async function location(town) {
  const API_DATA = `https://kenyaareadata.vercel.app/api/areas`;

  const response = await fetch(API_DATA, {
    headers: {
      API_Key: `keyPub1569gsvndc123kg9sjhg`,
    },
  });

  const data = await response.json();

  return data;
}


