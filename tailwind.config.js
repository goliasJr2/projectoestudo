/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   //Essa configuração diz respeito a pastas em que o tailwindcss
   //deve monitorar. É para pasta src, ** é verificar cada pasta
   //de src e os arquivos com extensão html, ts e js.
   "./src/**/*.{html,ts,js}" 
  ],
  theme: {
    extend: {
      colors: {
        'vermelho': '#ff0000',
        'vermelhoescuro': '#990000'
      }
    },
  },
  plugins: [],
}

