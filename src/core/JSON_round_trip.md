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
