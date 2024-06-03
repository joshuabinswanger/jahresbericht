
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
        } else if (state.indexOf("Kurier_LinkOut") > -1) {
          window.open("https://www.uzh.ch/blog/ub/2023/04/12/einer-fuer-alle-der-ub-zb-kurier/", "_blank");

        } else if (state.indexOf("Jan_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/buecher-daten-raeume.html", "_blank");

        } else if (state.indexOf("Feb_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/ausstellung-zaehneputzen.html", "_blank");

        } else if (state.indexOf("Mar_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/biblioweekend-2022.html", "_blank");

        } else if (state.indexOf("Apr_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/Wir-haben-einen-Blog.html", "_blank");

        } else if (state.indexOf("Mai_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/Lunchworkshops-im-DLS.html", "_blank");

        } else if (state.indexOf("Jun_LinkOut") > -1) {
          window.open("https://www.zde.uzh.ch/de.html", "_blank");

        } else if (state.indexOf("Jul_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/Open-Science-Summer-School.html", "_blank");

        } else if (state.indexOf("Aug_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/forschungsapparate.html", "_blank");

        } else if (state.indexOf("Sep_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/lars.html", "_blank");

        } else if (state.indexOf("Okt_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/buecherflohmarkt.html", "_blank");

        } else if (state.indexOf("Nov_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/game-month.html", "_blank");

        } else if (state.indexOf("Dez_LinkOut") > -1) {
          window.open("https://www.ub.uzh.ch/de/ueber-die-ub/news/oup-agreement.html", "_blank");

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
