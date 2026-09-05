// Central manifest for the "future" imagery set (public/assets/future).
// Keeping the paths in one place means a swap only happens here.
//
// Alt text describes what is actually in each photograph. It is not a place
// for keywords: a screen reader user hears these sentences, and search engines
// discount alt text that reads like a keyword list.

const base = "/assets/future";

export const futureImages = {
  hero: `${base}/minh-pham-jSAb1ifwf8Y-unsplash.jpg`,
  about: `${base}/boris-bobrov-B4lknSRZwPM-unsplash.jpg`,
  cta: `${base}/james-yarema-npTT9rD8wd4-unsplash.jpg`,
  nextBillion: `${base}/visax-8oni9vTWj7U-unsplash.jpg`,
  infrastructure: `${base}/franck-v-CaJSlLmdWb0-unsplash.jpg`,
  service1: `${base}/conny-schneider-KZgKKl7__ww-unsplash.jpg`,
  service2: `${base}/maximalfocus-VT4rx775FT4-unsplash.jpg`,
  service3: `${base}/bert-b-rhNff6hB41s-unsplash.jpg`,
};

export const futureAlt = {
  hero: "A person wearing an immersive headset, lit from one side in the dark",
  about:
    "A close up of a perforated metal facade, its pattern receding into shadow",
  cta: "A macro shot of a headset lens catching a ring of reflected light",
  infrastructure:
    "The illuminated dome of a data centre seen from below at night",
};

// Everything that is not pinned to a specific slot runs through the
// "Signals" strip so the whole set gets used.
export const signalImages = [
  {
    src: `${base}/andrew-kliatskyi-LYZxo7oVFOI-unsplash.jpg`,
    caption: "Form",
    alt: "Smooth dark folds of material curving into a spiral",
  },
  {
    src: `${base}/aron-visuals-bZZp1PmHI0E-unsplash.jpg`,
    caption: "Signal",
    alt: "Faint points of light arranged in a sphere against black",
  },
  {
    src: `${base}/isawred-jORDvdiIyv8-unsplash.jpg`,
    caption: "Control",
    alt: "A control room console covered in switches and lit displays",
  },
  {
    src: `${base}/leyre-71SHXwBLp5w-unsplash.jpg`,
    caption: "Density",
    alt: "An aerial view of a dense city grid at night",
  },
  {
    src: `${base}/maximalfocus-HakTxidk36I-unsplash.jpg`,
    caption: "Velocity",
    alt: "Long exposure streaks of light sweeping across a dark frame",
  },
  {
    src: `${base}/thisisengineering-sbVu5zitZt0-unsplash.jpg`,
    caption: "Robotics",
    alt: "A robotic hand and forearm raised with the palm open",
  },
  {
    src: `${base}/visax-FpkeKQlgJtI-unsplash.jpg`,
    caption: "Networks",
    alt: "Thousands of fine dots forming a curved mesh surface",
  },
  {
    src: `${base}/yumi-kim-ux4yPZRN1g4-unsplash.jpg`,
    caption: "Cities",
    alt: "Illuminated screens on tower blocks reflected in a curved ceiling",
  },
];
