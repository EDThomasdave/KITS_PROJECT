const translations = {
  "en": { 
    "how_to_apply": "How to Apply", 
    "apply_here": "Apply Here", 
    "college_name": "Kavikulguru Institute of Technology and Science",
    "guidance": "Under the guidance of",
    "problem_note": "The villagers of Bhojapur are largely unaware of the various government schemes available for their welfare. Due to lack of proper information and guidance, they are unable to apply and take benefits.",
    "solution_note": "To solve this issue, we have developed a dedicated website that provides details of all major schemes in English and Marathi, along with direct application links, so that villagers can easily understand the schemes and apply without difficulty.",
    "bhojapur_note": "BHOJAPUR GRAMPANCHAYAT",
    "solution": "Solution",
    "click_scheme": "Click on any scheme to learn more about its purpose and how to apply."
  },
  "mr": { 
    "how_to_apply": "अर्ज कसा करावा", 
    "apply_here": "इथे अर्ज करा", 
    "college_name": "कविकुलगुरू तंत्रज्ञान व विज्ञान संस्था",
    "guidance": "मार्गदर्शनाखाली",
    "problem_note": "भोजापूरचे ग्रामस्थ त्यांच्या कल्याणासाठी उपलब्ध असलेल्या विविध सरकारी योजनांबद्दल मोठ्या प्रमाणात अनभिज्ञ आहेत. योग्य माहिती आणि मार्गदर्शनाच्या अभावामुळे ते अर्ज करू शकत नाहीत आणि लाभ घेऊ शकत नाहीत.",
    "solution_note": "या समस्येचे निराकरण करण्यासाठी आम्ही एक समर्पित वेबसाइट विकसित केली आहे जी सर्व प्रमुख योजनांची माहिती इंग्रजी आणि मराठीत देते, तसेच थेट अर्ज दुवे देते, जेणेकरून ग्रामस्थांना योजना सहज समजू शकतील आणि अर्ज करता येईल.",
    "bhojapur_note": "भोजापूर ग्रामपंचायत",
    "solution": "उपाय",
    "click_scheme": "प्रत्येक योजनेचे उद्दिष्ट आणि अर्ज कसा करावा, हे जाणून घेण्यासाठी कोणत्याही योजनेवर क्लिक करा."
  }
};


const schemesData = [
  {
    id: "nrlm",
    name: { en: "National Rural Livelihood Mission (NRLM)", mr: "राष्ट्रीय ग्रामीण आजीविका मिशन (NRLM)" },
    purpose: { en: "Supports self-employment and SHGs for rural poor.", mr: "ग्रामीण गरीबांसाठी स्वयंरोजगार व महिला बचत गटांना मदत." },
    apply: { en: "Apply through SHGs, Gram Panchayat or District Rural Development Agency.", mr: "स्वयं-सहायता गट, ग्रामपंचायत किंवा जिल्हा ग्रामीण विकास यंत्रणेद्वारे अर्ज करा." },
    link: "https://aajeevika.gov.in/",
    img: "https://img.icons8.com/color/96/group.png"
  },
  {
    id: "skill_india",
    name: { en: "Skill India", mr: "कौशल्य भारत (स्किल इंडिया)" },
    purpose: { en: "Vocational training for youth to improve employability.", mr: "तरुणांना रोजगारक्षम बनवण्यासाठी व्यावसायिक प्रशिक्षण." },
    apply: { en: "Register on Skill India Digital Hub (PMKVY) with Aadhaar.", mr: "आधार वापरून स्किल इंडिया डिजिटल हब (PMKVY) वर नोंदणी करा." },
    link: "https://skillindia.gov.in",
    img: "https://img.icons8.com/color/96/training.png"
  },
  {
    id: "aatmanirbhar",
    name: { en: "Aatmanirbhar Bharat", mr: "आत्मनिर्भर भारत" },
    purpose: { en: "Support for self-reliance through loans, subsidies, MSME help.", mr: "कर्ज, अनुदाने व MSME मदतीद्वारे स्वावलंबनाला पाठबळ." },
    apply: { en: "Apply for loans/subsidies at banks or Gram Panchayat as per scheme.", mr: "बँक किंवा ग्रामपंचायतीत संबंधित योजनेनुसार कर्ज/अनुदानासाठी अर्ज करा." },
    link: "https://aatmanirbharbharat.mygov.in/",
    img: "https://img.icons8.com/color/96/india.png"
  },
  {
    id: "mgnrega",
    name: { en: "MGNREGA", mr: "मनरेगा" },
    purpose: { en: "Guarantees 100 days wage employment per year to rural adults.", mr: "ग्रामीण प्रौढांसाठी दरवर्षी १०० दिवस मजुरी रोजगाराची हमी." },
    apply: { en: "Register for job card at Gram Panchayat with Aadhaar and photo.", mr: "आधार व फोटोसह ग्रामपंचायतीत जॉब कार्डसाठी नोंदणी करा." },
    link: "https://nrega.nic.in",
    img: "https://img.icons8.com/color/96/worker-male.png"
  },
  {
    id: "ayushman_bharat",
    name: { en: "Ayushman Bharat (PMJAY)", mr: "आयुष्मान भारत (PMJAY)" },
    purpose: { en: "Free health insurance up to ₹5 lakh per family.", mr: "प्रति कुटुंब ₹५ लाखांपर्यंत मोफत आरोग्य विमा." },
    apply: { en: "Check eligibility at pmjay.gov.in or CSC using Aadhaar/Ration Card.", mr: "आधार/रेशन कार्ड वापरून pmjay.gov.in किंवा CSC वर पात्रता तपासा." },
    link: "https://pmjay.gov.in",
    img: "https://img.icons8.com/color/96/heart-health.png"
  },
  {
    id: "jal_jeevan",
    name: { en: "Jal Jeevan Mission", mr: "जल जीवन मिशन" },
    purpose: { en: "Tap water supply for every rural household.", mr: "प्रत्येक ग्रामीण घरासाठी नळाद्वारे पाणीपुरवठा." },
    apply: { en: "Apply via local Gram Panchayat office.", mr: "स्थानिक ग्रामपंचायतीमार्फत अर्ज करा." },
    link: "https://jaljeevanmission.gov.in/",
    img: "https://img.icons8.com/color/96/water.png"
  },
  {
    id: "pmay",
    name: { en: "Pradhan Mantri Awas Yojana (PMAY)", mr: "पंतप्रधान आवास योजना (PMAY)" },
    purpose: { en: "Affordable housing for rural and urban poor families.", mr: "शहरी व ग्रामीण गरीब कुटुंबांसाठी परवडणारी घरे." },
    apply: { en: "Apply online via PMAY portal or offline at CSC/Gram Panchayat with Aadhaar, income, and address proof.", mr: "PMAY पोर्टलवर ऑनलाइन किंवा CSC/ग्रामपंचायत येथे आधार, उत्पन्न व पत्त्याचा पुरावा देऊन अर्ज करा." },
    link: "https://pmaymis.gov.in",
    img: "https://img.icons8.com/color/96/home--v1.png"
  },
  {
    id: "swachh_bharat",
    name: { en: "Swachh Bharat Mission", mr: "स्वच्छ भारत मिशन" },
    purpose: { en: "Improves sanitation and provides toilets in villages.", mr: "गावांमध्ये स्वच्छता सुधारते व शौचालये उपलब्ध करून देते." },
    apply: { en: "Apply for toilet construction subsidy via Gram Panchayat or SBM portal.", mr: "शौचालय बांधकाम अनुदानासाठी ग्रामपंचायत किंवा SBM पोर्टलवर अर्ज करा." },
    link: "https://swachhbharatmission.gov.in",
    img: "https://img.icons8.com/color/96/toilet.png"
  },
  {
    id: "beti_bachao",
    name: { en: "Beti Bachao Beti Padhao", mr: "बेटी बचाओ बेटी पढाओ" },
    purpose: { en: "Promotes protection and education of girl children.", mr: "मुलींचे संरक्षण व शिक्षणाला प्रोत्साहन." },
    apply: { en: "Linked to Sukanya Samriddhi Yojana. Open SSA account in girl’s name at bank/post office.", mr: "सुकन्या समृद्धी योजनेशी जोडलेली. मुलीच्या नावाने बँक/पोस्ट ऑफिसमध्ये SSA खाते उघडा." },
    link: "https://wcd.nic.in/schemes/beti-bachao-beti-padhao-scheme",
    img: "https://img.icons8.com/color/96/girl.png"
  },
  {
    id: "sarva_shiksha",
    name: { en: "Sarva Shiksha Abhiyan", mr: "सर्व शिक्षा अभियान" },
    purpose: { en: "Free and compulsory education for children 6–14 years.", mr: "६–१४ वर्षांच्या मुलांसाठी मोफत व सक्तीचे शिक्षण." },
    apply: { en: "Enroll child in nearest government school with age proof.", mr: "जवळच्या शाळेत वयाचा पुरावा देऊन मुलाला प्रवेश द्या." },
    link: "https://samagra.education.gov.in/",
    img: "https://img.icons8.com/color/96/school.png"
  }
];

const headerTitle = document.querySelector('header h1');
const introText = document.querySelector('main p');
const schemesList = document.getElementById('schemes-list');
const langButtons = document.querySelectorAll('.lang-switcher button');
const docTitle = document.querySelector('title');
let currentLang = 'en';


function updateStaticText(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  docTitle.textContent = docTitle.getAttribute(`data-${lang}`);
}


function renderSchemes(lang) {
  schemesList.innerHTML = '';
  schemesData.forEach(scheme => {
    const card = document.createElement('div');
    card.className = 'scheme-card';
    card.innerHTML = `
      <img src="${scheme.img}" alt="${scheme.name[lang]} Logo">
      <h2>${scheme.name[lang]}</h2>
      <p>${scheme.purpose[lang]}</p>
      <div class="details">
        <h3>${translations[lang].how_to_apply}</h3>
        <p>${scheme.apply[lang]}</p>
        <a href="${scheme.link}" target="_blank">${translations[lang].apply_here}</a>
      </div>
    `;
    card.addEventListener('click', () => {
      const details = card.querySelector('.details');
      details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
    schemesList.appendChild(card);
  });
}


langButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentLang = button.dataset.lang;
    updateStaticText(currentLang);
    renderSchemes(currentLang);
  });
});


updateStaticText(currentLang);
renderSchemes(currentLang);