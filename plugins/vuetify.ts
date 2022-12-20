// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#000000',
    surface: '#18181B',
    primary: '#FFFFFF',
    'primary-darken-1': '#EEEEEE',
    secondary: '#EEEEEE',
    'secondary-darken-1': '#BDBDBD',
    error: '#FF7043',
    info: '#29B6F6',
    success: '#66BB6A',
    warning: '#FFCA28',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
		directives,
		theme: {
			defaultTheme: 'darkTheme',
			themes: {
				darkTheme,
				lightTheme
			}
		}
  })

  nuxtApp.vueApp.use(vuetify)
})