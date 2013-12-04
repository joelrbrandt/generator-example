/*
 * Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */

(function () {
    "use strict";

    var util = require("util");

    var _generator = null,
        _config = null;

    var MENU_ID = "generator-example",
        MENU_STRING = "Hi Mom!";

    var menuChecked = false;

    function makeRed(s) {
        return "\x1B[1;31m" + s + "\x1B[0m";
    }

    function print(s, obj) {
        console.log(
            "\n\n" +
            makeRed(s) +
            "\n" +
            util.inspect(obj, { depth: null, colors: true }) +
            "\n\n"
        );
    }

    function handleGeneratorMenuChanged(event) {
        print("Menu clicked:", event);
        menuChecked = !menuChecked;
        _generator.toggleMenu(MENU_ID, true, menuChecked);
        _generator.getDocumentInfo().then(function (info) {
            print("Complete document info:", info);
        });
    }

    function handleCurrentDocumentChanged(change) {
        print("Current Document Changed:", change);
    }

    function handleImageChanged(change) {
        print("Image Changed:", change);
    }

    function init(generator, config) {
        _generator = generator;
        _config = config;

        console.log("initializing generator-example plugin with config %j", _config);

        _generator.addMenuItem(MENU_ID, MENU_STRING, true, menuChecked);

        _generator.onPhotoshopEvent("generatorMenuChanged", handleGeneratorMenuChanged);

        _generator.onPhotoshopEvent("currentDocumentChanged", handleCurrentDocumentChanged);

        _generator.onPhotoshopEvent("imageChanged", handleImageChanged);
    }

    exports.init = init;


}());
