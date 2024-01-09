/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      'xs':['13px',{lineHeight:'24px',fontWeight:'400'}],
      'sm1':['14px',{lineHeight:'24px',fontWeight:'400'}],
      'sm2':['14px',{lineHeight:'24px',fontWeight:'500'}],
      'md1':['15px',{lineHeight:'24px',fontWeight:'400'}],
      'md2':['15px',{lineHeight:'24px',fontWeight:'500'}],
      'lg1':['16px',{lineHeight:'24px',fontWeight:'400'}],
      'lg2':['16px',{lineHeight:'24px',fontWeight:'500'}],
      'xl':['20px',{lineHeight:'28px',fontWeight:'500'}],
      '2xl':['32px',{lineHeight:'38px',fontWeight:'500'}],
    },
    fontFamily:{
      'Inter':['Inter', 'sans-serif'],
    },
    
    extend: {
      colors:{
        Blue:'#146EB4',
        Orange:'#EE741F',
        Yellow:'#FaB73B',
        Green:'#17B31B',
        Red:'#E50B20',
        Navbar:'#1E2640',
        Raspberry:'#DF1E5B',
        Builder:'#6457A6',
        Black100: '#FFFFFF',
        Black98:'#FAFAFA',
        Black95:'#F2F2F2',
        Black90:'#E6E6E6',
        Black85:'#D9D9D9',
        Black70:'#B3B3B3',
        Black60:'#999999',
        Black50:'#808080',
        Black30:'#4D4D4D',
        Black12:'#1A181E',
        BlueH:'#0E4F82',
        OrangeH:'#CC631B',
        GreenH:'#107A12',
        RedH:'#CC0A1D',
        BlackH:'#4D4D4D',
      },
      borderRadius:{
        base:'4px',
        plus:'8px',
      },
      boxShadow:{
        base:'0px 2px 6px 0px rgba(26, 24, 30, 0.04)'
      }
    },
  },
  plugins: [],
}
