export async function APICall(setStateObj) {
  const query = `
      query ($page: Int, $perPage: Int, $isBirthday: Boolean) {
        Page(page: $page, perPage: $perPage) {
          characters (isBirthday: $isBirthday) {
            id
            name {
              full
            }
            image {
              large,
              medium,    
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
    perPage: 40, // Specify the number of characters you want to fetch
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
    let results = characters.filter((character) => character.image.large !== "https://s4.anilist.co/file/anilistcdn/character/large/default.jpg")
    results = results.slice(0, 24);
    setStateObj((prevState) => ({
      ...prevState,
      characters: [...results],
    }));
  }

  await fetch(url, options).then(handleResponse).then(handleData);
}
