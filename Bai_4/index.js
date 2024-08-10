let dienTich = 0;
let chuVi = 0;

document.getElementById("tinhToan").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  dienTich = chieuDai * chieuRong;
  chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById(
    "hienThiKetQua"
  ).innerHTML = `<h3>Dien tich la: ${dienTich}</h3>\n<h3>Chu vi la: ${chuVi}</h3>`;
};
