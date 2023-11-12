let currentChapterIndex = 0;

const chapters = [
  {
    title: "Pirates of the Caribbean - Cursed Seas",
    text: "In the treacherous waters of the Caribbean, the tales of cursed pirate treasure resonate through the ages. You, Captain Adrian Storm, have to discover the mysterious map of the lost treasure. Brace yourself for a daring odyssey, navigate through five challenging levels, confronting supernatural forces and crafty adversaries to claim the cursed treasure. ",
    instruction: "Are you ready for adventure?",
    background: "images/shipwreck.jpeg",
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
    title: "The Hidden Cave",
    text: "Captain Storm, the hidden cave holds the key to unlocking the mysteries of the Pirates of the Caribbean: Cursed Seas. Explore its secrets! Only by uncovering the clues you can progress further into the heart of the adventure.",
    instruction: "Assemble the clues to reveal the next steps in your quest.",
    background: "images/cave-message1.png",
    button1: {
      title: "Solve puzzle",
      nextChapter: 5,
    },
    button2: {
      title: "Go to the beach",
      nextChapter: 5,
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
      nextChapter: 4,
    },
    button2: {
      title: "Activate the Celestial Compass",
      nextChapter: 0,
    },
  },
  {
    title: "Ghostly Ship",
    text: "Captain Adrian Storm holds a newly revealed map, which directs him to a spectral ship shrouded in mist. Before venturing into this ghostly realm, a mysterious puzzle demands attention. The solution lies in finding an old, lost bottle hidden somewhere. Legends speak of a message within that must be carried forth.",
    instruction:
      "Uncover the hidden message that will serve as the guiding light beyond the Ghostly Ship. ",
    background: "images/ghost-ship1.png",
    button1: {
      title: "Return to the map",
      nextChapter: 6,
    },
    button2: {
      title: "Mysterious Chamber",
      nextChapter: 3,
    },
  },
  {
    title: "The Secrets of the Map",
    text: "The map beckons you to search for key artifacts that will chart your course through the cursed seas. Explore the nooks and crannies to collect the following items: Celestial Compass, Enchanted Seashell, and Ancient Key",
    instruction: "Unlock the Path to the Ghostly Ship",
    background: "images/map-2.png",
    button1: {
      title: "Navigate to Ghostly Ship",
      nextChapter: 4,
    },
    button2: {
      title: "Confirm Items Collected",
      nextChapter: 5,
    },
  },
  {
    title: "The Secrets of the Map",
    text: "The map beckons you to search for key artifacts that will chart your course through the cursed seas. Explore the nooks and crannies to collect the following items: Celestial Compass, Enchanted Seashell, and Ancient Key",
    instruction: "Unlock the Path to the Ghostly Ship",
    background: "images/captain-img1.png",
    button1: {
      title: "Unlock More Secrets",
      nextChapter: 2,
    },
    button2: {
      title: "Return to Ghost Ship",
      nextChapter: 4,
    },
  },
];
