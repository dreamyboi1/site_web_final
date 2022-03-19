
module.exports = {
theme: {
  /* colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'main': '#afd5eb',
      'black': '#111827',
      'red': '#f04520',
      'pink': '#ef869c',
      'blue': '#107305',
      'yellow': '#fde047',
      'emerald': '#6ee7b7',
      'violet': '#5b21b6',
      'purple': '#d8b4fe',
      'stone-800': '#292524',
      'stone-900': '#1c1917',
      'teal': '#5eead4',
      'white': "#ffffff",
      'yellow-b': "#fecd45",
      'blue-b': "#2568fb",
      'white': "#ffffff",

  }, */
  extend: {
    spacing: {
      
      '3/5': '60%'
    },
    fontFamily: {
      oswald: "'Oswald', sans-serif",
      lora: "'Lora', serif",
      roboto_slab: "'Roboto Slab', serif",
    },
    minWidth:{
      
    }
  }
},

  mode: 'jit',
  content: ['./src/**/*.svelte']
}