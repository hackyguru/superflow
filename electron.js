const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    darkTheme: true,
  });
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.maximize();
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on("browser-window-created", (event, new_window) => {
  new_window.setMenuBarVisibility(false);
});
