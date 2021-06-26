async function showQuote() {
  try {
    let res = await fetch("https://api.quotable.io/random");

    let data = await res.json();

    //console.log("data:", data);
    showQuoteOnScr(data);
  } catch (e) {
    console.log("e:", e);
  }
}
showQuote();

var cont = document.getElementById("container");

function showQuoteOnScr(d) {
  cont.innerHTML = "";

  let div = document.createElement("div");

  div.setAttribute("id", "cont_div");

  let conte = document.createElement("h1");
  conte.innerText = `${d.content}`;

  let p = document.createElement("p");
  p.setAttribute("id", "author");
  p.innerText = `${d.author}`;

  div.append(conte, p);

  cont.append(div);
}
