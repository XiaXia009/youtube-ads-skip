// popup.js

// 取得當前 YouTube 頁面 localStorage 的 break_ads_times
function getAdsCount(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;

        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                func: () => {
                    return localStorage.getItem("break_ads_times") || "0";
                },
            },
            (results) => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError.message);
                    callback("0");
                    return;
                }
                callback(results[0].result);
            }
        );
    });
}

// 更新顯示
function updateDisplay(count) {
    document.getElementById("adsCount").textContent = count;
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
    // 打開 popup 就讀取 adsCount
    getAdsCount((count) => {
        updateDisplay(count);
    });

    // restart 按鈕 → reload 當前分頁
    document.getElementById("resetStats").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.reload(tabs[0].id);
            }
        });
    });
});

