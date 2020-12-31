/**
 * Clue class represents a single clue definition. These are build during game
 * setup and added to the `setup` object.
 *
 * Clues are generally referenced by their name, but ID is a unique, positive
 * number used for achievement tracking.
 */
class Clue {
  constructor(name, id, passage) {
    this.name = name;
    this.id = id;
    this.passage = passage;
  }

  clone() {
    return new Clue(this.name, this.id, this.passage);
  }

  toJSON() {
    // Return a code string that will create a new instance containing our
    // own data.
    return JSON.reviveWrapper(String.format(
      'new Clue({0},{1},{2})',
      JSON.stringify(this.name),
      JSON.stringify(this.id),
      JSON.stringify(this.passage),
	  ));
  }
}

/**
 * CreateClue Macro definition for registering a new Clue instance to `setup`.
 *
 * @param name string Clue name
 * @param id Clue numerical ID
 * @param passage Title of the passage to containing the Clue contents
 */
Macro.add('CreateClue', {
  // tags: null,
  handler: function () {
    setup.AllClues = setup.AllClues || {};
    setup.AllClues[this.args[0]] = new Clue(...this.args);
  },
});
