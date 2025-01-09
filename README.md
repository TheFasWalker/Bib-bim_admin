## Что устанорвлено:
<ul>
    <li>Vue3</li>
    <li>pinia</li>
    <li>ts</li>
    <li>tailwindCss стили компонентов берутся c <a target="_blank" href="https://flowbite.com/">flowbite</a></li>
</ul>

# Запуск проекта
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