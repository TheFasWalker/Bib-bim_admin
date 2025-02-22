<script setup lang="ts">
import MainLauout from '../components/lauouts/MainLauout.vue';
import { ref } from 'vue';
import ButtonWhite from '../components/ui/ButtonWhite.vue';

const fileInput = ref(null);
const selectedFile = ref(null);
const uploadStatus = ref('');
const acsesskeyString = import.meta.env.VITE_MINIO_ACCESS_KEY_ID
const secretKeyString = import.meta.env.VITE_MINIO_SECRET_ACCESS_KEY
const urlEndpoint = import.meta.env.VITE_API_PHOTOS_URL
import { apiDeteteFileFromMinio } from '../utils/minio/apiDeteteFileFromMinio';
import RaidioDropDown from '../components/forms/components/RaidioDropDown.vue';
const handleFileChange = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadFile = async () => {
    if (!selectedFile.value) {
      return;
    }

    const fileBlob = new Blob([selectedFile.value], {type: selectedFile.value.type});
    // const formData = new FormData();
    // formData.append('file', selectedFile.value);
    // formData.append('bucket', bucket);
    // formData.append('accessKey', acsesskeyString);
    // formData.append('secretKey', secretKeyString);
    uploadStatus.value = 'Загрузка...';
    try {
        const response = await fetch(`${urlEndpoint}/feedpost/${selectedFile.value.name}`, {
           method: 'PUT',
           body: fileBlob,
           headers: {
                'x-amz-acl': 'public-read',
              'Content-Type': selectedFile.value.type,
              'Content-Length': selectedFile.value.size.toString()
           }
        });

        if (response.ok) {
          uploadStatus.value = 'Файл успешно загружен!';
          fileInput.value.value = '';
          selectedFile.value = null;
        } else {
          const errorData = await response.json();
          uploadStatus.value = `Ошибка загрузки: ${response.status} - ${errorData.message || 'Неизвестная ошибка'}`;
        }

    } catch(error) {
      console.error('Ошибка загрузки', error);
      uploadStatus.value = 'Ошибка загрузки: ' + error.message;
    }
};
const fileUrl = '/feedpost/211431af-f630-4261-b625-d73538b702d8_65b042d6-0d47-4c2d-9837-456fb4231e8b.jpg'
const deleteElenemt =()=>{
  apiDeteteFileFromMinio(fileUrl)
}
const data = [
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
const selectedValue = ref('')

</script>

<template>
    <MainLauout>
        <h1>HomePage</h1>
        <RaidioDropDown
        :data="data"
        v-model:modelValue="selectedValue"
        name="radioName"
        title="Статус радиоБатон"
/>
        <div>
            <input type="file" @change="handleFileChange" ref="fileInput" />
            <button @click="uploadFile" :disabled="!selectedFile">Загрузить</button>
            <p v-if="uploadStatus">{{ uploadStatus }}</p>
        </div>
        <ButtonWhite
        @click="deleteElenemt"
        title="delete from minio"/>
    </MainLauout>
</template>