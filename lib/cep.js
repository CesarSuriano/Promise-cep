$(document).ready(iniciar);
function iniciar() {
  $('#botao').on('click', carregar);
}

function esconderLoading() {
  $('#loading').hide();
}
function mostrarLoading() {
  $('#loading').show();
}

function carregar(){
  Promise.resolve(null)
    .then(mostrarLoading)
    .then(pegarNumero)
    .then(carregarInformacoes)
    .then(mostrarInformacoes);
}

function pegarNumero(result){
  var numero = $('#fcep').val();
  return numero;  
}

function carregarInformacoes(result){
  var p = new Promise(function(resolve, reject){
    var url = "http://viacep.com.br/ws/" + result + "/json/";
    console.log(url)    
    var r = $.get(url);

    r.done(function(data){
      resolve(data);
    });
  });

  return p;
}

function mostrarInformacoes(result){
  var html = "<label>"+ result.logradouro+"</label> <br>";
  html += "<label>"+ result.bairro+"</label> <br>";
  html += "<label>"+ result.localidade+"</label> <br>";
  html += "<label>"+ result.bairro+"</label> <br>";
  html += "<label>"+ result.uf+"</label> <br>";
  $("#saida").html(html);
  esconderLoading();
}
