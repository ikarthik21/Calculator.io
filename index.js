let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let n3 = document.getElementById("num3");
let n4 = document.getElementById("num4");
let n5 = document.getElementById("num5");
let n6 = document.getElementById("num6");
let n7 = document.getElementById("num7");
let n8 = document.getElementById("num8");
let n9 = document.getElementById("num9");
let zero = document.getElementById("num0");
let add = document.getElementById("plus");
let sub = document.getElementById("minus");
let mul = document.getElementById("mult");
let div = document.getElementById("division");
let eql = document.getElementById("eqls");
let cl = document.getElementById("clear");
let disp = document.getElementById("disp");

let str = "";
let nm1,
  nm2,
  res,
  op = "";

n1.addEventListener("click", () => {
  str += "1";
  disp.innerHTML = str;
});

n2.addEventListener("click", () => {
  str += "2";
  disp.innerHTML = str;
});

n3.addEventListener("click", () => {
  str += "3";
  disp.innerHTML = str;
});

n4.addEventListener("click", () => {
  str += "4";
  disp.innerHTML = str;
});

n5.addEventListener("click", () => {
  str += "5";
  disp.innerHTML = str;
});

n6.addEventListener("click", () => {
  str += "6";
  disp.innerHTML = str;
});

n7.addEventListener("click", () => {
  str += "7";
  disp.innerHTML = str;
});

n8.addEventListener("click", () => {
  str += "8";
  disp.innerHTML = str;
});

n9.addEventListener("click", () => {
  str += "9";
  disp.innerHTML = str;
});

zero.addEventListener("click", () => {
  str += "0";
  disp.innerHTML = str;
});

add.addEventListener("click", () => {
  str += "+";
  disp.innerHTML = str;
  if (str[0] == "-") {
    str = str.substring(1);
    nm1 = parseInt(str);
    nm1 *= -1;
    op = "+";
    str = "";
  } else {
    nm1 = parseInt(str);
    op = "+";
    str = "";
  }
});

sub.addEventListener("click", () => {
  if (str == "") {
    str += "-";
    disp.innerHTML = str;
  } else {
    str += "-";
    disp.innerHTML = str;
    nm1 = parseInt(str);
    op = "-";
    str = "";
  }
});
div.addEventListener("click", () => {
  str += "/";
  disp.innerHTML = str;
  nm1 = parseInt(str);
  op = "/";
  str = "";
});

mul.addEventListener("click", () => {
  str += "*";
  disp.innerHTML = str;
  nm1 = parseInt(str);
  op = "*";
  str = "";
});

cl.addEventListener("click", () => {
  str = "";
  disp.innerHTML = str;
});

eql.addEventListener("click", () => {
  switch (op) {
    case "+":
      nm2 = parseInt(str);
      res = nm1 + nm2;

      disp.innerHTML = res;
      break;
    case "-":
      nm2 = parseInt(str);
      res = nm1 - nm2;
      disp.innerHTML = res;
      break;
    case "*":
      nm2 = parseInt(str);
      res = nm1 * nm2;
      disp.innerHTML = res;
      break;
    case "/":
      nm2 = parseInt(str);
      res = nm1 / nm2;
      res.toFixed(5);
      disp.innerHTML = res;
      break;
  }
  str = "";
  op = "";
});
