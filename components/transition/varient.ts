export const variants = {
    in: {
      scale: 0.8,
      y: 100,
      x: "100%",
      transition: {
        duration: 0.4,
      },
    },
  
    center: {
      x: 0,
      scale: 0.8,
      transformOrigin: "top",
      transition: {
        duration: 0.4,
      },
    },
  
    scaleUp: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
  
    scaleDown: {
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.4,
      },
    },
  
    out: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
  };