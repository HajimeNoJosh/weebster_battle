export async function APICall(setStateObj) {
  const query = `
      query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
          characters (isBirthday: true) {
            id
            name {
              full
            }
            image {
              large
            }
            description
            media {
              nodes {
                title {
                  romaji
                  english
                  native
                }
              }
            }
          }
        }
      }
    `;

  const variables = {
    isBirthday: true,
    page: 1,
    perPage: 24, // Specify the number of characters you want to fetch
  };

  const url = 'https://graphql.anilist.co';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json.errors[0].message);
    });
  }

  async function handleData(data) {
    const characters = data.data.Page.characters;
    setStateObj((prevState) => ({
      ...prevState,
      characters: [...characters],
    }));
  }

  await fetch(url, options).then(handleResponse).then(handleData);
}
