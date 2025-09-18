// Show form section on button click
document.getElementById("show-form").onclick = function() {
  document.getElementById("form-section").style.display = "block";
  document.querySelector(".form-heading").scrollIntoView({behavior: "smooth"});
};// Show form section on button click
document.getElementById("show-form").onclick = function() {
  document.getElementById("form-section").style.display = "block";
  document.getElementById("show-form").scrollIntoView({behavior: "smooth"});
};

// Voice Input Feature
const voiceBtn = document.getElementById("voice-btn");
const voiceOutput = document.getElementById("voice-output");
const voiceLang = document.getElementById("voice-language");

if (voiceBtn) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = voiceLang.value;
    recognition.interimResults = true;

    voiceLang.onchange = function() {
      recognition.lang = voiceLang.value;
    };

    voiceBtn.addEventListener("click", () => {
      recognition.start();
      voiceOutput.textContent = "Listening...";
    });

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join("");
      voiceOutput.textContent = transcript;
    };

    recognition.onerror = (event) => {
      voiceOutput.textContent = "Error: " + event.error;
    };
  } else {
    voiceOutput.textContent = "Speech Recognition not supported in this browser.";
  }
}

// Form Submission
const form = document.getElementById("farm-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Farm details submitted successfully!");
  });
}