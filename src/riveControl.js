
let buttonCanvasExample = document.getElementById("canvas");
const libraryCanvas = new rive.Rive({
    src: "https://dlsubzh.github.io/ubjahresbericht22/assets/rive/ub_jahresbericht_final.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    artboard: "UBJahresbericht22",
    stateMachines: ["UBJahresbericht22"],
    onLoad: () => {
      libraryCanvas.resizeDrawingSurfaceToCanvas();
    },
    onStateChange: (riveEvent) => {
      const newStates = riveEvent.data;
      console.log(newStates);
      newStates.forEach((state) => {
          
          
             Kontrollieren: Link-out 
        if (state.indexOf("Ruedi_Video_LinkOut") > -1) {
          const elemId = "popupContent";
          const popupContent = document.getElementById(elemId);
          popupContent.style.visibility = "visible";
          popupContent.innerHTML += "<span class='kreuz' onclick='hideVid(" + elemId + ");'>X</span> \
          "<video src='https://player.vimeo.com/video/808776367?h=845b2ca585' controls></video>"
          
          
          //Kontrollieren: Mouse-Pointer-Formen 
        if (state.indexOf("Ladina_TextBlase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Daniel_TextBlase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Betuel_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Melanie_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Florian_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Drazen_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Karin_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Elisabeth_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Casanova_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Urs_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Urs_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Martin_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Sybille_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else {
          buttonCanvasExample.style.cursor = "default";
        }
      });
    }
  });


  function hideVid(elm) {

    const popupContent = document.getElementById(elm.id);
    popupContent.innerHTML = ""; 
    popupContent.style.visibility = "hidden";
    // Am besten sollte der Rive-State geändert werden...
    //location.reload(false);
  }
