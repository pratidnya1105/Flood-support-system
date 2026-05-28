# 🌊 FloodRelief Connect: Disaster Support & Management System

FloodRelief Connect is a responsive, web-based prototype designed to coordinate emergency disaster relief operations during active flood events. Built with an intuitive grid system, the platform establishes critical informational pipelines for stranded victims, humanitarian donors, and non-governmental organizations (NGOs) to interact seamlessly during high-stress rescue windows.

---

## 🚀 Key System Features

*   **Live Geospatial Tracker:** Integrates a functional OpenStreetMap canvas via the Leaflet.js library. It is precisely centered on the **Kolhapur District** (`16.7050° N, 74.2433° E`), featuring live alert pins across high-risk zones (Kolhapur City, Panchganga River, and Ichalkaranji).
*   **Victim SOS Broadcast Engine:** Provides localized form partitions optimized for isolated families to transmit critical landmarks, contact metrics, and household headcount counts to rescue fleets.
*   **Four-Tier Humanitarian Aid Framework:** A dynamic donor processing script that handles **Financial Contributions (INR/USD)**, **Food Cargo Resource Pledges**, **Dry Clothing Packages**, and **Temporary Shelter Provisions**.
*   **Separated Data Architecture:** Every distinct view panel, safety guideline, data list, and user interface form is structurally isolated inside clean, semantic `div` container blocks for easier maintenance and responsive layout alignment.

---

## 📁 Repository Directory Structure

```text
flood-support-system/
│
├── css/
│   └── style.css             # Unified project layout styling
│
├── js/
│   ├── main.js               # Core interface logic & form handlers
│   └── map-mock.js           # Supplementary map marker interaction script
│
├── index.html                # Live Dashboard, Map, and Emergency Precautions
├── victim.html               # SOS Request Form, Rescue Camps & Survival Guide
├── donor.html                # Financial, Food, Clothing, & Shelter Donations
└── admin.html                # System Administration Control Console
```

---

## 🛠️ Built Using

*   **HTML5 & CSS3:** Structured with modern semantic components, custom CSS variables, flexbox modules, and responsive alignment rules.
*   **Vanilla JavaScript:** Powers form states, field alerts, and active visible navigation layers.
*   **Leaflet.js API:** Drives the dynamic street tile rendering engine for geographic mapping data.

---

## 📋 Essential Disaster Precautions Included

The landing interface serves as a community safety board hosting critical self-preservation guidelines:
*   **Do's:** Instructions for safe drinking water treatment (chlorine/boiling), concrete upper-floor evacuation rules, and waterproof emergency pack preparation.
*   **Don'ts:** Safety warnings regarding floodwater undercurrent risks, wet electrical circuitry contact, and submerged road transit attempts.

---

## ⚙️ Running Locally

1. Clone or download this repository folder.
2. Ensure the relative directory files (`css/` and `js/`) remain intact.
3. Open `index.html` in any contemporary web browser to launch the operational live system.
