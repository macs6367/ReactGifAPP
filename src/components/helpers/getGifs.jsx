export const getGifs = async (category) => {
  const api_key = "8xSWjOE7yXPxfCWdX3G1fnYUCPrUIfc5";
  const limit = 15;

  let url = "";

  category.trim() === ""
    ? (url =
        "https://api.giphy.com/v1/gifs/trending?api_key=8xSWjOE7yXPxfCWdX3G1fnYUCPrUIfc5")
    : (url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(
        category
      )}&limit=${limit}`);

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
