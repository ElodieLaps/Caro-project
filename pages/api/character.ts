import characters from "../../lib/data/characters.json";

const characterApi = {
  getAllCharacters: () => {
    return characters;
  },
};

export default characterApi;
