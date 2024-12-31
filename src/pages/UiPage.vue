<script setup lang="ts">
import { ref } from 'vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import PopUpLauout from '../components/lauouts/PopUpLauout.vue';
import ButtonType1 from '../components/ui/ButtonType1.vue';
import ButtonType2 from '../components/ui/ButtonType2.vue';
import CloseButton from '../components/ui/CloseButton.vue';
import Toggler from '../components/uiPageComponents/Toggler.vue';
import Checkbox from '../components/forms/components/Checkbox.vue';
import InputField from '../components/forms/components/InputField.vue';
import Loader from '../components/ui/Loader.vue'
import { SiteState } from '../store/SiteState';
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
<Toggler title="Обертки">
    <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col gap-3">
        <ButtonType2
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
            <ButtonType2
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
        <ButtonType2
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
</div>
    </MainLauout>
</template>