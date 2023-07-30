export const variants = {
  fadeIn: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  },
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  },
  fadeOut: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};