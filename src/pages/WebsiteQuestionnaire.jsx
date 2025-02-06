import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';

// קומפוננטות משנה
const DesignCard = ({ title, description, example, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
      isSelected ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'
    }`}
  >
    <div className="flex flex-col">
      <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={example} target="_blank" rel="noopener noreferrer">
      </a>
      <Link
        to={example}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        צפה באתר לדוגמה
      </Link>
    </div>
  </div>
);

const ColorSelect = ({ options, selected, onChange }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`p-4 rounded-lg cursor-pointer border-2 transition-all duration-300 ${
            selected.includes(option.value)
              ? 'border-primary'
              : 'border-gray-200'
          }`}
        >
          <div
            className="w-full h-8 rounded mb-2"
            style={{ backgroundColor: option.value }} // שימוש בצבע עצמו
          ></div>
          <span className="text-sm font-medium">{option.label}</span>
        </div>
      ))}
    </div>
  );

const InspirationalSites = ({ sites, onChange }) => (
  <div className="space-y-4">
    {sites.map((site, index) => (
      <div key={index} className="flex gap-2">
        <input
          type="url"
          value={site}
          onChange={(e) => {
            const newSites = [...sites];
            newSites[index] = e.target.value;
            onChange(newSites);
          }}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="הכנס כתובת אתר"
        />
        <button
          type="button"
          onClick={() => {
            const newSites = sites.filter((_, i) => i !== index);
            onChange(newSites);
          }}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
        >
          הסר
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={() => onChange([...sites, ''])}
      className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-colors"
    >
      + הוסף אתר להשראה
    </button>
  </div>
);

const SocialLinks = ({ links, onChange }) => (
  <div className="space-y-4">
    {Object.entries(links).map(([key, value]) => (
      <div key={key} className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          {key === 'other' ? 'קישור נוסף' : key}
        </label>
        <input
          type="url"
          value={value}
          onChange={(e) => onChange({ ...links, [key]: e.target.value })}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={`הכנס קישור ל${key}`}
        />
      </div>
    ))}
  </div>
);

const WebsiteQuestionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessInfo: {
      name: '',
      type: '',
      description: '',
    },
    websiteType: '',
    designPreferences: {
      styles: [],
      colors: [],
      inspirationalSites: [],
    },
    features: [],
    budget: '',
    timeline: '',
    socialLinks: {
      facebook: '',
      instagram: '',
      linkedin: '',
      twitter: '',
      other: '',
    },
    content: {
      hasLogo: false,
      hasContent: false,
      hasImages: false,
    },
    contactInfo: {
      name: '',
      email: '',
      phone: '',
    },
  });

  // הגדרות סגנונות עיצוב
  const designStyles = [
    {
      value: 'modern',
      title: 'מודרני ומינימליסטי',
      description: 'עיצוב נקי עם דגש על מרחב לבן וטיפוגרפיה',
      example: 'https://apple.com',
    },
    {
      value: 'elegant',
      title: 'מסורתי ואלגנטי',
      description: 'עיצוב קלאסי עם דגש על פרטים עדינים',
      example: 'https://cartier.com',
    },
    {
      value: 'colorful',
      title: 'צבעוני ודינמי',
      description: 'עיצוב חי עם צבעים נועזים ואנימציות',
      example: 'https://spotify.com',
    },
    {
      value: 'simple',
      title: 'נקי ופשוט',
      description: 'עיצוב פונקציונלי עם דגש על שימושיות',
      example: 'https://medium.com',
    },
  ];

  // הגדרות סכמות צבעים
  // הגדרות סכמות צבעים
  const colorSchemes = [
    { value: '#007bff', label: 'כחול - מקצועי ואמין' },
    { value: '#28a745', label: 'ירוק - טבעי וצומח' },
    { value: '#6f42c1', label: 'סגול - יוקרתי ויצירתי' },
    { value: '#dc3545', label: 'אדום - אנרגטי ונועז' },
    { value: '#6c757d', label: 'אפור - ניטרלי ומינימליסטי' },
    { value: '#ffc107', label: 'צהוב - אופטימי ושמח' },
    { value: '#17a2b8', label: 'טורקיז - רענן ומרגיע' },
    { value: '#fd7e14', label: 'כתום - חברותי ומלא חיים' },
    { value: '#e83e8c', label: 'ורוד - נשי ורומנטי' },
    { value: '#20c997', label: 'ירוק-כחלחל - מודרני ומתוחכם' },
    { value: '#124A36', label: 'חום-ירוק - צבע המותג' }, // צבע נוסף
    { value: '#000000', label: 'שחור - קלאסי ואלגנטי' }, // צבע נוסף
    { value: '#FFFFFF', label: 'לבן - נקי וטהור' }, // צבע נוסף
    { value: 'other', label: 'אחר' }, // קטגוריית "אחר"
  ];

// הגדרת השלבים
const steps = [
    {
      title: 'פרטי העסק',
      description: 'ספר לנו על העסק שלך',
      fields: [
        {
          type: 'text',
          label: 'שם העסק',
          key: 'businessInfo.name',
          required: true,
        },
        {
          type: 'select',
          label: 'תחום העסק',
          key: 'businessInfo.type',
          options: [
            'חנות/מסחר',
            'שירותים מקצועיים',
            'מסעדנות',
            'נדל"ן',
            'טכנולוגיה',
            'אחר',
          ],
          required: true,
        },
        {
          type: 'textarea',
          label: 'תיאור העסק',
          key: 'businessInfo.description',
          placeholder: 'ספר לנו קצת על העסק שלך והשירותים שאתה מציע...',
        },
      ],
    },
    {
      title: 'סוג האתר',
      description: 'איזה סוג אתר מתאים לצרכים שלך?',
      fields: [
        {
          type: 'radioCards',
          key: 'websiteType',
          options: [
            {
              value: 'landing',
              title: 'דף נחיתה',
              description: 'דף אחד המציג את העסק או מוצר ספציפי',
            },
            {
              value: 'business',
              title: 'אתר עסקי',
              description: 'אתר מלא עם מספר עמודים המציג את העסק והשירותים',
            },
            {
              value: 'ecommerce',
              title: 'חנות אונליין',
              description: 'אתר מסחר אלקטרוני עם אפשרויות רכישה',
            },
            {
              value: 'blog',
              title: 'בלוג/תוכן',
              description: 'אתר המתמקד בתוכן, כתבות ומאמרים',
            },
          ],
        },
      ],
    },
    {
      title: 'עיצוב',
      description: 'בחר את סגנון העיצוב והצבעים המועדפים עליך',
      fields: [
        {
          type: 'designCards',
          key: 'designPreferences.styles',
          options: designStyles,
          label: 'בחר סגנונות עיצוב',
        },
        {
          type: 'colorSelect',
          key: 'designPreferences.colors',
          options: colorSchemes,
          label: 'בחר צבעים מועדפים',
        },
        {
          type: 'inspirationalSites',
          key: 'designPreferences.inspirationalSites',
          label: 'אתרים להשראה',
          placeholder: 'הוסף כתובות אתרים לדוגמה',
        },
      ],
    },
    {
      title: 'פיצ׳רים',
      description: 'אילו פיצ׳רים תרצה שיהיו באתר?',
      fields: [
        {
          type: 'checkboxes',
          key: 'features',
          label: 'בחר פיצ׳רים',
          options: [
            { value: 'blog', label: 'בלוג' },
            { value: 'gallery', label: 'גלריית תמונות' },
            { value: 'contactForm', label: 'טופס יצירת קשר' },
            { value: 'newsletter', label: 'הרשמה לניוזלטר' },
            { value: 'socialMedia', label: 'קישורים לרשתות חברתיות' },
            { value: 'ecommerce', label: 'חנות אונליין' },
            { value: 'multilingual', label: 'תמיכה בריבוי שפות' },
            { value: 'map', label: 'מפה' },
            { value: 'chat', label: 'צ׳אט חי' },
            { value: 'login', label: 'אזור כניסה למשתמשים רשומים' },
          ],
        },
      ],
    },
    {
      title: 'תקציב וזמן',
      description: 'מהו התקציב המשוער ולוח הזמנים הרצוי?',
      fields: [
        {
          type: 'select',
          key: 'budget',
          label: 'תקציב משוער',
          options: [
            'עד 5,000 ש"ח',
            '5,000 - 10,000 ש"ח',
            '10,000 - 20,000 ש"ח',
            'מעל 20,000 ש"ח',
          ],
        },
        {
          type: 'select',
          key: 'timeline',
          label: 'לוח זמנים רצוי',
          options: [
            'עד חודש',
            '1-3 חודשים',
            '3-6 חודשים',
            'מעל 6 חודשים',
          ],
        },
      ],
    },
    {
      title: 'רשתות חברתיות',
      description: 'שתף אותנו בלינקים לרשתות החברתיות שלך',
      fields: [
        {
          type: 'socialLinks',
          key: 'socialLinks',
          label: 'קישורים לרשתות חברתיות',
        },
      ],
    },
    {
      title: 'חומרים וקבצים',
      description: 'האם יש לך את החומרים הבאים?',
      fields: [
        {
          type: 'boolean',
          key: 'content.hasLogo',
          label: 'לוגו',
        },
        {
          type: 'boolean',
          key: 'content.hasContent',
          label: 'תוכן כתוב',
        },
        {
          type: 'boolean',
          key: 'content.hasImages',
          label: 'תמונות',
        },
      ],
    },
    {
      title: 'פרטי התקשרות',
      description: 'איך ניצור איתך קשר?',
      fields: [
        {
          type: 'text',
          label: 'שם מלא',
          key: 'contactInfo.name',
          required: true,
        },
        {
          type: 'email',
          label: 'כתובת דוא"ל',
          key: 'contactInfo.email',
          required: true,
        },
        {
          type: 'tel',
          label: 'מספר טלפון',
          key: 'contactInfo.phone',
          required: true,
        },
      ],
    },
  ];
  
  const handleInputChange = (key, value) => {
    setFormData((prev) => {
      const keys = key.split('.');
      if (keys.length === 1) {
        return { ...prev, [key]: value };
      }
      const [parent, child] = keys;
      return {
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      };
    });
  };
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // כאן תהיה הלוגיקה לשליחת הטופס
      console.log('Submitting form:', formData);
      // const response = await fetch('/api/submit-questionnaire', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <div className="mb-6" key={field.key}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.label}{' '}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              value={
                field.key.includes('.')
                  ? formData[field.key.split('.')[0]][field.key.split('.')[1]]
                  : formData[field.key]
              }
              onChange={(e) => handleInputChange(field.key, e.target.value)}
              required={field.required}
              placeholder={field.placeholder}
            />
          </div>
        );
  
      case 'textarea':
        return (
          <div className="mb-6" key={field.key}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.label}
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary h-32"
              value={
                field.key.includes('.')
                  ? formData[field.key.split('.')[0]][field.key.split('.')[1]]
                  : formData[field.key]
              }
              onChange={(e) => handleInputChange(field.key, e.target.value)}
              placeholder={field.placeholder}
            />
          </div>
        );
  
      case 'designCards':
        return (
          <div key={field.key}>
            <label className="block text-gray-700 text-sm font-bold mb-4">
              {field.label}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {field.options.map((option) => (
                <DesignCard
                  key={option.value}
                  {...option}
                  isSelected={formData.designPreferences.styles?.includes(
                    option.value
                  )}
                  onClick={() => {
                    const current = formData.designPreferences.styles || [];
                    const updated = current.includes(option.value)
                      ? current.filter((v) => v !== option.value)
                      : [...current, option.value];
                    handleInputChange('designPreferences.styles', updated);
                  }}
                />
              ))}
            </div>
          </div>
        );
  
      case 'colorSelect':
        return (
          <div className="mt-8" key={field.key}>
            <label className="block text-gray-700 text-sm font-bold mb-4">
              {field.label}
            </label>
            <ColorSelect
              options={field.options}
              selected={formData.designPreferences.colors || []}
              onChange={(value) => {
                const current = formData.designPreferences.colors || [];
                const updated = current.includes(value)
                  ? current.filter((v) => v !== value)
                  : [...current, value];
                handleInputChange('designPreferences.colors', updated);
              }}
            />
          </div>
        );
  
      case 'radioCards':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={field.key}>
            {field.options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleInputChange(field.key, option.value)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.websiteType === option.value
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        );
      case 'inspirationalSites':
        return (
          <div className="mt-8" key={field.key}>
            <label className="block text-gray-700 text-sm font-bold mb-4">
              {field.label}
            </label>
            <InspirationalSites
              sites={formData.designPreferences.inspirationalSites}
              onChange={(sites) =>
                handleInputChange('designPreferences.inspirationalSites', sites)
              }
            />
          </div>
        );
  
      case 'socialLinks':
        return (
          <div className="mt-8" key={field.key}>
            <label className="block text-gray-700 text-sm font-bold mb-4">
              {field.label}
            </label>
            <SocialLinks
              links={formData.socialLinks}
              onChange={(links) => handleInputChange('socialLinks', links)}
            />
          </div>
        );
  
        case 'checkboxes':
            return (
              <div className="mt-8" key={field.key}>
                <label className="block text-gray-700 text-sm font-bold mb-4">
                  {field.label}
                </label>
                <div className="space-y-2">
                  {field.options.map((option) => (
                    <div key={option.value} className="flex items-center gap-x-4"> {/* הוספתי פה */}
                      <input
                        type="checkbox"
                        id={option.value}
                        checked={formData.features?.includes(option.value)}
                        onChange={() => {
                          const current = formData.features || [];
                          const updated = current.includes(option.value)
                            ? current.filter((v) => v !== option.value)
                            : [...current, option.value];
                          handleInputChange(field.key, updated);
                        }}
                        className="text-primary focus:ring-primary"
                      />
                      <label htmlFor={option.value} className="ml-4 text-gray-700"> {/* הוספתי פה */}
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );
  
            case 'select':
                return (
                  <div className="mb-6" key={field.key}>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      {field.label}{' '}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <select
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData[field.key] || ''} // התיקון כאן
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      required={field.required}
                    >
                      <option value="" disabled>
                        בחר
                      </option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                );
                 
            
  
                case 'boolean':
                    return (
                      <div className="mt-8" key={field.key}>
                        <label className="block text-gray-700 text-sm font-bold mb-4">
                          {field.label}
                        </label>
                        <div className="flex items-center gap-4">
                        <label className="inline-flex items-center space-x-2">
                          <input
                            type="radio"
                            className="form-radio text-primary h-4 w-4"
                            value="true"
                            checked={formData[field.key] === true}
                            onChange={() => handleInputChange(field.key, true)}
                          />
                          <span className="text-gray-700">כן</span>
                        </label>
                        <label className="inline-flex items-center space-x-2">
                          <input
                            type="radio"
                            className="form-radio text-primary h-4 w-4"
                            value="false"
                            checked={formData[field.key] === false}
                            onChange={() => handleInputChange(field.key, false)}
                          />
                          <span className="text-gray-700">לא</span>
                        </label>
                      </div>
                      </div>
                    );
            
      default:
        return null;
    }
  };
  
  return (
    <>
      <Helmet>
        <title>בניית אתר | שאלון אפיון</title>
        <meta name="description" content="שאלון לאפיון צרכי האתר שלך" />
      </Helmet>
  
      <div className="min-h-screen bg-[#FAF9F6] py-12">
        <div className="max-w-3xl mx-auto px-4">
          {/* סרגל התקדמות */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    index <= currentStep ? 'text-primary' : 'text-gray-300'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index < currentStep
                        ? 'bg-primary text-white'
                        : index === currentStep
                        ? 'border-2 border-primary'
                        : 'border-2 border-gray-300'
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="text-xs mt-1 hidden md:block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 h-1 bg-gray-200 w-full"></div>
              <div
                className="absolute top-0 h-1 bg-primary transition-all duration-300"
                style={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
  
          {/* תוכן הטופס */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-heebo">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600 mb-8 font-assistant">
              {steps[currentStep].description}
            </p>
  
            <form onSubmit={handleSubmit}>
              {steps[currentStep].fields.map((field) => (
                <div key={field.key}>{renderField(field)}</div>
              ))}
  
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
                    currentStep === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-primary hover:bg-primary/10'
                  }`}
                  disabled={currentStep === 0}
                >
                  <ChevronRight className="w-5 h-5 ml-1" />
                  הקודם
                </button>
  
                {currentStep === steps.length - 1 ? (
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    שלח
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center px-6 py-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                  >
                    הבא
                    <ChevronLeft className="w-5 h-5 mr-1" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  };
  
  export default WebsiteQuestionnaire;