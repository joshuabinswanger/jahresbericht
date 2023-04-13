
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
           buttonCanvasExample.style.cursor = "pointer";
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
