/**
 * Global Book of Spiritual Records - Letterhead Studio Engine
 * Pure client-side auto-pagination and layout generator
 */

(function () {
  'use strict';

  // --- Design Configurations ---
  const DESIGN_DEFAULTS = {
    standard: {
      marginTop: 30,
      marginBottom: 13,
      marginLeft: 7,
      marginRight: 7
    },
    sidebar: {
      marginTop: 30,
      marginBottom: 13,
      marginLeft: 21, // clears the left "Our Focus Areas" column
      marginRight: 7
    }
  };

  // --- Initial State ---
  const state = {
    text: '',
    currentDesignImage: 'images/lh1_standard_en.png',
    isSidebar: false,
    marginTop: DESIGN_DEFAULTS.standard.marginTop,
    marginBottom: DESIGN_DEFAULTS.standard.marginBottom,
    marginLeft: DESIGN_DEFAULTS.standard.marginLeft,
    marginRight: DESIGN_DEFAULTS.standard.marginRight,
    fontFamily: "'EB Garamond', Georgia, serif",
    fontSize: 15,
    fontColor: '#111111',
    lineHeight: 1.55,
    paraSpacing: 12,
    textAlign: 'justify',
    isBold: false,
    isItalic: false,
    isIndent: false,
    showGuides: false,
    zoom: 1.0,
    pageCount: 1
  };

  // --- DOM Elements ---
  const letterTextInput = document.getElementById('letterTextInput');
  const pagesHost = document.getElementById('pagesHost');
  const headerPageCount = document.getElementById('headerPageCount');
  const statsPageCount = document.getElementById('statsPageCount');
  const wordCount = document.getElementById('wordCount');
  const charCount = document.getElementById('charCount');

  // Font controls
  const fontFamilySelect = document.getElementById('fontFamilySelect');
  const fontSizeRange = document.getElementById('fontSizeRange');
  const fontSizeNumber = document.getElementById('fontSizeNumber');
  const fontSizeDisplay = document.getElementById('fontSizeDisplay');
  const fontColorPicker = document.getElementById('fontColorPicker');
  const fontColorDisplay = document.getElementById('fontColorDisplay');
  const colorPresets = document.getElementById('colorPresets');
  const lineHeightRange = document.getElementById('lineHeightRange');
  const lineHeightDisplay = document.getElementById('lineHeightDisplay');
  const paragraphSpacingRange = document.getElementById('paragraphSpacingRange');
  const paraSpacingDisplay = document.getElementById('paraSpacingDisplay');
  const alignButtons = document.querySelectorAll('#alignToggleGroup .btn-toggle');
  const checkFontBold = document.getElementById('checkFontBold');
  const checkFontItalic = document.getElementById('checkFontItalic');
  const checkFirstLineIndent = document.getElementById('checkFirstLineIndent');

  // Margin controls
  const checkShowGuides = document.getElementById('checkShowGuides');
  const marginTopRange = document.getElementById('marginTopRange');
  const marginTopDisplay = document.getElementById('marginTopDisplay');
  const marginBottomRange = document.getElementById('marginBottomRange');
  const marginBottomDisplay = document.getElementById('marginBottomDisplay');
  const marginLeftRange = document.getElementById('marginLeftRange');
  const marginLeftDisplay = document.getElementById('marginLeftDisplay');
  const marginRightRange = document.getElementById('marginRightRange');
  const marginRightDisplay = document.getElementById('marginRightDisplay');
  const btnResetMargins = document.getElementById('btnResetMargins');

  // Design controls
  const designCards = document.querySelectorAll('.design-card');
  const extraDesignsSelect = document.getElementById('extraDesignsSelect');
  const customLetterheadInput = document.getElementById('customLetterheadInput');

  // Quick Tools
  const btnInsertDate = document.getElementById('btnInsertDate');
  const btnInsertRef = document.getElementById('btnInsertRef');
  const btnLoadSampleEn = document.getElementById('btnLoadSampleEn');
  const btnLoadSampleHi = document.getElementById('btnLoadSampleHi');
  const btnClearText = document.getElementById('btnClearText');
  const btnPrint = document.getElementById('btnPrint');
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const zoomLevelDisplay = document.getElementById('zoomLevel');
  const previewScrollContainer = document.getElementById('previewContainer');

  // --- Sample Texts ---
  const SAMPLE_EN = `Ref: GBSR/2026/HON-402
Date: 14 September 2026

To,
The Honorable Awardee & Distinguished Patron,

Subject: Formal Citation & Recognition – Global Book of Spiritual Records

Respected Sir / Madam,

It brings us immense pride and profound joy to convey that following a thorough and scholarly review of your exceptional lifetime contributions, the Academic & Selection Board of the Global Book of Spiritual Records has unanimously resolved to honor you with this special Citation of Excellence.

Our institution remains steadfastly committed to preserving, documenting, and honoring extraordinary achievements that foster global peace, spiritual elevation, and universal humanity. Through your sustained dedication and selfless service, you have exemplified the timeless wisdom of our ancient traditions while inspiring countless individuals across India and the international fraternity.

The formal felicitation ceremony and presentation of the honorary record citation will take place during our upcoming Grand Conclave. We cordially invite you and your esteemed family members to grace this auspicious occasion as our Guest of Honor.

Kindly confirm your acceptance and arrival details to the Secretariat at the earliest to facilitate the protocol arrangements.

May peace, radiant health, and divine blessings remain with you always.

With warm personal regards,

Dr. Omprakash B Tiwari
CEO & Editor-In-Chief
Global Book of Spiritual Records`;

  const SAMPLE_HI = `संदर्भ क्र.: GBSR/2026/PR-108
दिनांक: 14 सितम्बर 2026

प्रति,
परम आदरणीय महानुभाव,

विषय: 'ग्लोबल बुक ऑफ स्पिरिचुअल रिकॉर्ड्स' की ओर से मानद प्रशस्ति पत्र।

सादर प्रणाम,

अत्यंत हर्ष एवं गौरव का विषय है कि 'ग्लोबल बुक ऑफ स्पिरिचुअल रिकॉर्ड्स' की उच्चस्तरीय चयन समिति द्वारा आपके उत्कृष्ट, ऐतिहासिक एवं आध्यात्मिक योगदान का संज्ञान लेते हुए आपको मानद प्रशस्ति एवं विशेष अलंकरण प्रदान करने का निर्णय लिया गया है।

विश्व स्तर पर आध्यात्मिक धरोहरों के सूचीकरण, संवर्धन एवं संरक्षण की इस पावन यात्रा में आपकी अविस्मरणीय साधना समाज के लिए एक अनुपम प्रेरणास्रोत है। "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः" के ध्येय वाक्य को साकार करते हुए आपने भारतीय संस्कृति और मानवीय मूल्यों को विश्व पटल पर स्थापित किया है।

इस गौरवमयी उपलब्धि के उपलक्ष्य में आयोजित होने वाले भव्य राष्ट्रीय सम्मेलन में आपको सादर आमंत्रित किया जाता है। कृपया अपनी स्वीकृति पत्र सचिवालय को प्रेषित करने की कृपा करें।

शुभकामनाओं सहित,

डॉ. ओमप्रकाश बी. तिवारी
मुख्य संपादक एवं मुख्य कार्यकारी अधिकारी (CEO)
ग्लोबल बुक ऑफ स्पिरिचुअल रिकॉर्ड्स`;

  // --- Sample Text Initialization ---
  state.text = SAMPLE_EN;
  letterTextInput.value = SAMPLE_EN;

  // --- Measurement & Pagination Engine ---
  /**
   * The page width is 768px, height is 1152px (Aspect Ratio 2:3, matching 1024x1536)
   */
  const PAGE_WIDTH = 768;
  const PAGE_HEIGHT = 1152;

  function updateTypographyCssVars() {
    document.documentElement.style.setProperty('--doc-font-family', state.fontFamily);
    document.documentElement.style.setProperty('--doc-font-size', `${state.fontSize}px`);
    document.documentElement.style.setProperty('--doc-font-color', state.fontColor);
    document.documentElement.style.setProperty('--doc-line-height', state.lineHeight);
    document.documentElement.style.setProperty('--doc-para-spacing', `${state.paraSpacing}px`);
    document.documentElement.style.setProperty('--doc-align', state.textAlign);
    document.documentElement.style.setProperty('--doc-font-weight', state.isBold ? '700' : '400');
    document.documentElement.style.setProperty('--doc-font-style', state.isItalic ? 'italic' : 'normal');
    document.documentElement.style.setProperty('--doc-text-indent', state.isIndent ? '2em' : '0px');

    document.documentElement.style.setProperty('--margin-top', `${state.marginTop}%`);
    document.documentElement.style.setProperty('--margin-bottom', `${state.marginBottom}%`);
    document.documentElement.style.setProperty('--margin-left', `${state.marginLeft}%`);
    document.documentElement.style.setProperty('--margin-right', `${state.marginRight}%`);
  }

  /**
   * Creates a single letterhead page DOM node
   */
  function createPageNode(pageNumber, totalPages) {
    const wrapper = document.createElement('div');
    wrapper.className = 'page-card-wrapper';

    const page = document.createElement('div');
    page.className = 'letterhead-page';
    if (state.showGuides) {
      page.classList.add('show-guides');
    }
    page.style.backgroundImage = `url('${state.currentDesignImage}')`;

    const indicator = document.createElement('div');
    indicator.className = 'page-indicator-pill';
    indicator.textContent = `Page ${pageNumber} of ${totalPages}`;
    page.appendChild(indicator);

    const textArea = document.createElement('div');
    textArea.className = 'letter-text-container';

    const bodyContent = document.createElement('div');
    bodyContent.className = 'letter-content-body';
    textArea.appendChild(bodyContent);

    page.appendChild(textArea);
    wrapper.appendChild(page);
    return { wrapper, page, textArea, bodyContent };
  }

  /**
   * Core Auto-Pagination Algorithm:
   * Accurately breaks paragraphs and text across pages by measuring DOM overflow.
   */
  function paginateAndRender() {
    updateTypographyCssVars();

    const rawText = state.text;
    updateCounts(rawText);

    // If text is empty, render 1 empty page
    if (!rawText.trim()) {
      pagesHost.innerHTML = '';
      const { wrapper } = createPageNode(1, 1);
      pagesHost.appendChild(wrapper);
      updatePageBadges(1);
      return;
    }

    // Split raw text into manual section blocks (supports manual '---' or '[pagebreak]')
    const manualSections = rawText.split(/\n\s*---\s*\n|\n\s*\[pagebreak\]\s*\n/i);

    // Temporary container to perform layout computation
    pagesHost.innerHTML = '';

    const createdPages = [];
    let currentPageIndex = 1;
    let { wrapper: curWrapper, page: curPage, textArea: curTextArea, bodyContent: curBody } = createPageNode(currentPageIndex, 1);
    pagesHost.appendChild(curWrapper);
    createdPages.push({ wrapper: curWrapper, page: curPage, textArea: curTextArea, bodyContent: curBody });

    // Target max height for printable area on a page (in px)
    const availableHeightPx = PAGE_HEIGHT * (1 - (state.marginTop + state.marginBottom) / 100);

    for (let s = 0; s < manualSections.length; s++) {
      if (s > 0) {
        // Explicit page break requested
        currentPageIndex++;
        const next = createPageNode(currentPageIndex, 1);
        pagesHost.appendChild(next.wrapper);
        createdPages.push(next);
        curPage = next.page;
        curTextArea = next.textArea;
        curBody = next.bodyContent;
      }

      const sectionText = manualSections[s];
      // Break section into paragraphs (separated by blank lines or individual newlines)
      const paragraphs = sectionText.split(/\n\n+/);

      for (let p = 0; p < paragraphs.length; p++) {
        let paraText = paragraphs[p];
        if (!paraText.trim()) continue;

        // Try adding the paragraph to current page
        const pElem = document.createElement('p');
        pElem.textContent = paraText;
        curBody.appendChild(pElem);

        // Check if adding this paragraph caused overflow
        if (curTextArea.scrollHeight > curTextArea.clientHeight + 2) {
          // It overflowed! We need to either split this paragraph or move it to next page
          curBody.removeChild(pElem);

          // Let's check if the current page already had other content
          const hasPriorContent = curBody.children.length > 0;

          // Split paragraph by words to fill remaining space on current page
          const words = paraText.split(/(\s+)/); // Preserves spaces
          let low = 0;
          let high = words.length;
          let bestFitIndex = 0;

          // If current page is already full or prior content exists, test if at least 1 word can fit
          if (hasPriorContent) {
            const testP = document.createElement('p');
            curBody.appendChild(testP);

            while (low <= high) {
              const mid = Math.floor((low + high) / 2);
              testP.textContent = words.slice(0, mid).join('');

              if (curTextArea.scrollHeight <= curTextArea.clientHeight + 2) {
                bestFitIndex = mid;
                low = mid + 1;
              } else {
                high = mid - 1;
              }
            }

            curBody.removeChild(testP);
          }

          // If we can fit at least a couple of words/a line, split it
          if (bestFitIndex > 4) {
            const firstPartText = words.slice(0, bestFitIndex).join('').trimEnd();
            const remainderText = words.slice(bestFitIndex).join('').trimStart();

            if (firstPartText) {
              const part1P = document.createElement('p');
              part1P.textContent = firstPartText;
              curBody.appendChild(part1P);
            }

            // Move remainder to a new page
            currentPageIndex++;
            const next = createPageNode(currentPageIndex, 1);
            pagesHost.appendChild(next.wrapper);
            createdPages.push(next);
            curPage = next.page;
            curTextArea = next.textArea;
            curBody = next.bodyContent;

            // Put remainder on new page
            if (remainderText) {
              // Re-inject remainder into paragraph loop
              paragraphs.splice(p + 1, 0, remainderText);
            }
          } else {
            // Nothing or very little fit; move entire paragraph to new page
            currentPageIndex++;
            const next = createPageNode(currentPageIndex, 1);
            pagesHost.appendChild(next.wrapper);
            createdPages.push(next);
            curPage = next.page;
            curTextArea = next.textArea;
            curBody = next.bodyContent;

            // Append paragraph to the fresh new page
            const newPElem = document.createElement('p');
            newPElem.textContent = paraText;
            curBody.appendChild(newPElem);

            // In rare case where a single paragraph is larger than an ENTIRE page, it will overflow and split on next iteration
            if (curTextArea.scrollHeight > curTextArea.clientHeight + 2) {
              curBody.removeChild(newPElem);
              // Split huge paragraph across pages
              paragraphs.splice(p, 1, ...splitLongParagraph(paraText, 100));
              p--; // re-process
            }
          }
        }
      }
    }

    // Update total page count in indicators
    const totalPages = createdPages.length;
    state.pageCount = totalPages;
    createdPages.forEach((cp, idx) => {
      const pill = cp.page.querySelector('.page-indicator-pill');
      if (pill) {
        pill.textContent = `Page ${idx + 1} of ${totalPages}`;
      }
    });

    updatePageBadges(totalPages);
  }

  function splitLongParagraph(text, chunkWords) {
    const words = text.split(/(\s+)/);
    const chunks = [];
    let current = [];
    let wordCount = 0;
    for (let i = 0; i < words.length; i++) {
      current.push(words[i]);
      if (words[i].trim()) wordCount++;
      if (wordCount >= chunkWords) {
        chunks.push(current.join(''));
        current = [];
        wordCount = 0;
      }
    }
    if (current.length > 0) chunks.push(current.join(''));
    return chunks;
  }

  function updateCounts(text) {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    wordCount.textContent = words.toLocaleString();
    charCount.textContent = chars.toLocaleString();
  }

  function updatePageBadges(count) {
    headerPageCount.textContent = count;
    statsPageCount.textContent = count;
    const mobilePageBadge = document.getElementById('mobilePageBadge');
    if (mobilePageBadge) mobilePageBadge.textContent = count;
  }

  // --- Debounced Input Handler ---
  let debounceTimeout = null;
  function schedulePagination() {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      paginateAndRender();
    }, 60);
  }

  // --- Event Listeners ---

  // Textarea input
  letterTextInput.addEventListener('input', (e) => {
    state.text = e.target.value;
    schedulePagination();
  });

  // Tab navigation
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      const pane = document.getElementById(tabId);
      if (pane) pane.classList.add('active');
    });
  });

  // Font Family
  fontFamilySelect.addEventListener('change', (e) => {
    state.fontFamily = e.target.value;
    paginateAndRender();
  });

  // Font Size
  function updateFontSize(val) {
    val = parseFloat(val);
    if (isNaN(val)) return;
    state.fontSize = val;
    fontSizeRange.value = val;
    fontSizeNumber.value = val;
    fontSizeDisplay.textContent = `${val} px`;
    paginateAndRender();
  }
  fontSizeRange.addEventListener('input', (e) => updateFontSize(e.target.value));
  fontSizeNumber.addEventListener('input', (e) => updateFontSize(e.target.value));

  // Font Color
  function updateFontColor(hex) {
    state.fontColor = hex;
    fontColorPicker.value = hex;
    fontColorDisplay.textContent = hex;
    // Highlight preset dot if matches
    document.querySelectorAll('.color-dot').forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('data-color').toLowerCase() === hex.toLowerCase());
    });
    paginateAndRender();
  }
  fontColorPicker.addEventListener('input', (e) => updateFontColor(e.target.value));
  colorPresets.addEventListener('click', (e) => {
    const dot = e.target.closest('.color-dot');
    if (dot) {
      const color = dot.getAttribute('data-color');
      updateFontColor(color);
    }
  });

  // Line Height
  lineHeightRange.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    state.lineHeight = val;
    lineHeightDisplay.textContent = val.toFixed(2);
    paginateAndRender();
  });

  // Paragraph Spacing
  paragraphSpacingRange.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    state.paraSpacing = val;
    paraSpacingDisplay.textContent = `${val} px`;
    paginateAndRender();
  });

  // Text Alignment
  alignButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alignButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.textAlign = btn.getAttribute('data-align');
      paginateAndRender();
    });
  });

  // Font Bold, Italic, Indent
  checkFontBold.addEventListener('change', (e) => {
    state.isBold = e.target.checked;
    paginateAndRender();
  });
  checkFontItalic.addEventListener('change', (e) => {
    state.isItalic = e.target.checked;
    paginateAndRender();
  });
  checkFirstLineIndent.addEventListener('change', (e) => {
    state.isIndent = e.target.checked;
    paginateAndRender();
  });

  // Show Guides
  checkShowGuides.addEventListener('change', (e) => {
    state.showGuides = e.target.checked;
    document.querySelectorAll('.letterhead-page').forEach(page => {
      page.classList.toggle('show-guides', state.showGuides);
    });
  });

  // Margins Range Listeners
  marginTopRange.addEventListener('input', (e) => {
    state.marginTop = parseFloat(e.target.value);
    marginTopDisplay.textContent = `${state.marginTop}%`;
    paginateAndRender();
  });
  marginBottomRange.addEventListener('input', (e) => {
    state.marginBottom = parseFloat(e.target.value);
    marginBottomDisplay.textContent = `${state.marginBottom}%`;
    paginateAndRender();
  });
  marginLeftRange.addEventListener('input', (e) => {
    state.marginLeft = parseFloat(e.target.value);
    marginLeftDisplay.textContent = `${state.marginLeft}%`;
    paginateAndRender();
  });
  marginRightRange.addEventListener('input', (e) => {
    state.marginRight = parseFloat(e.target.value);
    marginRightDisplay.textContent = `${state.marginRight}%`;
    paginateAndRender();
  });

  // Reset Margins button
  btnResetMargins.addEventListener('click', () => {
    const defaults = state.isSidebar ? DESIGN_DEFAULTS.sidebar : DESIGN_DEFAULTS.standard;
    applyMargins(defaults);
    paginateAndRender();
  });

  function applyMargins(m) {
    state.marginTop = m.marginTop;
    state.marginBottom = m.marginBottom;
    state.marginLeft = m.marginLeft;
    state.marginRight = m.marginRight;

    marginTopRange.value = m.marginTop;
    marginTopDisplay.textContent = `${m.marginTop}%`;
    marginBottomRange.value = m.marginBottom;
    marginBottomDisplay.textContent = `${m.marginBottom}%`;
    marginLeftRange.value = m.marginLeft;
    marginLeftDisplay.textContent = `${m.marginLeft}%`;
    marginRightRange.value = m.marginRight;
    marginRightDisplay.textContent = `${m.marginRight}%`;
  }

  // Design Selection Cards
  designCards.forEach(card => {
    card.addEventListener('click', () => {
      designCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const imgPath = card.getAttribute('data-image');
      const isSidebar = card.getAttribute('data-sidebar') === 'true';

      state.currentDesignImage = imgPath;
      state.isSidebar = isSidebar;

      // Automatically adjust default margins based on whether design has sidebar
      const defaults = isSidebar ? DESIGN_DEFAULTS.sidebar : DESIGN_DEFAULTS.standard;
      applyMargins(defaults);

      if (extraDesignsSelect) extraDesignsSelect.value = '';
      paginateAndRender();
    });
  });

  // Extra Designs Select
  if (extraDesignsSelect) {
    extraDesignsSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (!val) return;
      designCards.forEach(c => c.classList.remove('active'));

      const opt = e.target.selectedOptions[0];
      const isSidebar = opt.getAttribute('data-sidebar') === 'true';

      state.currentDesignImage = val;
      state.isSidebar = isSidebar;

      const defaults = isSidebar ? DESIGN_DEFAULTS.sidebar : DESIGN_DEFAULTS.standard;
      applyMargins(defaults);
      paginateAndRender();
    });
  }

  // Custom Letterhead File Upload
  customLetterheadInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      state.currentDesignImage = event.target.result;
      designCards.forEach(c => c.classList.remove('active'));
      if (extraDesignsSelect) extraDesignsSelect.value = '';
      paginateAndRender();
    };
    reader.readAsDataURL(file);
  });

  // Quick Tools: Date, Ref, Samples, Clear
  btnInsertDate.addEventListener('click', () => {
    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = `Date: ${today.toLocaleDateString('en-GB', options)}\n`;
    insertTextAtCursor(dateStr);
  });

  btnInsertRef.addEventListener('click', () => {
    const randomRef = Math.floor(100 + Math.random() * 900);
    const year = new Date().getFullYear();
    const refStr = `Ref: GBSR/${year}/SEC-${randomRef}\n`;
    insertTextAtCursor(refStr);
  });

  function insertTextAtCursor(str) {
    const start = letterTextInput.selectionStart;
    const end = letterTextInput.selectionEnd;
    const current = letterTextInput.value;
    letterTextInput.value = current.substring(0, start) + str + current.substring(end);
    letterTextInput.selectionStart = letterTextInput.selectionEnd = start + str.length;
    letterTextInput.focus();
    state.text = letterTextInput.value;
    schedulePagination();
  }

  btnLoadSampleEn.addEventListener('click', () => {
    state.text = SAMPLE_EN;
    letterTextInput.value = SAMPLE_EN;
    paginateAndRender();
  });

  btnLoadSampleHi.addEventListener('click', () => {
    state.text = SAMPLE_HI;
    letterTextInput.value = SAMPLE_HI;
    // Set Devanagari font for best readability
    state.fontFamily = "'Noto Sans Devanagari', Arial, sans-serif";
    fontFamilySelect.value = "'Noto Sans Devanagari', Arial, sans-serif";
    paginateAndRender();
  });

  btnClearText.addEventListener('click', () => {
    if (confirm('Clear all letter text?')) {
      state.text = '';
      letterTextInput.value = '';
      paginateAndRender();
    }
  });

  // Zoom Controls
  btnZoomIn.addEventListener('click', () => {
    if (state.zoom < 1.6) {
      state.zoom = Math.min(1.6, +(state.zoom + 0.1).toFixed(1));
      applyZoom();
    }
  });

  btnZoomOut.addEventListener('click', () => {
    if (state.zoom > 0.3) {
      state.zoom = Math.max(0.3, +(state.zoom - 0.1).toFixed(1));
      applyZoom();
    }
  });

  const previewViewport = document.getElementById('previewViewport');
  const btnZoomFit = document.getElementById('btnZoomFit');

  function autoFitZoom() {
    const vpWidth = (previewViewport && previewViewport.clientWidth) || window.innerWidth;
    const padding = window.innerWidth <= 600 ? 24 : 48;
    const targetWidth = Math.max(260, vpWidth - padding);
    let fitScale = targetWidth / PAGE_WIDTH;
    fitScale = Math.max(0.32, Math.min(1.4, fitScale));
    state.zoom = +fitScale.toFixed(2);
    applyZoom();
  }

  if (btnZoomFit) {
    btnZoomFit.addEventListener('click', autoFitZoom);
  }

  function applyZoom() {
    document.documentElement.style.setProperty('--preview-zoom', state.zoom);
    if (zoomLevelDisplay) {
      zoomLevelDisplay.textContent = `${Math.round(state.zoom * 100)}%`;
    }
  }

  // Mobile Bottom Navigation Switcher
  const appLayout = document.querySelector('.app-layout');
  const btnMobileTabEdit = document.getElementById('btnMobileTabEdit');
  const btnMobileTabPreview = document.getElementById('btnMobileTabPreview');
  const btnMobilePrint = document.getElementById('btnMobilePrint');

  if (appLayout) {
    appLayout.classList.add('mobile-view-editor');
  }

  if (btnMobileTabEdit && btnMobileTabPreview) {
    btnMobileTabEdit.addEventListener('click', () => {
      if (appLayout) {
        appLayout.classList.remove('mobile-view-preview');
        appLayout.classList.add('mobile-view-editor');
      }
      btnMobileTabEdit.classList.add('active');
      btnMobileTabPreview.classList.remove('active');
    });

    btnMobileTabPreview.addEventListener('click', () => {
      if (appLayout) {
        appLayout.classList.remove('mobile-view-editor');
        appLayout.classList.add('mobile-view-preview');
      }
      btnMobileTabPreview.classList.add('active');
      btnMobileTabEdit.classList.remove('active');
      // On mobile, auto-fit zoom when switching to preview
      if (window.innerWidth <= 900) {
        autoFitZoom();
      }
    });
  }

  if (btnMobilePrint) {
    btnMobilePrint.addEventListener('click', () => {
      window.print();
    });
  }

  // Print / Save as PDF
  btnPrint.addEventListener('click', () => {
    window.print();
  });

  // Keyboard shortcut: Ctrl + P / Cmd + P triggers clean print
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      window.print();
    }
  });

  // Handle Resize
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth <= 900 && appLayout && appLayout.classList.contains('mobile-view-preview')) {
        autoFitZoom();
      }
    }, 150);
  });

  // Initial Render on page load
  applyMargins(DESIGN_DEFAULTS.standard);
  paginateAndRender();

  // Initial auto-zoom on small screens
  if (window.innerWidth <= 900) {
    autoFitZoom();
  }

})();
