// console.log("This is background Script");

console.log("This is background Script ");

let installURL = "";
chrome.runtime.onInstalled.addListener(function (details) {
  // console.log(details);
  if (details.reason === "install") {
    chrome.tabs.create({
      url: "",
    });
    chrome.tabs.create({
      url: installURL,
    });
    chrome.notifications.create({
      title: "anskey",
      message: "suggest changes",
      iconUrl: "icon.png",
      type: "basic",
    });
  }
});
