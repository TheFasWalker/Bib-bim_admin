<script setup lang="ts">
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import Pagination from '../components/pagination/Pagination.vue';
import UsersPreview from '../components/users/usersPreview.vue';
</script>

<template>
    <MainLauout>
        <SubHeader
        title="Список пользлователей"
        nav="home"
        createPage="createUser"/>

    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="">
                <div class="grid grid-cols-[1fr_1fr_1fr_200px]">
                    <span class=" py-2 px-2">Имя</span>
                    <span class=" py-2 px-2">email</span>
                    <span class=" py-2 px-2">роль</span>
                    <div class=" py-2 px-2"> управление</div>
                </div>
            </div>
            <UsersPreview
                id="userId"
                name="UserName"
                email="email@email.email"
                role="admin"
            />

            <UsersPreview
                id="userId"
                name="UserName2"
                email="email@email2.email2"
                role="manager"
            />
            <UsersPreview
                id="userId"
                name="UserName2"
                email="email@email2.email2"
                role="partner"
            />
        </div>
    </section>

        <Pagination/>
    </MainLauout>
</template>