# Design

House of Danger is based on the game rules from the [House of Danger](https://boardgamegeek.com/boardgame/251420/choose-your-own-adventure-house-danger) board game.

This is a choose-your-own-adventure story game involving branching story paths, and random dice rolls to resolve encounters. The story itself is static, so repeated playthroughs will be the same events.

## Twine Constructs

It looks like the simplest way to provide passage snippet templates is to use the Widgets API. This allows you to define a set of widgets in a `widget` tagged passage which can be reused like a normal macro elsewhere. These widgets can receive an array of arguments, making it possible to produce dynamic content.

### Clue Widget

Given a clue number or clue name. When clicked, replaces the current box with the full clue text.

Sometimes clues will have other mechanisms, challenges, extra story transfers, etc. Use an `<<include>>` macro to include the passage contents.

### Premonition Widget

Premonition is a sub-type of clue widget. This will check if you have the appropriate Psychic level, and then display an image in line.

### Challenge Widget

More complicated widget, displays a Challenge UI with a challenge type and difficulty adjustment. Displays the results of a win or a loss. Can be optional or required. Selecting to attempt the challenge will roll a dice, and announce the result.

Player can choose to use a `tool` item to assist in the challenge.

### Goal Widget

Specialized clue widget. Displays the goal for the current challenge.

### Score Variables

The only story variables to maintain are Psychic level and Danger level. Maybe create some simple widgets for interacting with those?

### Passage Tags

Should be passage tags for `clue`s, `death`, `goal`, `premonition`, etc.

### Metadata

I would like to record as a metadata value all of the story passages and clues the player as reached, That way we can report an Achievement Progress screen with the number of elements the player has found. (ex. `43/150 Locations. 11/150 Clues Found`).

### Inventory System

We will need a simple inventory system to keep track of items. These can be split into `tools` (items to help with challenges), `quest` (items used for quest and story progress), `premonitions` (Items recording known premonitions).

These should be accompanied by passages to inspect all items in the inventory.

## Graphics

I think it would be nice if there was a muted color background around clues. Kinda like they are sticky notes or parchment which scroll out to display the clue text.

There should be some images in here eventually to match the ones from the game.

## Analytics

I can add analytics events for each death, chapter completion, and final ending reached.
