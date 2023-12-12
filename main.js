//  1. Código JS para fala em texto:É a WebSpeechAPI utilizada para reconhcer fala e convertê-la em texto
var SpeechRecognition = window.webkitSpeechRecognition;
// 2. defina a função de início e escreva o código para ela:
var recognition = new SpeechRecognition();
//  3. Este resultado é a conversão de nossa fala em texto
var Textbox = document.getElementById("textbox"); 
// Chame a função start():
function start()
{
  Textbox.innerHTML = ""; 
  recognition.start();
} 
// A função onresult armazena todos os valores de falas que foram convertidos para texto.
recognition.onresult = function(event)
{
  console.log(event); 
  var Content = event.results[0][0].transcript;
  Textbox.innerHTML = Content;
  console.log(Content);
  if(Content =="selfie")
  {
    console.log("tirando selfie --- ");
    speak();
  }
}

// Escreveremos uma função speak() que realizará a conversão de texto para fala.
//  API e a armazenamos em uma variável para converter a nossa fala em texto.

function speak()
{
  // atribui a var para api
  var synth = window.speechSynthesis;
  //  contém o texto obtido de textarea 
  speak_data = "Tirando sua selfie em 5 segundos";
  // utterThis: a variável em que iremos armazenar o texto que deve ser 
  // dito.palavra-chave new para convertermos qualquer texto novo em fala,contém o texto obtido de textarea
  var utterThis = new SpeechSynthesisUtterance(speak_data);
// Agora que convertemos o texto para fala e o armazenamos em uma variável, passe essa variável para a função
  synth.speak(utterThis);
  // automatizar
  Webcam.attach(camera);
  
  setTimeout(function()
  { 
    take_selfie(); 
    save();
  }, 5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
  Webcam.snap(function(data_uri) 
  {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
  });
}

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
