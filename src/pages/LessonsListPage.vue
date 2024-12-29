<script setup lang="ts">
import Pagination from '../components/pagination/Pagination.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import LessonPreview from '../components/lessons/LessonPreview.vue';
</script>

<template>
    <MainLauout>
        <SubHeader
            title="Уроки"
            nav="home"/>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <LessonPreview
            title="title1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae ratione adipisci? At molestias culpa possimus aspernatur qui in distinctio."/> 
            
            <LessonPreview
            title="title2"/>
            <LessonPreview
            title="title3"/>
            <LessonPreview
            title="title4"/>
            <LessonPreview
            title="title5"/>
            <LessonPreview
            title="title6"/>
            <LessonPreview
            title="title7"/>
            <LessonPreview
            title="title8"/>
        </div>
        <Pagination/>
    </MainLauout>
</template>