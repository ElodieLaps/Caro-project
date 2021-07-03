import characters from "../data/characters.json";

const characterApi = {
  getAllCharacters: () => {
    return characters;
  },
};

export default characterApi;
