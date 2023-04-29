window.addEventListener("DOMContentLoaded", (e) => {
  let eguille = document.querySelector(".eguille");
  let heure = document.querySelector("#heure");
  let minute = document.getElementById("minute");
  let seconde = document.getElementById("seconde");
  let int_heure = parseInt(heure.value);
  let int_minute = parseInt(minute.value);
  let int_seconde = parseInt(seconde.value);
  let pas = 360 / (5 * 12);
  let secondeCountiniousDeg = int_seconde;
  const converte_seconde = (heure, minute) => {
    const hr = int_heure * 60 * 60;
    const mn = int_minute * 60;
    return hr + mn;
  };
  const sum_seconde = () => {
    return int_seconde + converte_seconde(heure, minute);
  };
  let prend_sum_sc = sum_seconde();

  eguille.style.transform = `rotate(${pas * int_seconde}deg)`;
  let continious = setInterval((e) => {
    let deg = pas * secondeCountiniousDeg - 5;
    secondeCountiniousDeg -= 1;
    console.log(prend_sum_sc, secondeCountiniousDeg);
    if (prend_sum_sc != 0) {
      prend_sum_sc = prend_sum_sc - 1;
      if (
        int_seconde == 0 &&
        int_minute != 0 &&
        (int_heure == 0 || int_heure != 0)
      ) {
        int_minute -= 1;
        int_seconde = 59;
      } else if (int_seconde != 0) {
        int_seconde -= 1;
      }
      if (int_minute == 0 && int_seconde == 0) {
        if (int_heure != 0) {
          int_heure -= 1;
          int_minute = 59;
          int_seconde = 59;
        }
      }

      eguille.style.transform = `rotate(${deg}deg)`;
      eguille.style.transition = "1s linear";
      console.log(eguille.style.transform, secondeCountiniousDeg - 1);
      seconde.value = `${int_seconde.toString().padStart(2, "0")}`;
      minute.value = `${int_minute.toString().padStart(2, "0")}`;
      heure.value = `${int_heure.toString().padStart(2, "0")}`;
    } else {
      clearInterval(continious);
    }
  }, 1000);
});
