## Generator-Example

"Hello World" plugin for [Generator](https://github.com/adobe-photoshop/generator-core), a Node-based extensibility layer for Adobe Photoshop.

### Taking it for a spin

1. Install the latest version of Photoshop CC (currently 14.1.2). You can try it for free by following a "Try" link here: http://www.adobe.com/products/photoshop.html

2. Launch Photoshop CC. Go into Photoshop's preferences, choose the "Plug-Ins" tab, and enable "Remote Connections" in the Generator section. Set a password, too!

3. Install the Generator command-line interface with `npm install -g generator-cli`

4. Clone this repo with `git clone https://github.com/joelrbrandt/generator-example.git`

5. Inside the cloned directory, run `npm install`

6. Inside the same directory, launch generator with `generator -P [your password]`

7. Do stuff in Photoshop. Watch stuff print out to your console!

8. Hack on it! Right now, the best documentation is to [Use The Source, Luke](https://github.com/adobe-photoshop/generator-core/blob/master/lib/generator.js)

### License

(MIT License)

Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
