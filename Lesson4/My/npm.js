ОПЦИЯ 1: 
// Установить глобально 
npm установить webpack --g

// Используем его в терминале 
$ webpack // <- Генерируем пакет, используя webpack.config.js

ВАРИАНТ 2:
// Устанавливаем его локально и добавляем в package.json 
npm install webpack --save

// Добавить его в скрипт package.json 
«scripts»: { 
«build»: «webpack --config webpack.config.prod.js -p», 
... 
}
// Используйте его, выполнив следующее: 
" npm run build "
/////////////////
ОПЦИЯ 1:
// Установить глобально 
npm установить webpack-dev-server --save
// Используем его в терминале 
$ webpack-dev-server --inline --hot
ВАРИАНТ 2:
// Добавить его в скрипт package.json 

«scripts»: { 
«start»: «webpack-dev-server --inline --hot», 
... 
}
// Используем его, запустив 
$ npm start
Откройте браузер по адресу: 
http: // localhost: 8080

///////////
// Через CLI 
webpack-dev-server --hot --inline
// Через webpack.config.js 
devServer: { 
inline: true, 
hot: true 
}
//package.json 
{ 
    scripts: 
       {«start»: «webpack-dev-server --hot --inline»} 
    }
////////////
// Когда источник изменяется, все 3 опции генерируют новый пакет, но, 
 
// 1. не перезагружает страницу браузера 
$ webpack-dev-server
// 2. перезагружает всю страницу браузера 
$ webpack-dev-server --inline
// 3. перезагружает только модуль (HMR) или всю страницу в случае сбоя HMR 
$ webpack-dev-server --inline --hot
//////