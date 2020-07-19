// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;

/////////////////////////
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
// Статичный импорт
(async () => {
    if (somethingIsTrue) {
      // import module for side effects
      await import('/modules/my-module.js');
    }
  })();
  import {
    reallyReallyLongModuleExportName as shortName,
    anotherLongModuleName as short
  } from '/modules/my-module.js';

//   динамического импор
let module = await import('/modules/my-module.js');
import('/modules/my-module.js')
.then((module) => {
  // Do something with the module.
});

// AJax JSON
function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () { 
      callback(this.responseText) 
    };
    xhr.open('GET', url, true);
    xhr.send();
  }
  
  export function getUsefulContents(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
  }
///
  import { getUsefulContents } from '/modules/file.js';
getUsefulContents('http://www.example.com',
    data => { doSomethingUseful(data); });
////
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", e => {
    e.preventDefault();

    import('/modules/my-module.js')
      .then(module => {
        module.loadPageInto(main);
      })
      .catch(err => {
        main.textContent = err.message;
      });
  });
}

{/* <script type="module" src="script.js"></script>  */}
// defaultExport
// Имя, которое будет ссылаться на экспорт по умолчанию из модуля.

// module-name
// Модуль для импорта из. Часто это относительный или абсолютный путь к .jsфайлу, содержащему модуль. Определенные упаковщики могут разрешать или требовать использования расширения; проверьте вашу среду. Разрешены только одинарные и двойные кавычки.

// name
// Имя объекта модуля, который будет использоваться как вид пространства имен при обращении к импорту.

// exportN
// Название экспортируемых товаров.

// aliasN
// Имена, которые будут ссылаться на именованный импорт.

myModule.doAllTheAmazingThings();