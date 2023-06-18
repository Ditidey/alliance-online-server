const express = require('express');
const cors = require('cors');
const websocket = require('websocket').server;
const websocketPort = 8000;
const http = require('http')