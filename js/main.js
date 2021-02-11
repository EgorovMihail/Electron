"usestrict";

function Draw() {
  let table = document.getElementById("mainTable");

  let strTable = "<table>";

  table.insertAdjacentHTML("afterBegin", strTable);
}

function Calculate() {
  let N = [];
  let Nold = [];
  let n = 10;

  let tau = 0.0001;
  let D = 0.01;
  let Lx = 0.002;
  let Ly = Lx;
  let n0 = 1000;
  let h = 0.0001;

  for (let i = 0; i < n; i++) {
    Nold[i] = new Array();
    N[i] = new Array();

    for (let j = 0; j < n; j++) {
      Nold[i][j] = 0;
      N[i][j] = 0;
    }
  }

  // console.log(N);

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      N[i][j] =
        +(Nold[i][j] / tau -
        (Nold[i][j] - n0) / tau +
        D *
          ((Nold[i - 1][j] - 2 * Nold[i][j] + Nold[i + 1][j]) / h ** 2 +
            (Nold[i][j - 1] - 2 * Nold[i][j] + Nold[i][j + 1]) / h ** 2));

      Nold[i][j] = N[i][j];
      console.log(Nold[i][j]);
    }
  }

  //console.log(N);
}

Calculate();

// Draw();
