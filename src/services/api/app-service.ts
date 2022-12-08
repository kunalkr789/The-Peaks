const serverUrl = "https://content.guardianapis.com";
const apiKey = "e4fb74c6-5ce3-406f-8ed0-920dc9643014";

export const getTopNews = async () => {
  const url = `${serverUrl}/news?api-key=${apiKey}&show-fields=all&show-elements=all`;
  const response = await fetch(url);
  const formattedResponse = await response.json();
  return formattedResponse.response.results;
};
