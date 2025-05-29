export const getScrollTop = () => window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
