let currentChapterIndex = 0;

const chapters = [
  {
    title: "Pirates of the Caribbean - Cursed Seas",
    text: "In the treacherous waters of the Caribbean, the tales of cursed pirate treasure resonate through the ages. You, Captain Adrian Storm, have to discover the mysterious map of the lost treasure. Brace yourself for a daring odyssey, navigate through the challenging levels, solve the hidden puzzles to claim the cursed treasure. ",
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
    text: "Captain Adrian Storm, your boots sink into the soft sands of a desolate island, the air is thick with a scent of salt. You notice a peculiar glint beneath the palm trees. The map! Its weathered surface bears the marks of countless journeys and reveals cryptic symbols hinting at the hidden treasure. ",
    instruction:
      "Pickup the mysterious map! Only with the map in hand can you unveil the mysteries that lie ahead. ",
    background: "images/chapter-1.png",
    button1: {
      title: "Examen the Clues Revealed",
      nextChapter: 5,
    },
    button2: {
      title: "The Hidden Cave",
      nextChapter: 3,
    },
  },
  {
    title: "The Hidden Cave",
    text: "Captain Storm, the hidden cave holds the key to unlocking the mysteries of the Pirates of the Caribbean: Cursed Seas. Explore its secrets! Only by uncovering the clues you can progress further into the heart of the adventure.",
    instruction:
      "Legends speak of a message. The message will unlock the hidden treasure! ",
    instruction1: "This is not the correct answer. Try again!",
    instruction2: "Your answer is correct! Proceed to the hidden treasure.",
    background: "images/cave-message1.png",
    button1: {
      title: "The Hidden Treasure",
      nextChapter: 8,
    },
    button2: {
      title: "Return Home",
      nextChapter: 7,
    },
  },
  {
    title: " Mysterious Chamber",
    text: "Before you lies a room adorned with forgotten pirate relics and symbols carved into the stone. At the center, a pedestal holds a peculiar artifact—a celestial compass with the power to guide one through the supernatural realms.",
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
    text: "Captain Adrian Storm holds a newly revealed map, which directs him to a spectral ship shrouded in mist. A mysterious puzzle demands attention. The solution lies in finding an old message encrypted in a mystic bottle hidden somewhere.",
    instruction:
      "Uncover and remember the hidden message! It will be lost forever!",
    instruction1: "You unlocked new chapters, search for new clues.",
    instruction2: "You need to find the bottle first!",
    message:
      "Journey into the depths, where shadows reveal their secrets. The lost city name:  *** ATLANTIS ***  This is the key the unlock the hidden treasure. Remember it, or this will be lost forever! You will need it later. ",
    background: "images/ghost-ship1.png",
    button1: {
      title: "Return to the Map",
      nextChapter: 6,
    },
    button2: {
      title: "Next",
      nextChapter: 3,
    },
  },
  {
    title: "The Secrets of the Map",
    text: "The map beckons you to search for key artifacts that will chart your course through the cursed seas. Explore the nooks and crannies to collect the following items: Celestial Compass, Enchanted Seashell, and Ancient Key",
    instruction: "Unlock the path to the Ghostly Ship",
    instruction1: "You unlocked the path to the Ghostly Ship",
    instruction2:
      "You have some missing items. You need to collect all of them to move forward.",
    background: "images/map-2.png",
    button1: {
      title: "Navigate to Ghostly Ship",
      nextChapter: 4,
    },
    button2: {
      title: "Confirm All Items Collected",
      nextChapter: 5,
    },
  },
  {
    title: "Unveiling the Map's Mysteries",
    text: "The map holds secrets yet undiscovered, urging you to go deeper into its cryptic symbols. Your quest now is to unlock its hidden truths. The map whispers of additional enigmas that could further illuminate your path through the cursed seas.",
    instruction: "Decipher the Map's Enigmas or Return Home",
    background: "images/captain-img1.png",
    button1: {
      title: "Embark on the New Quest",
      nextChapter: 2,
    },
    button2: {
      title: "Return Home",
      nextChapter: 7,
    },
  },
  {
    title: "Back Home to Port Royal",
    text: "Captain Adrian Storm, after an adventurous journey through the cursed seas, decides to return to Port Royal. The mysteries of the map weigh heavily on his mind. As you sail back, the memories of the twisted adventure linger, and the ghostly ship fade away.",
    instruction:
      "Reflect on the challenges faced and the treasures left behind.",
    background: "images/return-home.png",
    button1: {
      title: "End the Adventure",
      nextChapter: 9,
    },
    button2: {
      title: "Return to the Map",
      nextChapter: 6,
    },
  },
  {
    title: "The Hidden Treasure",
    text: "Captain Adrian Storm, deciphers the final enigmas of the map. The path to the cursed treasure is unveiled! ",
    instruction: "Congratulation, you found the treasure!",
    background: "images/treasure-img.png",
    button1: {
      title: "End the Adventure",
      nextChapter: 9,
    },
    button2: {
      title: "",
    },
  },
  {
    title: "The Journey's End",
    text: "Captain Adrian Storm's journey concludes. Whether he returned home or claimed the cursed treasure, the adventures in the Caribbean have left an indelible mark. The legends of the cursed seas will be told for generations to come.",
    instruction:
      "Thank you for playing 'Pirates of the Caribbean - Cursed Seas'! Your choices shaped the destiny of Captain Adrian Storm.",
    background: "images/end-game1.png",
    button1: {
      title: "",
    },
    button2: {
      title: "",
    },
  },
];
