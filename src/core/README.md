## USFM-JS Sandbox

These non-component functions can also have playgrounds to test them out.

### USFM → JSON

```js
import {toJSON} from 'usfm-js';

const usfmSourceText  = `\\c 1
\\p
\\v 1 Peace on Earth, good will to men.
\\q
\\v 2 That's great!`;
const jsonResult = toJSON(usfmSourceText);
<>
Result:<br/>
{JSON.stringify(jsonResult,null,4)}
</>
```

### JSON → USFM

What am I doing wrong here???

```js
import {toUSFM} from 'usfm-js';

const jsonText1  = `{
    "headers":[{"type":"text","text":"Peace on Earth, good will to men"}],
    "chapters":{}}`;
const jsonText2 = `{
    "headers": [],
    "chapters": { "1": { "1": {
        "verseObjects": [ { "type": "text", "text": "Peace on Earth, good will to men.\n" }, { "tag": "q", "nextChar": "\n", "type": "quote" } ] }, "2": { "verseObjects": [ { "type": "text", "text": "That's great!" } ] }, "front": { "verseObjects": [ { "tag": "p", "nextChar": "\n", "type": "paragraph" } ] } } } }`
// NOTE: Only one option shown in https://github.com/unfoldingWord/usfm-js/blob/develop/README.md
//  Others discovered from https://github.com/unfoldingWord/usfm-js/blob/develop/src/js/jsonToUsfm.js#L438
const allOptions = {
    chunk: false, // if true then output is just a small piece of book
    forcedNewLines: true // if true then we add newlines before alignment tags, verses, words
    };
// TODO: figure out how to use:
//  'ignore {Array}' list of attributes to ignore on word objects
//  'map {Object}' dictionary of attribute names to map to new name on word objects
//  mileStoneIgnore {Array}' list of attributes to ignore on milestone objects
//  'mileStoneMap {Object}` dictionary of attribute names to map to new name on milestone objects
const usfmResult = toUSFM(jsonText1, allOptions);
console.log("usfmResult",usfmResult);
<>
Result:<br/>
{usfmResult}
</>
```

### removeMarker

Not quite sure how to use this exported function/filter yet???

```js
import {removeMarker} from 'usfm-js';

const usfmSourceText  = "\\s1 Peace on Earth, good will to men";
const jsonResult = removeMarker(usfmSourceText);
<>
Result:<br/>
{JSON.stringify(jsonResult,null,4)}
</>
```

### USFM → JSON → USFM round trip

```js
import {toJSON, toUSFM} from 'usfm-js';

const originalUsfmText  = "Peace on Earth, good will to men";
const jsonResult = toJSON(originalUsfmText);
const usfmResult = toUSFM(jsonResult, {forcedNewLines: true});
<>
First result:<br/>
{JSON.stringify(jsonResult,null,4)}
<br/>then<br/>
"{usfmResult}"
<br/>
Same: {usfmResult == originalUsfmText? 'Yes':'NO'}
</>
```

### JSON → USFM → JSON round trip

What am I doing wrong here???

```js
import {toUSFM, toJSON} from 'usfm-js';

const originalJsonText  = '{"headers":[{"type":"text","text":"Peace on Earth, good will to men"}],"chapters":{}}';
const usfmResult = toUSFM(originalJsonText, {forcedNewLines: true});
const jsonResult = toJSON(usfmResult);
<>
First result:<br/>
{usfmResult}
<br/>then<br/>
{JSON.stringify(jsonResult)}
<br/>
Same: {jsonResult == originalJsonText? 'Yes' : 'NO'}
</>
```
