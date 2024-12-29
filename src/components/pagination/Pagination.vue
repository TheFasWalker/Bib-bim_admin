<template>



<nav class=" w-full flex justify-center">
  <ul class="flex items-center -space-x-px h-10 text-base">
    <PaginationPrev/>
    <PaginationNumber
    :number="1"/>
    <PaginationNumber
    :number="2"
    :activity="true"/>
    <PaginationNumber
    :number="3"/>
    <PaginationNumber
    :number="4"/>
    <PaginationNumber
    :number="5"/>
    <PaginationNext/>
   


  </ul>
</nav>

</template>
<script setup lang="ts">
import PaginationNext from '../pagination/PaginationNext.vue';
import PaginationNumber from '../pagination/PaginationNumber.vue';
import PaginationPrev from '../pagination/PaginationPrev.vue';

</script>