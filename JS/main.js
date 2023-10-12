function toggleSharePopover() {
  const sharePopover = document.querySelector('.share-container');
  sharePopover.classList.toggle('open');
}

const shareButton = document.querySelector('.share-button');
shareButton.addEventListener('click', toggleSharePopover);
