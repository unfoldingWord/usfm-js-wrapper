### JSON → USFM

```js
import {toUSFM} from 'usfm-js';

const jsonText1  = `{ "headers":[{"type":"text","text":"Peace on Earth, good will to men"}], "chapters":{}}`;
const jsonText2 = `{ "headers": [],
    "chapters": { "1": { "1": {
        "verseObjects": [ { "type": "text", "text": "Peace on Earth, good will to men.\\n" }, { "tag": "q", "nextChar": "\\n", "type": "quote" } ] }, "2": { "verseObjects": [ { "type": "text", "text": "That's great!" } ] }, "front": { "verseObjects": [ { "tag": "p", "nextChar": "\\n", "type": "paragraph" } ] } } } }`

// Choose your source text here
const jsonText = jsonText2;

// NOTE: Only one option shown in https://github.com/unfoldingWord/usfm-js/blob/develop/README.md
//  Others discovered from https://github.com/unfoldingWord/usfm-js/blob/develop/src/js/jsonToUsfm.js#L438
const allOptions = {
    chunk: false, // if true then output is just a small piece of book
    forcedNewLines: true // if true then we add newlines before alignment tags, verses, words
    };
/* TODO: figure out how to use:
    'ignore {Array}' list of attributes to ignore on word objects
    'map {Object}' dictionary of attribute names to map to new name on word objects
    'mileStoneIgnore {Array}' list of attributes to ignore on milestone objects
  'mileStoneMap {Object}` dictionary of attribute names to map to new name on milestone objects
*/
const jsonObject = JSON.parse(jsonText);
const usfmResult = toUSFM(jsonObject, allOptions);
<>
Source:<pre>{jsonText}</pre>
Result:<pre>{usfmResult}</pre>
</>
```

