//mudando imagem botao AR para ingles
function buttonImageAR_EUA()
{
  var img = document.getElementById("imageAR");
  img.src="https://cdn.glitch.com/33362749-0d41-4803-8d25-03abce69741a%2FbuttonAR_EUA.png?v=1598445620591";
}

//mudando imagem botao AR para portugues
function buttonImageAR_BR()
{
  var img = document.getElementById("imageAR");
  img.src="https://cdn.glitch.com/33362749-0d41-4803-8d25-03abce69741a%2FbuttonAR_BR.png?v=1598445617658";
}

//mudando texto para portugues ao abrir a camera
function changeTitle_BR(text1,text2)
{  
  document.getElementById('chgtext').innerHTML = text1;
  document.getElementById('chgbatery').innerHTML = text2;
}

//mudando texto para ingles ao abrir a camera
function changeTitle_EUA(text1,text2)
{  
  document.getElementById('chgtext').innerHTML = text1;
  document.getElementById('chgbatery').innerHTML = text2;
}

//mudando o titulo do botao de ajuda para portugues
function changeHELP_BR(text)
{
  document.getElementById('chgHelp').innerHTML = text;
  document.getElementById('chgHelpCam').innerHTML = text;  
}

//mudando o titulo do botao de ajuda para ingles
function changeHELP_EUA(text)
{  
  document.getElementById('chgHelp').innerHTML = text; 
  document.getElementById('chgHelpCam').innerHTML = text;
}


//criando recursos para janela de ajuda
function info(form)
{
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("chgHelp");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

//mudando a ajuda para portugues
function changeHelpInfo_BR()
{
  document.getElementById('text01').innerHTML = "Primeiro aperte no botão:";
  document.getElementById('text02').innerHTML = "Depois Escaneie o ambiente conforme mostrado:";
  document.getElementById('text03').innerHTML = "Para aumentar o objeto use os dois dedos:";
  document.getElementById('text04').innerHTML = "Para mover o objeto use um dedo em cima do objeto e arraste:";
  
  var img = document.getElementById("image01");
  img.src="https://cdn.glitch.com/33362749-0d41-4803-8d25-03abce69741a%2FbuttonAR_BR.png?v=1598445617658";
}

//mudando a ajuda para ingles
function changeHelpInfo_EUA()
{
  document.getElementById('text01').innerHTML = "First press the button:";
  document.getElementById('text02').innerHTML = "Then Scan the environment as shown:";
  document.getElementById('text03').innerHTML = "To enlarge the object, use two fingers:";
  document.getElementById('text04').innerHTML = "To move the object use a finger on the object and drag:";
  
  var img = document.getElementById("image01");
  img.src="https://cdn.glitch.com/33362749-0d41-4803-8d25-03abce69741a%2FbuttonAR_EUA.png?v=1598445620591";
}