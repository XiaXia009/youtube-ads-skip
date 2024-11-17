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
                //console.log("[YPL] movie_player更新");
                main();
                break;
            }
        }
    });

    observer.observe(targetNode, { childList: true, attributes: true, subtree: true });
    console.log("(v1.0)[Youtube Premium Launcher] start");
});

function isAdPlayingByClass() {
    const player = document.getElementById("movie_player");
    return player && (player.classList.contains("ad-showing") || player.classList.contains("ad-interrupting"));
}

async function main() {
    const player = document.getElementById("movie_player");

    //console.log("[YPL] 廣告播放狀態:", isAdPlayingByClass());
    if (isAdPlayingByClass()) {
        player.cancelPlayback();
        console.log("[YPL] 已調用 cancelPlayback");
        player.playVideo();
        console.log("[YPL] 已調用 playVideo");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("[Youtube Premium Launcher] 已觸發一次取消廣告");
    }
}
