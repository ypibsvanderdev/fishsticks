# Vander Pulse | Premium AI Trading Terminal

## Overview
**Vander Pulse** is a state-of-the-art, web-based trading interface designed for high-frequency algorithmic trading and market analysis. It combines a sleek, "glassmorphism" UI with powerful features like real-time simulated data, automated trading bots, and a secure authentication system.

## 🚀 Key Features

### 1. **PulseBot AI Automation**
*   **Neural Engine**: Automatically scans the market for high-probability setups using Volume, RSI, and Trend analysis.
*   **Unrestricted Wealth Mode**: Designed to maximize account growth by reinvesting profits (Compounding).
*   **Immortal Shield**: Features unique protection logic like "Break-Even Guard" and "Trailing Stops" to lock in wins.
*   **Headless Server Bot**: Includes a separate `server-bot.js` script for 24/7 server-side trading without the browser.

### 2. **Secure Authentication System**
*   **Admin Mode (HWID Lock Simulation)**:
    *   **User:** `yahia admin`
    *   **Pass:** `Eman165*`
    *   *Effect:* Automatically decrypts and loads your private Admin API keys. Grants full system access.
*   **Guest/New User Mode**:
    *   Forces new users to register a unique profile.
    *   **Requirement:** They must provide their *own* Alpaca API keys to use the terminal.
    *   *Security:* User keys are sandboxed to their local session and never touch the Admin config.

### 3. **Market Analysis Hub**
*   **Real-Time Dashboard**: Live price updates, interactive charts, and "Heartbeat" status indicators.
*   **Whale Tracker**: Simulates Dark Pool block trades to show where institutional money is moving.
*   **Heatmap**: Visual performance tracker showing win/loss ratios across different assets.

### 4. **Strategy & Education**
*   **Strategy Tab**: Filters stocks into "High Velocity Scalps" (Short Term) and "Stability Dividends" (Long Term).
*   **Media Hub**: A curated list of trading highlights, wins, and educational reaction videos.
*   **Academy**: Built-in guide explaining the bot's "Neural Scan" and risk management protocols.

---

## 📂 File Structure

*   **`index.html`**: The main interface. Contains the HTML structure for the Terminal, Auth Overlay, Dashboard, and all tabs.
*   **`style.css`**: Premium CSS styling. Handles the "Dark Mode" aesthetic, glassmorphism effects, animations (slide-ups, glows), and responsive layout.
*   **`main.js`**: The Core logic. Handles:
    *   UI Interactions (Tabs, buttons).
    *   Authentication & Security logic.
    *   Data Simulation (Stock movements, charts).
    *   Client-side Bot logic (looping through strategies).
*   **`server-bot.js`**: A standalone Node.js script.
    *   *Purpose:* To be hosted on a cloud server (Heroku/Render) for 24/7 trading availability, independent of your laptop.

---

## 🛠️ Setup & Usage

1.  **Launch**: Simply open `index.html` in any modern web browser.
2.  **Login**:
    *   The screen will be locked by the Auth Overlay.
    *   Enter your Admin credentials (see above) to unlock the full Admin Terminal.
3.  **Go Live**:
    *   Navigate to the **PulseBot AI** tab.
    *   Click "LINK BROKERAGE" (simulated connection for guests, auto-connected for Admin).
    *   Click "ENGAGE NEURAL TRADING" to start the bot.

## ⚠️ Disclaimer
This software is for educational and simulation purposes. While it connects to real API endpoints (Alpaca/Finnhub) if configured, the default "Paper Mode" should always be used for testing. Never trade with money you cannot afford to lose.
