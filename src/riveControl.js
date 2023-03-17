function hideVid(elmId) {
  document.getElementById(elmId).style.visibility = "hidden";
  location.reload();
}

let buttonCanvasExample = document.getElementById("canvas");
const libraryCanvas = new rive.Rive({
    src: "https://nbtkmy.github.io/jahresbericht/assets/rive/Rive_TestmitLadina.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    artboard: "TestmitLadina",
    stateMachines: ["Ladina_Text_Blase"],
    onLoad: () => {
      libraryCanvas.resizeDrawingSurfaceToCanvas();
    },
    onStateChange: (riveEvent) => {
      const newStates = riveEvent.data;
      //console.log(newStates);
      newStates.forEach((state) => {
        //name of the state transitioned to on click and the URL you want
        if (state.indexOf("Ladina_LinkOut") > -1) {
          const vid1 = document.getElementById("vid1");
          vid1.style.visibility = "visible";
          
          //Add an else if for all states that should have the 'pointer' cursor
        } else if (state.indexOf("Ladina_TextBlase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else {
          buttonCanvasExample.style.cursor = "default";
        }
      });
    }
  });
