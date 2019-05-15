const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const express = require('./server'); //your express app


const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 1280, height: 900 });
  mainWindow.loadURL(  'http://localhost:3005' );
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});