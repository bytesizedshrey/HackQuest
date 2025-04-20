
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Cybersecurity theme colors
				cyber: {
					black: '#0D0E14',
					darkPurple: '#1A1F2C',
					purple: '#6E59A5',
					lightPurple: '#9B87F5',
					neonPurple: '#8B5CF6',
					neonPink: '#D946EF',
					neonBlue: '#0EA5E9',
					neonGreen: '#10B981',
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(100%)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'brightness(150%)'
					}
				},
				'cyber-glitch': {
					'0%, 100%': {
						transform: 'translate(0)',
						'text-shadow': '0 0 5px #9B87F5, 0 0 10px #9B87F5'
					},
					'25%': {
						transform: 'translate(-1px, 1px)',
						'text-shadow': '0 0 7px #D946EF, 0 0 15px #D946EF'
					},
					'50%': {
						transform: 'translate(1px, -1px)',
						'text-shadow': '0 0 5px #0EA5E9, 0 0 10px #0EA5E9'
					},
					'75%': {
						transform: 'translate(-1px, -1px)',
						'text-shadow': '0 0 7px #9B87F5, 0 0 15px #9B87F5'
					}
				},
				'rotate-360': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'cyber-glitch': 'cyber-glitch 3s infinite',
				'rotate-slow': 'rotate-360 15s linear infinite'
			},
			boxShadow: {
				'neon-purple': '0 0 5px #9B87F5, 0 0 20px rgba(155, 135, 245, 0.5)',
				'neon-pink': '0 0 5px #D946EF, 0 0 20px rgba(217, 70, 239, 0.5)',
				'neon-blue': '0 0 5px #0EA5E9, 0 0 20px rgba(14, 165, 233, 0.5)',
				'neon-green': '0 0 5px #10B981, 0 0 20px rgba(16, 185, 129, 0.5)',
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(to right, #1A1F2C, #2e1065)',
				'hero-pattern': "url('/hero-pattern.svg')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
