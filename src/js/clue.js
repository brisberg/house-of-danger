// Config.debug = true;

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

Macro.add('createclue', {
  // tags: null,
  handler: function () {
    setup.AllClues = setup.AllClues || {};
    setup.AllClues[this.args[0]] = new Clue(...this.args);
  },
});
