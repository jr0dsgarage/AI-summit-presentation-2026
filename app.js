const cards = [
  {
    title: "Title Card",
    file: "Cards/Title Card.md",
    tag: "Opening",
    blurb: "The session title and framing for vibe coding.",
    media: ["Images/Background_01.png", "Images/VSCode-copilot.png"]
  },
  {
    title: "Brief Personal History",
    file: "Cards/Brief Personal History.md",
    tag: "Personal",
    blurb: "A quick route from Wyoming to technical creative work.",
    media: ["Images/Flag_of_Wyoming.svg.png", "Images/UWYO-logo_mod.png", "Images/mocap_camera.jpg", "Images/EA-logo.png"]
  },
  {
    title: "My Coding Environment",
    file: "Cards/My Coding Environment.md",
    tag: "Workflow",
    blurb: "How tooling changed from snippets to agentic coding.",
    media: ["Images/500px-Visual_Studio_Code_1.35_icon.svg.png", "Images/VSCode-main_screenshot.png", "Images/Github Screenshot 1.png", "Images/Github Screenshot 2.png"]
  },
  {
    title: "Library Examples",
    file: "Cards/Library Examples/Library Examples.md",
    tag: "Library Projects",
    blurb: "Three practical examples from day-to-day library needs.",
    media: ["Images/SCL_logo.png", "Images/Sublette County Libraries - Logos_Primary Logo - F.png"]
  },
  {
    title: "Computer Cleaners",
    file: "Cards/Library Examples/Computer \"Cleaners\".md",
    tag: "Library Projects",
    blurb: "Privacy-focused scripts to reset public machines.",
    media: ["Images/mac-webdata-clear_screenshot.png", "Images/computer_timer.mp4"]
  },
  {
    title: "Library of Things Pamphlet",
    file: "Cards/Library Examples/Library of Things Pamphlet.md",
    tag: "Library Projects",
    blurb: "Google Sheets + Apps Script workflow to generate brochure output.",
    media: ["Images/LoT-brochure_screenshot.png", "Images/LoT-brochure_screenshot1.png", "Images/LoT-brochure_Apps-script-screenshot.png", "Images/LoT-brochure_vscode-screenshot.png", "Images/LoT-brochure_generate.mp4"]
  },
  {
    title: "Playtime Timer",
    file: "Cards/Library Examples/Playtime Timer.md",
    tag: "Library Projects",
    blurb: "A practical timer experiment for kid computer sessions.",
    media: ["Images/Timer_screenshot.png", "Images/LoT_Checklist.gif"]
  },
  {
    title: "Personal Examples",
    file: "Cards/Personal Examples/Personal Examples.md",
    tag: "Personal Projects",
    blurb: "A bridge into game and web experiments built with AI.",
    media: ["Images/Playdate_screenshot.png", "Images/MTWS_Website-Screenshot.png", "Images/WoW-UI_meme.png"]
  },
  {
    title: "Music Thing Workshop Website",
    file: "Cards/Personal Examples/MTM Website.md",
    tag: "Personal Projects",
    blurb: "A card viewer site that updates with the upstream repository.",
    media: ["Images/MTWS.png", "Images/MTWS-cards.png", "Images/MTWS_github-screenshot.png", "Images/MTWS_Website-Screenshot.png", "Images/MTWS_website-capture.gif", "Images/MTWS_Website-open.mp4", "Images/MTWS_Website-scroll.mp4", "Images/MTWS_Releases-Dive.mp4"]
  },
  {
    title: "Playdate Game",
    file: "Cards/Personal Examples/Playdate Game.md",
    tag: "Personal Projects",
    blurb: "From moving circles to vacuuming up space debris.",
    media: ["Images/Playdate_screenshot.png", "Images/starjunk_preview.gif"]
  },
  {
    title: "WoW UI",
    file: "Cards/Personal Examples/WoW UI.md",
    tag: "Personal Projects",
    blurb: "A custom UI journey from addons to own tooling.",
    media: [
      "Images/wow-icon.png",
      "Images/WoW-UI_meme.png",
      "Images/wow_screenshots/WoWScrnShot_Vanilla.jpg",
      "Images/wow_screenshots/WoWScrnShot_OtherAddons.jpg",
      "Images/wow_screenshots/WoWScrnShot_Edit-Mode.jpg",
      "Images/wow_screenshots/WoWScrnShot_jr0ds-Addons.jpg",
      "Images/wow_screenshots/wow-movie.mp4"
    ]
  },
  {
    title: "Take-aways",
    file: "Cards/Take-aways.md",
    tag: "Reflection",
    blurb: "What worked, what did not, and where the rough edges are.",
    media: ["Images/github-logo.png", "Images/VSCode-copilot.png"]
  },
  {
    title: "Final Thoughts",
    file: "Cards/Final Thoughts.md",
    tag: "Reflection",
    blurb: "What this unlocked and what still feels unresolved.",
    media: ["Images/Background_01_transparent.png"]
  }
];

const allMedia = [
  "Images/Github Screenshot 2.png",
  "Images/MTWS_Website-Screenshot.png",
  "Images/github-logo.png",
  "Images/Github Screenshot 1.png",
  "Images/Background_01.png",
  "Images/LoT-brochure_generate.mp4",
  "Images/VSCode-main_screenshot.png",
  "Images/LoT_Checklist.gif",
  "Images/LoT-brochure_vscode-screenshot.png",
  "Images/UWYO-logo_mod.png",
  "Images/starjunk_preview.gif",
  "Images/Timer_screenshot.png",
  "Images/MTWS_website-capture.gif",
  "Images/mac-webdata-clear_screenshot.png",
  "Images/EA-logo.png",
  "Images/mocap_camera.jpg",
  "Images/mocap_camera.png",
  "Images/Background_01_transparent.png",
  "Images/SCL_logo.png",
  "Images/LoT-brochure_screenshot1.png",
  "Images/MTWS_Website-open.mp4",
  "Images/wow-icon.png",
  "Images/LoT-brochure_Apps-script-screenshot.png",
  "Images/MTWS_Website-scroll.mp4",
  "Images/MTWS_Releases-Dive.mp4",
  "Images/MTWS.png",
  "Images/500px-Visual_Studio_Code_1.35_icon.svg.png",
  "Images/MTWS_github-screenshot.png",
  "Images/LoT-brochure_screenshot.png",
  "Images/wow_screenshots/Screenshot 2026-02-27 200814.png",
  "Images/wow_screenshots/Screenshot 2026-05-27 094228.png",
  "Images/wow_screenshots/wow-movie.mp4",
  "Images/wow_screenshots/WoWScrnShot_jr0ds-Addons.jpg",
  "Images/wow_screenshots/Screenshot 2026-04-04 160349.png",
  "Images/wow_screenshots/Screenshot 2026-05-24 155219.png",
  "Images/wow_screenshots/Screenshot 2026-04-23 085244.png",
  "Images/wow_screenshots/WoWScrnShot_Vanilla.jpg",
  "Images/wow_screenshots/WoWScrnShot_Edit-Mode.jpg",
  "Images/wow_screenshots/Screenshot 2026-05-23 173313.png",
  "Images/wow_screenshots/Screenshot 2026-04-29 143520.png",
  "Images/wow_screenshots/WoWScrnShot_OtherAddons.jpg",
  "Images/wow_screenshots/Screenshot 2026-04-19 185936.png",
  "Images/wow_screenshots/Screenshot 2026-05-27 133648.png",
  "Images/wow_screenshots/Screenshot 2026-04-29 135006.png",
  "Images/wow_screenshots/Screenshot 2026-05-13 133720.png",
  "Images/WoW-UI_meme.png",
  "Images/Flag_of_Wyoming.svg.png",
  "Images/computer_timer.mp4",
  "Images/Playdate_screenshot.png",
  "Images/VSCode-copilot.png",
  "Images/Sublette County Libraries - Logos_Primary Logo - F.png",
  "Images/MTWS-cards.png"
];

const storyline = [
  {
    heading: "Origin",
    text: "Raised in Wyoming, early coding experiments, and a long arc through CS and animation tech work."
  },
  {
    heading: "Shift",
    text: "From editing tiny snippets to collaborating with agentic AI in VS Code and GitHub workflows."
  },
  {
    heading: "Library Wins",
    text: "Scripts and generated docs that solved local privacy, organization, and patron support problems."
  },
  {
    heading: "Personal Build",
    text: "Games, addons, and web tools became possible even without traditional full-time dev fluency."
  },
  {
    heading: "Real Talk",
    text: "AI is powerful and imperfect: fast iteration, but still buggy, costly, and hard to finish projects with."
  }
];

const cardGrid = document.getElementById("cardGrid");
const mediaWall = document.getElementById("mediaWall");
const storylineEl = document.getElementById("storyline");

const modal = document.getElementById("cardModal");
const closeModal = document.getElementById("closeModal");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalSource = document.getElementById("modalSource");
const modalBody = document.getElementById("modalBody");
const modalMedia = document.getElementById("modalMedia");

function toUrl(path) {
  return encodeURI(path);
}

function isVideo(path) {
  return path.toLowerCase().endsWith(".mp4");
}

function createMediaElement(path, withCaption = false) {
  const wrapper = document.createElement("figure");
  wrapper.className = "media-item";

  if (isVideo(path)) {
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.src = toUrl(path);
    wrapper.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = toUrl(path);
    img.alt = path.split("/").at(-1);
    wrapper.appendChild(img);
  }

  if (withCaption) {
    const caption = document.createElement("figcaption");
    caption.className = "media-caption";
    caption.textContent = path;
    wrapper.appendChild(caption);
  }

  return wrapper;
}

function renderStoryline() {
  storyline.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "story-pill reveal";
    card.innerHTML = `<h3>${entry.heading}</h3><p>${entry.text}</p>`;
    storylineEl.appendChild(card);
  });
}

function renderCards() {
  cards.forEach((card) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card-tile reveal";
    button.innerHTML = `
      <p class="kicker">${card.tag}</p>
      <h3>${card.title}</h3>
      <p>${card.blurb}</p>
    `;

    button.addEventListener("click", () => openCard(card));
    cardGrid.appendChild(button);
  });
}

async function openCard(card) {
  modalTag.textContent = card.tag;
  modalTitle.textContent = card.title;
  modalSource.href = toUrl(card.file);
  modalSource.textContent = `Open ${card.file}`;

  modalBody.innerHTML = "<p>Loading card...</p>";
  modalMedia.innerHTML = "";

  try {
    const response = await fetch(toUrl(card.file));
    if (!response.ok) {
      throw new Error("Unable to load markdown");
    }

    const markdown = await response.text();
    modalBody.innerHTML = window.marked.parse(markdown);

    card.media.forEach((path) => {
      const media = createMediaElement(path, false);
      modalMedia.appendChild(media.firstElementChild);
    });
  } catch (error) {
    modalBody.innerHTML = `<p>Could not load this card yet. Error: ${error.message}</p>`;
  }

  if (typeof modal.showModal === "function") {
    modal.showModal();
  }
}

function renderMediaWall() {
  allMedia.forEach((path) => {
    mediaWall.appendChild(createMediaElement(path, true));
  });
}

closeModal.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  const bounds = modal.getBoundingClientRect();
  const inDialog =
    event.clientX >= bounds.left &&
    event.clientX <= bounds.right &&
    event.clientY >= bounds.top &&
    event.clientY <= bounds.bottom;

  if (!inDialog) {
    modal.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.open) {
    modal.close();
  }
});

renderStoryline();
renderCards();
renderMediaWall();
