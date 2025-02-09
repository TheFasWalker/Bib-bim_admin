# О проекте:
веб интерфейс для мобильног оприложения на kotlin
Разработка backend API происходит паралельно с Веб интерфейсом

## Что есть в проекте:
Основная часть это Vue3 + ts composition API с vite
<ul>
    <li>Стейт менеджер : pinia</li>
    <li>Работа с формами : vee-validate + yup</li>
    <li>Стили : tailwindCss <a target="_blank" href="https://flowbite.com/">flowbite</a> + postcss</li>
    <li>Дополнительные пакеты :<ol>
    <li>quill</li>
    <li>vue3-uuid</li>
    <li>vue-router</li>
    <li>vite-plugin-vue-devtools + vue/devtools-api + vitejs/plugin-vue</li>    
    </ol></li>

</ul>

## Запуск проекта
1. Сделать копию .env.example (в корне проекта) -> переименовать копию в .env
2. Заполнить файл .env 
3. npm install
4. npm run dev

## Разработка 
Так как с сервера возможны ошибки CORS - в проект добавлен makefile  с командами для запуска chrome-browser в режиме отключенной защиты CORSE</br>
Команды для запуска : </br>
`make chrome` - для Linux </br>
`make chromeOS` - для mac </br>
`make chromeWin` - для win </br>


### Особенности .env 
1. Если в `.env` файле прописать данные для `ROOT_ADMIN_LOGIN` и `ROOTD_AMIN_PASSWORD` то они будут подставляться при входе, в противном случае - будет запрос данных для входа
2. **Обязательно** нужно заполнить  все переменные с постфиксом URL 
3. **Обязательно** нужно заполнить переменные с постфиксом `ROLE_CODE`