<template>
    <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center flex flex-col">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">505</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Что то пошло не по плану</p>
                <p class="mb-4 text-lg font-light text-gray-500 ">Доступ запрещён или страницы не существуцет</p>
                <a href="#" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
                <router-link
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-full  px-5 py-2.5 text-center me-2 mb-2 text-2xl font-bold"
                    :to="{name:  'login' }"
                >
                    На главную
                </router-link>
            
            </div>   
        </div>
    </section>
    </template>