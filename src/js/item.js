/**
 * Item class represents a single item definition. These are build during game
 * setup and added to the `setup` object.
 *
 * Items are generally referenced by their id, which is passed around in the
 * Inventory system.
 */
class Item {
  constructor(id, name, tooltip) {
    this.id = id;
    this.name = name;
    this.tooltip = tooltip;
  }

  clone() {
    return new Item(this.name, this.id, this.tooltip);
  }

  toJSON() {
    // Return a code string that will create a new instance containing our
    // own data.
    return JSON.reviveWrapper(String.format(
      'new Item({0},{1},{2})',
      JSON.stringify(this.id),
      JSON.stringify(this.name),
      JSON.stringify(this.tooltip),
	  ));
  }
}

/**
 * CreateItem Macro definition for registering a new Item instance to `setup`.
 *
 * @param id string Item unique ID
 * @param name string Item display name
 * @param tooltip string Tooltip text for ths item
 */
Macro.add('CreateItem', {
  // tags: null,
  handler: function () {
    setup.AllItems = setup.AllItems || {};
    setup.AllItems[this.args[0]] = new Item(...this.args);
  },
});
