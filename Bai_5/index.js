let tong = 0;

document.getElementById("tinhTong").onclick = function () {
  let soDauVao = document.getElementById("nhapSo").value * 1;
  tong = Math.floor(soDauVao / 10) + (soDauVao % 10);
  document.getElementById("hienThiTong").innerHTML = `<h3>${tong}</h3>`;
};
