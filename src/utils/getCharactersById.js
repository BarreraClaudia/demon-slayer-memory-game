function getCharactersById(characters) {
  // zenitsu id =    146158
  // inosuke id =    146159
  // nezuko id =     146157
  // tanjirou id =   146156
  // mitsuri id =    151145
  // shinobu id =    146736
  // kyoujurou id =  151143
  // muichirou id =  151147
  // giyuu id =      146735
  // kagaya id =     151150
  // tengen id =     151144
  // gyoumei id =    151146

  const characterIds = [
    146158, 146159, 146157, 146156, 151145, 146736, 151143, 151147, 146735,
    151150, 151144, 151146,
  ];

  const filteredChars = characters.filter((char) =>
    characterIds.includes(char.character.mal_id),
  );

  // from "last name, first name" to "first name last name"
  const rearrangeNames = filteredChars.map((char) => {
    const fixedName = char.character.name.split(', ').reverse().join(' ');
    return { ...char, character: { ...char.character, name: fixedName } };
  });

  return rearrangeNames;
}

export { getCharactersById };
