/* Creatory Contact Widget v1.1 | Approved Webflow widget | 2026-11-05
 * GA4: creatory_contact_click / contact_method=viber|phone|request
 * Do not remove the existing Ringostat call tracking or Creatio scripts.
 */
(function () {
  const WIDGET_MARKUP = `<div id="creatory-contact-widget"><section
    class="ccw-panel"
    id="ccw-panel"
    aria-label="Способи зв'язку"
    aria-hidden="true"
    inert
  >
    <div class="ccw-header">
      <h2 class="ccw-title">Мережа права</h2>
      <button class="ccw-close"
              type="button"
              aria-label="Закрити меню">×</button>
    </div>

    <p class="ccw-description">
      Потрібна юридична консультація?
      Оберіть зручний спосіб зв'язку.
    </p>

    <a class="ccw-action"
       href="https://ul.tc/0YMdNq"
       target="_blank"
       rel="noopener noreferrer"
       data-ccw-action="viber">
      <svg viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8
        8.5 8.5 0 0 1-7.6 4.7
        8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7
        a8.4 8.4 0 0 1-.9-3.8
        8.5 8.5 0 0 1 4.7-7.6
        8.4 8.4 0 0 1 3.8-.9h.5
        a8.5 8.5 0 0 1 8 8v.5z"/>
      </svg>
      <span>
        <strong>Написати у Viber</strong>
        <small>Зв'язатися через бота</small>
      </span>
    </a>

    <a class="ccw-action"
       href="tel:+380672709159"
       data-ccw-action="phone">
      <svg viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2
        19.8 19.8 0 0 1-8.6-3.1
        19.5 19.5 0 0 1-6-6
        19.8 19.8 0 0 1-3.1-8.7
        A2 2 0 0 1 4.1 2h3
        a2 2 0 0 1 2 1.7l.5 3
        a2 2 0 0 1-.6 2.1L7.7 10
        a16 16 0 0 0 6.3 6.3l1.2-1.3
        a2 2 0 0 1 2.1-.6l3 .5
        a2 2 0 0 1 1.7 2z"/>
      </svg>
      <span>
        <strong>Зателефонувати</strong>
        <small>+38 (067) 27 09 159</small>
      </span>
    </a>

    <button class="ccw-action"
            type="button"
            data-ccw-action="request">
      <svg viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2"/>
        <path d="M9 3.5h6M9 11h6M9 15h4"/>
      </svg>
      <span>
        <strong>Залишити заявку</strong>
        <small>Юридична консультація</small>
      </span>
    </button>

    <div class="ccw-footer">
      Ми допоможемо знайти рішення
    </div>
  </section>

  <button class="ccw-toggle"
          type="button"
          aria-label="Відкрити способи зв'язку"
          aria-controls="ccw-panel"
          aria-expanded="false">
    <svg width="29" height="29" viewBox="0 0 24 24"
         fill="none" stroke="currentColor"
         stroke-width="1.8" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8
      8.5 8.5 0 0 1-7.6 4.7
      8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7
      a8.4 8.4 0 0 1-.9-3.8
      8.5 8.5 0 0 1 4.7-7.6
      8.4 8.4 0 0 1 3.8-.9h.5
      a8.5 8.5 0 0 1 8 8v.5z"/>
    </svg>
  </button>
</div>`;

(function () {
  function initCreatoryWidget() {
  // Inject only when absent: safe against duplicate script inclusion.
  if (!document.getElementById('creatory-contact-widget')) {
    document.body.insertAdjacentHTML('beforeend', WIDGET_MARKUP);
  }

    const widget = document.getElementById(
      'creatory-contact-widget'
    );
    if (!widget || widget.dataset.initialized) return;
    widget.dataset.initialized = 'true';

    const toggle = widget.querySelector('.ccw-toggle');
    const close = widget.querySelector('.ccw-close');
    const panel = widget.querySelector('.ccw-panel');

    function track(action) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'creatory_contact_click',
        contact_method: action,
        widget_name: 'creatory_contact_v1',
        page_path: window.location.pathname
      });
    }

    function setOpen(open) {
      widget.classList.toggle('ccw-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute(
        'aria-label',
        open ? 'Закрити способи зв’язку'
             : 'Відкрити способи зв’язку'
      );
      panel.setAttribute('aria-hidden', String(!open));
      panel.inert = !open;

      if (open) {
        close.focus();
      } else {
        toggle.focus();
      }
    }

    toggle.addEventListener('click', function () {
      setOpen(!widget.classList.contains('ccw-open'));
    });

    close.addEventListener('click', function () {
      setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' &&
          widget.classList.contains('ccw-open')) {
        setOpen(false);
      }
    });

    document.addEventListener('pointerdown', function (e) {
      if (widget.classList.contains('ccw-open') &&
          !widget.contains(e.target)) {
        setOpen(false);
      }
    });

    widget.querySelectorAll('[data-ccw-action]')
      .forEach(function (element) {
        element.addEventListener('click', function () {
          const action = element.dataset.ccwAction;
          track(action);

          if (action === 'request') {
            // Use the existing global Webflow popup handler
            const popupTrigger = document.querySelector(
              '#requestOpenPopup, .request-button'
            );

            if (popupTrigger &&
                !widget.contains(popupTrigger)) {
              popupTrigger.click();
            } else {
              const popup = document.querySelector(
                '.pop-up-div'
              );
              if (popup) {
                popup.style.display = 'block';
                popup.style.opacity = '1';
              } else {
                console.warn(
                  'Creatory Widget: request popup not found'
                );
              }
            }
            setOpen(false);
          }
        });
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initCreatoryWidget
    );
  } else {
    initCreatoryWidget();
  }
})();
})();
