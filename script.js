// ---------- Burger menu (your original code) ----------
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
menuButton.addEventListener("click", function () {
    navigation.classList.toggle("show");
});

// ---------- Countdown: 5 days, 2 hours, 51 minutes from page load ----------
const end = Date.now() + ((5 * 24 + 2) * 60 + 51) * 60000;
const pad = (n) => String(n).padStart(2, "0");
function tick() {
    const t = Math.max(0, end - Date.now()) / 1000 | 0;
    document.getElementById("d").textContent = pad(t / 86400 | 0);
    document.getElementById("h").textContent = pad(t % 86400 / 3600 | 0);
    document.getElementById("m").textContent = pad(t % 3600 / 60 | 0);
    document.getElementById("s").textContent = pad(t % 60);
}
tick();
setInterval(tick, 1000);

// ---------- Voting (resets on reload; needs a backend to save) ----------
let votes = 830, total = 875;
const voteBtn = document.getElementById("vote");
function render() {
    const pct = (votes / total * 100).toFixed(1);
    document.getElementById("vc").textContent = votes + " votes";
    document.getElementById("pc").textContent = pct + "% of category";
    document.getElementById("bf").style.width = pct + "%";
}
render();
voteBtn.addEventListener("click", function () {
    votes++; total++;
    render();
    voteBtn.disabled = true;
    voteBtn.textContent = "VOTED";
});

// ---------- Competitors dropdown ----------
const compBtn = document.getElementById("comp");
compBtn.addEventListener("click", function () {
    const open = document.getElementById("list").classList.toggle("open");
    compBtn.setAttribute("aria-expanded", open);
});

// ---------- Share ----------
document.getElementById("share").addEventListener("click", function () {
    if (navigator.share) {
        navigator.share({ title: "Vote Juliah Njeri – Code VOP7B", url: location.href });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(location.href);
    }
});

// ---------- Scroll button ----------
const fab = document.getElementById("fab");
function updateFab() { fab.classList.toggle("up", scrollY >= 200); }
window.addEventListener("scroll", updateFab);
updateFab();
fab.addEventListener("click", function () {
    scrollTo({ top: scrollY < 200 ? document.body.scrollHeight : 0, behavior: "smooth" });
});