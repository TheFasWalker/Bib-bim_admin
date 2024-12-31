<script setup lang="ts">
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import ButtonType1 from '../components/ui/ButtonType1.vue';
import ButtonType2 from '../components/ui/ButtonType2.vue';
import CloseButton from '../components/ui/CloseButton.vue';

import Toggler from '../components/uiPageComponents/Toggler.vue';
</script>

<template>
    <MainLauout>
        <SubHeader
        title="Компоненты"
        nav="home"/>
<div class="flex flex-col gap-4">
<Toggler title="Кнопки">
    <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col gap-3">
            <ButtonType1
            title="текст кнопки"/>
            <div class="flex flex-col gap-2">
                <span>Название : ButtonType1 </span>
                <div class="">
                    <span>пропсы:</span>
                    <ul>
                        <li>title : String</li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="flex flex-col gap-3">
            <ButtonType2
            title="текст кнопки"/>
            <div class="flex flex-col gap-2">
                <span>Название : ButtonType2 </span>
                <div class="">
                    <span>пропсы:</span>
                    <ul>
                        <li>title : String</li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="flex flex-col gap-3">
            <CloseButton
            class="mx-auto"
            />
            <div class="flex flex-col gap-2">
                <span>Название : CloseButton </span>
                <div class="">
                    <span>пропсов нет</span>
                </div>

            </div>
        </div>
    </div>
</Toggler>

</div>
    </MainLauout>
</template>