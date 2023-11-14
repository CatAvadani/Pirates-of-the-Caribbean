/**
 * Entry point of the application. Initializes the display of the first chapter and loads inventory items.
 */
window.addEventListener("DOMContentLoaded", main);

/**
 * Main function that initializes the application.
 */
function main() {
  // Display the current chapter and load inventory items.
  displayChapter();
  loadInventoryItem();
}

// Global variable to store inventory items.
let inventory = [];

/**
 * Display the current scene based on
 * the current chapter index.
 */
function displayChapter() {
  // Select the HTML elements used in the current chapter.
  const chapterTitle = document.getElementById("chapter-title");
  const chapterDescription = document.getElementById("chapter-description");
  const chapterInstruction = document.getElementById("chapter-instruction");
  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");
  const backgroundScene = document.getElementById("background-img");
  const backgroundVideo = document.getElementById("background-video");
  const imageContainer = document.querySelector(".img-container");
  const centerContainer = document.querySelector(".center-container");
  const hiddenMap = document.getElementById("hidden-map");
  const seaShell = document.getElementById("seaShell");
  const key = document.getElementById("key");
  const compass = document.getElementById("compass");
  const inventoryCollection = document.querySelector(".inventory-collection");

  // Select the current chapter
  const chapter = chapters[currentChapterIndex];

  // Update the HTML elements with the current chapter's information.
  chapterTitle.textContent = chapter.title;
  chapterDescription.textContent = chapter.text;
  chapterInstruction.textContent = chapter.instruction;
  backgroundScene.setAttribute("src", chapter.background);
  btn1.textContent = chapter.button1.title;
  btn2.textContent = chapter.button2.title;

  btn1.onclick = () => {
    displayNextChapter(chapter.button1.nextChapter);
  };
  btn2.onclick = () => {
    displayNextChapter(chapter.button2.nextChapter);
  };

  // Handle specific chapter conditions.
  let title = chapter.title;

  // Chapter - Introduction - Pirates of the Caribbean - Cursed Seas
  if (title === chapters[0].title) {
    hideBtn(btn2);
  } else {
    showBtn(btn2);
    backgroundVideo.classList.add("hidden");
    imageContainer.classList.remove("hidden");
  }

  // Chapter 1 - The Lost Treasure Map
  if (title === chapters[1].title) {
    hideBtn(btn1);
    hideBtn(btn2);
    showHiddenMap();
  }

  // Chapter 2 -The Hidden Cave
  if (title === chapters[2].title) {
    if (!document.querySelector(".input-answer")) {
      const yourAnswer = document.createElement("input");
      yourAnswer.classList.add("input-answer");
      centerContainer.append(yourAnswer);
      hideBtn(btn1);
      btn2.onclick = () => {
        yourAnswer.classList.add("hidden");
        showBtn(btn1);
        hideBtn(btn2);
      };
    }
  }
  // Chapter 3 - Mysterious Chamber
  if (chapter.title === chapters[3].title) {
    showBtn(btn1);
  }

  // Chapter 4 - Ghostly Ship
  if (chapter.title === chapters[4].title) {
    // Check if the "messageBottle" is not already in the inventory.
    createBottle(chapter.message);
    hideBtn(btn1);
    btn2.onclick = () => {
      const isMessageBottlePresent = inventory.includes("messageBottle");
      if (isMessageBottlePresent) {
        showBtn(btn1);
        hideBtn(btn2);
        chapterInstruction.textContent = chapter.instruction1;
        chapterInstruction.style.color = "white";
      } else {
        chapterInstruction.textContent = chapter.instruction2;
        chapterInstruction.style.color = "#810D0D";
      }
    };
  }

  // Chapter 5 - The Secrets of the Map
  if (chapter.title === chapters[5].title) {
    /** Display the inventory items in the appropriate chapter */
    showSeaShell();
    showCompass();
    showKey();

    // Check if specific items are collected to show a button.
    btn2.onclick = () => {
      const isSeaShellPresent = inventory.includes("seaShell");
      const isKeyPresent = inventory.includes("key");
      const isCompassPresent = inventory.includes("compass");
      if (isSeaShellPresent && isKeyPresent && isCompassPresent) {
        showBtn(btn1);
        hideBtn(btn2);
        chapterInstruction.textContent = chapter.instruction1;
        chapterInstruction.style.color = "white";
      } else {
        chapterInstruction.textContent = chapter.instruction2;
        chapterInstruction.style.color = "#810D0D";
      }
    };
  }

  /**
   * Creates the element 'bottle'.
   * @param {string} message - The message to be displayed when the bottle is clicked.
   */
  function createBottle(message) {
    // Create the bottle element.
    const messageBottle = document.createElement("img");
    messageBottle.setAttribute("src", "images/bottle-img1.png");
    messageBottle.className = "messageBottle ";
    imageContainer.append(messageBottle);

    // Attach the click event to the newly created bottle.
    messageBottle.onclick = () => {
      messageBottle.classList.add("hidden");
      inventory.push("messageBottle");
      saveInventoryItem();
      showMessage(message);
    };
  }

  /**
   * Displays a message with the instruction to be followed
   * @param {string} message - The message to be displayed.
   */
  function showMessage(message) {
    const messageContainer = document.createElement("div");
    const text = document.createElement("p");
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "X";
    messageContainer.className = "message-container";
    text.textContent = message;
    imageContainer.appendChild(messageContainer);
    messageContainer.append(text);
    messageContainer.append(closeBtn);

    closeBtn.onclick = () => {
      imageContainer.removeChild(messageContainer);
    };
  }

  /**
   * Shows the hidden map and the element "hidden-map" is added to the inventory list
   */
  function showHiddenMap() {
    if (!inventory.includes("hiddenMap")) {
      hiddenMap.classList.remove("hidden");
      hiddenMap.onclick = (e) => {
        e.stopPropagation();
        hiddenMap.classList.add("hidden");
        inventory.push("hiddenMap");
        saveInventoryItem();
        displayNextChapter(chapters[2].button1.nextChapter);
      };
    }
  }

  /**
   * Shows the seashell and the element "seaShell" is added to the inventory list
   */
  function showSeaShell() {
    if (!inventory.includes("seaShell")) {
      seaShell.classList.remove("hidden");
      seaShell.onclick = () => {
        inventory.push("seaShell");
        saveInventoryItem();
        seaShell.classList.add("hidden");
        createItemImage("images/shell1.png");
      };
    }
  }

  /**
   * Shows the key and the element "key" is added to the inventory list
   */
  function showKey() {
    if (!inventory.includes("key")) {
      key.classList.remove("hidden");
      key.onclick = () => {
        inventory.push("key");
        saveInventoryItem();
        key.classList.add("hidden");
        createItemImage("images/key1.png");
      };
    }
  }

  /**
   * Shows the compass and the element "compass" is added to the inventory list
   */
  function showCompass() {
    if (!inventory.includes("compass")) {
      compass.classList.remove("hidden");
      compass.onclick = () => {
        inventory.push("compass");
        saveInventoryItem();
        compass.classList.add("hidden");
        createItemImage("images/compass-artifact.png");
      };
    }
  }

  /**
   * Shows a selected button
   * @param {*} btn
   */
  function showBtn(btn) {
    btn.classList.remove("hidden");
  }

  /**
   * Hides a selected button
   * @param {*} btn
   */
  function hideBtn(btn) {
    btn.classList.add("hidden");
  }
  function createItemImage(imageSource) {
    const inventoryItem = document.createElement("img");
    inventoryItem.classList.add("inventory-item");
    inventoryItem.setAttribute("src", imageSource);
    inventoryCollection.appendChild(inventoryItem);
  }

  // Saves the inventory state after each chapter.
  saveInventoryItem();
}

/**
 * Saves the global inventory array to local storage
 */
function saveInventoryItem() {
  const itemString = JSON.stringify(inventory);
  localStorage.setItem("inventory", itemString);
}

/**
 * Loads the inventory item from local storage and
 * saves it to the global inventory array
 */
function loadInventoryItem() {
  if (localStorage.key("inventory")) {
    const itemString = localStorage.getItem("inventory");
    if (itemString !== null) {
      inventory = JSON.parse(itemString);
    }
  }
}

/**
 * Renders the next scene.
 * @param {number} index - The index of the next chapter to be displayed.
 */
function displayNextChapter(index) {
  currentChapterIndex = index;
  displayChapter();
}
