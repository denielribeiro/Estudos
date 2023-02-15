const calculateBtn = document.getElementById("calculateBtn");

function calculate() {
  const measure = document.getElementById("measure").value;
  const selectedUnit = document.querySelector("input[name='convert']:checked").value;

  const valueMm = document.getElementById("valueMm");
  const valueCm = document.getElementById("valueCm");
  const valueDm = document.getElementById("valueDm");
  const valueDam = document.getElementById("valueDam");
  const valueHm = document.getElementById("valueHm");
  const valueKm = document.getElementById("valueKm");

  console.log(selectedUnit);

  switch (selectedUnit) {
    case "Milimetros":
      let mmxCm = measure * 0.1;
      let mmxDm = measure * 0.01;
      let mmxDam = measure * 0.0001;
      let mmxHm = measure * 0.00001;
      let mmxKm = measure * 0.0000001;

      valueMm.value = measure;
      valueCm.value = mmxCm;
      valueDm.value = mmxDm;
      valueDam.value = mmxDam;
      valueHm.value = mmxHm;
      valueKm.value = mmxKm;
      break;

    case "Centrimetros":
      let cmxMm = measure * 10;
      let cmxDm = measure * 0.1;
      let cmxDam = measure * 0.001;
      let cmxHm = measure * 0.0001;
      let cmxKm = measure * 0.000001;

      valueCm.value = measure;
      valueMm.value = cmxMm;
      valueDm.value = cmxDm;
      valueDam.value = cmxDam;
      valueHm.value = cmxHm;
      valueKm.value = cmxKm;
      break;

    case "Decimetros":
      let dmxMm = measure * 100;
      let dmxCm = measure * 10;
      let dmxDam = measure * 0.01;
      let dmxHm = measure * 0.001;
      let dmxKm = measure * 0.0001;

      valueDm.value = measure;
      valueMm.value = dmxMm;
      valueCm.value = dmxCm;
      valueDam.value = dmxDam;
      valueHm.value = dmxHm;
      valueKm.value = dmxKm;
      break;

    case "Decametros":
      let damxMm = measure * 10000;
      let damxCm = measure * 1000;
      let damxDm = measure * 100;
      let damxHm = measure * 0.1;
      let damxKm = measure * 0.01;

      valueDam.value = measure;
      valueMm.value = damxMm;
      valueCm.value = damxCm;
      valueDm.value = damxDm;
      valueHm.value = damxHm;
      valueKm.value = damxKm;
      break;

    case "Hectometros":
      let hmxMm = measure * 100000;
      let hmxCm = measure * 10000;
      let hmxDm = measure * 1000;
      let hmxDam = measure * 10;
      let hmxKm = measure * 0.1;

      valueHm.value = measure;
      valueMm.value = hmxMm;
      valueCm.value = hmxCm;
      valueDm.value = hmxDm;
      valueDam.value = hmxDam;
      valueKm.value = hmxKm;
      break;

    case "Quilometros":
      let kmxMm = measure * 1000000;
      let kmxCm = measure * 100000;
      let kmxDm = measure * 10000;
      let kmxDam = measure * 100;
      let kmxHm = measure * 10;

      valueKm.value = measure;
      valueMm.value = kmxMm;
      valueCm.value = kmxCm;
      valueDm.value = kmxDm;
      valueDam.value = kmxDam;
      valueHm.value = kmxHm;
      break;

    default:
      alert("Entre com um valor para conversão!!");
  }
}

calculateBtn.addEventListener("click", calculate);
