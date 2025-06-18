

// translations.js
const translations = {
  'en': {
    'home': 'Home',
    'about': 'About',
    'services': 'Services',
    'contact': 'Contact',
    'find_car': 'Find your next car with us',
    'leading_marketplace': 'Leading online automotive marketplace in Cambodia',
    'sell': 'Sell',
    'buy': 'Buy',
    'exchange': 'Exchange',
    'all_vehicles': 'All kinds of vehicles are available',
    'great_deals': 'We offer great deals with trust and honesty',
    'work_fast': 'Work fast from anywhere 🚗📲',
    'access_platform': 'Access our platform anytime, anywhere with our mobile app',
    'chat_buy_sell': '💬 Chat, buy, sell, and exchange cars on the go',
    'download_now': '📥 Download now',
    'need_help': 'Need help? Reach us at',
    'newsletter': 'NEWSLETTER',
    'configurator': 'CONFIGURATOR',
    'locate_dealer': 'LOCATE DEALER',
    'download_brochure': 'DOWNLOAD BROCHURE',
    'company': 'Company',
    'help_center': 'Help center',
    'legal': 'Legal',
    'download': 'Download',
    'privacy_policy': 'Privacy Policy',
    'licensing': 'Licensing',
    'terms_conditions': 'Terms & Conditions',
    'ios': 'iOS',
    'android': 'Android',
    'windows': 'Windows',
    'macos': 'MacOS'
  },
  'zh': {
    'home': '首页',
    'about': '关于我们',
    'services': '服务',
    'contact': '联系我们',
    'find_car': '与我们寻找您的下一辆车',
    'leading_marketplace': '柬埔寨领先的在线汽车市场',
    'sell': '出售',
    'buy': '购买',
    'exchange': '交换',
    'all_vehicles': '提供各种车辆',
    'great_deals': '我们以诚信提供优惠',
    'work_fast': '随时随地快速工作 🚗📲',
    'access_platform': '随时随地通过手机应用访问我们的平台',
    'chat_buy_sell': '💬 聊天、购买、出售和交换汽车',
    'download_now': '📥 立即下载',
    'need_help': '需要帮助？联系我们',
    'newsletter': '通讯',
    'configurator': '配置器',
    'locate_dealer': '查找经销商',
    'download_brochure': '下载手册',
    'company': '公司',
    'help_center': '帮助中心',
    'legal': '法律',
    'download': '下载',
    'privacy_policy': '隐私政策',
    'licensing': '许可',
    'terms_conditions': '条款和条件',
    'ios': 'iOS',
    'android': '安卓',
    'windows': 'Windows',
    'macos': 'MacOS'
  },
  'de': {
    'home': 'Startseite',
    'about': 'Über uns',
    'services': 'Dienstleistungen',
    'contact': 'Kontakt',
    'find_car': 'Finden Sie Ihr nächstes Auto bei uns',
    'leading_marketplace': 'Führender Online-Automarkt in Kambodscha',
    'sell': 'Verkaufen',
    'buy': 'Kaufen',
    'exchange': 'Austauschen',
    'all_vehicles': 'Alle Arten von Fahrzeugen verfügbar',
    'great_deals': 'Wir bieten großartige Angebote mit Vertrauen und Ehrlichkeit',
    'work_fast': 'Schnell von überall arbeiten 🚗📲',
    'access_platform': 'Greifen Sie jederzeit und überall mit unserer mobilen App auf unsere Plattform zu',
    'chat_buy_sell': '💬 Chatten, kaufen, verkaufen und Autos tauschen',
    'download_now': '📥 Jetzt herunterladen',
    'need_help': 'Brauchen Sie Hilfe? Kontaktieren Sie uns unter',
    'newsletter': 'NEWSLETTER',
    'configurator': 'KONFIGURATOR',
    'locate_dealer': 'HÄNDLER FINDEN',
    'download_brochure': 'BROSCHÜRE HERUNTERLADEN',
    'company': 'Unternehmen',
    'help_center': 'Hilfezentrum',
    'legal': 'Rechtliches',
    'download': 'Download',
    'privacy_policy': 'Datenschutzrichtlinie',
    'licensing': 'Lizenzierung',
    'terms_conditions': 'Geschäftsbedingungen',
    'ios': 'iOS',
    'android': 'Android',
    'windows': 'Windows',
    'macos': 'MacOS'
  }
};

// language-switcher.js
document.addEventListener('DOMContentLoaded', function() {
  // Set default language (can be based on browser language or user preference)
  let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
  
  // Language display names
  const languageNames = {
    'en': 'English',
    'zh': '中文',
    'de': 'Deutsch'
  };
  
  // Function to change language
  function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
        
        // For input placeholders
        if (element.tagName === 'INPUT' && element.getAttribute('placeholder')) {
          element.setAttribute('placeholder', translations[lang][key]);
        }
      }
    });
    
    // Update active language button style
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('bg-blue-100', 'text-blue-800', 'dark:bg-gray-600', 'dark:text-white');
    });
    
    const activeBtn = document.querySelector(`.lang-${lang === 'en' ? 'us' : lang === 'zh' ? 'ch' : 'gm'}`);
    if (activeBtn) {
      activeBtn.classList.add('bg-blue-100', 'text-blue-800', 'dark:bg-gray-600', 'dark:text-white');
    }
    
    // Update current language display
    const currentLanguageDisplay = document.getElementById('current-language');
    if (currentLanguageDisplay) {
      currentLanguageDisplay.textContent = languageNames[lang];
    }
    
    // Store preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }
  
  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.classList.contains('lang-us') ? 'en' : 
                   this.classList.contains('lang-ch') ? 'zh' :
                   this.classList.contains('lang-gm') ? 'de' : 'en';
      changeLanguage(lang);
      
      // Close dropdown if open
      const dropdown = document.getElementById('dropdown-search-city');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
    });
  });
  
  // Initialize with saved language or default
  changeLanguage(currentLanguage);
});

