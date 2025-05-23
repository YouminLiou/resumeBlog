// ScrollReveal 是現成輕量庫，可快速上手；如果要更細緻或控管更多參數，可改用原生的 IntersectionObserver API。
// 啟動 ScrollReveal
// 優化大量滾動動畫的效能 ：可只對可見區塊或關鍵元素執行，或減少 interval，並在低性能裝置關閉動畫。
// ScrollReveal().reveal("header, main section, footer", {
//   distance: "20px", // 往上移動 20px
//   origin: "bottom", // 從底部出現
//   opacity: 0, // 初始透明度
//   duration: 600, // 動畫持續時間（ms）
//   interval: 200, // 每個元素間隔延遲時間（ms）
// });

// 按鈕 hover 動效
const btn = document.querySelector(".btn");
if (btn) {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "transform 0.2s ease";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
}

// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // 主題切換器
  const themeToggle = document.getElementById("themeToggle");
  //切換時改變 <html>（document.documentElement）身上的 .light class
  const root = document.documentElement;
  // 初始化：從 localStorage 讀取
  //一開始讀 localStorage 決定要 light 或 dark（預設 dark）
  // 1. 讀取上次主題
  const current = localStorage.getItem("theme") || "dark";
  if (current === "light") {
    root.classList.add("light");
    themeToggle.textContent = "🌞";
  }
  // 點擊切換
  // 2. 綁定切換
  themeToggle.addEventListener("click", () => {
    const isLight = root.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "🌞" : "🌙";
  });
});
