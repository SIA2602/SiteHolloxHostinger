function info(form)
{
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

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

function changeInfo(text)
{
  document.getElementById('chginfo').innerHTML = text;
}

function buttonImageAR_EUA()
{
  var img = document.getElementById("imageAR");
  img.src="../arquivos/buttonAR_EUA.png";
}

function buttonImageAR_BR()
{
  var img = document.getElementById("imageAR");
  img.src="../arquivos/buttonAR_Pollux.png";
}

function sliderImageAR_BR()
{
  var img = document.getElementById("myBtn1");
  img.src="../arquivos/Botao_Opcoes_BR_01.png?v=1598322163054";
  
  var img2 = document.getElementById("myBtn2");
  img2.src="../arquivos/Botao_Opcoes_BR_02.png?v=1598322168908";
  
  var img3 = document.getElementById("myBtn3");
  img3.src="../arquivos/Botao_Opcoes_BR_03.png?v=1598322180848";
  
  var img4 = document.getElementById("myBtn4");
  img4.src="../arquivos/Botao_Opcoes_BR_03.png?v=1598322180848";  
}

function sliderImageAR_EUA()
{
  var img = document.getElementById("myBtn1");
  img.src="../arquivos/Botao_Opcoes_EUA_01.png?v=1598322189362"; 
  
  var img2 = document.getElementById("myBtn2");
  img2.src="../arquivos/Botao_Opcoes_EUA_02.png?v=1598322196788"; 
  
  var img3 = document.getElementById("myBtn3");
  img3.src="../arquivos/Botao_Opcoes_EUA_03.png?v=1598322203504"; 
  
  var img4 = document.getElementById("myBtn4");
  img4.src="../arquivos/Botao_Opcoes_EUA_03.png?v=1598322203504";
}