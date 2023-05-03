import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID rSxzzNfh6doaUnxNgDlmwKGf5JMV4PmXpApEYhKlOSo",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
  console.log(response);
};

export default SearchImages;
