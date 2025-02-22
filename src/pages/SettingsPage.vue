<script setup lang="ts">
    import { ref } from 'vue';
    import TogglerCheckbox from '../components/forms/components/TogglerCheckbox.vue';
    import MainLauout from '../components/lauouts/MainLauout.vue';
    import RaidioDropDown from '../components/forms/components/RaidioDropDown.vue';
    import ButtonWithSubmit from '../components/ui/ButtonWithSubmit.vue';
    import ButtonGreen from '../components/ui/ButtonGreen.vue';
    import SubHeader from '../components/general/SubHeader.vue';
    const checkboxState1 = ref(false)
    const checkboxState2 = ref(false)
    const checkboxState3 = ref(false)
    const checkboxState4 = ref(false)
    const checkboxState5 = ref(false)
    const selectedValue = ref('')
    const dataRadio = [
    {
        title: 'title1',
        value:'val1'
    },
    {
        title: 'title2',
        value:'val2'
    },
    {
        title: 'title3',
        value:'val3'
    }
    ]
    const confirtmSettings =()=>{
        alert('данные отправлены на сервер')
    }
</script>

<template>
       <MainLauout>
        <SubHeader
            title="Настройки сервера"
            nav="home"
            />
        <div class=" flex flex-col gap-4">
            <h1>Настройки сервера</h1>
            <div class="flex gap-8 flex-row">
                <div class=" flex flex-col gap-2 py-4 shadow-md rounded-lg p-5 w-fit">
                    <h2 class=" font-bold">Настройки тип 1</h2>
                    <TogglerCheckbox
                    title="Настройка 1"
                    name="settingName1"
                    v-model="checkboxState1"/>

                    <TogglerCheckbox
                    title="Настройка 2"
                    name="settingName2"
                    v-model="checkboxState2"/>

                    <TogglerCheckbox
                    title="Настройка 3"
                    name="settingName3"
                    v-model="checkboxState3"/>

                    <TogglerCheckbox
                    title="Настройка 4"
                    name="settingName4"
                    v-model="checkboxState4"/>

                    <TogglerCheckbox
                    title="Настройка 5"
                    name="settingName5"
                    v-model="checkboxState5"/>
                </div>
                <div class="flex flex-col gap-2 py-4 shadow-md rounded-lg p-5 w-72">
                    <RaidioDropDown
                        title="title"
                        :data="dataRadio"
                        v-model:modelValue="selectedValue"
                        name="radioName"
                        baseText="Базовый текст"

                    />
                </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
                <ButtonWithSubmit
                @confirm="confirtmSettings()"
                title="Сохранить изменения"/>
                <ButtonGreen
                title="Отменить изменения"
                />
            </div>
        </div>
    </MainLauout>
</template>