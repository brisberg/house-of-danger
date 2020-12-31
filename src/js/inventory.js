  // <<ShowInventory '$var'>>
  // This is an adaptation of the <<inventory>> macro that ships with simple-inventory.js
  Macro.add('ShowInventory', {
    handler : function () {

        if (this.args.length < 1) {
            return this.error('incorrect number of arguments');
        }

        var varName = this.args[0].trim();
        // check variable string
        if (varName[0] !== '$' && varName[0] !== '_') {
            return this.error('variable name "' + this.args[0] + '" is missing its sigil ($ or _)');
        }

        // check if story var is an inventory instance
        var inv = Wikifier.getValue(varName);
        if (!Inventory.is(inv)) {
            return this.error('variable ' + varName + ' is not an inventory!');
        }

        // create output element and add to DOM
        var $wrapper = $(document.createElement('span')),
            sep = (this.args[1]) ? this.args[1] : false;

        $wrapper
            .wiki(inv.toArray().map((i) => setup.AllItems[i].name))
            .addClass('macro-' + this.name)
            .appendTo(this.output);
    }
});
