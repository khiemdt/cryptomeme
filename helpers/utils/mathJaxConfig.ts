import { MathJax } from 'better-react-mathjax';

export const config = {
  showProcessingMessages: false,
  messageStyle: 'none',
  extensions: ['tex2jax.js'],
  jax: ['input/TeX', 'output/HTML-CSS'],
  tex2jax: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
      ['\\[', '\\]'],
    ],
    displayMath: [['$$', '$$']],
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'],
    ignoreClass: 'comment-content',
    processClass: 'mathjax-latex',
  },
  'HTML-CSS': {
    availableFonts: ['STIX', 'TeX'],
    showMathMenu: false,
  },
};
export const options = {
  fastPreview: { disabled: false },
  Safe: true,
  processSectionDelay: 0,
  jax: ['input/TeX', 'output/HTML-CSS'],
  SVG: {
    linebreaks: { automatic: true },
  },
  'HTML-CSS': {
    linebreaks: { automatic: true },
  },
  'auto-render': ['[tex]'],
};
export const queue = ['Typeset', (MathJax as any)?.Hub];
