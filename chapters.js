let currentChapterIndex = 0;

const chapters = [
  {
    title: "Pirates of the Caribbean - Cursed Seas",
    text: "In the treacherous waters of the Caribbean, the tales of cursed pirate treasure resonate through the ages. You, Captain Adrian Storm, have to discover the mysterious map of the lost treasure. Brace yourself for a daring odyssey, navigate through five challenging levels, confronting supernatural forces and crafty adversaries to claim the cursed treasure. ",
    instruction: "Are you ready for adventure?",
    background: "",
    button1: {
      title: "Begin Your Journey",
      nextChapter: 1,
    },
    button2: {
      title: "",
      nextChapter: 3,
    },
  },

  {
    title: "The Lost Treasure Map",
    text: "Captain Adrian Storm, your boots sink into the soft sands of a desolate island, the air is thick with a scent of salt. You notice a peculiar glint beneath the palm trees. The map! Its weathered surface bears the marks of countless journeys and reveals cryptic symbols hinting at the hidden treassure. ",
    instruction:
      "Pickup the mysterious map! Only with the map in hand can you unveil the mysteries that lie ahead. ",
    background: "images/chapter-1.png",
    button1: {
      title: "Examen the Clues Revealed",
      nextChapter: 2,
    },
    button2: {
      title: "The Hidden Cave",
      nextChapter: 3,
    },
  },
  {
    title: "The Hidden Cove",
    text: "Captain Storm, the hidden cove holds the key to unlocking the mysteries of the Pirates of the Caribbean: Cursed Seas. Explore its secrets! Only by uncovering the clues you can progress further into the heart of the adventure.",
    instruction: "Assemble the clues to reveal the next steps in your quest.",
    background: "images/cave-message1.png",
    button1: {
      title: "Solve puzzle",
      nextChapter: 5,
    },
    button2: {
      title: "Go to the beach",
      nextChapter: 4,
    },
  },
  {
    title: " Mysterious Chamber",
    text: "Before you lies a room adorned with forgotten pirate relics and symbols etched into the stone. At the center, a pedestal holds a peculiar artifact—a celestial compass with the power to guide one through the supernatural realms.",
    instruction:
      "Unlock the power of the celestial compass to reveal the next destination.",
    background: "images/chapter-3.png",
    button1: {
      title: "Navigate the Ghostly Ship",
      nextChapter: 0,
    },
    button2: {
      title: "Activate the Celestial Compass",
      nextChapter: 0,
    },
  },
  {
    title: "Chapter 4",
    text: "",
    instruction: "",
    background: "images/shipwreck.jpeg",
    button1: {
      title: "Return to the map",
      nextChapter: 1,
    },
    button2: {
      title: "Explore the beach",
      nextChapter: 1, // create a new scene
    },
  },
  {
    title: "Chapter 5",
    text: "",
    instruction: "",
    background: "images/cave-message1.png",
    button1: {
      title: "Your answer",
      nextScene: 2,
    },
    button2: {
      title: "Return to the cave",
      nextChapter: 2, // create a new scene
    },
  },
];
