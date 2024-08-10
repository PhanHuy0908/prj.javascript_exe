let trungBinh = 0;

document.getElementById("tinhTrungBinh").onclick = function () {
  let soThuc1 = document.getElementById("soThuc1").value * 1;
  let soThuc2 = document.getElementById("soThuc2").value * 1;
  let soThuc3 = document.getElementById("soThuc3").value * 1;
  let soThuc4 = document.getElementById("soThuc4").value * 1;
  let soThuc5 = document.getElementById("soThuc5").value * 1;

  trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

  document.getElementById(
    "hienThiTrungBinh"
  ).innerHTML = `<h3>${trungBinh}</h3>`;
};
