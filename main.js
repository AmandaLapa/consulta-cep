const inputCep = document.getElementById("js-input-cep");
const btnBuscarCep = document.getElementById("js-btn-buscar-cep");

const inputBairro = document.getElementById("js-input-bairro");
const inputCepDado = document.getElementById("js-input-cep-dados");
const inputLogradouro = document.getElementById("js-input-logradouro");
const inputEstado = document.getElementById("js-input-estado");

const areaDados = document.getElementById("js-dados");
const msgErro = document.getElementById("js-error");

$('[mask="cep"]').mask("00000-000");

btnBuscarCep.addEventListener("click", () => {
	
	if (inputCep.value !== "") {
    const cep = inputCep.value.replace(/[^0-9]+/, '');
    //console.log(cep);

		fetch(`https://viacep.com.br/ws/${cep}/json`)
			.then((response) => response.json())
			.then((json) => {
				//console.log(json);

				inputBairro.value = json.bairro;
				inputCepDado.value = json.cep;
				inputLogradouro.value = json.logradouro;
				inputEstado.value = json.uf;

				areaDados.style.display = "block";
				msgErro.style.display = "none";
			});
	} else {
		inputBairro.value = "";
		inputCepDado.value = "";
		inputLogradouro.value = "";
		inputEstado.value = "";

		msgErro.style.display = "block";
		areaDados.style.display = "none";
	}
});
