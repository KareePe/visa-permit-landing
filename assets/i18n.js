/* ==========================================================================
   Visa & Work Permit — translations (TH / EN)
   - I18N_EN: English for static HTML marked with data-i18n / data-i18n-attr.
     Thai stays in index.html and is read from the page on load.
   - CONTENT: data for the sections rendered by JS, per language.
   ========================================================================== */

const I18N_EN = {
  // Meta / accessibility
  'meta.title': 'Visa &amp; Work Permit Services in Thailand | FDI Accounting &amp; Advisory',
  'meta.desc': 'Visa, work permit, renewal and document legalization services for foreigners in Thailand — by FDI Accounting & Advisory, part of FDI Group, since 2003.',
  'a11y.loading': 'Loading',
  'a11y.lang': 'Select language',
  'a11y.top': 'Back to top',
  'a11y.close': 'Close',

  // Navigation & shared CTAs
  'nav.services': 'Services',
  'nav.why': 'Why Us',
  'nav.work': 'Our Work',
  'nav.faq': 'FAQ',
  'nav.contact': 'Contact',
  'cta.line': 'Consult via LINE',
  'cta.call': 'Call Us',

  // Hero
  'hero.title': 'Visas and work permits in Thailand, made easy',
  'hero.imgAlt': 'FDI consultants advising on visas and work permits',
  'hero.intro': 'FDI Accounting &amp; Advisory Co., Ltd., part of FDI Group, has advised Thai and foreign businesses since 2003. We consult on and handle visas, work permits, renewals and documents for foreigners — and take care of your business end to end, from accounting and tax to payroll and HR.',
  'hero.tagline': 'Initial consultation • Document assessment • Clear next steps',
  'hero.follow': 'Follow us',

  // Services
  'svc.title': 'Visa &amp; Work Permit Consulting Services',
  'svc.lead': 'End-to-end consulting directly from our specialists — for foreigners working in Thailand and for Thais who want to work abroad.',
  'svc.imgAlt': 'FDI Visa & Work Permit services, all in one place: every type of visa, work permit applications and consulting',
  'svc.unsure': 'Not sure which service you need?',
  'svc.talk': 'Talk to our specialists on LINE',
  'svc.choose': 'Choose the service that fits you',
  'svc.inTitle': 'Services for foreigners<br>working in Thailand',
  'svc.outTitle': 'Services for Thais<br>working abroad',
  'svc.docs': 'Documents we handle',
  'svc.consult': 'Ask about this',

  // Why us
  'why.title': 'Why choose us',
  'why.lead': 'We give you clear pricing and process steps before we start, and stay with you all the way to delivery.',
  'why.k1': 'Service you can count on',
  'why.k2': 'from a professional team',
  'why.k3': '“Always happy to advise”',

  // Process
  'proc.title': 'Our Visa &amp; Work Permit Process',
  'proc.lead': '8 steps — from consultation and quotation, through preparing and submitting documents, to final delivery.',
  'proc.imgAlt': 'The 8-step Visa & Work Permit process',
  'proc.note1': 'Processing time depends on how ready your documents are.',
  'proc.note2': 'FDI will advise on and pre-check your documents so everything runs smoothly.',
  'proc.fn1': '* Visa processing time depends on the visa type',
  'proc.fn2': '** Work Permit processing time depends on the applicant’s nationality',

  // Our work
  'work.title': 'Our Work',
  'work.lead': 'Examples of work and documents from our services.',

  // FAQ
  'faq.title': 'Frequently Asked Questions',
  'faq.lead': 'Common questions about visas and work permits. Can’t find your answer? Ask our team directly.',
  'faq.more': 'Ask us more on LINE',

  // Final CTA
  'contact.title': 'Not sure which visa you need?',
  'contact.lead': 'Let our team give you an initial assessment, with the right documents and steps for your case.',
  'contact.note': 'Talk to our team for an initial assessment',

  // Footer
  'footer.desc': 'Consulting and processing for visas, work permits and documents for foreigners in Thailand.',
  'footer.addr': '<span class="text-white font-semibold">Head Office</span><br>41 Lertpanya Building, 14th Floor, Room 1403-1405, Soi Lertpanya, Si Ayutthaya Road, Thanon Phaya Thai, Ratchathewi, Bangkok 10400',
  'footer.hours1': 'Mon – Fri · 08:30 – 17:00',
  'footer.hours2': 'Sat – Sun · Closed'
};

const CONTENT = {
  th: {
    SVC_MAIN: [
      ['briefcase', 'วีซ่าทำงานและใบอนุญาตทำงาน', 'บริการขอ Visa & Work Permit สำหรับชาวต่างชาติที่เดินทางมาทำงานในประเทศไทย'],
      ['plane-takeoff', 'วีซ่าสำหรับคนไทยไปต่างประเทศ', 'บริการขอวีซ่าสำหรับคนไทยที่เดินทางไปต่างประเทศ'],
      ['refresh-cw', 'ต่ออายุวีซ่า / ใบอนุญาตทำงาน', 'สำหรับชาวต่างชาติที่กำลังทำงานอยู่ในประเทศไทย'],
      ['stamp', 'ตัวแทนขอรับรองเอกสาร', 'ติดต่อขอรับรองเอกสารจากกรมการกงสุล / สถานทูต / ทนาย'],
      ['scale', 'ที่ปรึกษาด้านเอกสาร', 'แก้ไขหรือเปลี่ยนแปลงเอกสาร โดยปฏิบัติตามข้อกฎหมายอย่างถูกต้อง'],
      ['messages-square', 'ที่ปรึกษาแบบครบวงจร', 'ให้คำปรึกษาด้านการยื่นขอวีซ่าและใบอนุญาตทำงานแบบครบวงจรในที่เดียว']
    ],
    SVC_INBOUND: [
      'บริการให้คำปรึกษา แนะนำโดยผู้เชี่ยวชาญด้านวีซ่าและใบอนุญาตทำงาน',
      'บริการจัดเตรียมเอกสารและดำเนินการขอวีซ่าประเภทต่าง ๆ สำหรับชาวต่างชาติ',
      'บริการยื่นขอใบอนุญาตการทำงานในประเทศไทย',
      'บริการเป็นตัวแทนยื่นต่ออายุวีซ่าและใบอนุญาตการทำงาน',
      'บริการเป็นตัวแทนติดต่อขอรับรองเอกสารจากกรมการกงสุล กระทรวงการต่างประเทศ',
      'บริการเป็นตัวแทนติดต่อขอรับรองเอกสารจากสถานทูต',
      'บริการติดต่อขอรับรองเอกสารจากทนาย'
    ],
    SVC_OUTBOUND: [
      'ช่วยเหลือการจัดเตรียมเอกสารขอวีซ่าในต่างประเทศ',
      'ประสานงานด้านการรับรองเอกสารต่าง ๆ เพื่อนำไปใช้ในต่างประเทศ ทั้งสำหรับการขอใบอนุญาตการทำงาน ลดหย่อนภาษี จดจัดตั้งบริษัท ฯลฯ'
    ],
    SVC_DOCS: ['ใบรับรองผลตรวจประวัติอาชญากรรม','หนังสือเดินทาง','วุฒิการศึกษา','หนังสือรับรองประสบการณ์การทำงาน','ผลตรวจสุขภาพ','สูติบัตร','ทะเบียนสมรส','ใบสำคัญการเปลี่ยนชื่อตัว / ชื่อสกุล','หนังสือรับรองบริษัท'],
    WHY: [
      ['users-round','ให้คำปรึกษาด้วยทีมงานที่มีประสบการณ์','ทีมที่ปรึกษาในเครือ FDI Group ดูแลผู้ประกอบการทั้งไทยและต่างชาติมาตั้งแต่ปี 2546 และสื่อสารได้ 4 ภาษา: ไทย อังกฤษ ญี่ปุ่น และจีน'],
      ['hand-coins','ค่าบริการเหมาะสม คุ้มค่า','แจ้งราคาชัดเจนก่อนเริ่มใช้บริการ เลือกได้ทั้งแบบรายครั้งหรือแพ็กเกจตามความต้องการของแต่ละกรณี'],
      ['timer','รวดเร็ว ประหยัดเวลา และมีประสิทธิภาพ','แนะนำและตรวจสอบเอกสารตั้งแต่เบื้องต้น เพื่อให้การยื่นเรื่องเป็นไปอย่างราบรื่นและประหยัดเวลาในการดำเนินงาน']
    ],
    STEPS: [
      ['messages-square','ร่วมพูดคุยและปรึกษา','จากทีมที่ปรึกษา'],
      ['receipt-text','ส่งใบเสนอราคา','ลูกค้าตอบรับการดำเนินงาน'],
      ['folder-open','รวบรวมเอกสาร','ทำแบบฟอร์มยื่นขอ Visa / Work Permit'],
      ['pen-line','ส่งเอกสารให้ลูกค้า','กรรมการบริษัทลงนาม พร้อมประทับตรา'],
      ['file-search','ตรวจสอบ','ความถูกต้องของเอกสาร'],
      ['landmark','ดำเนินการยื่นเอกสาร','ที่ สนง.ตรวจคนเข้าเมือง หรือกรมจัดหางาน'],
      ['calendar-clock','รอผลพิจารณา','', ['Visa 15–30 วันทำการ*', 'Work Permit 7–15 วันทำการ**']],
      ['handshake','ดำเนินการเสร็จสิ้น','และบริการให้คำปรึกษาอื่น ๆ เพิ่มเติม']
    ],
    WORKS: [
      ['1581553673739-c4906b5d0de8','WORK PERMIT','ใบอนุญาตทำงาน'],
      ['1655722725332-9925c96dd627','NON-B VISA','วีซ่าทำงาน / ธุรกิจ'],
      ['1454496406107-dc34337da8d6','ELITE VISA','วีซ่าพำนักระยะยาว'],
      ['1553697388-94e804e2f0f6','RETIREMENT','วีซ่าเกษียณอายุ'],
      ['1654163601053-ea0362be3429','MARRIAGE','วีซ่าสำหรับแต่งงาน'],
      ['1532188142562-df556b861e6a','TEACHER','วีซ่าทำงานครู'],
      ['1654163600133-452eb7274426','90 DAYS','แจ้งอยู่เกิน 90 วัน'],
      ['1655722724447-2d2a3071e7f8','RE-ENTRY','Re-entry Permit'],
      ['1530469525856-cf37954301f7','CONSULTATION','ให้คำปรึกษาลูกค้า'],
      ['1654163601023-88f6ba22b2c7','EXTENSION','ต่ออายุวีซ่า']
    ],
    FAQ: [
      ['วีซ่าทำงาน (Non-B) กับ Work Permit ต่างกันอย่างไร?', 'วีซ่า (Non-B) เป็นการอนุญาตให้ "เดินทางเข้าประเทศ" ออกโดยกระทรวงการต่างประเทศหรือสำนักงานตรวจคนเข้าเมือง ส่วนใบอนุญาตทำงาน (Work Permit) เป็นใบอนุญาตให้ "ทำงานอย่างถูกต้องตามกฎหมาย" ในประเทศไทย ออกโดยกระทรวงแรงงาน (กรมการจัดหางาน) โดยต้องมีวีซ่าก่อนจึงจะขอ Work Permit ได้'],
      ['FDI ให้บริการอะไรบ้างเกี่ยวกับ Visa & Work Permit?', 'ให้บริการตั้งแต่ให้คำปรึกษา แนะนำการเตรียมเอกสาร การวางแผนดำเนินงาน การพาติดต่อเจ้าหน้าที่ และให้คำแนะนำอย่างตรงจุดที่จะช่วยให้คุณประหยัดเวลาในการดำเนินงาน ครบทุกด้านที่เกี่ยวกับ Visa & Work Permit'],
      ['หาก Work Permit หมดอายุ ต้องทำอย่างไร?', 'หากพบว่าหมดอายุต้องดำเนินการทันที เช่น ให้ชาวต่างชาติหยุดทำงานชั่วคราว และเตรียมเอกสารพร้อมดำเนินการต่ออายุทันที หากกังวลในส่วนนี้สามารถปรึกษาผู้เชี่ยวชาญของ FDI A&A ได้ทันที เพื่อช่วยไขข้อสงสัยและลดปัญหาต่าง ๆ ซึ่งอาจมีค่าปรับ รวมถึงการหมดสภาพของ Work Permit'],
      ['มีบริการทุกวันหรือไม่?', 'บริษัทเปิดให้บริการทุกวันจันทร์ – ศุกร์ เวลา 08.30 – 17.00 น. และปิดทำการวันเสาร์และอาทิตย์'],
      ['ให้บริการสื่อสาร ประสานงาน ได้กี่ภาษา?', 'สามารถให้บริการได้ 4 ภาษา คือ ภาษาไทย ภาษาอังกฤษ ภาษาญี่ปุ่น และภาษาจีน'],
      ['ค่าบริการครั้งละเท่าไหร่?', 'ให้บริการทั้งแบบรายครั้งและแบบแพ็กเกจ เนื่องจากเอกสารและการดำเนินการของแต่ละบุคคลไม่เหมือนกัน สามารถสอบถามราคาและโปรโมชั่นได้ที่เจ้าหน้าที่โดยตรง']
    ],
  },
  en: {
    SVC_MAIN: [
      ['briefcase', 'Work Visa & Work Permit', 'Visa & Work Permit applications for foreigners coming to work in Thailand'],
      ['plane-takeoff', 'Visas for Thais Going Abroad', 'Visa applications for Thais traveling overseas'],
      ['refresh-cw', 'Visa / Work Permit Renewal', 'For foreigners currently working in Thailand'],
      ['stamp', 'Document Legalization Agent', 'Document certification with the Department of Consular Affairs, embassies and lawyers'],
      ['scale', 'Document Advisory', 'Amending or updating documents in full compliance with the law'],
      ['messages-square', 'One-Stop Consulting', 'End-to-end advice on visa and work permit applications, all in one place']
    ],
    SVC_INBOUND: [
      'Consulting and guidance from visa and work permit specialists',
      'Document preparation and applications for all types of visas for foreigners',
      'Work permit applications in Thailand',
      'Acting as your agent for visa and work permit renewals',
      'Acting as your agent for document legalization at the Department of Consular Affairs, Ministry of Foreign Affairs',
      'Acting as your agent for document legalization at embassies',
      'Document certification by a lawyer'
    ],
    SVC_OUTBOUND: [
      'Help preparing documents for visa applications abroad',
      'Coordinating document legalization for use overseas — for work permits, tax deductions, company registration and more'
    ],
    SVC_DOCS: ['Criminal record certificate','Passport','Educational certificates','Employment certificate','Medical certificate','Birth certificate','Marriage certificate','Name / surname change certificate','Company affidavit'],
    WHY: [
      ['users-round','Advice from an experienced team','FDI Group\'s advisors have served Thai and foreign businesses since 2003 and work in 4 languages: Thai, English, Japanese and Chinese'],
      ['hand-coins','Fair, good-value fees','Clear pricing before we start — choose per-service or a package to suit your case'],
      ['timer','Fast, time-saving and efficient','We guide and check your documents from the start, so your application runs smoothly and saves you time']
    ],
    STEPS: [
      ['messages-square','Discuss & consult','with our advisory team'],
      ['receipt-text','Quotation sent','the client approves the work'],
      ['folder-open','Gather documents','and prepare the Visa / Work Permit forms'],
      ['pen-line','Documents sent to the client','for director signature and company seal'],
      ['file-search','Review','documents checked for accuracy'],
      ['landmark','Submit documents','at the Immigration Office or Department of Employment'],
      ['calendar-clock','Await approval','', ['Visa 15–30 business days*', 'Work Permit 7–15 business days**']],
      ['handshake','Completed','plus further consulting services']
    ],
    WORKS: [
      ['1581553673739-c4906b5d0de8','WORK PERMIT','Work permit'],
      ['1655722725332-9925c96dd627','NON-B VISA','Work / business visa'],
      ['1454496406107-dc34337da8d6','ELITE VISA','Long-term stay visa'],
      ['1553697388-94e804e2f0f6','RETIREMENT','Retirement visa'],
      ['1654163601053-ea0362be3429','MARRIAGE','Marriage visa'],
      ['1532188142562-df556b861e6a','TEACHER','Teacher work visa'],
      ['1654163600133-452eb7274426','90 DAYS','90-day reporting'],
      ['1655722724447-2d2a3071e7f8','RE-ENTRY','Re-entry Permit'],
      ['1530469525856-cf37954301f7','CONSULTATION','Client consultation'],
      ['1654163601023-88f6ba22b2c7','EXTENSION','Visa extension']
    ],
    FAQ: [
      ['What is the difference between a work visa (Non-B) and a Work Permit?', 'A Non-B visa allows you to "enter the country" and is issued by the Ministry of Foreign Affairs or the Immigration Bureau. A Work Permit allows you to "work legally" in Thailand and is issued by the Ministry of Labour (Department of Employment). You need the visa before you can apply for a Work Permit.'],
      ['What Visa & Work Permit services does FDI offer?', 'Everything from consulting, document preparation and planning to accompanying you to the authorities — with targeted advice that saves you time, covering every aspect of Visa & Work Permit.'],
      ['What should I do if my Work Permit has expired?', 'Act immediately: the foreign employee should stop working temporarily while documents are prepared for renewal right away. If you are concerned, talk to FDI A&A\'s specialists to clear up any questions and avoid problems such as fines or the Work Permit becoming invalid.'],
      ['Are you open every day?', 'We are open Monday – Friday, 08:30 – 17:00, and closed on Saturdays and Sundays.'],
      ['Which languages can you communicate in?', 'We serve clients in 4 languages: Thai, English, Japanese and Chinese.'],
      ['How much do your services cost?', 'We offer both per-service and package pricing. Since every case and set of documents is different, please contact our team directly for prices and promotions.']
    ]
  }
};

// FAQPage structured data — used by assets/script.js (current language) and scripts/build-seo.mjs (static TH)
const faqJsonLd = lang => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: lang,
  mainEntity: CONTENT[lang].FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
});
