const express = require('express');
const cors = require('cors');
const path = require('path');
const data = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Serve static files from project root so index.html/styles/app.js are available
app.use('/', express.static(path.join(__dirname, '..')));

app.get('/api/products', (req, res) => {
  res.json(data.products);
});

app.get('/api/feeds', (req, res) => {
  res.json(data.liveFeed);
});

app.get('/api/incidents', (req, res) => {
  res.json(data.incidents);
});

app.get('/api/compliance', (req, res) => {
  res.json(data.compliance);
});

app.get('/api/governance', (req, res) => {
  res.json(data.governance);
});

app.get('/api/export', (req, res) => {
  const headers = ['Product', 'Trust Score', 'Active Agents', 'Threats (24h)', 'Compliance', 'Status'];
  const rows = data.products.map((p) => [p.name, p.trust, p.agents, p.threats, p.compliance, p.status]);
  const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="products.csv"');
  res.send(csv);
});

app.listen(PORT, () => {
  console.log(`Fortress backend running on http://localhost:${PORT}`);
});
