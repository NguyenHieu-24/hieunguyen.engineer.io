document.querySelectorAll('[data-link]').forEach(a => {
  const c = window.PORTFOLIO_LINKS || {};
  const key = a.dataset.link;
  const url = key.startsWith('project:') ? (c.projects || {})[key.slice(8)] : c[key];
  if (typeof url !== 'string' || !url.trim()) return;
  try { const u = new URL(url); if (u.protocol !== 'https:') return; a.href = u.href; a.hidden = false; } catch {}
});
