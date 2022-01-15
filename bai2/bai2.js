const btn = document.getElementById("btn");
btn.onclick = function() {
    const i = parseInt(btn.textContent)
    btn.innerHTML = i + 1;
}