## USFM-JS Sandbox

These non-component functions can also have playgrounds to test them out.

### USFM → JSON

```js
import {toJSON} from 'usfm-js';

const usfmSourceText  = `\\id GEN short test
\\mt Genesis
\\ip Introductory paragraph here about \\bk The book \\+add of\\+add* Genesis\\bk*.
\\c 1
\\s Section heading
\\r (See also something else)
\\p
\\v 1 Peace on Earth, good will \\add to\\add* men.
\\q
\\v 2 That's \\bd great\\bd*;
\\q2 real great!`;
const jsonResult = toJSON(usfmSourceText);
<>
Result:<pre>{JSON.stringify(jsonResult,null,2)}</pre>
</>
```

### JSON → USFM

```js
import {toUSFM} from 'usfm-js';

const jsonText1  = `{ "headers":[{"type":"text","text":"Peace on Earth, good will to men"}], "chapters":{}}`;
const jsonText2 = `{ "headers": [],
    "chapters": { "1": { "1": {
        "verseObjects": [ { "type": "text", "text": "Peace on Earth, good will to men.\\n" }, { "tag": "q", "nextChar": "\\n", "type": "quote" } ] }, "2": { "verseObjects": [ { "type": "text", "text": "That's great!" } ] }, "front": { "verseObjects": [ { "tag": "p", "nextChar": "\\n", "type": "paragraph" } ] } } } }`
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
const jsonObject = JSON.parse(jsonText2);
const usfmResult = toUSFM(jsonObject, allOptions);
<>
Result:<pre>{usfmResult}</pre>
</>
```

### removeMarker

Not quite sure how to use this exported function/filter yet???

```js
import {removeMarker} from 'usfm-js';

const usfmSourceText  = "\\s1 Peace on Earth, good will to men";
const jsonResult = removeMarker(usfmSourceText);
<>
Result:<pre>{JSON.stringify(jsonResult,null,2)}</pre>
</>
```

### USFM → JSON → USFM round trip

```js
import {toJSON, toUSFM} from 'usfm-js';

const originalUsfmText  = `\\id FRT
\\mt \\bk Front Matter\\bk* book
\\ip Peace \\add on\\add* Earth, good will to men
\\iot This is a \\ior reference\\ior* here
\\ie
`;
const jsonResult = toJSON(originalUsfmText);
const usfmResult = toUSFM(jsonResult, {forcedNewLines: true});
<>
First result:<pre>{JSON.stringify(jsonResult,null,2)}</pre>
<br/>then<br/>
<pre>{usfmResult.replace(' \n','␣\n')}</pre>
<br/>
Same: {usfmResult == originalUsfmText? 'Yes':'NO'}
<br/>(Same except for extra trailing space: {usfmResult == originalUsfmText+' '? 'Yes':'No'})
<br/>(Same except for extra trailing newline: {usfmResult == originalUsfmText+'\n'? 'Yes':'No'})
</>
```

### JSON → USFM → JSON round trip

```js
import {toUSFM, toJSON} from 'usfm-js';

const originalJsonText1  = '{"headers":[{"type":"text","text":"Peace on Earth, good will to men"}],"chapters":{}}';
const originalJsonText2 = `{ "headers": [],
    "chapters": { "1": { "1": {
        "verseObjects": [ { "type": "text", "text": "Peace on Earth, good will to men.\\n" }, { "tag": "q", "nextChar": "\\n", "type": "quote" } ] },
        "2": { "verseObjects": [ { "type": "text", "text": "That's great!" } ] }, "front": { "verseObjects": [ { "tag": "p", "nextChar": "\\n", "type": "paragraph" } ] } } } }`
const originalJsonText = originalJsonText2;

const originalJsonObject = JSON.parse(originalJsonText);
const usfmResult = toUSFM(originalJsonObject);
const jsonResultObject = toJSON(usfmResult);
const jsonResultString = JSON.stringify(jsonResultObject);

const sameFlag1 = jsonResultObject == originalJsonObject; // TODO: Why is this match failing?
console.log('orig', JSON.stringify(originalJsonObject));
console.log('rslt', JSON.stringify(jsonResultObject));
// We have to normalise the source json string to test for a valid string match
const sameFlag2 = jsonResultString == JSON.stringify(JSON.parse(originalJsonText));
console.log("sameFlag1", sameFlag1, "sameFlag2", sameFlag2);
<>
First result:<pre>{usfmResult}</pre>
<br/>then<pre>{JSON.stringify(jsonResultObject,null,2)}</pre>
Same: {sameFlag1 || sameFlag2 ? 'Yes' : 'NO'}
</>
```
