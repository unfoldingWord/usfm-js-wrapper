### USFM → JSON → USFM round trip

```js
import {toJSON, toUSFM} from 'usfm-js';

const originalUsfmText1  = `\\id FRT
\\mt \\bk Front Matter\\bk* book
\\ip Peace \\add on\\add* Earth, good will to men
\\iot This is a \\ior reference\\ior* here
\\ie
`;
const originalUsfmText2 = `\\id TIT unfoldingWord® Greek New Testament
\\usfm 3.0
\\ide UTF-8
\\h Titus
\\toc1 The Letter of Paul to Titus
\\toc2 Titus
\\toc3 Tit
\\mt Titus

\\c 1
\\p
\\v 1
\\w Παῦλος|lemma="Παῦλος" strong="G39720" x-morph="Gr,N,,,,,NMS," x-tw="rc://*/tw/dict/bible/names/paul" \\w*,
\\w δοῦλος|lemma="δοῦλος" strong="G14010" x-morph="Gr,N,,,,,NMS," x-tw="rc://*/tw/dict/bible/other/servant" \\w*
\\w Θεοῦ|lemma="θεός" strong="G23160" x-morph="Gr,N,,,,,GMS," x-tw="rc://*/tw/dict/bible/kt/god" \\w*,
\\w ἀπόστολος|lemma="ἀπόστολος" strong="G06520" x-morph="Gr,N,,,,,NMS," x-tw="rc://*/tw/dict/bible/kt/apostle" \\w*
\\w δὲ|lemma="δέ" strong="G11610" x-morph="Gr,CC,,,,,,,,"\\w*
\\k-s | x-tw="rc://*/tw/dict/bible/kt/jesus"\\*\\w Ἰησοῦ|lemma="Ἰησοῦς" strong="G24240" x-morph="Gr,N,,,,,GMS,"\\w*
\\w Χριστοῦ|lemma="χριστός" strong="G55470" x-morph="Gr,N,,,,,GMS," x-tw="rc://*/tw/dict/bible/kt/christ" \\w*,
\\k-e\\*
\\w κατὰ|lemma="κατά" strong="G25960" x-morph="Gr,P,,,,,A,,,"\\w*
\\w πίστιν|lemma="πίστις" strong="G41020" x-morph="Gr,N,,,,,AFS," x-tw="rc://*/tw/dict/bible/kt/faith" \\w*
\\w ἐκλεκτῶν|lemma="ἐκλεκτός" strong="G15880" x-morph="Gr,NS,,,,GMP," x-tw="rc://*/tw/dict/bible/kt/elect" \\w*
\\w Θεοῦ|lemma="θεός" strong="G23160" x-morph="Gr,N,,,,,GMS," x-tw="rc://*/tw/dict/bible/kt/god" \\w*,
\\w καὶ|lemma="καί" strong="G25320" x-morph="Gr,CC,,,,,,,,"\\w*
\\w ἐπίγνωσιν|lemma="ἐπίγνωσις" strong="G19220" x-morph="Gr,N,,,,,AFS," x-tw="rc://*/tw/dict/bible/other/know" \\w*
\\w ἀληθείας|lemma="ἀλήθεια" strong="G02250" x-morph="Gr,N,,,,,GFS," x-tw="rc://*/tw/dict/bible/kt/true" \\w*,
\\w τῆς|lemma="ὁ" strong="G35880" x-morph="Gr,RR,,,,GFS,"\\w*
\\w κατ’|lemma="κατά" strong="G25960" x-morph="Gr,P,,,,,A,,,"\\w*
\\w εὐσέβειαν|lemma="εὐσέβεια" strong="G21500" x-morph="Gr,N,,,,,AFS," x-tw="rc://*/tw/dict/bible/kt/godly" \\w*`;

const originalUsfmText3 = `\\id RUT EN_ULT en_English_ltr Tue Mar 03 2020 16:27:33 GMT+0200 (SAST) tc
\\usfm 3.0
\\ide UTF-8
\\h Ruth
\\toc1 The Book of Ruth
\\toc2 Ruth
\\toc3 Rut
\\mt Ruth

\\ts\\*
\\c 1
\\p
\\v 1 \zaln-s | x-strong="c:H1961" x-lemma="הָיָה" x-morph="He,C:Vqw3ms" x-occurrence="1" x-occurrences="1" x-content="וַיְהִ֗י"\\*\\w Now|x-occurrence="1" x-occurrences="1"\\w*
\\w it|x-occurrence="1" x-occurrences="1"\\w*
\\w happened|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="b:H3117" x-lemma="יוֹם" x-morph="He,R:Ncmpc" x-occurrence="1" x-occurrences="1" x-content="בִּימֵי֙"\\*\\w in|x-occurrence="1" x-occurrences="3"\\w*
\\w the|x-occurrence="1" x-occurrences="5"\\w*
\\w days|x-occurrence="1" x-occurrences="1"\\w*
\\w of|x-occurrence="1" x-occurrences="4"\\w*\\zaln-e\\*
\\zaln-s | x-strong="H8199" x-lemma="שָׁפַט" x-morph="He,Vqc" x-occurrence="1" x-occurrences="1" x-content="שְׁפֹ֣ט"\\*\\w the|x-occurrence="2" x-occurrences="5"\\w*
\\w ruling|x-occurrence="1" x-occurrences="1"\\w*
\\w of|x-occurrence="2" x-occurrences="4"\\w*\\zaln-e\\*
\\zaln-s | x-strong="d:H8199" x-lemma="שָׁפַט" x-morph="He,Td:Vqrmpa" x-occurrence="1" x-occurrences="1" x-content="הַשּׁפְטִ֔ים"\\*\\w the|x-occurrence="3" x-occurrences="5"\\w*
\\w judges|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="c:H1961" x-lemma="הָיָה" x-morph="He,C:Vqw3ms" x-occurrence="1" x-occurrences="1" x-content="וַיְהִ֥י"\\*\\w that|x-occurrence="1" x-occurrences="1"\\w*
\\w there|x-occurrence="1" x-occurrences="1"\\w*
\\w was|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="H7458" x-lemma="רָעָב" x-morph="He,Ncmsa" x-occurrence="1" x-occurrences="1" x-content="רָעָ֖ב"\\*\\w a|x-occurrence="1" x-occurrences="2"\\w*
\\w famine|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="b:H0776" x-lemma="אֶרֶץ" x-morph="He,Rd:Ncbsa" x-occurrence="1" x-occurrences="1" x-content="בָּאָ֑רֶץ"\\*\\w in|x-occurrence="2" x-occurrences="3"\\w*
\\w the|x-occurrence="4" x-occurrences="5"\\w*
\\w land|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*.
\\zaln-s | x-strong="c:H3212" x-lemma="יָלַךְ" x-morph="He,C:Vqw3ms" x-occurrence="1" x-occurrences="1" x-content="וַיֵּלֶךְ"\\*\\w And|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="H0376" x-lemma="אִישׁ" x-morph="He,Ncmsa" x-occurrence="1" x-occurrences="1" x-content="אִ֜ישׁ"\\*\\w a|x-occurrence="2" x-occurrences="2"\\w*
\\w certain|x-occurrence="1" x-occurrences="1"\\w*
\\w man|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="m:H1035" x-lemma="בֵּית לֶחֶם" x-morph="He,R:Np" x-occurrence="1" x-occurrences="1" x-content="מִבֵּית"\\*\\zaln-s | x-strong="H1035" x-lemma="בֵּית לֶחֶם" x-morph="He,Np" x-occurrence="1" x-occurrences="1" x-content="לֶ֣חֶם"\\*\\w from|x-occurrence="1" x-occurrences="1"\\w*
\\w Bethlehem|x-occurrence="1" x-occurrences="1"\\w*
\\w of|x-occurrence="3" x-occurrences="4"\\w*\\zaln-e\\*\\zaln-e\\*
\\zaln-s | x-strong="H3063" x-lemma="יְהוּדָה" x-morph="He,Np" x-occurrence="1" x-occurrences="1" x-content="יְהוּדָ֗ה"\\*\\w Judah|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="c:H3212" x-lemma="יָלַךְ" x-morph="He,C:Vqw3ms" x-occurrence="1" x-occurrences="1" x-content="וַיֵּלֶךְ"\\*\\w went|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="l:H1481a" x-lemma="גּוּר" x-morph="He,R:Vqc" x-occurrence="1" x-occurrences="1" x-content="לָגוּר֙"\\*\\w to|x-occurrence="1" x-occurrences="1"\\w*
\\w live|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="b:H7704b" x-lemma="שָׂדֶה" x-morph="He,R:Ncmpc" x-occurrence="1" x-occurrences="1" x-content="בִּשְׂדֵ֣י"\\*\\w in|x-occurrence="3" x-occurrences="3"\\w*
\\w the|x-occurrence="5" x-occurrences="5"\\w*
\\w fields|x-occurrence="1" x-occurrences="1"\\w*
\\w of|x-occurrence="4" x-occurrences="4"\\w*\\zaln-e\\*
\\zaln-s | x-strong="H4124" x-lemma="מוֹאָב" x-morph="He,Np" x-occurrence="1" x-occurrences="1" x-content="מוֹאָ֔ב"\\*\\w Moab|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*,
\\zaln-s | x-strong="H1931" x-lemma="הוּא" x-morph="He,Pp3ms" x-occurrence="1" x-occurrences="1" x-content="ה֥וּא"\\*\\w he|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="c:H0802" x-lemma="אִשּׁה" x-morph="He,C:Ncfsc:Sp3ms" x-occurrence="1" x-occurrences="1" x-content="וְאִשְׁתּ֖וֹ"\\*\\w and|x-occurrence="1" x-occurrences="2"\\w*
\\w his|x-occurrence="1" x-occurrences="2"\\w*
\\w wife|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*
\\zaln-s | x-strong="c:H8147" x-lemma="שְׁנַיִם" x-morph="He,C:Acmdc" x-occurrence="1" x-occurrences="1" x-content="וּשְׁנֵ֥י"\\*\\w and|x-occurrence="2" x-occurrences="2"\w*\zaln-e\*
\\zaln-s | x-strong="H1121a" x-lemma="בֵּן" x-morph="He,Ncmpc:Sp3ms" x-occurrence="1" x-occurrences="1" x-content="בָנָֽיו"\\*\\w his|x-occurrence="2" x-occurrences="2"\w*\zaln-e\*
\\zaln-s | x-strong="c:H8147" x-lemma="שְׁנַיִם" x-morph="He,C:Acmdc" x-occurrence="1" x-occurrences="1" x-content="וּשְׁנֵ֥י"\\*\\w two|x-occurrence="1" x-occurrences="1"\w*\zaln-e\*
\\zaln-s | x-strong="H1121a" x-lemma="בֵּן" x-morph="He,Ncmpc:Sp3ms" x-occurrence="1" x-occurrences="1" x-content="בָנָֽיו"\\*\\w sons|x-occurrence="1" x-occurrences="1"\\w*\\zaln-e\\*.`;

// You can select your text here
const originalUsfmText = originalUsfmText2;

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
