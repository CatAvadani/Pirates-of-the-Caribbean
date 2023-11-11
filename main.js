window.addEventListener("DOMContentLoaded", main);

function main() {
  displayChapter();
}

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
}
/**
 * Renders the next scene.
 * @param {*} index
 */
function displayNextChapter(index) {
  currentChapterIndex = index;
  displayChapter();
}
