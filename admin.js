const STORAGE_KEY = "bjpnews-cms-v1";

const defaultData = {
  settings: {
    siteTitle: "BJP News",
    tagline: "ਖ਼ਬਰਾਂ, ਤੁਹਾਡੇ ਨਜ਼ਰੀਏ ਨਾਲ",
    ticker: "ਪੰਜਾਬ ਦੀਆਂ ਅੱਜ ਦੀਆਂ ਅਹਿਮ ਖ਼ਬਰਾਂ ਅਤੇ ਤਾਜ਼ਾ ਅਪਡੇਟਸ ਇੱਥੇ ਪੜ੍ਹੋ\nਦੇਸ਼-ਦੁਨੀਆ ਦੀ ਹਰ ਹਲਚਲ ਉੱਤੇ ਨਜ਼ਰ\nਤੁਹਾਡੇ ਸ਼ਹਿਰ ਤੋਂ ਤੁਹਾਡੀ ਸਕ੍ਰੀਨ ਤੱਕ",
    aboutText: "BJP News ਇੱਕ independent demo-news experience ਹੈ। ਇੱਥੇ ਦਿੱਤੀਆਂ ਸਾਰੀਆਂ headlines ਅਤੇ ਕਹਾਣੀਆਂ sample content ਹਨ।"
  },
  featured: {
    category: "ਪੰਜਾਬ",
    title: "ਪੰਜਾਬ ਦੀ ਰਫ਼ਤਾਰ ਬਦਲ ਰਹੀ ਹੈ — ਨਵੇਂ ਵਿਚਾਰਾਂ ਤੋਂ ਨਵੀਆਂ ਸੰਭਾਵਨਾਵਾਂ ਤੱਕ",
    summary: "ਇਹ ਇੱਕ ਨਮੂਨਾ ਸੰਪਾਦਕੀ ਕਹਾਣੀ ਹੈ। ਬਦਲਦੇ ਸ਼ਹਿਰ, ਉਭਰਦੇ ਉਦਯੋਗ ਅਤੇ ਨੌਜਵਾਨ ਸੋਚ ਪੰਜਾਬ ਦੇ ਅਗਲੇ ਅਧਿਆਇ ਦੀ ਤਸਵੀਰ ਬਣਾ ਰਹੇ ਹਨ।",
    image: "/images/hero-punjab.jpg",
    url: "#latest",
    readingTime: "8 ਮਿੰਟ ਪੜ੍ਹਨ ਦਾ ਸਮਾਂ"
  },
  stories: [
    {
      id: "story-1",
      category: "ਪੰਜਾਬ",
      title: "ਨਵੇਂ ਵਿਚਾਰਾਂ ਨਾਲ ਬਦਲਦਾ ਪੰਜਾਬ: ਛੋਟੇ ਸ਼ਹਿਰਾਂ ਦੀ ਵੱਡੀ ਕਹਾਣੀ",
      summary: "ਸਥਾਨਕ entrepreneurs, creative communities ਅਤੇ ਨਵੀਂ technology ਨੇ ਵਿਕਾਸ ਦੀ ਚਰਚਾ ਨੂੰ ਨਵਾਂ ਰੁਖ ਦਿੱਤਾ ਹੈ।",
      image: "/images/hero-punjab.jpg",
      url: "",
      time: "18 ਮਿੰਟ ਪਹਿਲਾਂ"
    },
    {
      id: "story-2",
      category: "ਦੇਸ਼",
      title: "ਡਿਜ਼ੀਟਲ ਸਹੂਲਤਾਂ ਤੋਂ ਲੋਕਲ innovation ਤੱਕ, ਨਵਾਂ ਭਾਰਤ ਕਿਵੇਂ ਬਣ ਰਿਹਾ ਹੈ",
      summary: "ਜਨਤਕ ਸੇਵਾਵਾਂ ਦੇ ਬਦਲਦੇ ਤਜਰਬੇ ਨੇ ਨਾਗਰਿਕਾਂ ਅਤੇ ਸੰਸਥਾਵਾਂ ਵਿਚਕਾਰ ਨਵੀਂ ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕੀਤੀ ਹੈ।",
      image: "/images/city-news.jpg",
      url: "",
      time: "42 ਮਿੰਟ ਪਹਿਲਾਂ"
    },
    {
      id: "story-3",
      category: "ਰਾਜਨੀਤੀ",
      title: "ਨੀਤੀ ਦੀ ਗੱਲ: ਵਿਕਾਸ, ਜਵਾਬਦੇਹੀ ਅਤੇ ਜ਼ਮੀਨੀ ਅਸਰ",
      summary: "ਇਸ explainer ਵਿੱਚ ਅਸੀਂ ਵੇਖਦੇ ਹਾਂ ਕਿ policy decisions ਦਾ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਨਾਲ ਕੀ ਸੰਬੰਧ ਬਣਦਾ ਹੈ।",
      image: "/images/city-news.jpg",
      url: "",
      time: "1 ਘੰਟਾ ਪਹਿਲਾਂ"
    },
    {
      id: "story-4",
      category: "ਖੇਡਾਂ",
      title: "ਮੈਦਾਨ ਤੋਂ ਮਿਸਾਲ: ਨੌਜਵਾਨ ਖਿਡਾਰੀਆਂ ਦੀ ਮਿਹਨਤ ਅਤੇ ਨਵੀਂ ਉਮੀਦ",
      summary: "ਸਥਾਨਕ ਖੇਡ ਢਾਂਚੇ ਅਤੇ mentorship ਨੇ ਕਈ ਉਭਰਦੇ ਖਿਡਾਰੀਆਂ ਨੂੰ ਆਪਣੀ ਪਛਾਣ ਬਣਾਉਣ ਦਾ ਮੌਕਾ ਦਿੱਤਾ ਹੈ।",
      image: "/images/sports-news.jpg",
      url: "",
      time: "2 ਘੰਟੇ ਪਹਿਲਾਂ"
    },
    {
      id: "story-5",
      category: "ਦੁਨੀਆ",
      title: "ਦੁਨੀਆ ਦੀ ਨਜ਼ਰ: ਸਹਿਯੋਗੀ ਸੋਚ ਨਾਲ ਬਣਦਾ ਨਵਾਂ ਰਾਹ",
      summary: "ਵੱਖ-ਵੱਖ ਦੇਸ਼ਾਂ ਵਿਚਕਾਰ knowledge sharing ਅਤੇ sustainable solutions ਉੱਤੇ ਫੋਕਸ ਵਧਿਆ ਹੈ।",
      image: "/images/city-news.jpg",
      url: "",
      time: "3 ਘੰਟੇ ਪਹਿਲਾਂ"
    }
  ]
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || clone(defaultData);
  } catch {
    return clone(defaultData);
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY, newValue: JSON.stringify(data) }));
}

function byName(form, name) {
  return form.elements.namedItem(name);
}

function showMessage(message, type = "success") {
  const target = document.querySelector("#saveMessage");
  target.textContent = message;
  target.style.color = type === "error" ? "#c2410c" : "#16834b";
  window.clearTimeout(showMessage.timer);
  showMessage.timer = window.setTimeout(() => { target.textContent = ""; }, 3000);
}

let data = loadData();
const featuredForm = document.querySelector("#featuredForm");
const settingsForm = document.querySelector("#settingsForm");

function fillForm(form, values) {
  Object.entries(values).forEach(([key, value]) => {
    const field = byName(form, key);
    if (field) field.value = value ?? "";
  });
}

function readForm(form, keys) {
  return Object.fromEntries(keys.map((key) => [key, byName(form, key)?.value.trim() || ""]));
}

function escapeAttribute(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeText(value = "") {
  return String(value).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderStoriesEditor() {
  document.querySelector("#storyCount").textContent = data.stories.length;
  document.querySelector("#storiesEditor").innerHTML = data.stories.map((story, index) => `
    <article class="story-row" data-index="${index}">
      <img src="${story.image || "/brand/bjp-news-favicon.png"}" alt="" onerror="this.src='/brand/bjp-news-favicon.png'" />
      <div class="story-fields">
        <select data-field="category">
          <option ${story.category === "ਪੰਜਾਬ" ? "selected" : ""}>ਪੰਜਾਬ</option>
          <option ${story.category === "ਦੇਸ਼" ? "selected" : ""}>ਦੇਸ਼</option>
          <option ${story.category === "ਰਾਜਨੀਤੀ" ? "selected" : ""}>ਰਾਜਨੀਤੀ</option>
          <option ${story.category === "ਦੁਨੀਆ" ? "selected" : ""}>ਦੁਨੀਆ</option>
          <option ${story.category === "ਖੇਡਾਂ" ? "selected" : ""}>ਖੇਡਾਂ</option>
        </select>
        <input data-field="title" value="${escapeAttribute(story.title)}" aria-label="Headline" />
        <textarea data-field="summary" aria-label="Summary">${escapeText(story.summary)}</textarea>
        <input data-field="image" value="${escapeAttribute(story.image)}" placeholder="Image URL" aria-label="Image URL" />
        <input data-field="url" value="${escapeAttribute(story.url)}" placeholder="Article link" aria-label="Article link" />
      </div>
      <div class="story-actions">
        <button class="save-story" type="button">Save</button>
        <button class="delete-story" type="button">Delete</button>
      </div>
    </article>`).join("");

  document.querySelectorAll(".story-row").forEach((row) => {
    const index = Number(row.dataset.index);
    row.querySelector(".save-story").addEventListener("click", () => {
      row.querySelectorAll("[data-field]").forEach((field) => {
        data.stories[index][field.dataset.field] = field.value.trim();
      });
      saveData(data);
      row.querySelector("img").src = data.stories[index].image || "/brand/bjp-news-favicon.png";
      showMessage("Story saved");
    });

    row.querySelector(".delete-story").addEventListener("click", () => {
      if (!window.confirm("ਕੀ ਇਹ story delete ਕਰਨੀ ਹੈ?")) return;
      data.stories.splice(index, 1);
      saveData(data);
      renderStoriesEditor();
      showMessage("Story deleted");
    });
  });
}

fillForm(featuredForm, data.featured);
fillForm(settingsForm, data.settings);
renderStoriesEditor();

document.querySelector("#saveAllTop").addEventListener("click", () => {
  data.featured = readForm(featuredForm, ["category", "title", "summary", "image", "url", "readingTime"]);
  data.settings = readForm(settingsForm, ["siteTitle", "tagline", "ticker", "aboutText"]);
  saveData(data);
  showMessage("ਸਾਰੀਆਂ changes save ਹੋ ਗਈਆਂ");
});

document.querySelector("#addStory").addEventListener("click", () => {
  data.stories.unshift({
    id: `story-${Date.now()}`,
    category: "ਪੰਜਾਬ",
    title: "ਨਵੀਂ ਖ਼ਬਰ ਦੀ headline",
    summary: "ਇੱਥੇ ਖ਼ਬਰ ਦਾ ਸੰਖੇਪ ਵੇਰਵਾ ਲਿਖੋ।",
    image: "/brand/bjp-news-favicon.png",
    url: "",
    time: "ਹੁਣੇ"
  });
  saveData(data);
  renderStoriesEditor();
  document.querySelector("#stories").scrollIntoView({ behavior: "smooth" });
  showMessage("ਨਵੀਂ story ਸ਼ਾਮਲ ਹੋ ਗਈ");
});

document.querySelector("#exportData").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "bjpnews-content-backup.json";
  link.click();
  URL.revokeObjectURL(link.href);
});

document.querySelector("#importData").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!imported.settings || !imported.featured || !Array.isArray(imported.stories)) {
      throw new Error("Invalid backup");
    }
    data = imported;
    saveData(data);
    fillForm(featuredForm, data.featured);
    fillForm(settingsForm, data.settings);
    renderStoriesEditor();
    showMessage("Backup import ਹੋ ਗਿਆ");
  } catch {
    showMessage("Backup file ਸਹੀ ਨਹੀਂ ਹੈ", "error");
  }
  event.target.value = "";
});

document.querySelector("#resetData").addEventListener("click", () => {
  if (!window.confirm("ਕੀ ਸਭ editable content demo data ਨਾਲ reset ਕਰਨਾ ਹੈ?")) return;
  data = clone(defaultData);
  saveData(data);
  fillForm(featuredForm, data.featured);
  fillForm(settingsForm, data.settings);
  renderStoriesEditor();
  showMessage("Demo content restore ਹੋ ਗਿਆ");
});
