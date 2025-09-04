function createCustomLogo() {
    const ytIcon = document.createElement("yt-icon");
    ytIcon.setAttribute("id", "logo-icon");
    ytIcon.setAttribute("class", "style-scope ytd-logo");
    const svgNS = "http://www.w3.org/2000/svg";

    // <svg>
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "101");
    svg.setAttribute("height", "20");
    svg.setAttribute("viewBox", "0 0 101 20");
    svg.setAttribute("aria-hidden", "true");
    svg.style.pointerEvents = "none";
    svg.style.display = "inherit";
    svg.style.width = "100%";
    svg.style.height = "100%";

    // <g> 包含紅色矩形 + 白色播放鍵
    const g1 = document.createElementNS(svgNS, "g");

    const path1 = document.createElementNS(svgNS, "path");
    path1.setAttribute("d", "M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z");
    path1.setAttribute("fill", "#FF0033");

    const path2 = document.createElementNS(svgNS, "path");
    path2.setAttribute("d", "M19 10L11.5 5.75V14.25L19 10Z");
    path2.setAttribute("fill", "white");

    g1.appendChild(path1);
    g1.appendChild(path2);

    // <g id="youtube-paths_yt94"> (黑色文字)
    const g2 = document.createElementNS(svgNS, "g");
    
    g2.setAttribute("id", "youtube-paths_yt94");

    const pathList = [
        "M32.1819 2.10016V18.9002H34.7619V12.9102H35.4519C38.8019 12.9102 40.5619 11.1102 40.5619 7.57016V6.88016C40.5619 3.31016 39.0019 2.10016 35.7219 2.10016H32.1819ZM37.8619 7.63016C37.8619 10.0002 37.1419 11.0802 35.4019 11.0802H34.7619V3.95016H35.4519C37.4219 3.95016 37.8619 4.76016 37.8619 7.13016V7.63016Z",
        "M41.982 18.9002H44.532V10.0902C44.952 9.37016 45.992 9.05016 47.302 9.32016L47.462 6.33016C47.292 6.31016 47.142 6.29016 47.002 6.29016C45.802 6.29016 44.832 7.20016 44.342 8.86016H44.162L43.952 6.54016H41.982V18.9002Z",
        "M55.7461 11.5002C55.7461 8.52016 55.4461 6.31016 52.0161 6.31016C48.7861 6.31016 48.0661 8.46016 48.0661 11.6202V13.7902C48.0661 16.8702 48.7261 19.1102 51.9361 19.1102C54.4761 19.1102 55.7861 17.8402 55.6361 15.3802L53.3861 15.2602C53.3561 16.7802 53.0061 17.4002 51.9961 17.4002C50.7261 17.4002 50.6661 16.1902 50.6661 14.3902V13.5502H55.7461V11.5002ZM51.9561 7.97016C53.1761 7.97016 53.2661 9.12016 53.2661 11.0702V12.0802H50.6661V11.0702C50.6661 9.14016 50.7461 7.97016 51.9561 7.97016Z",
        "M60.1945 18.9002V8.92016C60.5745 8.39016 61.1945 8.07016 61.7945 8.07016C62.5645 8.07016 62.8445 8.61016 62.8445 9.69016V18.9002H65.5045L65.4845 8.93016C65.8545 8.37016 66.4845 8.04016 67.1045 8.04016C67.7745 8.04016 68.1445 8.61016 68.1445 9.69016V18.9002H70.8045V9.49016C70.8045 7.28016 70.0145 6.27016 68.3445 6.27016C67.1845 6.27016 66.1945 6.69016 65.2845 7.67016C64.9045 6.76016 64.1545 6.27016 63.0845 6.27016C61.8745 6.27016 60.7345 6.79016 59.9345 7.76016H59.7845L59.5945 6.54016H57.5445V18.9002H60.1945Z",
        "M74.0858 4.97016C74.9858 4.97016 75.4058 4.67016 75.4058 3.43016C75.4058 2.27016 74.9558 1.91016 74.0858 1.91016C73.2058 1.91016 72.7758 2.23016 72.7758 3.43016C72.7758 4.67016 73.1858 4.97016 74.0858 4.97016ZM72.8658 18.9002H75.3958V6.54016H72.8658V18.9002Z",
        "M79.9516 19.0902C81.4116 19.0902 82.3216 18.4802 83.0716 17.3802H83.1816L83.2916 18.9002H85.2816V6.54016H82.6416V16.4702C82.3616 16.9602 81.7116 17.3202 81.1016 17.3202C80.3316 17.3202 80.0916 16.7102 80.0916 15.6902V6.54016H77.4616V15.8102C77.4616 17.8202 78.0416 19.0902 79.9516 19.0902Z",
        "M90.0031 18.9002V8.92016C90.3831 8.39016 91.0031 8.07016 91.6031 8.07016C92.3731 8.07016 92.6531 8.61016 92.6531 9.69016V18.9002H95.3131L95.2931 8.93016C95.6631 8.37016 96.2931 8.04016 96.9131 8.04016C97.5831 8.04016 97.9531 8.61016 97.9531 9.69016V18.9002H100.613V9.49016C100.613 7.28016 99.8231 6.27016 98.1531 6.27016C96.9931 6.27016 96.0031 6.69016 95.0931 7.67016C94.7131 6.76016 93.9631 6.27016 92.8931 6.27016C91.6831 6.27016 90.5431 6.79016 89.7431 7.76016H89.5931L89.4031 6.54016H87.3531V18.9002H90.0031Z"
    ];

    for (const d of pathList) {
        const p = document.createElementNS(svgNS, "path");
        p.setAttribute("d", d);
        p.setAttribute("fill", "white"); // 👈 文字顏色改白色
        g2.appendChild(p);
    }

    svg.appendChild(g1);
    svg.appendChild(g2);

    return svg;
}

function replaceLogo() {
    const oldLogo = document.querySelector("yt-icon#logo-icon.style-scope.ytd-logo");
    if (oldLogo) {
        console.log("[YPL] 替換 logo");
        const newLogo = createCustomLogo();
        oldLogo.replaceWith(newLogo);
    }

    // 同時刪除 country-code
    removeCountryCode();
}

function removeCountryCode() {
    const cc = document.querySelector("span#country-code.style-scope.ytd-topbar-logo-renderer");
    if (cc) {
        console.log("[YPL] 移除 country-code");
        cc.remove();
    }
}

function waitForElement(selector, callback) {
    const interval = setInterval(() => {
        const targetNode = document.getElementById(selector);
        if (targetNode) {
            clearInterval(interval);
            callback(targetNode);
        }
    }, 100);
}

function isAdPlayingByClass() {
    const player = document.getElementById("movie_player");
    return player && (player.classList.contains("ad-showing") || player.classList.contains("ad-interrupting"));
}

async function main() {
    const player = document.getElementById("movie_player");
    if (isAdPlayingByClass()) {
        player.cancelPlayback?.();
        console.log("[YPL] 已調用 cancelPlayback");
        player.playVideo?.();
        console.log("[YPL] 已調用 playVideo");

        let count = parseInt(localStorage.getItem("break_ads_times") || "0", 10);
        count++;
        localStorage.setItem("break_ads_times", String(count));
        console.log(`[YPL] break_ads_times 更新為 ${count}`);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("[Youtube Premium Launcher] 已觸發一次取消廣告");
    }
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

const observer = new MutationObserver(() => {
    replaceLogo();
    removeCountryCode();
});
observer.observe(document.body, { childList: true, subtree: true });


replaceLogo();
removeCountryCode();