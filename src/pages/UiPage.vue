<script setup lang="ts">
import { ref } from 'vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import PopUpLauout from '../components/lauouts/PopUpLauout.vue';
import ButtonWhite from '../components/ui/ButtonWhite.vue';
import ButtonBlue from '../components/ui/ButtonBlue.vue';
import CloseButton from '../components/ui/CloseButton.vue';
import Toggler from '../components/uiPageComponents/Toggler.vue';
import Checkbox from '../components/forms/components/Checkbox.vue';
import InputField from '../components/forms/components/InputField.vue';
import Loader from '../components/ui/Loader.vue'
import { SiteState } from '../store/SiteState';
import Icons from '../components/ui/Icons.vue';
import DeleteButton from '../components/ui/DeleteButton.vue';
import ButtonGreen from '../components/ui/ButtonGreen.vue';
const popUpLauoutState = ref(false)
const checkboxState = ref(false)
const textState = ref('')
const loaderState = ref(false)

const showLoader = () => {
    loaderState.value = true
    setTimeout(() => {
        loaderState.value = false
}, 3000);
}
const state = SiteState()
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
            <ButtonWhite
            title="текст кнопки"/>
            <div class="flex flex-col gap-2">
                <span>Название : ButtonWhite </span>
                <div class="">
                    <span>пропсы:</span>
                    <ul>
                        <li>title : String</li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="flex flex-col gap-3">
            <ButtonBlue
            title="текст кнопки"/>
            <div class="flex flex-col gap-2">
                <span>Название : ButtonBlue </span>
                <div class="">
                    <span>пропсы:</span>
                    <ul>
                        <li>title : String</li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="flex flex-col gap-3">
            <ButtonGreen
            title="текст кнопки"/>
            <div class="flex flex-col gap-2">
                <span>Название : ButtonTyp3 </span>
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
        <div class="flex flex-col gap-3">
            <DeleteButton
            @confirm = "console.log('asd')"/>
            <div class="flex flex-col gap-2">
                <span>Название : DeleteButton </span>
                <div class="flex flex-col">
                    <span>Удаление с подтверждением</span>
                    <span>Эмитит событие @confirm</span>
                </div>

            </div>
        </div>
    </div>
</Toggler>
<Toggler title="Обертки">
    <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col gap-3">
        <ButtonBlue
        @click="popUpLauoutState =true"
        title="popupWrapper"/>
        <PopUpLauout
            v-if="popUpLauoutState"
            @close-popup="popUpLauoutState =false"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dolorem.
        </PopUpLauout>
        <div class="flex flex-col gap-2">
                <span>Название : PopUpLauout </span>
                <div class="">
                    <span>пропсы:</span>
                    <ul>
                        <li>slot : HTML</li>
                        <li>закрытие : @close-popup</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</Toggler>
<Toggler title="Элементы формы">
    <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col gap-3">
            <Checkbox
                title="title"
                name="name"
                v-model="checkboxState"/>
                <div class="flex flex-col gap-2">
                <span>Название : Checkbox </span>
                <div class="">
                    <span>пропсы:</span>
                    <ul>
                        <li>title : String</li>
                        <li>name : String</li>
                        <li>v-model</li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="flex flex-col gap-3">
            <InputField
                title="Название"
                name="title"
                type="text"
                placeholder="Название урока"
                v-model="textState"/>

                <div class="flex flex-col gap-2">
                <span>Название : InputField </span>
                <div class="">
                    <span>пропсы:</span>
                    <ul>
                        <li>title : String</li>
                        <li>name : String</li>
                        <li>placeholder : String</li>
                        <li>v-model</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</Toggler>
<Toggler title="Прочее">
    <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col gap-3">
            <ButtonBlue
                @click="showLoader"
            title="Загрузчик"/>
            <Loader v-if="loaderState"/>
            <div class="flex flex-col gap-2">
                    <span>Название : Loader </span>
                    <div class="">
                        <span>пропсов нет</span>

                    </div>

                </div>
        </div>
        <div class="flex flex-col gap-3">
        <ButtonBlue
            @click="state.errorText= 'Error text'"
        title="errors"/>
        <div class="flex flex-col gap-2">
                <span>Название : ErrorToast </span>
                <div class="">
                    <span>пропсов нет</span>
                    <span>появляелся есть в стейте errorText !=' '</span>
                </div>

            </div>
        </div>

    </div>

</Toggler>
<Toggler title="Иконки">
    <div class="flex flex-col ">
    <span>название компонента: Icons</span>
<span>iconName : 'users' | 'info' | 'home' | 'help' | 'contacts' | 'exit' | 'left' | 'generate' | 'search' | 'trash' | 'gear'</span>
</div>
<div class="flex flex-wrap gap-3">
    <div class="flex flex-col items-center">
        <Icons
        iconName="users"/>
        <span>users</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="info"/>
        <span>info</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="help"/>
        <span>help</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="contacts"/>
        <span>contacts</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="exit"/>
        <span>exit</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="left"/>
        <span>left</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="generate"/>
        <span>generate</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="home"/>
        <span>home</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="search"/>
        <span>search</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="trash"/>
        <span>trash</span>
    </div>
    <div class="flex flex-col items-center">
        <Icons
        iconName="gear"/>
        <span>gear</span>
    </div>
</div>
</Toggler>
<Toggler
title="ToDo">
<ul>
    <li>недоделан CRUD для пользователей - нет эндпоинта для редактирвоания</li>
    <li>не все ошибки при работе с БД корректно обрабатываются ( работа с пользователями)</li>
    <li></li>
</ul></Toggler>
</div>
    </MainLauout>
</template>