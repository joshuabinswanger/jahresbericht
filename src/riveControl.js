
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
        
        // Kontrollieren: Link-out für Vimeo
        if (state.indexOf("Ruedi_Video_LinkOut") > -1) {

          const elemId = "popupContent";
          const popupContent = document.getElementById(elemId);
          popupContent.style.visibility = "visible";
          
        // Kontrollieren: Link-out andere Webseite öffnen
        } else if (state.indexOf("Ladina_TextBlase_Hover") > -1) {
          window.open("https://www.ub.uzh.ch/de.html", "_blank");

        //Kontrollieren: Solange der Mouse Pointer auf dem Canvas kommt, wird der Pointer-Form geändert
        } else {
          buttonCanvasExample.style.cursor = "pointer";
        }
      });
      }
    });


  function hideVid() {

    const popupContent = document.getElementById("popupContent");
    popupContent.style.visibility = "hidden";

  }