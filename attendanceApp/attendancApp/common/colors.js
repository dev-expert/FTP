import { Platform } from "react-native"

export const COLORS = {
    headertext : "#0000008A",
    borderBottomColor: '#FAC01C',
    placeholderText : '#00000091',
    placeholderFontSize : 14,
    fontText : "#4C4C4C"
     // your colors
  }
  export const FontFamily = {
    fontFamilyMedium :Platform.OS === 'ios'?  'Roboto-Medium' : 'Roboto-Medium',
    fontFamilyRegular : Platform.OS === 'ios'? 'Roboto-Medium' : 'Roboto-Medium'
  }
  
  export default {
    COLORS,
    FontFamily
  }