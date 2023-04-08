
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
