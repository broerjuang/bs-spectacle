// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("bs-jest/lib/js/src/jest.js");
var React = require("react");
var Enzyme = require("bs-enzyme/lib/js/src/Enzyme.js");
var Enzyme$1 = require("enzyme");
var BaseProps$BsSpectacle = require("../../src/BaseProps.js");
var EnzymeAdapterReact = require("enzyme-adapter-react-16");

Enzyme.configureEnzyme(new EnzymeAdapterReact());

window.matchMedia = function() {return {matches: false}};
;

global.localStorage = {
  setItem() {}
};
;

function setup(component) {
  return Enzyme$1.shallow(component, {
              context: {
                styles: {
                  components: {
                    heading: {
                      h1: { }
                    },
                    s: { }
                  },
                  colors: { },
                  fonts: { },
                  prism: { }
                },
                store: {
                  getState: (function () {
                      return {
                              style: { },
                              route: {
                                slide: 0
                              }
                            };
                    }),
                  subscribe: (function () {
                      return /* () */0;
                    }),
                  dispatch: (function () {
                      return /* () */0;
                    })
                }
              }
            });
}

function MakeTest(Blueprint) {
  describe(Blueprint[/* name */0], (function () {
          return Jest.test("with props", (function () {
                        var component = setup(React.cloneElement(Blueprint[/* element */1], { }));
                        return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                      }));
        }));
  return /* module */[];
}

function MakeBasePropsTest(Blueprint) {
  describe(Blueprint[/* name */0], (function () {
          Jest.test("without any props", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], { }));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("italic", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("bold", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("caps", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("margin", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* Some */["10px"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("padding", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */["10px"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("textColor", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["#621fe2"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("textSize", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["10px"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("textAlign", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["center"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("textFont", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["sans-serif"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("bgColor", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["#ffee65"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("bgImage", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["img.jpg"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("bgSize", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["100%"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("bgPosition", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["top"], /* None */0, /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("bgRepeat", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["none"], /* None */0, /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("bgDarken", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[0.7], /* None */0, /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          Jest.test("overflow", (function () {
                  var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["hidden"], /* None */0, { })));
                  return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                }));
          return Jest.test("height", (function () {
                        var component = setup(React.cloneElement(Blueprint[/* element */1], BaseProps$BsSpectacle.extendProps(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["10px"], { })));
                        return Jest.ExpectJs[/* toMatchSnapshot */16](Jest.ExpectJs[/* expect */0](component));
                      }));
        }));
  return /* module */[];
}

exports.setup = setup;
exports.MakeTest = MakeTest;
exports.MakeBasePropsTest = MakeBasePropsTest;
/*  Not a pure module */
