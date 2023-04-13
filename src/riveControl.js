
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
        
        //Kontrollieren: Solange der Mouse Pointer auf dem Canvas kommt, wird der Pointer-Form geändert
        buttonCanvasExample.style.cursor = "pointer";
        
        // Kontrollieren: Link-out 
        if (state.indexOf("Ruedi_LinkOut") > -1) {
          
          const elemId = "popupContent";
          const popupContent = document.getElementById(elemId);
          popupContent.style.visibility = "visible";
          popupContent.innerHTML += "<span class='kreuz' onclick='hideVid(" + elemId + ");'>X</span> \
          <video src='./assets/vid/testVid.mov' controls></video>"
          
        } else if (state.indexOf("Ladina_TextBlase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } 
      });
      }
    });


  function hideVid(elm) {

    const popupContent = document.getElementById(elm.id);
    popupContent.innerHTML = ""; 
    popupContent.style.visibility = "hidden";

  }
