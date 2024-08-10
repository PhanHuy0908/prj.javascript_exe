let tongLuong = 0;
let luongMotNgay = 100000;

document.getElementById("tinhLuong").onclick = function () {
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  tongLuong = luongMotNgay * soNgayLam;
  let formattedNumberVND = tongLuong.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.getElementById(
    "hienThiLuong"
  ).innerHTML = `<h3>${formattedNumberVND}</h3>`;
};
