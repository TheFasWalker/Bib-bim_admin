<script setup lang="ts">
import Pagination from '../components/pagination/Pagination.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import LessonPreview from '../components/lessons/LessonPreview.vue';
const data = [
    {
        'id':'11',
        'title':'title1',
        'imgUrl':'https://avatars.mds.yandex.net/i?id=7c294aa45665ea7566ae2e4e3960f943_l-5129576-images-thumbs&n=13',
        'isPubllished':false,
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error possimus exercitationem deleniti maiores. Asperiores reiciendis pariatur rerum, quis officiis repellat repellendus iusto, veniam dolore libero, consectetur corporis vero doloribus! Deserunt nesciunt odio voluptatum animi est repellendus commodi culpa, consectetur voluptas reprehenderit perferendis voluptate quia molestiae exercitationem, perspiciatis quis illum?"'
    },
    {
        'id':'123',
        'title':'title12',
        'imgUrl':'',
        'isPubllished':true,
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error possimus exercitationem deleniti maiores. Asperiores reiciendis pariatur rerum, quis officiis repellat repellendus iusto, veniam dolore libero, consectetur corporis vero doloribus! Deserunt nesciunt odio voluptatum animi est repellendus commodi culpa, consectetur voluptas reprehenderit perferendis voluptate quia molestiae exercitationem, perspiciatis quis illum?"'
    }
]
</script>

<template>
    <MainLauout>
        <SubHeader
            title="Уроки"
            nav="home"
            createPage="createLesson"/>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

            <LessonPreview v-for=" elem in data" :post="elem"/>


        </div>
        <Pagination/>
    </MainLauout>
</template>