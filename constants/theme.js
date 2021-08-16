

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get("window");

export const COLORS = {
    //base
    primary : "#fc6d3f",
    secondary: "#cdcdd2",

    //colorlar
    black: "#1e1f20",
    white: "#ffffff",
    darkYellow: "#e6ac00",
    lightOrange: "#ffa238",

    lightGray: "#f5f5f6",
    lightGray2: "f6f6f7",
    lightGray3: "#efeff1",
    lightGray4: "#f8f8f9",
    transparent: "transparent",
    darkgray: "#898c95",
}

export const SIZES = {
    //global ones
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    //font ones
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //app dims
    width,
    height
}

export const FONTS = {
    largeTitle: {fontFamily: "Roboto-Regular", fontSize: SIZES.largeTitle, lineHeight: 40},
    h1: {fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22},
    h2: {fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22},
}

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;