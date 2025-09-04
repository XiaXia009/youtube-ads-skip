function waitForElement(selector, callback) {
    const interval = setInterval(() => {
        const targetNode = document.getElementById(selector);
        if (targetNode) {
            clearInterval(interval);
            callback(targetNode);
        }
    }, 100);
}

waitForElement("movie_player", (targetNode) => {
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === "childList" || mutation.type === "attributes") {
                main();
                break;
            }
        }
    });

    observer.observe(targetNode, { childList: true, attributes: true, subtree: true });
    console.log("[YPL][Youtube Premium Launcher](v1.0) start");

    if (localStorage.getItem("break_ads_times") === null) {
        localStorage.setItem("break_ads_times", "0");
        console.log("[YPL] break_ads_times 初始化為 0");
    } else {
        console.log("[YPL] break_ads_times 已存在:", localStorage.getItem("break_ads_times"));
    }
});

function isAdPlayingByClass() {
    const player = document.getElementById("movie_player");
    return player && (player.classList.contains("ad-showing") || player.classList.contains("ad-interrupting"));
}

async function main() {
    const player = document.getElementById("movie_player");

    if (isAdPlayingByClass()) {
        // --- 廣告處理 ---
        player.cancelPlayback?.();
        console.log("[YPL] 已調用 cancelPlayback");
        player.playVideo?.();
        console.log("[YPL] 已調用 playVideo");

        // --- 更新計數 ---
        let count = parseInt(localStorage.getItem("break_ads_times") || "0", 10);
        count++;
        localStorage.setItem("break_ads_times", String(count));
        console.log(`[YPL] break_ads_times 更新為 ${count}`);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("[Youtube Premium Launcher] 已觸發一次取消廣告");
    }
}
