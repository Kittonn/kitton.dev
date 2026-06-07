const THEMES = ["light", "dark", "system"];
const THEME_KEY = "theme";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getSavedTheme = () => {
  const saved = localStorage.getItem(THEME_KEY);
  return THEMES.includes(saved!) ? saved! : "system";
};

const applyTheme = (theme: string) => {
  const resolved = theme === "system" ? getSystemTheme() : theme;
  document.documentElement.classList.toggle("dark", resolved === "dark");
};

const updateIcon = (choice: string) => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const isDark = document.documentElement.classList.contains("dark");
  const activeColor = isDark ? "white" : "black";

  const iconMap: Record<string, string> = {
    light: ".light",
    dark: ".moon",
    system: ".system",
  };

  Object.entries(iconMap).forEach(([theme, selector]) => {
    const icon = toggle.querySelector(selector) as HTMLElement;
    const isActive = theme === choice;
    icon.classList.toggle("hidden", !isActive);
    icon.style.color = isActive ? activeColor : "";
  });
};

const highlightActive = (choice: string) => {
  document.querySelectorAll("[data-theme]").forEach(b => {
    (b as HTMLElement).classList.toggle(
      "active",
      (b as HTMLElement).dataset.theme === choice
    );
  });
};

const setTheme = (choice: string) => {
  localStorage.setItem(THEME_KEY, choice);
  applyTheme(choice);
  updateIcon(choice);
  highlightActive(choice);
};

const setup = () => {
  const dropdown = document.getElementById("theme-dropdown");
  const themeToggle = document.getElementById("theme-toggle");
  if (!dropdown || !themeToggle) return;

  document.documentElement.classList.add("transition-colors", "duration-300");

  const saved = getSavedTheme();
  applyTheme(saved);
  updateIcon(saved);
  highlightActive(saved);

  themeToggle.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
  });

  document.querySelectorAll("[data-theme]").forEach(button => {
    button.addEventListener("click", () => {
      const choice = button.getAttribute("data-theme")!;
      setTheme(choice);

      dropdown.classList.add("hidden");
    });
  });

  document.addEventListener("click", () => dropdown.classList.add("hidden"));
};

setup();

document.addEventListener("astro:after-swap", setup);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (getSavedTheme() === "system") {
      applyTheme("system");
      updateIcon("system");
    }
  });
