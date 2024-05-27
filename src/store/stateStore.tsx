const state = {
  speciez: "",
  listCharactersz: [],
  originalListCharacters: [],
  searchz: "",
  listCommentsz: [],
  listSoftDeletez: [],
  filter: {
    character: { selected: "", options: ["", "Starred", "Others"] },
    species: { selected: "", options: ["", "Human", "Alien"] },
    status: { selected: "", options: ["", "Alive", "Dead"] },
    gender: { selected: "", options: ["", "Male", "Female"] },
  },
};

export default state;
