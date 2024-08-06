/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor:{
        navbarBg:"#38388E66",
      },
      backgroundImage:{
        navLinks:"linear-gradient(90.3deg, #373F96 0.11%, #435EC8 52.04%, #373C94 99.82%, #38388E 99.82%)",
        activeNavLinkBg:'linear-gradient(90deg, #C1FFFB 0%, #A1AAFF 100%)',
        'global': "url('/assets/Global/global-bg.jpg'),url('/assets/Global/image.png')",
        level1Bg: `
          
          url('/assets/Level1/bottom-bg.png'),
          url('/assets/Level1/right-bg.png'),
          url('/assets/Level1/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
        level2Bg: `
          
          url('/assets/Level2/moon-top.png'),
          url('/assets/Level2/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
        level3Bg: `
          
          
          url('/assets/Level3/bottom-bg.png'),
          url('/assets/Level3/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
        level4Bg: `
          
          
          url('/assets/Level4/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
        level5Bg: `
          
          
          url('/assets/Level5/bottom1-bg.png'),
          url('/assets/Level5/bottom2-bg.png'),
          url('/assets/Level5/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
        level6Bg: `
          
          
          
          
          url('/assets/Level6/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
        level7Bg: `
          
          
          
          
          url('/assets/Level7/center-bg.png')
          
        `,
        level1TransitionBg: `
          
          
          
          
          
          url('/assets/TransitionPages/First/fore1.png'),
          url('/assets/Global/transition-global-bg.png')
          
        `,
        level2TransitionBg: `
          
          
          
          
          
          url('/assets/TransitionPages/Second/fore.png'),
          url('/assets/Global/transition-global-bg.png')
          
        `,
        level3TransitionBg: `
          
          
          
          
          
          url('/assets/TransitionPages/Third/fore.png'),
          url('/assets/Global/transition-global-bg.png')
          
        `,
        level4TransitionBg: `
          
          
          
          
          
          url('/assets/TransitionPages/Fourth/fore.png'),
          url('/assets/Global/transition-global-bg.png')
          
        `,
        level5TransitionBg: `
          
          
          
          
          
          url('/assets/TransitionPages/Fifth/fore.png'),
          url('/assets/Global/transition-global-bg.png')
          
        `,
        level6TransitionBg: `
          
          
          
          
          
          url('/assets/TransitionPages/Sixth/fore.png'),
          url('/assets/Global/transition-global-bg.png')
          
        `,
        scoreCardBorderGradient:"linear-gradient(90deg, #FF6417 1.86%, rgba(112, 0, 255, 0.94) 101%)",
        scoreCardBgGradient:"linear-gradient(180deg, #3600AA 0%, #31005C 100%)",
        autoTapSwitchThumbBackground:"linear-gradient(187.32deg, rgba(0, 0, 0, 0.3) 14.41%, rgba(0, 0, 0, 0) 87.75%), linear-gradient(268.36deg, #141616 1.06%, #222222 98.6%)",
        autoTapSwitchContainerBackgroundChecked:"linear-gradient(90deg, #FF6417 1.86%, rgba(112, 0, 255, 0.94) 101%)",
        autoTapSwitchContainerBackgroundUnChecked:"linear-gradient(94.4deg, #000000 2.66%, rgba(0, 0, 0, 0) 53.57%), linear-gradient(214.96deg, #000000 -9.35%, #131517 79.43%)",
        msgBoxBackground:"linear-gradient(90deg, rgba(217, 217, 217, 0.02) 0%, rgba(92, 255, 255, 0.02) 100%)",
        toastBg:"linear-gradient(180deg, #5100FF 0%, #510099 100%)"




      },
      backgroundSize:{
        level1Bg: "100%,cover,cover, cover",
        level2Bg: "100%,100%, cover",
        level3Bg: "100%,100%, cover",
        level4Bg: "100%, cover",
        level5Bg: "100%,100%,100%, cover",
        level6Bg: "100%,100%, cover",
        level7Bg: "100%",
        level1TransitionBg: "100%,100%,cover",
        level2TransitionBg: "100%,100%,cover",
        level3TransitionBg: "100%,100%,cover",
        level4TransitionBg: "100%,100%,cover",
        level5TransitionBg: "100%,100%,cover",
        level6TransitionBg: "100%,100%,cover",
      },
      backgroundPosition:{
        level1Bg:"10px,top right,center,center",
        level2Bg:"10px 0px,center,center",
        level3Bg:"bottom,center,center",
        level4Bg:"center,center",
        level5Bg:"bottom,bottom,center,center",
        level6Bg:"center,center,center",
        level7Bg:"center",
        level1TransitionBg:"center,center,center",
        level2TransitionBg:"center,center,center",
        level3TransitionBg:"center,center,center",
        level4TransitionBg:"center,center,center",
        level5TransitionBg:"center,center,center",
        level6TransitionBg:"center,center,center",
      },
     
      boxShadow:{
        activeNavLinkBoxShadow:'0px 1.36642px 3.41604px rgba(10, 19, 9, 0.12)',
        autoTapSwitchContainerShadowChecked:"-0.58932px -0.220995px 1.98895px 0.44199px rgba(2, 48, 167, 0.56), inset -0.957645px -0.44199px 0.515655px rgba(0, 0, 0, 0.47)",
        autoTapSwitchContainerShadowUnChecked:"inset -0.635856px -0.293472px 0.342384px rgba(0, 0, 0, 0.47)",
      },
      fontFamily:{
        'poppins': ['Poppins'],
      },
      colors: {
      
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "tapArea-float":{
            "0%": { 
              transform: "translate(0,  0px)" 
            },
            "50%": { 
              transform: "translate(0, 15px) "
            },
            "100%":{
               transform: "translate(0, -0px)" 
            }    
        },
        "appear":{
          "0%": {
            opacity: "0",
            transform: "scale(0.6)"
          },
        
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "transition-appear":{
          "0%": {
            opacity: "0",
            transform: "scale(1.6)"
          },
        
          "50%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "80%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "100%": {
            opacity: "0",
            transform: "scale(1.6)"
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "tapArea-float": "tapArea-float 2.5s ease-in-out infinite",
        "appear":"appear 2s ease 0s 1 normal forwards",
        "transition-appear":"transition-appear 5s ease 0s 1 normal forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}