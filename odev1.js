const kisiselBilgiler = document.getElementById("kisiselBilgiler");
const siparisBigileri = document.getElementById("siparisBigileri");
const sizeInput = document.getElementById("sizeInput");
const tableSection = document.getElementById("table");
const bedenButton = document.getElementById("bedenButton");

// table
const nameTable = document.getElementById("nameTable");
const surnameTable = document.getElementById("surnameTable");
const mailTable = document.getElementById("mailTable");
const birthDateTable = document.getElementById("birthDateTable");
const phoneTable = document.getElementById("phoneTable");
const tshirtColorTable = document.getElementById("tshirtColorTable");
const tshirtTextColorTable = document.getElementById("tshirtTextColorTable");
const tshirtTextTable = document.getElementById("tshirtTextTable");
const tshirtAdetTable = document.getElementById("tshirtAdetTable");
const tshirtBedenTable = document.getElementById("tshirtBedenTable");
const adresTable = document.getElementById("adresTable");
const teslimTarihTable = document.getElementById("teslimTarihTable");
const cardNameTable = document.getElementById("cardNameTable");
const kartNumarasiTable = document.getElementById("kartNumarasiTable");
const sonKullanmaTarihTable = document.getElementById("sonKullanmaTarihTable");
const cvvTable = document.getElementById("cvvTable");
const tamamlaBtn = document.getElementById("tamamlaBtn");

function bedenSec(data) {
  switch (data) {
    case "1":
      return "XS";
    case "2":
      return "S";
    case "3":
      return "M";
    case "4":
      return "L";
    case "5":
      return "XL";
    case "6":
      return "XXL";
  }
}

function prepareFormData(element) {
  const formData = new FormData(element);

  return Object.fromEntries(formData);
}

bedenButton.addEventListener("click", () => {
  const data = prepareFormData(kisiselBilgiler);
  data.beden = bedenSec(data.beden);
  sizeInput.value = data.beden;
});

kisiselBilgiler.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = prepareFormData(e.target);
  const isDataValid = Object.values(data).every((value) => value !== "");
  data.beden = bedenSec(data.beden);

  if (isDataValid) {
    nameTable.innerHTML = data.name;
    surnameTable.innerHTML = data.surname;
    mailTable.innerHTML = data.email;
    birthDateTable.innerHTML = data.bornDate;
    phoneTable.innerHTML = data.tel;
    tshirtColorTable.innerHTML = data.tshirtColor;
    tshirtTextColorTable.innerHTML = data.tshirtTextColor;
    tshirtTextTable.innerHTML = data.tshirtText;
    tshirtAdetTable.innerHTML = data.tshirtAdet;
    tshirtBedenTable.innerHTML = data["beden"];
    adresTable.innerHTML = data.address;
    teslimTarihTable.innerHTML = data.deliverDate;
    cardNameTable.innerHTML = data.cardName;
    kartNumarasiTable.innerHTML = data.cardNo;
    sonKullanmaTarihTable.innerHTML = data.cardDate;
    cvvTable.innerHTML = data.cardCvv;
    tamamlaBtn.removeAttribute("disabled");

    tamamlaBtn.addEventListener("click", () => {
      alert("Siparişiniz alınmıştır. Teşekkür ederiz.");
    });
  } else {
    alert("Lütfen tüm alanları doldurunuz.");
  }

  console.log(data);
});
