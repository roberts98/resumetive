const express = require("express");
const puppeteer = require("puppeteer");

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/login", {
    waitUntil: "networkidle2",
  });
  console.log("tes");
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();
  return pdf;
}

const app = express();
const port = 3030;

app.get("/", async (req, res) => {
  const pdf = await printPDF();
  res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  res.send(pdf);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
