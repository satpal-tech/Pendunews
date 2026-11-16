const demoStories = [
  {
    category: "ਪੰਜਾਬ",
    title: "ਨਵੇਂ ਵਿਚਾਰਾਂ ਨਾਲ ਬਦਲਦਾ ਪੰਜਾਬ: ਛੋਟੇ ਸ਼ਹਿਰਾਂ ਦੀ ਵੱਡੀ ਕਹਾਣੀ",
    summary: "ਸਥਾਨਕ entrepreneurs, creative communities ਅਤੇ ਨਵੀਂ technology ਨੇ ਵਿਕਾਸ ਦੀ ਚਰਚਾ ਨੂੰ ਨਵਾਂ ਰੁਖ ਦਿੱਤਾ ਹੈ।",
    time: "18 ਮਿੰਟ ਪਹਿਲਾਂ",
    image: "/images/hero-punjab.jpg"
  },
  {
    category: "ਦੇਸ਼",
    title: "ਡਿਜ਼ੀਟਲ ਸਹੂਲਤਾਂ ਤੋਂ ਲੋਕਲ innovation ਤੱਕ, ਨਵਾਂ ਭਾਰਤ ਕਿਵੇਂ ਬਣ ਰਿਹਾ ਹੈ",
    summary: "ਜਨਤਕ ਸੇਵਾਵਾਂ ਦੇ ਬਦਲਦੇ ਤਜਰਬੇ ਨੇ ਨਾਗਰਿਕਾਂ ਅਤੇ ਸੰਸਥਾਵਾਂ ਵਿਚਕਾਰ ਨਵੀਂ ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕੀਤੀ ਹੈ।",
    time: "42 ਮਿੰਟ ਪਹਿਲਾਂ",
    image: "/images/city-news.jpg"
  },
  {
    category: "ਰਾਜਨੀਤੀ",
    title: "ਨੀਤੀ ਦੀ ਗੱਲ: ਵਿਕਾਸ, ਜਵਾਬਦੇਹੀ ਅਤੇ ਜ਼ਮੀਨੀ ਅਸਰ",
    summary: "ਇਸ explainer ਵਿੱਚ ਅਸੀਂ ਵੇਖਦੇ ਹਾਂ ਕਿ policy decisions ਦਾ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਨਾਲ ਕੀ ਸੰਬੰਧ ਬਣਦਾ ਹੈ।",
    time: "1 ਘੰਟਾ ਪਹਿਲਾਂ",
    image: "/images/city-news.jpg"
  },
  {
    category: "ਖੇਡਾਂ",
    title: "ਮੈਦਾਨ ਤੋਂ ਮਿਸਾਲ: ਨੌਜਵਾਨ ਖਿਡਾਰੀਆਂ ਦੀ ਮਿਹਨਤ ਅਤੇ ਨਵੀਂ ਉਮੀਦ",
    summary: "ਸਥਾਨਕ ਖੇਡ ਢਾਂਚੇ ਅਤੇ mentorship ਨੇ ਕਈ ਉਭਰਦੇ ਖਿਡਾਰੀਆਂ ਨੂੰ ਆਪਣੀ ਪਛਾਣ ਬਣਾਉਣ ਦਾ ਮੌਕਾ ਦਿੱਤਾ ਹੈ।",
    time: "2 ਘੰਟੇ ਪਹਿਲਾਂ",
    image: "/images/sports-news.jpg"
  },
  {
    category: "ਦੁਨੀਆ",
    title: "ਦੁਨੀਆ ਦੀ ਨਜ਼ਰ: ਸਹਿਯੋਗੀ ਸੋਚ ਨਾਲ ਬਣਦਾ ਨਵਾਂ ਰਾਹ",
    summary: "ਵੱਖ-ਵੱਖ ਦੇਸ਼ਾਂ ਵਿਚਕਾਰ knowledge sharing ਅਤੇ sustainable solutions ਉੱਤੇ ਫੋਕਸ ਵਧਿਆ ਹੈ।",
    time: "3 ਘੰਟੇ ਪਹਿਲਾਂ",
    image: "/images/city-news.jpg"
  },
  {
    category: "ਪੰਜਾਬ",
    title: "ਪਿੰਡਾਂ ਦੀ ਆਵਾਜ਼: community-led ਬਦਲਾਅ ਦੀਆਂ ਛੋਟੀਆਂ ਜਿੱਤਾਂ",
    summary: "ਜਦੋਂ ਸਥਾਨਕ ਲੋਕ ਮਿਲ ਕੇ ਹੱਲ ਲੱਭਦੇ ਹਨ, ਤਾਂ ਬਦਲਾਅ ਕਾਗਜ਼ ਤੋਂ ਨਿਕਲ ਕੇ ਜ਼ਮੀਨ ਤੱਕ ਪਹੁੰਚਦਾ ਹੈ।",
    time: "4 ਘੰਟੇ ਪਹਿਲਾਂ",
    image: "/images/hero-punjab.jpg"
  }
];

const CMS_STORAGE_KEY = "bjpnews-cms-v1";

function getCmsData() {
  try {
    const saved = JSON.parse(localStorage.getItem(CMS_STORAGE_KEY));
    if (saved && Array.isArray(saved.stories)) return saved;
  } catch (error) {
    console.warn("BJP News CMS data could not be read", error);
  }
  return {
    settings: {
      ticker: "ਪੰਜਾਬ ਦੀਆਂ ਅੱਜ ਦੀਆਂ ਅਹਿਮ ਖ਼ਬਰਾਂ ਅਤੇ ਤਾਜ਼ਾ ਅਪਡੇਟਸ ਇੱਥੇ ਪੜ੍ਹੋ\nਦੇਸ਼-ਦੁਨੀਆ ਦੀ ਹਰ ਹਲਚਲ ਉੱਤੇ ਨਜ਼ਰ\nਤੁਹਾਡੇ ਸ਼ਹਿਰ ਤੋਂ ਤੁਹਾਡੀ ਸਕ੍ਰੀਨ ਤੱਕ",
      aboutText: "BJP News ਇੱਕ independent demo-news experience ਹੈ। ਇੱਥੇ ਦਿੱਤੀਆਂ ਸਾਰੀਆਂ headlines ਅਤੇ ਕਹਾਣੀਆਂ sample content ਹਨ।"
    },
    featured: {
      category: "ਪੰਜਾਬ",
      title: demoStories[0].title,
      summary: demoStories[0].summary,
      image: demoStories[0].image,
      url: "#latest",
      readingTime: "8 ਮਿੰਟ ਪੜ੍ਹਨ ਦਾ ਸਮਾਂ"
    },
    stories: demoStories
  };
}

// Google News RSS feeds
const RSS_FEEDS = {
  "ਪੰਜਾਬ": "https://news.google.com/rss/search?q=Punjab+news&hl=pa&gl=IN&ceid=IN:pa",
  "ਦੇਸ਼": "https://news.google.com/rss/search?q=India+news&hl=pa&gl=IN&ceid=IN:pa",
  "ਰਾਜਨੀਤੀ": "https://news.google.com/rss/search?q=Indian+politics&hl=pa&gl=IN&ceid=IN:pa",
  "ਦੁਨੀਆ": "https://news.google.com/rss/search?q=World+news&hl=pa&gl=IN&ceid=IN:pa",
  "ਖੇਡਾਂ": "https://news.google.com/rss/search?q=India+sports&hl=pa&gl=IN&ceid=IN:pa"
};

const RSS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";
const RSS_REFRESH_MS = 5 * 60 * 1000;

const categoryImages = {
  "ਪੰਜਾਬ": "/images/hero-punjab.jpg",
  "ਦੇਸ਼": "/images/city-news.jpg",
  "ਰਾਜਨੀਤੀ": "/images/city-news.jpg",
  "ਦੁਨੀਆ": "/images/city-news.jpg",
  "ਖੇਡਾਂ": "/images/sports-news.jpg"
};

let liveStories = [];
let activeCategory = "ਸਭ";
let activeQuery = "";
let feedRequestId = 0;

const newsGrid = document.querySelector("#newsGrid");
const latestList = document.querySelector("#latestList");
const toast = document.querySelector("#toast");
const tickerTrack = document.querySelector("#tickerTrack");
const feedStatus = document.querySelector("#feedStatus");
const feedLastUpdated = document.querySelector("#feedLastUpdated");
const refreshFeedButton = document.querySelector("#refreshFeed");
const featuredTitle = document.querySelector("#featuredTitle");
const featuredSummary = document.querySelector("#featuredSummary");
const featuredCategory = document.querySelector("#featuredCategory");
const featuredReadingTime = document.querySelector("#featuredReadingTime");
const featuredLink = document.querySelector("#featuredLink");
const featuredImage = document.querySelector("#featuredImage");

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[character]));
}

function stripHtml(value = "") {
  const element = document.createElement("div");
  element.innerHTML = value;
  return (element.textContent || element.innerText || "").replace(/\s+/g, " ").trim();
}

function formatTimeAgo(dateValue) {
  const timestamp = new Date(dateValue).getTime();
  if (!Number.isFinite(timestamp)) return "ਤਾਜ਼ਾ";
  const minutes = Math.max(0, Math.floor((Date.now() - timestamp) / 60000));
  if (minutes < 1) return "ਹੁਣੇ";
  if (minutes < 60) return `${minutes} ਮਿੰਟ ਪਹਿਲਾਂ`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} ਘੰਟੇ ਪਹਿਲਾਂ`;
  const days = Math.floor(hours / 24);
  return `${days} ਦਿਨ ਪਹਿਲਾਂ`;
}

function formatClock(dateValue) {
  const date = new Date(dateValue);
  if (!Number.isFinite(date.getTime())) return "ਤਾਜ਼ਾ";
  return new Intl.DateTimeFormat("pa-IN", { hour: "2-digit", minute: "2-digit" }).format(date);
}

function uniqueStories(stories) {
  const seen = new Set();
  return stories.filter((story) => {
    const key = story.url || story.title;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function fetchFeed(category, feedUrl) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(`${RSS_PROXY}${encodeURIComponent(feedUrl)}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (payload.status !== "ok" || !Array.isArray(payload.items)) {
      throw new Error(payload.message || "RSS response was not valid");
    }
    return payload.items.slice(0, 5).map((item) => ({
      category,
      title: stripHtml(item.title) || "ਬਿਨਾਂ ਸਿਰਲੇਖ ਦੀ ਖ਼ਬਰ",
      summary: stripHtml(item.description).slice(0, 190) || "ਇਹ ਖ਼ਬਰ live RSS feed ਤੋਂ ਮਿਲੀ ਹੈ।",
      time: formatTimeAgo(item.pubDate),
      clock: formatClock(item.pubDate),
      image: item.thumbnail || item.enclosure?.link || categoryImages[category],
      url: item.link,
      source: item.author || payload.feed?.title || "Google News RSS",
      live: true
    }));
  } finally {
    window.clearTimeout(timeout);
  }
}

function setFeedStatus(type, message) {
  if (!feedStatus) return;
  feedStatus.className = `feed-status ${type}`;
  feedStatus.textContent = message;
}

function updateTicker() {
  if (!tickerTrack) return;
  const cms = getCmsData();
  const cmsHeadlines = String(cms.settings?.ticker || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const headlines = liveStories.length
    ? liveStories.slice(0, 5).map((story) => story.title)
    : (cmsHeadlines.length ? cmsHeadlines : [
        "ਪੰਜਾਬ ਦੀਆਂ ਅੱਜ ਦੀਆਂ ਅਹਿਮ ਖ਼ਬਰਾਂ ਅਤੇ ਤਾਜ਼ਾ ਅਪਡੇਟਸ ਇੱਥੇ ਪੜ੍ਹੋ",
        "ਦੇਸ਼-ਦੁਨੀਆ ਦੀ ਹਰ ਹਲਚਲ ਉੱਤੇ ਨਜ਼ਰ",
        "ਤੁਹਾਡੇ ਸ਼ਹਿਰ ਤੋਂ ਤੁਹਾਡੀ ਸਕ੍ਰੀਨ ਤੱਕ"
      ]);
  tickerTrack.innerHTML = headlines.map((headline) => `<span>${escapeHtml(headline)}</span>`).join("");
}

function applyCmsData() {
  const cms = getCmsData();
  const featured = cms.featured || {};
  if (featuredTitle && featured.title) featuredTitle.textContent = featured.title;
  if (featuredSummary && featured.summary) featuredSummary.textContent = featured.summary;
  if (featuredCategory && featured.category) featuredCategory.textContent = featured.category;
  if (featuredReadingTime && featured.readingTime) featuredReadingTime.textContent = featured.readingTime;
  if (featuredLink && featured.url) featuredLink.href = featured.url;
  if (featuredImage && featured.image) {
    featuredImage.src = featured.image;
    featuredImage.alt = `${featured.category || "Featured"} featured story`;
  }
  const aboutText = document.querySelector(".about-copy p");
  if (aboutText && cms.settings?.aboutText) aboutText.textContent = cms.settings.aboutText;
  if (cms.settings?.siteTitle) document.title = `${cms.settings.siteTitle} — ਪੰਜਾਬੀ ਨਿਊਜ਼ ਪੋਰਟਲ`;
}

async function loadLiveFeed({ silent = false } = {}) {
  const requestId = ++feedRequestId;
  if (!silent) setFeedStatus("loading", "ਲਾਈਵ RSS ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...");
  refreshFeedButton?.classList.add("is-loading");
  if (refreshFeedButton) refreshFeedButton.disabled = true;

  const results = await Promise.allSettled(
    Object.entries(RSS_FEEDS).map(([category, url]) => fetchFeed(category, url))
  );

  const receivedStories = results
    .filter((result) => result.status === "fulfilled")
    .flatMap((result) => result.value);

  const failedFeeds = results.filter((result) => result.status === "rejected").length;
  if (requestId !== feedRequestId) return;

  liveStories = uniqueStories(receivedStories);
  if (liveStories.length) {
    const partialMessage = failedFeeds ? ` (${failedFeeds} feed ਅਸਥਾਈ ਤੌਰ 'ਤੇ unavailable)` : "";
    setFeedStatus("success", `${liveStories.length} live RSS stories ਅੱਪਡੇਟ ਹੋਈਆਂ${partialMessage}`);
    if (feedLastUpdated) {
      feedLastUpdated.textContent = `ਅੱਪਡੇਟ: ${new Intl.DateTimeFormat("pa-IN", { hour: "2-digit", minute: "2-digit" }).format(new Date())}`;
    }
  } else {
    setFeedStatus("error", "RSS feed ਇਸ ਵੇਲੇ ਉਪਲਬਧ ਨਹੀਂ, demo stories ਦਿਖਾਈਆਂ ਜਾ ਰਹੀਆਂ ਹਨ");
  }

  updateTicker();
  renderStories(activeCategory, activeQuery);
  renderLatest();
  refreshFeedButton?.classList.remove("is-loading");
  if (refreshFeedButton) refreshFeedButton.disabled = false;
}

function renderStories(category = activeCategory, query = activeQuery) {
  activeCategory = category;
  activeQuery = query;
  const normalizedQuery = query.trim().toLowerCase();
  const editableStories = getCmsData().stories || demoStories;
  const sourceStories = uniqueStories(liveStories.length ? [...liveStories, ...editableStories] : editableStories);

  const filtered = sourceStories.filter((story) => {
    const matchesCategory = category === "ਸਭ" || story.category === category;
    const searchable = `${story.category} ${story.title} ${story.summary} ${story.source || ""}`.toLowerCase();
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });

  if (!filtered.length) {
    newsGrid.innerHTML = `<div class="empty-state"><strong>ਕੋਈ ਖ਼ਬਰ ਨਹੀਂ ਮਿਲੀ</strong><span>ਕਿਰਪਾ ਕਰਕੇ ਹੋਰ ਸ਼ਬਦ ਨਾਲ ਖੋਜ ਕਰੋ।</span></div>`;
    return;
  }

  newsGrid.innerHTML = filtered.map((story) => {
    const title = escapeHtml(story.title);
    const image = escapeHtml(story.image || categoryImages[story.category]);
    const categoryName = escapeHtml(story.category);
    const summary = escapeHtml(story.summary);
    const metaLabel = story.live ? "Live RSS" : "ਡੈਮੋ ਸਟੋਰੀ";
    const cardContent = `
      <div class="news-image"><img src="${image}" alt="${categoryName} ਖ਼ਬਰ ਲਈ editorial image" loading="lazy" /><span>${categoryName}</span></div>
      <div class="news-body">
        <div class="section-kicker">${categoryName}</div>
        <h3>${title}</h3>
        <p>${summary}</p>
        <div class="news-meta"><strong>${metaLabel}</strong><span>•</span><span>${escapeHtml(story.time)}</span></div>
      </div>`;

    if (story.url) {
      return `<a class="news-card live-news-card" href="${escapeHtml(story.url)}" target="_blank" rel="noopener noreferrer">${cardContent}</a>`;
    }
    return `<article class="news-card" tabindex="0" data-title="${title}">${cardContent}</article>`;
  }).join("");

  newsGrid.querySelectorAll("article.news-card").forEach((card) => {
    card.addEventListener("click", () => showToast(`"${card.dataset.title}" — ਪੂਰਾ ਲੇਖ ਜਲਦੀ ਉਪਲਬਧ ਹੋਵੇਗਾ।`));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") card.click();
    });
  });
}

function renderLatest() {
  const editableStories = getCmsData().stories || demoStories;
  const latestStories = liveStories.length
    ? liveStories.slice(0, 6)
    : editableStories.slice(0, 6).map((story) => ({ ...story, live: false }));

  latestList.innerHTML = latestStories.map((story) => {
    const title = escapeHtml(story.title);
    const meta = story.live ? `${escapeHtml(story.category)} • Live RSS` : `${escapeHtml(story.category)} • Demo update`;
    const content = `<time>${escapeHtml(story.clock || story.time)}</time><div><h3>${title}</h3><p>${meta}</p></div>`;
    return story.url
      ? `<a class="latest-item" href="${escapeHtml(story.url)}" target="_blank" rel="noopener noreferrer">${content}</a>`
      : `<article class="latest-item">${content}</article>`;
  }).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

document.querySelectorAll(".category-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".category-tab").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const search = document.querySelector("#searchInput");
    if (search) search.value = "";
    document.querySelector("#searchStatus").textContent = "";
    renderStories(tab.dataset.category, "");
  });
});

document.querySelector(".search-toggle").addEventListener("click", () => {
  const panel = document.querySelector(".search-panel");
  panel.hidden = !panel.hidden;
  if (!panel.hidden) document.querySelector("#searchInput").focus();
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#searchInput");
  const query = input.value;
  document.querySelectorAll(".category-tab").forEach((item) => item.classList.remove("active"));
  document.querySelector('[data-category="ਸਭ"]').classList.add("active");
  renderStories("ਸਭ", query);
  document.querySelector("#searchStatus").textContent = query ? `"${query}" ਲਈ ਨਤੀਜੇ` : "ਸਾਰੀਆਂ live/demo stories ਦਿਖਾਈਆਂ ਜਾ ਰਹੀਆਂ ਹਨ";
  document.querySelector("#categories").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector("#mainNav");
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-link, .footer-links a").forEach((link) => {
  link.addEventListener("click", () => document.querySelector("#mainNav").classList.remove("open"));
});

document.querySelector("#tickerToggle").addEventListener("click", (event) => {
  const ticker = document.querySelector(".ticker");
  ticker.classList.toggle("paused");
  event.currentTarget.textContent = ticker.classList.contains("paused") ? "▶" : "II";
});

refreshFeedButton?.addEventListener("click", () => loadLiveFeed());

window.addEventListener("storage", (event) => {
  if (event.key !== CMS_STORAGE_KEY) return;
  applyCmsData();
  updateTicker();
  renderStories(activeCategory, activeQuery);
  renderLatest();
});

applyCmsData();
renderStories();
renderLatest();
updateTicker();
loadLiveFeed();
window.setInterval(() => loadLiveFeed({ silent: true }), RSS_REFRESH_MS);
