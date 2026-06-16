// Default fallback data (used if data.json fails to load)
const defaultData = {
  liveFeed: [
    { title: 'Prompt injection blocked — CIP Credit Analyst', subtitle: 'Sentinel Agent · Severity: Medium · Auto-resolved', time: '2m ago' },
    { title: 'Unusual data access pattern — IIP Underwriting', subtitle: 'Sentinel Agent · Under review by security team', time: '7m ago' },
    { title: 'Jailbreak attempt detected — Pulse Decision Agent', subtitle: 'Threat Intel Agent · Escalated to CISO', time: '14m ago' },
    { title: 'Policy violation reviewed — CIP Collections', subtitle: 'Governance Agent · Decision approved', time: '31m ago' },
    { title: 'Key rotation completed — All Products', subtitle: 'Encryption Agent · 15.2M conversations re-keyed', time: '1h ago' },
  ],
  products: [
    { name: 'CIP', trust: '97%', agents: 186, threats: 2, compliance: '99%', status: 'Healthy' },
    { name: 'IIP', trust: '95%', agents: 143, threats: 1, compliance: '98%', status: 'Healthy' },
    { name: 'Otic Pulse', trust: '93%', agents: 97, threats: 4, compliance: '95%', status: 'Review' },
    { name: 'Future Products', trust: '96%', agents: 6, threats: 0, compliance: '100%', status: 'Healthy' },
  ],
  threats: [
    { id: 'TH-2026-001', title: 'Prompt injection blocked — CIP Credit Analyst', product: 'CIP', severity: 'medium', source: 'Sentinel Agent', time: '2m ago' },
    { id: 'TH-2026-002', title: 'Unusual data access pattern — IIP Underwriting', product: 'IIP', severity: 'medium', source: 'Sentinel Agent', time: '7m ago' },
    { id: 'TH-2026-003', title: 'Jailbreak attempt detected — Pulse Decision Agent', product: 'Otic Pulse', severity: 'high', source: 'Threat Intel Agent', time: '14m ago' },
    { id: 'TH-2026-004', title: 'Policy violation reviewed — CIP Collections', product: 'CIP', severity: 'low', source: 'Governance Agent', time: '31m ago' },
    { id: 'TH-2026-005', title: 'Key rotation completed — All Products', product: 'All', severity: 'low', source: 'Encryption Agent', time: '1h ago' },
  ],
  agents: [
    { id: 'AG-1001', name: 'Sentinel Agent', product: 'CIP', status: 'healthy', lastSeen: '12s ago' },
    { id: 'AG-1002', name: 'Threat Intel Agent', product: 'Otic Pulse', status: 'warning', lastSeen: '2m ago' },
    { id: 'AG-1003', name: 'Encryption Agent', product: 'All', status: 'healthy', lastSeen: '7m ago' },
    { id: 'AG-1004', name: 'Governance Agent', product: 'CIP', status: 'review', lastSeen: '31m ago' },
  ],
  incidents: [
    { id: 'INC-1024', title: 'Privilege Escalation Attempt', severity: 'critical', product: 'CIP', time: '4h ago', status: 'open' },
    { id: 'INC-1025', title: 'Suspicious API Activity', severity: 'high', product: 'IIP', time: '2h ago', status: 'investigating' },
    { id: 'INC-1026', title: 'Unauthorized Access Request', severity: 'medium', product: 'Otic Pulse', time: '1d ago', status: 'closed' },
    { id: 'INC-1027', title: 'Data Classification Alert', severity: 'low', product: 'CIP', time: '3d ago', status: 'review' },
  ],
  governanceReviews: [
    { id: 'GR-2001', decision: 'Approve data sharing', status: 'approved', reviewer: 'Alice', date: '2026-06-14' },
    { id: 'GR-2002', decision: 'Model retrain', status: 'pending', reviewer: 'Bob', date: '2026-06-15' },
    { id: 'GR-2003', decision: 'AI safety policy update', status: 'review', reviewer: 'Clara', date: '2026-06-12' },
  ],
  reviewRequests: [
    { id: 'DR-3001', title: 'Update classification policy', owner: 'Sam', due: 'Today', status: 'pending' },
    { id: 'DR-3002', title: 'Approve agent deployment', owner: 'Mia', due: 'Tomorrow', status: 'review' },
    { id: 'DR-3003', title: 'Review data retention controls', owner: 'Noah', due: '2d', status: 'approved' },
  ],
  escalations: [
    { id: 'ES-4101', incident: 'API privilege spike', owner: 'Security Ops', priority: 'high', status: 'open' },
    { id: 'ES-4102', incident: 'Disallowed data request', owner: 'Compliance', priority: 'medium', status: 'pending' },
    { id: 'ES-4103', incident: 'Policy violation', owner: 'Audit', priority: 'low', status: 'resolved' },
  ],
  complianceChecks: [
    { id: 'CC-1201', name: 'Encryption certification', status: 'pass', due: 'N/A' },
    { id: 'CC-1202', name: 'Model audit', status: 'pending', due: '2026-06-22' },
    { id: 'CC-1203', name: 'Data access review', status: 'pass', due: 'N/A' },
    { id: 'CC-1204', name: 'Regulatory filing', status: 'action required', due: '2026-06-30' },
  ],
  reportQueue: [
    { id: 'RP-501', title: 'Quarterly compliance overview', category: 'Regulatory', status: 'ready', updated: '2h ago' },
    { id: 'RP-502', title: 'Agent security posture', category: 'Operations', status: 'in progress', updated: '1d ago' },
    { id: 'RP-503', title: 'Risk exposure summary', category: 'Risk', status: 'scheduled', updated: '3d ago' },
  ],
  libraryItems: [
    { id: 'LB-701', title: 'AI Usage Policy', category: 'Policy', status: 'active' },
    { id: 'LB-702', title: 'Incident response plan', category: 'Playbook', status: 'review' },
    { id: 'LB-703', title: 'Data access standard', category: 'Procedure', status: 'active' },
  ],
  auditTrails: [
    { id: 'AT-001', event: 'Agent upgrade', user: 'Alice', product: 'CIP', time: '9m ago' },
    { id: 'AT-002', event: 'Threat flagged', user: 'Security Bot', product: 'Otic Pulse', time: '42m ago' },
    { id: 'AT-003', event: 'Compliance check passed', user: 'Governance Agent', product: 'All', time: '2h ago' },
  ],
  riskInsights: [
    { metric: 'Exposure score', value: '14/100', trend: 'down', note: 'Reduced attack surface after patch' },
    { metric: 'Model drift', value: '2.6%', trend: 'stable', note: 'Inside acceptable bounds' },
    { metric: 'Policy adherence', value: '95%', trend: 'up', note: 'Governance improvements effective' },
  ],
  trendSeries: [
    { label: 'Threat count', value: 12, change: '-5%', trend: 'down' },
    { label: 'Compliance rate', value: 98, change: '+1%', trend: 'up' },
    { label: 'Agent uptime', value: 99.7, change: '+0.3%', trend: 'up' },
  ],
};

// Data variables — loaded from data.json or use defaults
let liveFeed = defaultData.liveFeed;
let products = defaultData.products;
let threats = defaultData.threats;
let agents = defaultData.agents;
let incidents = defaultData.incidents;
let governanceReviews = defaultData.governanceReviews;
let reviewRequests = defaultData.reviewRequests;
let escalations = defaultData.escalations;
let complianceChecks = defaultData.complianceChecks;
let reportQueue = defaultData.reportQueue;
let libraryItems = defaultData.libraryItems;
let auditTrails = defaultData.auditTrails;
let riskInsights = defaultData.riskInsights;
let trendSeries = defaultData.trendSeries;

// Load data from data.json
async function loadData() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    liveFeed = data.liveFeed || defaultData.liveFeed;
    products = data.products || defaultData.products;
    threats = data.threats || defaultData.threats;
    agents = data.agents || defaultData.agents;
    incidents = data.incidents || defaultData.incidents;
    governanceReviews = data.governanceReviews || defaultData.governanceReviews;
    reviewRequests = data.reviewRequests || defaultData.reviewRequests;
    escalations = data.escalations || defaultData.escalations;
    complianceChecks = data.complianceChecks || defaultData.complianceChecks;
    reportQueue = data.reportQueue || defaultData.reportQueue;
    libraryItems = data.libraryItems || defaultData.libraryItems;
    auditTrails = data.auditTrails || defaultData.auditTrails;
    riskInsights = data.riskInsights || defaultData.riskInsights;
    trendSeries = data.trendSeries || defaultData.trendSeries;
  } catch (e) {
    console.warn('Using default demo data (data.json not found or invalid)');
  }
}

// render agents
function renderAgents() {
  const root = document.getElementById('screen-agents');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Security</p>
        <h2>Agent Security</h2>
        <p class="panel-copy">Agent health, telemetry, and scan actions across deployed AI controls.</p>
      </div>
      <button class="btn btn-primary btn-sm" id="btn-refresh-agents">Refresh Agents</button>
    </div>
    <div class="agent-list">${agents
      .map(
        (a) => `
      <div class="agent-item" data-id="${a.id}">
        <div>
          <div class="agent-name">${a.name} <span class="muted">(${a.product})</span></div>
          <div class="agent-meta">Last seen: ${a.lastSeen}</div>
        </div>
        <div class="agent-actions">
          <span class="agent-status ${a.status}">${a.status}</span>
          <button class="btn btn-outline btn-sm btn-scan" data-id="${a.id}">Run Scan</button>
        </div>
      </div>
    `,
      )
      .join('')}</div>
  `;

  container.querySelectorAll('.btn-scan').forEach((button) => button.addEventListener('click', () => {
    const id = button.dataset.id;
    showToast(`Agent scan launched for ${id}`);
  }));
  const refresh = document.getElementById('btn-refresh-agents');
  if (refresh) refresh.addEventListener('click', () => {
    showToast('Agent status refreshed');
    renderAgents();
  });
}

// render incidents
function renderIncidents() {
  const root = document.getElementById('screen-incidents');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Security</p>
        <h2>Incidents</h2>
        <p class="panel-copy">Track active incidents and open investigation detail views.</p>
      </div>
      <button class="btn btn-primary btn-sm" id="btn-new-incident">New Incident</button>
    </div>
    <div class="incident-list">${incidents
      .map(
        (it) => `
      <div class="incident-item" data-id="${it.id}">
        <div>
          <div class="incident-id">${it.id} <span class="muted">· ${it.product}</span></div>
          <div class="incident-title">${it.title}</div>
          <div class="incident-meta">${it.time} · ${it.status}</div>
        </div>
        <div class="incident-actions">
          <span class="incident-sev ${it.severity}">${it.severity.toUpperCase()}</span>
          <button class="btn btn-outline btn-sm btn-open" data-id="${it.id}">Open</button>
        </div>
      </div>
    `,
      )
      .join('')}</div>
  `;

  container.querySelectorAll('.btn-open').forEach((button) => button.addEventListener('click', () => {
    openIncidentModal(button.dataset.id);
  }));
  const newIncident = document.getElementById('btn-new-incident');
  if (newIncident) newIncident.addEventListener('click', () => showToast('New incident workflow opened'));
}

function openIncidentModal(id) {
  const incident = incidents.find((x) => x.id === id);
  if (!incident) return;
  const modal = document.createElement('div');
  modal.className = 'pm-modal-overlay';
  modal.innerHTML = `
    <div class="pm-modal" role="dialog" aria-modal="true">
      <div class="pm-header">
        <h3>${incident.id} — ${incident.title}</h3>
        <button class="pm-close" aria-label="Close">×</button>
      </div>
      <div class="pm-body">
        <p><strong>Product:</strong> ${incident.product}</p>
        <p><strong>Severity:</strong> ${incident.severity}</p>
        <p><strong>Status:</strong> ${incident.status}</p>
        <p><strong>Time:</strong> ${incident.time}</p>
        <hr />
        <p><strong>Description:</strong> This incident requires analyst validation and may be escalated based on policy enforcement.</p>
        <p><strong>Recommended next steps:</strong></p>
        <ul>
          <li>Lock affected agent</li>
          <li>Review audit logs</li>
          <li>Assign to incident response team</li>
        </ul>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  function close() {
    modal.remove();
    document.removeEventListener('keydown', onKeyDown);
  }
  function onKeyDown(event) {
    if (event.key === 'Escape') close();
  }

  modal.querySelector('.pm-close')?.addEventListener('click', close);
  modal.addEventListener('click', (event) => { if (event.target === modal) close(); });
  document.addEventListener('keydown', onKeyDown);
}

// render governance dashboards
function renderGovernance() {
  const root = document.getElementById('screen-governance');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Governance</p>
        <h2>Agent Governance</h2>
        <p class="panel-copy">Review governance decisions, approvals, and active policy controls.</p>
      </div>
      <div class="panel-actions">
        <button class="btn btn-primary btn-sm" id="btn-governance-refresh">Sync Decisions</button>
      </div>
    </div>
    <div class="governance-grid">
      <section class="governance-summary panel">
        <h3>Today's decisions</h3>
        <div class="summary-row"><strong>${governanceReviews.length}</strong><span>Governance items</span></div>
        <div class="summary-row"><strong>${governanceReviews.filter((x) => x.status === 'pending').length}</strong><span>Pending review</span></div>
      </section>
      <section class="governance-reviews panel">
        <h3>Recent governance actions</h3>
        <ul>${governanceReviews.map((item) => `
          <li><strong>${item.decision}</strong> — <span class="muted">${item.reviewer} · ${item.date}</span> <span class="badge ${item.status === 'approved' ? 'badge-healthy' : item.status === 'pending' ? 'badge-warning' : 'badge-alert'}">${item.status}</span></li>
        `).join('')}</ul>
      </section>
    </div>
  `;
  document.getElementById('btn-governance-refresh')?.addEventListener('click', () => showToast('Governance view updated'));
}

function renderReviews() {
  const root = document.getElementById('screen-reviews');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Governance</p>
        <h2>Decision Reviews</h2>
        <p class="panel-copy">Review workflows and approval history for model and data decisions.</p>
      </div>
    </div>
    <div class="review-list">${reviewRequests
      .map((review) => `
      <div class="review-item">
        <div>
          <div class="review-title">${review.title}</div>
          <div class="review-meta">${review.owner} · Due ${review.due}</div>
        </div>
        <div class="review-actions">
          <span class="review-status ${review.status}">${review.status.toUpperCase()}</span>
          <button class="btn btn-outline btn-sm btn-review-action" data-action="approve" data-id="${review.id}">Approve</button>
          <button class="btn btn-outline btn-sm btn-review-action" data-action="decline" data-id="${review.id}">Decline</button>
        </div>
      </div>
    `)
      .join('')}</div>
  `;

  container.querySelectorAll('.btn-review-action').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      const id = button.dataset.id;
      showToast(`${action === 'approve' ? 'Approved' : 'Declined'} review ${id}`);
    });
  });
}

function renderEscalations() {
  const root = document.getElementById('screen-escalations');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Governance</p>
        <h2>Escalations</h2>
        <p class="panel-copy">Active escalations and escalation workflows for priority incidents.</p>
      </div>
    </div>
    <div class="escalation-grid">${escalations
      .map((item) => `
      <div class="escalation-item">
        <div>
          <div class="escalation-title">${item.incident}</div>
          <div class="escalation-meta">${item.id} · ${item.owner}</div>
        </div>
        <div class="escalation-status-row">
          <span class="escalation-priority ${item.priority}">${item.priority.toUpperCase()}</span>
          <span class="escalation-state ${item.status}">${item.status}</span>
        </div>
      </div>
    `)
      .join('')}</div>
  `;
}

function renderCompliance() {
  const root = document.getElementById('screen-compliance');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Compliance</p>
        <h2>Compliance Center</h2>
        <p class="panel-copy">Regulatory posture, audit actions, and compliance control status.</p>
      </div>
      <button class="btn btn-primary btn-sm" id="btn-compliance-refresh">Refresh Status</button>
    </div>
    <div class="compliance-card-grid">
      <article class="metric-card">
        <span class="metric-label">Coverage</span>
        <strong>98%</strong>
        <p class="metric-sub">Controls implemented</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">Open Findings</span>
        <strong>2</strong>
        <p class="metric-sub">Action items pending</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">Audit Readiness</span>
        <strong>Ready</strong>
        <p class="metric-sub">Next audit due in 12 days</p>
      </article>
    </div>
    <div class="compliance-checklist">
      <h3>Recent compliance checks</h3>
      <ul>${complianceChecks
        .map((check) => `
        <li class="compliance-item">
          <div><strong>${check.name}</strong> <span class="muted">${check.due === 'N/A' ? 'Completed' : `Due ${check.due}`}</span></div>
          <span class="compliance-status ${check.status.replace(/\s+/g, '-').toLowerCase()}">${check.status}</span>
        </li>
      `)
        .join('')}</ul>
    </div>
  `;
  document.getElementById('btn-compliance-refresh')?.addEventListener('click', () => showToast('Compliance checks refreshed'));
}

function renderReports() {
  const root = document.getElementById('screen-reports');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Compliance</p>
        <h2>Regulatory Reports</h2>
        <p class="panel-copy">Create and preview required regulatory reports.</p>
      </div>
      <button class="btn btn-primary btn-sm" id="btn-create-report">Create Report</button>
    </div>
    <div class="report-list">${reportQueue
      .map((report) => `
      <div class="review-item">
        <div>
          <div class="review-title">${report.title}</div>
          <div class="review-meta">${report.category} · Updated ${report.updated}</div>
        </div>
        <div class="review-actions">
          <span class="review-status ${report.status}">${report.status.toUpperCase()}</span>
          <button class="btn btn-outline btn-sm" data-id="${report.id}">Preview</button>
        </div>
      </div>
    `)
      .join('')}</div>
  `;
  document.getElementById('btn-create-report')?.addEventListener('click', () => showToast('Report creation workflow opened'));
}

function renderLibrary() {
  const root = document.getElementById('screen-library');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Compliance</p>
        <h2>Policy Library</h2>
        <p class="panel-copy">Browse approved policies, playbooks, and training assets.</p>
      </div>
    </div>
    <div class="review-list">${libraryItems
      .map((item) => `
      <div class="review-item">
        <div>
          <div class="review-title">${item.title}</div>
          <div class="review-meta">${item.category} · ${item.status}</div>
        </div>
        <div class="review-actions">
          <button class="btn btn-outline btn-sm" data-id="${item.id}">Open</button>
        </div>
      </div>
    `)
      .join('')}</div>
  `;
}

function renderTrails() {
  const root = document.getElementById('screen-trails');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Audit</p>
        <h2>Audit Trails</h2>
        <p class="panel-copy">Review recent system and agent audit events.</p>
      </div>
    </div>
    <div class="review-list">${auditTrails
      .map((entry) => `
      <div class="review-item">
        <div>
          <div class="review-title">${entry.event}</div>
          <div class="review-meta">${entry.user} · ${entry.product}</div>
        </div>
        <div class="review-actions">
          <span class="muted">${entry.time}</span>
        </div>
      </div>
    `)
      .join('')}</div>
  `;
}

function renderRisk() {
  const root = document.getElementById('screen-risk');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Risk</p>
        <h2>Risk Intelligence</h2>
        <p class="panel-copy">Current risk metrics and operational health signals.</p>
      </div>
    </div>
    <div class="governance-grid">
      <section class="metric-card">
        <h3>Key insights</h3>
        <ul>${riskInsights
          .map((item) => `
          <li><strong>${item.metric}:</strong> ${item.value} <span class="muted">${item.note}</span></li>
        `)
          .join('')}</ul>
      </section>
      <section class="panel">
        <h3>Current exposure</h3>
        <p>Risk score remains low thanks to strong governance and compliance guardrails.</p>
      </section>
    </div>
  `;
}

function renderTrends() {
  const root = document.getElementById('screen-trends');
  if (!root) return;
  const container = root.querySelector('.panel') || root;
  container.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Risk</p>
        <h2>Risk Trends</h2>
        <p class="panel-copy">Trend snapshots for threat, compliance, and agent uptime.</p>
      </div>
    </div>
    <div class="review-list">${trendSeries
      .map((trend) => `
      <div class="review-item">
        <div>
          <div class="review-title">${trend.label}</div>
          <div class="review-meta">Change: ${trend.change}</div>
        </div>
        <div class="review-actions">
          <span class="badge ${trend.trend === 'up' ? 'badge-healthy' : trend.trend === 'down' ? 'badge-alert' : 'badge-warning'}">${trend.trend}</span>
        </div>
      </div>
    `)
      .join('')}</div>
  `;
}

function renderProductPage(key) {
  const root = document.getElementById(`screen-${key}`);
  if (!root) return;
  const product = products.find((p) => p.name.toLowerCase() === key.toLowerCase() || p.name.toLowerCase().includes(key.toLowerCase()));
  if (!product) return;
  const relatedAgents = agents.filter((agent) => agent.product.toLowerCase() === key.toLowerCase() || agent.product.toLowerCase() === 'all');
  const relatedThreats = threats.filter((threat) => threat.product.toLowerCase() === key.toLowerCase() || threat.product.toLowerCase() === 'all');
  root.querySelector('.panel').innerHTML = `
    <div class="panel-header">
      <div>
        <p class="panel-eyebrow">Product</p>
        <h2>${product.name} Security</h2>
        <p class="panel-copy">Detailed security telemetry, agent status, and compliance for ${product.name}.</p>
      </div>
      <button class="btn btn-primary btn-sm" id="btn-refresh-product">Refresh ${product.name}</button>
    </div>
    <section class="metric-grid">
      <article class="metric-card">
        <span class="metric-label">Trust Score</span>
        <strong>${product.trust}</strong>
        <p class="metric-sub">Product trust rating</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">Active Agents</span>
        <strong>${product.agents}</strong>
        <p class="metric-sub">Agents monitored for ${product.name}</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">Threat Events</span>
        <strong>${product.threats}</strong>
        <p class="metric-sub">Recent threats in 24h</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">Compliance</span>
        <strong>${product.compliance}</strong>
        <p class="metric-sub">Current compliance rating</p>
      </article>
    </section>
    <section class="dashboard-grid">
      <div class="dashboard-column">
        <div class="panel">
          <div class="panel-header">
            <div>
              <p class="panel-eyebrow">Agent roster</p>
              <h3>${relatedAgents.length} agents</h3>
            </div>
          </div>
          <div class="agent-list">
            ${relatedAgents
              .map(
                (agent) => `
              <div class="agent-item">
                <div>
                  <div class="agent-name">${agent.name}</div>
                  <div class="agent-meta">Last seen ${agent.lastSeen}</div>
                </div>
                <span class="agent-status ${agent.status}">${agent.status}</span>
              </div>
            `,
              )
              .join('')}
          </div>
        </div>
      </div>
      <div class="dashboard-column">
        <div class="panel">
          <div class="panel-header">
            <div>
              <p class="panel-eyebrow">Recent alerts</p>
              <h3>${relatedThreats.length} open threats</h3>
            </div>
          </div>
          <div class="review-list">
            ${relatedThreats
              .map(
                (threat) => `
              <div class="review-item">
                <div>
                  <div class="review-title">${threat.title}</div>
                  <div class="review-meta">${threat.source} · ${threat.time}</div>
                </div>
                <div class="review-actions">
                  <span class="threat-severity ${threat.severity}">${threat.severity.toUpperCase()}</span>
                </div>
              </div>
            `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `;
  document.getElementById('btn-refresh-product')?.addEventListener('click', () => showToast(`Refreshed ${product.name} telemetry`));
}

function renderLiveFeed() {
  const list = document.getElementById('live-feed');
  list.innerHTML = liveFeed
    .map(
      (item) => `
      <li class="feed-item">
        <strong>${item.title}</strong>
        <small>${item.subtitle}</small>
        <small>${item.time}</small>
      </li>
    `
    )
    .join('');
}

function renderProductTable() {
  const body = document.getElementById('product-table-body');
  body.innerHTML = products
    .map(
      (product, index) => `
      <tr data-index="${index}" tabindex="0" class="product-row">
        <td>${product.name}</td>
        <td>${product.trust}</td>
        <td>${product.agents}</td>
        <td>${product.threats}</td>
        <td>${product.compliance}</td>
        <td><span class="product-status status-pill-table ${product.status.toLowerCase()}">${product.status}</span></td>
      </tr>
    `
    )
    .join('');
}

function renderThreats(filters = {}) {
  const list = document.getElementById('threat-list');
  if (!list) return;
  const severity = filters.severity || 'all';
  const q = (filters.q || '').toLowerCase();
  const results = threats.filter((t) => {
    if (severity !== 'all' && t.severity !== severity) return false;
    if (q && !(t.title.toLowerCase().includes(q) || t.product.toLowerCase().includes(q) || t.id.toLowerCase().includes(q))) return false;
    return true;
  });

  // update stats
  const total = results.length;
  const high = results.filter((r) => r.severity === 'high').length;
  const medium = results.filter((r) => r.severity === 'medium').length;
  document.getElementById('stat-active') && (document.getElementById('stat-active').textContent = String(total));
  document.getElementById('stat-high') && (document.getElementById('stat-high').textContent = String(high));
  document.getElementById('stat-medium') && (document.getElementById('stat-medium').textContent = String(medium));

  list.innerHTML = results
    .map(
      (t) => `
      <div class="threat-item" data-id="${t.id}" tabindex="0">
        <div class="threat-main">
          <div class="threat-title"><strong>${t.title}</strong></div>
          <div class="threat-meta">${t.product} · ${t.source} · ${t.time}</div>
        </div>
        <div class="threat-actions">
          <span class="threat-severity ${t.severity}">${t.severity.toUpperCase()}</span>
          <button class="btn btn-outline btn-sm btn-investigate" data-id="${t.id}">Investigate</button>
        </div>
      </div>
    `,
    )
    .join('');

  // update filters summary
  const summary = document.getElementById('filters-summary');
  if (summary) {
    summary.textContent = `${severity === 'all' ? 'All severities' : severity.toUpperCase()} · ${filters.q ? `search: "${filters.q}"` : 'no search'}`;
  }
}

function handleThreatActions(e) {
  const btn = e.target.closest('.btn-investigate');
  if (btn) {
    const id = btn.dataset.id;
    showToast(`Investigation created for ${id}`);
    return;
  }
  const item = e.target.closest('.threat-item');
  if (item) {
    const id = item.dataset.id;
    openThreatModal(id);
  }
}

function openThreatModal(id) {
  const t = threats.find((x) => x.id === id);
  if (!t) return;
  const modal = document.createElement('div');
  modal.className = 'pm-modal-overlay';
  modal.innerHTML = `
    <div class="pm-modal" role="dialog" aria-modal="true">
      <div class="pm-header">
        <h3>Threat ${t.id}</h3>
        <button class="pm-close" aria-label="Close">×</button>
      </div>
      <div class="pm-body">
        <p><strong>Title:</strong> ${t.title}</p>
        <p><strong>Product:</strong> ${t.product}</p>
        <p><strong>Source:</strong> ${t.source}</p>
        <p><strong>Severity:</strong> ${t.severity}</p>
        <p><strong>Time:</strong> ${t.time}</p>
        <hr />
        <p>Suggested actions:</p>
        <ul><li>Isolate agent</li><li>Run health scan</li><li>Open incident</li></ul>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  function close() { modal.remove(); document.removeEventListener('keydown', onKey); }
  function onKey(e) { if (e.key === 'Escape') close(); }
  modal.querySelector('.pm-close')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', onKey);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 2600);
}

function appendChatMessage(author, text) {
  const messages = document.getElementById('chat-messages');
  if (!messages) return;
  const message = document.createElement('div');
  message.className = `chat-message ${author}`;
  const bubble = document.createElement('p');
  bubble.textContent = text;
  message.appendChild(bubble);
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(prompt) {
  const text = prompt.trim().toLowerCase();
  if (!text) return 'Please type a question so I can help with your security posture.';

  if (text.includes('threat') || text.includes('threats')) {
    const openThreats = threats.length;
    const high = threats.filter((t) => t.severity === 'high').length;
    const latest = threats[0]?.title || 'No current threat data available.';
    return `There are ${openThreats} active threat events. ${high} are high severity. Latest alert: ${latest}`;
  }

  if (text.includes('incident') || text.includes('incidents')) {
    const open = incidents.filter((i) => i.status !== 'closed').length;
    const critical = incidents.filter((i) => i.severity === 'critical').length;
    return `You have ${incidents.length} recent incidents, ${open} still open or in progress. ${critical} are critical.`;
  }

  if (text.includes('agent') || text.includes('agents')) {
    const healthy = agents.filter((a) => a.status === 'healthy').length;
    const review = agents.filter((a) => a.status === 'review').length;
    return `There are ${agents.length} monitored agents. ${healthy} are healthy and ${review} need review.`;
  }

  if (text.includes('governance') || text.includes('decision')) {
    const pending = governanceReviews.filter((g) => g.status === 'pending').length;
    return `Governance has ${governanceReviews.length} recent decisions, with ${pending} pending review.`;
  }

  if (text.includes('review') && text.includes('decision')) {
    const pending = reviewRequests.filter((r) => r.status === 'pending').length;
    return `There are ${reviewRequests.length} review requests and ${pending} are pending.`;
  }

  if (text.includes('escalation')) {
    const open = escalations.filter((e) => e.status === 'open').length;
    return `There are ${escalations.length} escalations in the queue, with ${open} currently open.`;
  }

  if (text.includes('compliance')) {
    const issues = complianceChecks.filter((c) => c.status !== 'pass').length;
    return `Compliance center shows ${issues} items requiring attention, and our overall posture is healthy at 98%.`;
  }

  if (text.includes('report')) {
    const ready = reportQueue.filter((r) => r.status === 'ready').length;
    return `I have ${reportQueue.length} reports in the queue, ${ready} of which are ready to download.`;
  }

  if (text.includes('audit') || text.includes('trail')) {
    return `Recent audit activity includes ${auditTrails[0]?.event ?? 'no events found'} from ${auditTrails[0]?.time ?? 'N/A'}.`;
  }

  if (text.includes('risk')) {
    const exposure = riskInsights.find((item) => item.metric.toLowerCase().includes('exposure'))?.value;
    return `Current risk exposure is ${exposure ?? 'unavailable'}. Overall risk remains low.`;
  }

  const product = products.find((p) => text.includes(p.name.toLowerCase()));
  if (product) {
    return `${product.name} trust score is ${product.trust}, with ${product.agents} agents active and ${product.threats} threats in the last 24h. Compliance is ${product.compliance}.`;
  }

  return 'I can answer questions about threats, incidents, agents, governance, escalations, compliance, and reports. Try asking about one of those.';
}

function toggleChatWidget() {
  const widget = document.getElementById('chat-widget');
  if (!widget) return;
  const isOpen = widget.classList.toggle('open');
  widget.setAttribute('aria-hidden', String(!isOpen));
}

function openMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar || !backdrop) return;
  sidebar.classList.add('sidebar-open');
  backdrop.style.display = 'block';
}

function closeMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar || !backdrop) return;
  sidebar.classList.remove('sidebar-open');
  backdrop.style.display = 'none';
}

function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  if (sidebar.classList.contains('sidebar-open')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function handleChatSend() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const value = input.value.trim();
  if (!value) return;
  appendChatMessage('user', value);
  input.value = '';
  const answer = getBotResponse(value);
  setTimeout(() => appendChatMessage('bot', answer), 300);
}

function handleNavClick(event) {
  const button = event.target.closest('.nav-button');
  if (!button) return;
  document.querySelectorAll('.nav-button').forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');
  const page = button.dataset.page;
  showScreen(page);
  showToast(`Navigated to ${button.textContent.trim()}`);
  closeMobileMenu();
}

function showScreen(page) {
  if (!page) return;
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  const target = document.querySelector(`.screen[data-page="${page}"]`);
  if (target) target.classList.add('active');

  switch (page) {
    case 'threats':
      renderThreats();
      break;
    case 'agents':
      renderAgents();
      break;
    case 'incidents':
      renderIncidents();
      break;
    case 'governance':
      renderGovernance();
      break;
    case 'reviews':
      renderReviews();
      break;
    case 'escalations':
      renderEscalations();
      break;
    case 'compliance':
      renderCompliance();
      break;
    case 'reports':
      renderReports();
      break;
    case 'library':
      renderLibrary();
      break;
    case 'trails':
      renderTrails();
      break;
    case 'risk':
      renderRisk();
      break;
    case 'trends':
      renderTrends();
      break;
    case 'cip':
      renderProductPage('cip');
      break;
    case 'iip':
      renderProductPage('iip');
      break;
    default:
      break;
  }
}

function handleActionClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'export') {
    downloadCSV();
    showToast('Report exported successfully.');
  } else if (action === 'view-all') {
    openProductModal();
  }
}

function attachEventHandlers() {
  document.querySelectorAll('.nav-button').forEach((button) => button.addEventListener('click', handleNavClick));
  document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', handleActionClick));
  // delegate clicks on product rows
  const tableBody = document.getElementById('product-table-body');
  if (tableBody) {
    tableBody.addEventListener('click', (e) => {
      const row = e.target.closest('.product-row');
      if (!row) return;
      const idx = Number(row.dataset.index);
      openProductModal(idx);
    });
    // keyboard accessibility for rows
    tableBody.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const row = e.target.closest('.product-row');
        if (!row) return;
        openProductModal(Number(row.dataset.index));
      }
    });
  }
  // threat page handlers
  const threatList = document.getElementById('threat-list');
  if (threatList) {
    threatList.addEventListener('click', handleThreatActions);
    threatList.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleThreatActions(e); });
  }
  const chatToggle = document.getElementById('chat-toggle');
  const chatClose = document.getElementById('chat-close');
  const chatSend = document.getElementById('chat-send');
  const chatInput = document.getElementById('chat-input');
  if (chatToggle) chatToggle.addEventListener('click', toggleChatWidget);
  if (chatClose) chatClose.addEventListener('click', toggleChatWidget);
  if (chatSend) chatSend.addEventListener('click', handleChatSend);
  if (chatInput) chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleChatSend();
  });

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeMobileMenu);
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      closeMobileMenu();
    }
  });

  const severitySelect = document.getElementById('filter-severity');
  const rangeSelect = document.getElementById('filter-range');
  const searchInput = document.getElementById('filter-search');
  const btnRefresh = document.getElementById('btn-refresh');
  const btnInvestigate = document.getElementById('btn-investigate');
  if (severitySelect) severitySelect.addEventListener('change', () => renderThreats({ severity: severitySelect.value, q: searchInput ? searchInput.value : '' }));
  if (rangeSelect) rangeSelect.addEventListener('change', () => renderThreats({ severity: severitySelect ? severitySelect.value : 'all', q: searchInput ? searchInput.value : '' }));
  if (searchInput) searchInput.addEventListener('input', () => renderThreats({ severity: severitySelect ? severitySelect.value : 'all', q: searchInput.value }));
  if (btnRefresh) btnRefresh.addEventListener('click', () => { showToast('Threat feed refreshed'); renderThreats({ severity: severitySelect ? severitySelect.value : 'all', q: searchInput ? searchInput.value : '' }); });
  if (btnInvestigate) btnInvestigate.addEventListener('click', () => { showToast('Investigation workflow started'); });
}

function downloadCSV() {
  const headers = ['Product', 'Trust Score', 'Active Agents', 'Threats (24h)', 'Compliance', 'Status'];
  const rows = products.map((p) => [p.name, p.trust, p.agents, p.threats, p.compliance, p.status]);
  const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'products.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function openProductModal(index) {
  // if no index provided, open full product list
  const modal = document.createElement('div');
  modal.className = 'pm-modal-overlay';
  modal.innerHTML = `
    <div class="pm-modal" role="dialog" aria-modal="true">
      <div class="pm-header">
        <h3>${typeof index === 'number' ? products[index].name + ' Details' : 'Product Register'}</h3>
        <button class="pm-close" aria-label="Close">×</button>
      </div>
      <div class="pm-body">
        ${typeof index === 'number' ? `
          <p><strong>Trust:</strong> ${products[index].trust}</p>
          <p><strong>Active Agents:</strong> ${products[index].agents}</p>
          <p><strong>Threats (24h):</strong> ${products[index].threats}</p>
          <p><strong>Compliance:</strong> ${products[index].compliance}</p>
          <p><strong>Status:</strong> ${products[index].status}</p>
        ` : `
          <table class="product-table modal-table">
            <thead><tr><th>Product</th><th>Trust</th><th>Agents</th><th>Threats</th><th>Compliance</th><th>Status</th></tr></thead>
            <tbody>${products.map(p=>`<tr><td>${p.name}</td><td>${p.trust}</td><td>${p.agents}</td><td>${p.threats}</td><td>${p.compliance}</td><td>${p.status}</td></tr>`).join('')}</tbody>
          </table>
        `}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  function close() {
    modal.remove();
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
  }

  modal.querySelector('.pm-close')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', onKey);
}

function initApp() {
  loadData().then(() => {
    renderLiveFeed();
    renderProductTable();
    renderThreats();
    attachEventHandlers();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ensure default screen visible
if (document.readyState !== 'loading') showScreen('command');
