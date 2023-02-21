const fightBtn = document.getElementById("figthBtn");

function figth() {
  const attackerName = document.getElementById("attackerName").value;
  const attackerForce = document.getElementById("attackerForce").value;
  const attackerForceNumber = parseFloat(attackerForce);
  const defenseName = document.getElementById("defenseName").value;
  const defenseForce = document.getElementById("defenseForce").value;
  const defenseForceNumber = parseFloat(defenseForce);
  let defenseHealf = document.getElementById("defenseHealf").value;
  let defenseHealfNumber = parseFloat(defenseHealf);
  const shield = document.querySelector('input[name="shield"]:checked').value;
  const resultFigth = document.getElementById("resultFigth");
  let damage = 0;

  if (defenseForceNumber < attackerForceNumber && shield === "nao") {
    damage = attackerForceNumber - defenseForceNumber;
  } else if (defenseForceNumber < attackerForceNumber && shield === "sim") {
    damage = (attackerForceNumber - defenseForceNumber) / 2;
  } else {
    const result = document.createElement("h2");
    result.innerText = attackerName + " Não tem condições de lutar!!!";
  }
  defenseHealfNumber -= damage;
  console.log(attackerForceNumber, defenseForceNumber, damage, defenseHealfNumber, shield);

  if (defenseHealfNumber > 0) {
    const result = document.createElement("h2");
    result.innerText = attackerName + " venceu a batalha!!!";
    const line = document.createElement("br");
    const life = document.createElement("p");
    life.innerText = defenseName + " ficou com " + defenseHealfNumber;
    resultFigth.appendChild(result);
    resultFigth.appendChild(line);
    resultFigth.appendChild(life);
  } else {
    const result = document.createElement("h2");
    result.innerText = attackerName + " venceu a batalha!!!";
    const line = document.createElement("br");
    const life = document.createElement("p");
    life.innerText = defenseName + " Morreu!!! ";
    resultFigth.appendChild(result);
    resultFigth.appendChild(line);
    resultFigth.appendChild(life);
  }
}

fightBtn.addEventListener("click", figth);
