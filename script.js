//                                                         Type Write
let paragraph = document.querySelector("h1");
let Text =
  "XML, standing for eXtensible Markup Language, is similar to HTML but is used for data transfer, just like JSON.";
let i = 0;

function typeWrite() {
  if (i < Text.length) {
    paragraph.textContent += Text.charAt(i);
    i++;
    setTimeout(typeWrite, 100);
  } else {
    setTimeout(() => {
      paragraph.textContent = "";
      i = 0;
    }, 1000);
  }
}
setInterval(typeWrite, 1000);
typeWrite();
