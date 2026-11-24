export function openViewer(src, alt) {
  const modal = document.getElementById('viewer');
  const img = document.getElementById('viewer-img');
  //const caption = document.getElementById('viewer-caption');
  if (!modal || !img /*|| !caption*/) return;

  img.src = src;
  img.alt = alt;
  //caption.textContent = alt;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

export function closeViewer() {
  const modal = document.getElementById('viewer');
  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

export function initViewer() {
  const modal = document.getElementById('viewer');
  const content = document.getElementById('viewer-content');
  const closeBtn = document.getElementById('viewer-close');

  document.querySelectorAll('img[data-viewer]').forEach((img) => {
    img.addEventListener('click', () => openViewer(img.src, img.alt));
  });

  modal?.addEventListener('click', closeViewer);
  content?.addEventListener('click', (e) => e.stopPropagation());
  closeBtn?.addEventListener('click', closeViewer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeViewer();
  });
}
