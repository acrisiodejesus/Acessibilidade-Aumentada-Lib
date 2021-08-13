function voiceControlStart(text){

  //  Incialização de um novo objecto de Expressão de Síntese de Fala
  let speech = new SpeechSynthesisUtterance();

  // Set Speech Language
  speech.lang = "pt";


  let voices = []; // global array of available voices


  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[0];

  // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
  speech.rate = 1
  speech.volume = 1;
  speech.pitch = 0
  speech.text = text;
  // Start Speaking
  window.speechSynthesis.speak(speech);
 
  
  
}
function voiceControlCancel(){
  window.speechSynthesis.cancel();
  
}