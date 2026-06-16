module.exports = {
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
  incidents: [
    { id: 'INC-1024', title: 'Privilege Escalation Attempt', status: 'Critical' },
    { id: 'INC-1025', title: 'Suspicious API Activity', status: 'High' },
    { id: 'INC-1026', title: 'Unauthorized Access Request', status: 'Medium' },
    { id: 'INC-1027', title: 'Data Classification Alert', status: 'Review' },
  ],
  compliance: [
    { label: 'GDPR', score: '98%' },
    { label: 'ISO 27001', score: '95%' },
    { label: 'SOC 2', score: '99%' },
    { label: 'HIPAA', score: '97%' },
  ],
  governance: [
    { label: 'Approved', value: '215' },
    { label: 'Pending', value: '18' },
    { label: 'Escalated', value: '8' },
  ],
};
