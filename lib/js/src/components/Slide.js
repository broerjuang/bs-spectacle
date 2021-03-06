// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Spectacle = require("spectacle");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Types$BsSpectacle = require("../Types.js");
var BaseProps$BsSpectacle = require("../BaseProps.js");

function make(italic, bold, caps, margin, padding, textColor, textSize, textAlign, textFont, bgColor, bgImage, bgSize, bgPosition, bgRepeat, bgDarken, overflow, height, align, controlColor, goTo, id, maxHeight, maxWidth, notes, onActive, progressColor, transition, transitionIn, transitionOut, transitionDuration, getAppearStep, children) {
  var tmp = { };
  if (align) {
    tmp.align = align[0];
  }
  if (controlColor) {
    tmp.controlColor = controlColor[0];
  }
  if (goTo) {
    tmp.goTo = goTo[0];
  }
  if (id) {
    tmp.id = id[0];
  }
  if (maxHeight) {
    tmp.maxHeight = maxHeight[0];
  }
  if (maxWidth) {
    tmp.maxWidth = maxWidth[0];
  }
  if (notes) {
    tmp.notes = notes[0];
  }
  if (onActive) {
    tmp.onActive = onActive[0];
  }
  if (progressColor) {
    tmp.progressColor = progressColor[0];
  }
  var tmp$1 = Types$BsSpectacle.mapTransitionsToJs(transition);
  if (tmp$1) {
    tmp.transition = tmp$1[0];
  }
  var tmp$2 = Types$BsSpectacle.mapTransitionsToJs(transitionIn);
  if (tmp$2) {
    tmp.transitionIn = tmp$2[0];
  }
  var tmp$3 = Types$BsSpectacle.mapTransitionsToJs(transitionOut);
  if (tmp$3) {
    tmp.transitionOut = tmp$3[0];
  }
  if (transitionDuration) {
    tmp.transitionDuration = transitionDuration[0];
  }
  if (getAppearStep) {
    tmp.getAppearStep = getAppearStep[0];
  }
  return ReasonReact.wrapJsForReason(Spectacle.Slide, BaseProps$BsSpectacle.extendProps(italic, bold, caps, margin, padding, textColor, textSize, textAlign, textFont, bgColor, bgImage, bgSize, bgPosition, bgRepeat, bgDarken, overflow, height, tmp), children);
}

exports.make = make;
/* spectacle Not a pure module */
