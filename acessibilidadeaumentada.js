var activateText = "Acessibilidade Aumentada Activada"
var desactivateText = "Acessibilidade Aumentada Desactivada"
var focusedButon = "Clique para activar ou desactivar a Acessibilidade Aumentada"


$( "#control-acessibilidade" ).click(function() { 
    if ($(".TextoParaVoz").attr("tabindex")){
        
      //Desactivando textos para suporte a Acessibilidade Aumentada

      $( ".TextoParaVoz" ).removeAttr("tabindex");
      $( ".TextoParaVoz" ).removeAttr("onfocus");
      $( ".TextoParaVoz" ).removeClass("increasedAcessibility");
      
      //Desactivando imagens para suporte a Acessibilidade Aumentada

      $( ".ImagemParaVoz" ).removeAttr("tabindex");
      $( ".ImagemParaVoz" ).removeAttr("onfocus");
      $( ".ImagemParaVoz" ).removeClass("increasedAcessibility");

      //Desactivando links para suporte a Acessibilidade Aumentada

      $( ".LinkParaVoz" ).removeAttr("tabindex");
      $( ".LinkParaVoz" ).removeAttr("onfocus");
      $( ".LinkParaVoz" ).removeClass("increasedAcessibility");

      //Fala de Aviso de desactivação

      voiceControlStart(desactivateText);

    }else{

      //Activando textos para suporte a Acessibilidade Aumentada

      $( ".TextoParaVoz" ).attr("tabindex", "0");
      $( ".TextoParaVoz" ).attr("onfocus", "speechText(event)");
      $( ".TextoParaVoz" ).addClass("increasedAcessibility");

      //Activando textos para suporte a Acessibilidade Aumentada

      $( ".ImagemParaVoz" ).attr("tabindex", "0");
      $( ".ImagemParaVoz" ).attr("onfocus", "speechImage()");
      $( ".ImagemParaVoz" ).addClass("increasedAcessibility");

      //Activando ancoras para suporte a Acessibilidade Aumentada

      $( ".LinkParaVoz" ).attr("onfocus", "speechLink()");
      $( ".LinkParaVoz" ).addClass("increasedAcessibility");
        
      //Fala de Aviso de desactivação

      voiceControlStart(activateText);
       
    }
    
});

//Função para fala de texto
function speechText(){
  let textToSpeak = document.activeElement.textContent;
  
  voiceControlCancel()
  voiceControlStart(textToSpeak)
  
}

//Função para fala de links
function speechLink(){
  let linkToSpeak = document.activeElement.textContent;
  let explicationText = document.activeElement.getAttribute("data-message")
  
  voiceControlCancel()
  voiceControlStart(linkToSpeak+explicationText)
  
}
//Função para fala de Imagem
function speechImage(){
  let imageToSpeak = document.activeElement.getAttribute("alt");

  voiceControlCancel()
  voiceControlStart(imageToSpeak)
  
}

