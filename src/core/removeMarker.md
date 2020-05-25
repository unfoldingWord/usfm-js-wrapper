### removeMarker

Method to filter specified usfm marker from a string. (In [filter.js](https://github.com/unfoldingWord/usfm-js/blob/develop/src/js/filter.js).)

Not sure how to use this exported function yet -- where is the marker to be removed specified ???

```js
import {removeMarker} from 'usfm-js';

const usfmSourceText1  = "\\s1 Peace on Earth, good will to men";
const usfmSourceText2  = `\\id GEN short test
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

const usfmSourceText = usfmSourceText2;

const returnedResult = removeMarker(usfmSourceText);
<>
Source:<pre>{usfmSourceText}</pre>
Result:<pre>{returnedResult}</pre>
</>
```
