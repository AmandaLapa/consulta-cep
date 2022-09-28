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
		const cep = inputCep.value.replace(/[^0-9]+/, "");
		//console.log(cep);

		axios({
			method: 'GET',
			url: `https://viacep.com.br/ws/${cep}/json`
		})
		.then((response) => {
			let data = response.data;
			//console.log(data);

			inputBairro.value = data.bairro;
			inputCepDado.value = data.cep;
			inputLogradouro.value = data.logradouro;
			inputEstado.value = data.uf;

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
