$(document).on(':passagerender', (ev) => {
  if (ev.passage.tags.includes("clue")) {
    const title = ev.passage.title;
    const clueID = title.split(' ')[0];

    // Save found clue history and achievements.
    const achievements = recall("clues-found");
    achievements[clueID - 1] = true;
    memorize("clues-found", achievements);

    const clues = variables().cluesFound[clueId - 1];
    clues[cludID - 1] = true;
    variables().cluesFound = clues;
  }
});
