window.addEventListener("DOMContentLoaded", main);

function main() {
  displayChapter();
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
  const videoContainer = document.querySelector(".video-container");
  const hiddenMap = document.getElementById("hidden-map");
  const seaShell = document.getElementById("seaShell");
  const key = document.getElementById("key");
  const compass = document.getElementById("compass");
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
  /** Created the condition for showing the map in the
   *  appropriate chapter
   */
  if (chapter.title === chapters[0].title) {
    btn2.classList.add("hidden");
    if (!inventory.includes("hidden-map")) showHiddenMap();
  } else {
    btn2.classList.remove("hidden");
    backgroundVideo.classList.add("hidden");
    imageContainer.classList.remove("hidden");
  }

  /** Display the inventory items in the appropriate chapter */
  if (chapter.title === chapters[5].title) {
    showSeaShell();
    showCompass();
    showKey();
  }
  /**
   * Shows the hidden map and the element "hidden-map" is added to the inventory list
   */
  function showHiddenMap() {
    if (!inventory.includes("hidden-map")) {
      hiddenMap.classList.remove("hidden");
      hiddenMap.addEventListener("click", () => {
        inventory.push("hidden-map");
        displayNextChapter(chapters[2].button1.nextChapter);
        hiddenMap.classList.add("hidden");
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
        inventory.push("seaShell");
        seaShell.classList.add("hidden");
        const seaShellImage = document.createElement("img");
        seaShellImage.classList.add("inventory-item");
        seaShellImage.setAttribute("src", "images/shell1.png");
        inventoryCollection.appendChild(seaShellImage);
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
        const keyImage = document.createElement("img");
        keyImage.classList.add("inventory-item");
        keyImage.setAttribute("src", "images/key1.png");
        inventoryCollection.appendChild(keyImage);
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
        const compassImage = document.createElement("img");
        compassImage.classList.add("inventory-item");
        compassImage.setAttribute("src", "images/compass-artifact.png");
        inventoryCollection.appendChild(compassImage);
      });
    }
  }
  console.log(inventory);
}

/**
 * Renders the next scene.
 * @param {*} index
 */
function displayNextChapter(index) {
  currentChapterIndex = index;
  displayChapter();
}
