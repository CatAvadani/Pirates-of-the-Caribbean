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
  /** Created the condition for showig the map in the
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

  if (chapter.title === chapters[5].title) {
    // if (!inventory.includes("seaShell")) showSeaShell();
    // if (!inventory.includes("key")) showKey();
    // if (!inventory.includes("compass")) showCompass();
    if (
      !(
        inventory.includes("seaShell") &&
        inventory.includes("key") &&
        inventory.includes("compass")
      )
    ) {
      showSeaShell();
      showCompass();
      showKey();
    }
  }
  /**
   * Shows the hidden map and the element "hidden-map" is added to the inventory list
   */
  function showHiddenMap() {
    hiddenMap.classList.remove("hidden");
    hiddenMap.addEventListener("click", () => {
      inventory.push("hidden-map");
      displayNextChapter(chapters[2].button1.nextChapter);
      hiddenMap.classList.add("hidden");
    });
  }
  /**
   * Shows the seashell and the element "seaShell" is added to the inventory list
   */
  function showSeaShell() {
    seaShell.classList.remove("hidden");
    seaShell.addEventListener("click", () => {
      inventory.push("seaShell");
      seaShell.classList.add("hidden");
    });
  }
  /**
   * Shows the key and the element "key" is added to the inventory list
   */
  function showKey() {
    key.classList.remove("hidden");
    key.addEventListener("click", () => {
      inventory.push("key");
      key.classList.add("hidden");
    });
  }
  /**
   * Shows the compass and the element "compass" is added to the inventory list
   */
  function showCompass() {
    compass.classList.remove("hidden");
    compass.addEventListener("click", () => {
      inventory.push("compass");
      compass.classList.add("hidden");
    });
  }
}

/**
 * Renders the next scene.
 * @param {*} index
 */
function displayNextChapter(index) {
  currentChapterIndex = index;
  displayChapter();
}
