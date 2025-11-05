// animação de fade ao carregar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.2}s`;
  });
});

// máscara CPF
document.getElementById("cpf")?.addEventListener("input", function () {
  let v = this.value.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  this.value = v;
});

// máscara telefone
document.getElementById("telefone")?.addEventListener("input", function () {
  let v = this.value.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d)/, "($1) $2");
  v = v.replace(/(\d{5})(\d)/, "$1-$2");
  this.value = v;
});

// máscara CEP
document.getElementById("cep")?.addEventListener("input", function () {
  let v = this.value.replace(/\D/g, "");
  v = v.replace(/(\d{5})(\d)/, "$1-$2");
  this.value = v;
});
