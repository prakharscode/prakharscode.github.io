function upDate(previewPic) {
  const imageElement = document.getElementById("image");
  imageElement.innerHTML = previewPic.alt;
  // imageElement.style.backgroundImage = `url("${previewPic.src}")`;
  imageElement.style.backgroundImage = 'url("' + previewPic.src + '")';
}
function unDo() {
  const imageElement = document.getElementById("image");
  imageElement.innerHTML = "Hover over an image below to display here";
  imageElement.style.backgroundImage = null;
}
