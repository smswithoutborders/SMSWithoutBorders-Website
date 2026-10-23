const NEWSLETTER_BASE_URL =
  process.env.REACT_APP_NEWSLETTER_BASE_URL || "https://newsletter.afkanerd.com";

const NEWSLETTER_FORM_ID =
  process.env.REACT_APP_NEWSLETTER_FORM_ID || "nfrm_BzLMaLXv";

export const NEWSLETTER_SUBMIT_URL =
  process.env.REACT_APP_NEWSLETTER_SUBMIT_URL ||
  `${NEWSLETTER_BASE_URL}/forms/${NEWSLETTER_FORM_ID}`;

export const NEWSLETTER_HONEYPOT_NAME =
  process.env.REACT_APP_NEWSLETTER_HONEYPOT_NAME || "h[url]";

// Status pages the newsletter service redirects to. The other SWOB sites point here too.
export const NEWSLETTER_ROUTES = {
  subscribed:
    process.env.REACT_APP_NEWSLETTER_SUBSCRIBED_PATH || "/newsletter-subscribed",
  confirmationError:
    process.env.REACT_APP_NEWSLETTER_CONFIRMATION_ERROR_PATH ||
    "/newsletter-confirmation-error",
  unsubscribed:
    process.env.REACT_APP_NEWSLETTER_UNSUBSCRIBED_PATH || "/newsletter-unsubscribed",
};
