$(document).on(':passagerender', (ev) => {
  console.log(':passagerender ' + ev.passage.title);
  if (ev.passage.tags.includes("clue")) {
    console.log("Displayed clue passage: " + ev.passage.title);
    const title = ev.passage.title;
    const clueID = title.split(' ')[0];

    // Save found clue history and achievements.
    const achievements = recall("clues-found");
    achievements[clueID - 1] = true;
    memorize("clues-found", achievements);

    const clues = variables().cluesFound[clueId - 1];
    clues[cludID - 1] = true;
    variables().cluesFound = clues
  }
});

console.log('clue.js loaded')
