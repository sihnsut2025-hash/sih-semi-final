// Language JSON
const translations = {
    "en": { "title": "InternMatch AI" },
    "hi": { "title": "इंटर्नमैच एआई" },
    "bn": { "title": "ইন্টার্নম্যাচ এআই" },
    "ta": { "title": "இன்டர்ன்மேச் ஏஐ" },
    "te": { "title": "ఇంటర్న్‌మ్యాచ్ AI" },
    "kn": { "title": "ಇಂಟರ್ನ್‌ಮ್ಯಾಚ್ ಎಐ" },
    "ml": { "title": "ഇന്റേൺമാച്ച് AI" },
    "pa": { "title": "ਇੰਟਰਨਮੈਚ ਏਆਈ" },
    "gu": { "title": "ઇન્ટર્નમેચ એઆઈ" },
    "mr": { "title": "इंटर्नमॅच AI" },
    "or": { "title": "ଇଣ୍ଟର୍ନମ୍ୟାଚ୍ AI" },
    "as": { "title": "ইন্টাৰ্ণমেচ এআই" },
    "ur": { "title": "انٹرن میچ AI" },
    "ne": { "title": "इन्टरनम्याच AI" },
    "sa": { "title": "इंटर्नमॅच AI" },
    "ks": { "title": "انٹرن میچ AI" },
    "sd": { "title": "انٽرنمچ AI" },
    "kok": { "title": "इंटर्नमॅच AI" },
    "doi": { "title": "इंटर्नमॅच AI" },
    "mai": { "title": "इंटर्नमॅच AI" },
    "brx": { "title": "इंटर्नमॅच AI" }
};

// Language selector
const langSelector = document.getElementById('language-selector');
const siteTitle = document.querySelector('.font-accent');

langSelector.addEventListener('change', (e) => {
    const lang = e.target.value;
    if (translations[lang]) {
        siteTitle.textContent = translations[lang].title;
    }
});

// Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    themeIcon.textContent = document.documentElement.classList.contains('dark') ? '🌙' : '🌞';
});

// Voice Search
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
    recognition.lang = "en-IN"; // default language (can later link to dropdown)
    recognition.interimResults = false;

    const voiceBtn = document.getElementById("voice-search-btn");
    const voiceOutput = document.getElementById("voice-output");

    voiceBtn.addEventListener("click", () => {
        recognition.start();
        voiceOutput.textContent = "🎙 Listening...";
    });

    recognition.addEventListener("result", (event) => {
        const query = event.results[0][0].transcript;
        voiceOutput.textContent = `You said: "${query}"`;

        // Redirect to opportunities page with search query
        window.location.href = `opportunity_explorer.html?search=${encodeURIComponent(query)}`;
    });

    recognition.addEventListener("end", () => {
        console.log("Voice recognition ended.");
    });
} else {
    document.getElementById("voice-output").textContent = "❌ Voice search not supported in this browser.";
}

// Add your other JS functions here (assessment, carousel, counters, etc.)
