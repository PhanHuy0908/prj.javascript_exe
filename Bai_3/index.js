let tiGia = 23500;

document.getElementById("doiTien").onclick = function () {
  let soTienUsd = document.getElementById("soTienUsd").value * 1;
  let formattedNumberVND = (soTienUsd * tiGia).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.getElementById(
    "hienThiQuyDoi"
  ).innerHTML = `<h3>${formattedNumberVND}</h3>`;
};
