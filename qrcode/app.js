const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const imgBox = document.getElementById("imgBox");
const errorMsg = document.getElementById("errorMsg");
const generateBtn = document.getElementById("generateBtn");

const showError = () => {
  qrText.classList.add("error");
  errorMsg.classList.add("show");
  setTimeout(() => {
    qrText.classList.remove("error");
    errorMsg.classList.remove("show");
  }, 1000);
};

const generateQR = () => {
  const text = qrText.value.trim();
  if (!text) {
    showError();
    return;
  }

  const size = text.length > 50 ? 250 : 150;
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    text
  )}`;

  imgBox.classList.add("show-img");

  qrText.value = "";
};

generateBtn.addEventListener("click", generateQR);
qrText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") generateQR();
});
