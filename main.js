window.addEventListener("DOMContentLoaded", main);

function main() {
  displayChapter();
  loadInventoryItem();
}

let inventory = [];

/**
 * Display the current scene
 */
function displayChapter() {
  // select the elements
  const chapterTitle = document.getElementById("chapter-title");
  const chapterDescription = document.getElementById("chapter-description");
  const chapterInstruction = document.getElementById("chapter-instruction");
  const buttons = document.querySelector(".buttons");
  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");
  const backgroundScene = document.getElementById("background-img");
  const backgroundVideo = document.getElementById("background-video");
  const imageContainer = document.querySelector(".img-container");
  const centerContainer = document.querySelector(".center-container");
  const videoContainer = document.querySelector(".video-container");
  const hiddenMap = document.getElementById("hidden-map");
  const seaShell = document.getElementById("seaShell");
  const key = document.getElementById("key");
  const compass = document.getElementById("compass");
  const messageBottle = document.getElementById("message-bottle");
  const inventoryCollection = document.querySelector(".inventory-collection");

  // select the current chapter
  const chapter = chapters[currentChapterIndex];

  chapterTitle.textContent = chapter.title;
  chapterDescription.textContent = chapter.text;
  chapterInstruction.textContent = chapter.instruction;
  backgroundScene.setAttribute("src", chapter.background);
  btn1.textContent = chapter.button1.title;
  btn2.textContent = chapter.button2.title;

  btn1.addEventListener("click", () => {
    displayNextChapter(chapter.button1.nextChapter);
  });
  btn2.addEventListener("click", () => {
    displayNextChapter(chapter.button2.nextChapter);
  });

  if (chapter.title === chapters[0].title) {
    btn2.classList.add("hidden");
  } else {
    btn2.classList.remove("hidden");
    backgroundVideo.classList.add("hidden");
    imageContainer.classList.remove("hidden");
  }

  /** Created the condition for showing the map in the
   *  appropriate chapter
   */
  if (chapter.title === chapters[1].title) {
    btn1.classList.add("hidden");
    btn2.classList.add("hidden");
    showHiddenMap();
  }

  /** Display the inventory items in the appropriate chapter */
  if (chapter.title === chapters[5].title) {
    showSeaShell();
    showCompass();
    showKey();
    console.log(inventory);
    // btn1.addEventListener("click", console.log("i was clicked"));
    if (
      inventory.includes("seaShell") &&
      inventory.includes("key") &&
      inventory.includes("compass")
    ) {
      btn1.classList.remove("hidden");
    }
    //else {
    //   alert("items not collected");
    // }
  }
  if (chapter.title === chapters[3].title) {
    btn1.classList.remove("hidden");
  }

  if (chapter.title === chapters[4].title) {
    createBottle(chapters[2].instruction);
    btn1.classList.remove("hidden");
  }

  /**
   * Creates the element 'bottle'.
   * @param {string} message
   */
  function createBottle(message) {
    // const messageBottle = document.createElement("img");
    // messageBottle.setAttribute("src", "images/bottle-img1.png");
    // messageBottle.className = "message-bottle";
    // imageContainer.append(messageBottle);
    if (!inventory.includes("messageBottle")) {
      messageBottle.classList.remove("hidden");
      messageBottle.addEventListener("click", () => {
        messageBottle.classList.add("hidden");
        inventory.push("messageBottle");
        showMessage(message);
      });
    }
  }

  /**
   * Displays a message with the instruction to be followed
   * @param {string} message
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

    closeBtn.addEventListener("click", () => {
      imageContainer.removeChild(messageContainer);
      console.log("Message container closed");
    });

    console.log("Message container created");
  }

  /**
   * Shows the hidden map and the element "hidden-map" is added to the inventory list
   */
  function showHiddenMap() {
    if (!inventory.includes("hiddenMap")) {
      hiddenMap.classList.remove("hidden");
      hiddenMap.addEventListener("click", () => {
        hiddenMap.classList.add("hidden");
        inventory.push("hiddenMap");
        displayNextChapter(chapters[2].button1.nextChapter);
      });
    }
  }

  /**
   * Shows the seashell and the element "seaShell" is added to the inventory list
   */
  function showSeaShell() {
    if (!inventory.includes("seaShell")) {
      seaShell.classList.remove("hidden");
      seaShell.addEventListener("click", () => {
        console.log();
        inventory.push("seaShell");
        seaShell.classList.add("hidden");
        createItemImage("images/shell1.png");
      });
    }
  }

  /**
   * Shows the key and the element "key" is added to the inventory list
   */
  function showKey() {
    if (!inventory.includes("key")) {
      key.classList.remove("hidden");
      key.addEventListener("click", () => {
        inventory.push("key");
        key.classList.add("hidden");
        createItemImage("images/key1.png");
      });
    }
  }

  /**
   * Shows the compass and the element "compass" is added to the inventory list
   */
  function showCompass() {
    if (!inventory.includes("compass")) {
      compass.classList.remove("hidden");
      compass.addEventListener("click", () => {
        inventory.push("compass");
        compass.classList.add("hidden");
        createItemImage("images/compass-artifact.png");
      });
    }
  }
  function createItemImage(imageSource) {
    const inventoryItem = document.createElement("img");
    inventoryItem.classList.add("inventory-item");
    inventoryItem.setAttribute("src", imageSource);
    inventoryCollection.appendChild(inventoryItem);
  }
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
 * @param {number} index
 */
function displayNextChapter(index) {
  currentChapterIndex = index;
  displayChapter();
}
