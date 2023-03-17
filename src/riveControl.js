const libraryCanvas = new rive.Rive({
    src: "https://nbtkmy.github.io/jahresbericht/assets/rive/Rive_TestmitLadina.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    artboard: "TestmitLadina",
    stateMachines: ["Ladina_Text_Blase"],
    onLoad: () => {
      libraryCanvas.resizeDrawingSurfaceToCanvas();
      const inputs = libraryCanvas.stateMachineInputs("Ladina_Text_Blase");
      /*
      const xInput = inputs.find((input) => {
        return input.name === "xAxis";
      });
  
      const yInput = inputs.find((input) => {
        return input.name === "yAxis";
      });
      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;
      window.addEventListener("mousemove", function (e) {
        xInput.value = (e.x / maxWidth) * 100;
        yInput.value = 100 - (e.y / maxHeight) * 100;
      });
      */
    }
  });