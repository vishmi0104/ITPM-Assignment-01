# ITPM Assignment 1 – Playwright Automation
IT23637078-M.R.V.Ishanka
---
The assignment includes:
1. **Excel-based (data-driven) automation** – test cases are read directly from the completed Excel file.
2. **Hard-coded automation (backup)** – all test case details are written directly inside the Playwright script to ensure tests can run even if Excel access is unavailable.

Both approaches are provided to ensure **reliability and ease of marking**.

## 📌 Project Overview
This repository contains automated functional test cases developed using **Playwright (JavaScript)** for a **Singlish → Sinhala** transliteration web application. The automation was implemented as part of **ITPM Assignment 1**.

---

## ✅ Test Coverage
- **29 Positive Functional Test Cases** – Validating expected behavior and successful scenarios  
- **10 Negative Functional Test Cases** – Testing error handling and edge cases  
- **1 UI Test Case** – Verifying user interface elements and layout  

All test cases were independently designed and implemented according to the assignment requirements.

---

## 🧪 Application Under Test

| Property | Details |
|--------|---------|
| Application Name | SwiftTranslator |
| Website URL | https://www.swifttranslator.com/ |
| Input Language | Singlish |
| Output Language | Sinhala |
| Type | Real-time transliteration (no convert button required) |

---

## 🛠️ Technologies & Tools
- **Test Framework:** Playwright (JavaScript)  
- **IDE:** Visual Studio Code  
- **Browser:** Chromium (via Playwright)  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure

IT23637078/
└── ITPM-Assignment-01/
├── .git/
├── data/
│ └── IT23637078 all passed.png
│
├── tests/
│ ├── swifttranslator_excel.spec.js
│ └── swifttranslator_hardcoded_all.spec.js
│
├── .gitignore
├── Git repo link - IT23637078.txt
├── IT3040_Assignment1_TestCases.xlsx
├── README.md
├── package.json
├── package-lock.json
└── playwright.config.js


---

---

## ⚙️ Installation & Setup

### Prerequisites
Before running this project, ensure you have the following installed:

1. **Node.js (LTS version)** – Download here  
2. **Visual Studio Code** – Download here  
3. **Git (optional, for cloning)** – Download here  

---

### Step-by-Step Setup

#### 1️⃣ Clone or Download the Project

**Option A: Clone via Git**
```bash
git clone <repository-url>
cd ITPM-Assignment-01

Option B: Download ZIP

Download the project ZIP file

Extract to your desired location

Navigate to the ITPM-Assignment-01 folder

2️⃣ Open Project in VS Code

Launch Visual Studio Code

Click File → Open Folder

Select the ITPM-Assignment-01 folder

3️⃣ Install Dependencies

Open the integrated terminal in VS Code (Ctrl + ~ or View → Terminal) and run:

npm install

This will install all required dependencies including Playwright.

4️⃣ Install Playwright Browsers
npx playwright install

This downloads the required browser binaries(Chromium, Firefox, WebKit).

---

## ▶️ Running Tests

### Run All Tests (Headless Mode)
Execute all test cases without opening a browser window:

```bash
npx playwright test

Run Tests with Visible Browser (Headed Mode)

Watch the tests execute in real-time:

npx playwright test tests/swifttranslator_hardcoded_all.spec.js --project=chromium --headed
Run Specific Test File

Run only a particular test file:

npx playwright test tests/swifttranslator_hardcoded_all.spec.js
Run Tests in Debug Mode

Step through tests using Playwright Inspector:

npx playwright test --debug
Run Tests with UI Mode

Interactive mode for exploring and debugging tests:

npx playwright test --ui

---

## 📊 Viewing Test Results

### Generate HTML Report
After running tests, generate and view the HTML report:

```bash
npx playwright show-report

The terminal will display:

Serving HTML report at http://localhost:9323

Open the URL in your browser to view:

Test execution summary

Detailed test results

Screenshots and traces (if configured)

Pass/fail statistics

Stop the Report Server

Press Ctrl + C in the terminal.

View Last Test Run Results
npx playwright show-report

This automatically opens the most recent test execution report.

---

## 📝 Test Case Categories
- **Positive Functional Tests (29 cases)**
- **Negative Functional Tests (10 cases)**
- **UI Test (1 case)**

---

## 🎯 Key Features
✅ **Comprehensive Coverage** – 40 test cases covering positive, negative, and UI scenarios  
✅ **Real-time Validation** – Tests validate instant transliteration without convert button  
✅ **Cross-browser Ready** – Configured for Chromium (can be extended to Firefox/WebKit)  
✅ **Detailed Reporting** – HTML reports with screenshots and execution traces  
✅ **Modular Architecture** – Well-organized test structure for maintainability  
✅ **Independent Tests** – Each test case runs independently without dependencies  

---

## 📄 Test Documentation
Detailed test case documentation is available in:

```text
IT3040_Assignment1_TestCases.xlsx

This Excel file contains:

**Test case IDs

**Test case descriptions

**Expected results

**Test data

**Priority levels

🔗 Additional Resources

Playwright Documentation

Playwright API Reference

Node.js Documentation

JavaScript Testing Best Practices
