window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // يناير هو 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date").setAttribute("min", today);
}
function sendToWhatsApp() {
    var name = document.getElementById("name").value;
   
    var date = document.getElementById("date").value;
    var guests = document.getElementById("guests").value;

    // جمع الخدمات المختارة
    var services = [];
    if (document.getElementById("service1").checked) services.push("Haircut");
    if (document.getElementById("service2").checked) services.push("Hair Blowout");
    if (document.getElementById("service3").checked) services.push("Protein Treatment");
    if (document.getElementById("service4").checked) services.push("Hair Coloring");
    if (document.getElementById("service5").checked) services.push("Botox Treatment");
    if (document.getElementById("service6").checked) services.push("Filler Treatment");
    if (document.getElementById("service7").checked) services.push("Moroccan Hammam");
    if (document.getElementById("service8").checked) services.push("Facial Cleansing");
    if (document.getElementById("service9").checked) services.push("Makeup");
    if (document.getElementById("service10").checked) services.push("Acrylic Nails");
    if (document.getElementById("service11").checked) services.push("Microblading");

    // بناء رسالة الحجز
    var message = "مرحبًا، أود تأكيد الحجز.%0A" +
                  "الاسم: " + name + "%0A" +
                 
                  "الخدمات المطلوبة: " + services.join(", ") + "%0A" +
                  "التاريخ: " + date;

    if (guests) {
        message += "%0Aعدد الأشخاص المرافقين: " + guests;
    }

    var whatsappURL =  "https://wa.me/905550550573?text=" + message;
    
    window.open(whatsappURL, "_blank");
}
document.addEventListener("DOMContentLoaded", function() {
    // Language translations
    const translations = {
        "en": {
            "title": "Welcome to Masaya Haneen",
            "text": "We are here to provide you with a unique beauty and care experience in a relaxing and luxurious atmosphere. Enjoy our professional services, including haircuts, styling, nail care, and more! Book your appointment now and treat yourself to moments of luxury and relaxation.",
            "aboutTitle": "About us:",
            "aboutText": "Our women's salon is dedicated to providing top-quality beauty services in a relaxing and luxurious environment. We specialize in haircuts, blow-drying, protein treatments, Moroccan baths, makeup, skincare, and Botox. Our team of professional beauty experts ensures that every client receives personalized care, leaving them feeling confident and radiant.\n\nAt Masaya Haneen, we believe that beauty is an experience, and we are here to make yours unforgettable. Visit us and indulge in the ultimate self-care journey.",
            "bookNow": "Book now"
        },
        "ar": {
            "title": "مرحبًا بكم في مسايا حنين",
            "text": "نحن هنا لنقدم لك تجربة فريدة من الجمال والعناية في أجواء مريحة وفاخرة. استمتع بخدماتنا الاحترافية، بما في ذلك قص وتصفيف الشعر، العناية بالأظافر، والمزيد! احجز موعدك الآن ودلل نفسك بلحظات من الفخامة والاسترخاء.",
            "aboutTitle": "من نحن",
            "aboutText": "صالوننا النسائي مكرس لتقديم خدمات تجميل عالية الجودة في بيئة مريحة وفاخرة. نحن متخصصون في قص الشعر، تجفيفه، علاجات البروتين، الحمامات المغربية، المكياج، العناية بالبشرة، والبوتوكس. يضمن فريقنا من خبراء التجميل المحترفين حصول كل عميلة على رعاية شخصية، مما يجعلها تشعر بالثقة والجمال.\n\nفي مسايا حنين، نؤمن بأن الجمال تجربة، ونحن هنا لجعل تجربتك لا تُنسى. زورينا واستمتعي برحلة العناية الذاتية المثالية.",
          "bookNow": "احجز الآن"
        },

        "tr": {
            "title": "Masaya Haneen'e Hoş Geldiniz",
            "text": "Sizi rahatlatıcı ve lüks bir atmosferde benzersiz bir güzellik ve bakım deneyimi ile buluşturuyoruz. Profesyonel hizmetlerimizin keyfini çıkarın: saç kesimi, şekillendirme, tırnak bakımı ve daha fazlası! Hemen randevunuzu alın ve kendinize lüks ve huzur dolu anlar armağan edin.",
            "aboutTitle": "Hakkımızda:",
            "aboutText": "Kadın salonumuz, rahat ve lüks bir ortamda en kaliteli güzellik hizmetlerini sunmaya adanmıştır. Saç kesimi, fön çekme, protein tedavileri, Fas banyoları, makyaj, cilt bakımı ve botoks konusunda uzmanız. Profesyonel güzellik uzmanlarımız, her müşterinin kişisel bakım almasını sağlar ve onları kendine güvenli ve ışıl ışıl hissettirir.\n\nMasaya Haneen'de, güzelliğin bir deneyim olduğuna inanıyoruz ve sizin deneyiminizi unutulmaz kılmak için buradayız. Bizi ziyaret edin ve kendinizi şımartın!",
            "bookNow": "Şimdi Rezervasyon Yap"
        }
    };

    // Get all language options
    const languageOptions = document.querySelectorAll(".language-option");

    // Change language when an option is clicked
    languageOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute("data-lang");

            // Update content dynamically
            document.getElementById("welcome-title").innerText = translations[selectedLang].title;
            document.getElementById("welcome-text").innerText = translations[selectedLang].text;
            document.getElementById("about-title").innerText = translations[selectedLang].aboutTitle;
            document.getElementById("about-text").innerText = translations[selectedLang].aboutText;
            document.getElementById("book-now-button").innerText = translations[selectedLang].bookNow; // Change Book Now button
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Language translations
    const translations = {
        "en": {
            "servicesTitle": "Our Services",
            "service-1": "Haircut",
            "service-2": "Hair Blowout",
            "service-3": "Protein Treatment",
            "service-4": "Hair Coloring",
            "service-5": "Botox Treatment",
            "service-6": "Filler Treatment",
            "service-7": "Moroccan Hammam",
            "service-8": "Facial Cleansing",
            "service-9": "Makeup",
            "service-10": "Acrylic Nails",
            "service-11": "Microblading"
        },
        "ar": {
            "servicesTitle": "خدماتنا",
            "service-1": "قص الشعر",
            "service-2": "سشوار ",
            "service-3": "بروتين",
            "service-4": "صبغة",
            "service-5": " بوتكس",
            "service-6": " فيلر",
            "service-7": "الحمام المغربي",
            "service-8": "تنظيف البشره",
            "service-9": "المكياج",
            "service-10": "الأظافر الأكريليك",
            "service-11": "الميكروبليدنج"
        },
        "tr": {
            "servicesTitle": "Hizmetlerimiz",
            "service-1": "Saç Kesimi",
            "service-2": "Fön",
            "service-3": "Protein Bakımı",
            "service-4": "Saç Boyama",
            "service-5": "Botoks Tedavisi",
            "service-6": "Dolgu Tedavisi",
            "service-7": "Fas Hamamı",
            "service-8": "Yüz Temizliği",
            "service-9": "Makyaj",
            "service-10": "Akrilik Tırnak",
            "service-11": "Mikroblading"
        }
    };

    // Get all language options
    const languageOptions = document.querySelectorAll(".language-option");

    // Change language when an option is clicked
    languageOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute("data-lang");

            // Update content dynamically
            document.getElementById("services-title").innerText = translations[selectedLang].servicesTitle;
            for (let i = 1; i <= 11; i++) {
                document.getElementById(`service-${i}`).innerText = translations[selectedLang][`service-${i}`];
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Language translations
    const translations = {
        "en": {
            "bookAppointment": "Book an appointment",
            "name": "Name",
            "phone": "Phone Number",
            "chooseServices": "Choose the services",
            "submit": "Submit",
            "haircut": "Haircut",
            "hairBlowout": "Hair Blowout",
            "proteinTreatment": "Protein Treatment",
            "hairColoring": "Hair Coloring",
            "botoxTreatment": "Botox Treatment",
            "fillerTreatment": "Filler Treatment",
            "moroccanHammam": "Moroccan Hammam",
            "facialCleansing": "Facial Cleansing",
            "makeup": "Makeup",
            "acrylicNails": "Acrylic Nails",
            "microblading": "Microblading",
            "date": "Date",
            "guests": "Number of people (optional)"
        },
        "ar": {
            "bookAppointment": "احجز موعدًا",
            "name": "الاسم",
            "phone": "رقم الهاتف",
            "chooseServices": "اختر الخدمات",
            "submit": "إرسال",
            "haircut": "قص الشعر",
            "hairBlowout": "سشوار ",
            "proteinTreatment": "بروتين",
            "hairColoring": "صبغة",
            "botoxTreatment": " بوتكس",
            "fillerTreatment": " فيلر",
            "moroccanHammam": "الحمام المغربي",
            "facialCleansing": "تنظيف البشره",
            "makeup": "مكياج",
            "acrylicNails": "أظافر أكريليك",
            "microblading": "الميكروبليدنج",
            "date": "التاريخ",
            "guests": "عدد الأشخاص (اختياري)"
        },
        "tr": {
            "bookAppointment": "Randevu Al",
            "name": "Ad",
            "phone": "Telefon Numarası",
            "chooseServices": "Hizmetleri Seçin",
            "submit": "Gönder",
            "haircut": "Saç Kesimi",
            "hairBlowout": "Saç Kurutma",
            "proteinTreatment": "Protein Tedavisi",
            "hairColoring": "Saç Boyama",
            "botoxTreatment": "Botoks Tedavisi",
            "fillerTreatment": "Dolgu Tedavisi",
            "moroccanHammam": "Fas Hamamı",
            "facialCleansing": "Yüz Temizliği",
            "makeup": "Makyaj",
            "acrylicNails": "Akrilik Tırnaklar",
            "microblading": "Mikroblading",
            "date": "Tarih",
            "guests": "Kişi Sayısı (isteğe bağlı)"
        }
    };

    // Function to change the language dynamically
    function changeLanguage(selectedLang) {
        document.getElementById("book-appointment-title").innerText = translations[selectedLang].bookAppointment;
        document.getElementById("name-label").innerText = translations[selectedLang].name;
        document.getElementById("phone-label").innerText = translations[selectedLang].phone;
        document.getElementById("choose-services-title").innerText = translations[selectedLang].chooseServices;
        document.getElementById("submit-button").innerText = translations[selectedLang].submit;

        // Change checkbox labels dynamically
        document.getElementById("service1-label").innerText = translations[selectedLang].haircut;
        document.getElementById("service2-label").innerText = translations[selectedLang].hairBlowout;
        document.getElementById("service3-label").innerText = translations[selectedLang].proteinTreatment;
        document.getElementById("service4-label").innerText = translations[selectedLang].hairColoring;
        document.getElementById("service5-label").innerText = translations[selectedLang].botoxTreatment;
        document.getElementById("service6-label").innerText = translations[selectedLang].fillerTreatment;
        document.getElementById("service7-label").innerText = translations[selectedLang].moroccanHammam;
        document.getElementById("service8-label").innerText = translations[selectedLang].facialCleansing;
        document.getElementById("service9-label").innerText = translations[selectedLang].makeup;
        document.getElementById("service10-label").innerText = translations[selectedLang].acrylicNails;
        document.getElementById("service11-label").innerText = translations[selectedLang].microblading;
        document.getElementById("date-label").innerText = translations[selectedLang].date;
        document.getElementById("guests-label").innerText = translations[selectedLang].guests;
    }

    // Language selection event
    document.querySelectorAll(".language-option").forEach(option => {
        option.addEventListener("click", function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute("data-lang");
            changeLanguage(selectedLang);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Language translations
    const translations = {
        "en": {
            "followUs": "FOLLOW US",
            // other translations
        },
        "ar": {
            "followUs": "تابعنا",
            // other translations
        },
        "tr": {
            "followUs": "BİZİ TAKİP EDİN",
            // other translations
        }
    };

    // Get all language options
    const languageOptions = document.querySelectorAll(".language-option");

    // Change language when an option is clicked
    languageOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute("data-lang");

            // Update content dynamically
            document.getElementById("follow-us-title").innerText = translations[selectedLang].followUs;
            // update other content here if needed
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Language translations
    const translations = {
        "en": {
            "language": "Language",
            // other translations
        },
        "ar": {
            "language": "اللغة",
            // other translations
        },
        "tr": {
            "language": "Dil",
            // other translations
        }
    };

    // Get all language options
    const languageOptions = document.querySelectorAll(".language-option");

    // Change language when an option is clicked
    languageOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute("data-lang");

            // Update content dynamically
            document.getElementById("language-text").innerText = translations[selectedLang].language;
            // update other content here if needed
        });
    });
});
