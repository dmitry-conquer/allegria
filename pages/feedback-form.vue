<template>
  <div class="mx-auto max-w-4xl px-4 py-24 sm:py-32">
    <div class="mb-8">
      <h1 class="mb-2 text-center text-2xl font-medium uppercase sm:text-3xl">Зворотній зв'язок</h1>
      <div class="text-center">
        <p>Залишилися питання або бажаєте отримати консультацію?</p>
        <p>Залиште свої контактні дані, ми зв'яжимося з вами найближчим часом</p>
        <p>Після відправки Ви отримаєте повідомлення на свою електронну адресу.</p>
      </div>
    </div>
    <form @submit.prevent="handleSendForm">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="sr-only"
            >Вкажіть ім'я</label
          >
          <input
            type="text"
            id="first-name"
            class="w-full border-b-2 border-primary-dark/70 py-2 transition-colors focus:border-primary-dark focus:outline-none"
            placeholder="Ім'я"
            v-model="firstName" />
        </div>
        <div>
          <label
            for="last-name"
            class="sr-only"
            >Вкажіть прізвище</label
          >
          <input
            type="text"
            id="last-name"
            class="w-full border-b-2 border-primary-dark/70 py-2 transition-colors focus:border-primary-dark focus:outline-none"
            placeholder="Прізвище"
            v-model="lastName" />
        </div>
        <div>
          <label
            for="tel"
            class="sr-only"
            >Вкажіть телефон</label
          >
          <input
            v-maska
            data-maska="+380 ## ###-##-##"
            type="text"
            id="tel"
            class="w-full border-b-2 border-primary-dark/70 py-2 transition-colors focus:border-primary-dark focus:outline-none"
            placeholder="Телефон"
            v-model="tel" />
        </div>
        <div>
          <label
            for="mail"
            class="sr-only"
            >Вкажіть пошту</label
          >
          <input
            type="text"
            id="mail"
            class="w-full border-b-2 border-primary-dark/70 py-2 transition-colors focus:border-primary-dark focus:outline-none"
            placeholder="Пошта"
            v-model="email" />
        </div>
      </div>
      <div class="mt-6 space-y-2">
        <p>Оберіть дату та час, ми зв'яжимося, коли Вам буде зручно</p>
        <VueDatePicker v-model="date" locale="uk" cancelText="Закрити" selectText="Обрати"   placeholder="Оберіть дату та час для зв'язку"></VueDatePicker>
      </div>
      <div class="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          id="check-policy"
          v-model="policy"
          class="h-5 w-5 accent-secondary" />
        <label
          class="text-sm sm:text-base"
          for="check-policy"
          >Я погоджуюся з
          <NuxtLink
            to="/policy"
            class="text-secondary hover:underline"
            >політикою конфіденційності</NuxtLink
          ></label
        >
      </div>
      <div class="mt-8 flex flex-col items-center justify-center gap-4">
        <div>
          <SpinnerLoader
            v-if="loading"
            sizes="w-7 h-7" />
          <button
            v-else
            type="submit"
            class="rounded-sm bg-primary-dark px-4 py-3 text-base sm:text-2xl uppercase text-white transition-colors hover:bg-primary-dark/90">
            НАДІСЛАТИ
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const firstName = ref("");
const lastName = ref("");
const tel = ref("");
const email = ref("");
const policy = ref(false);
const date = ref(null);
const loading = ref(false);

const handleSendForm = async () => {
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    tel: tel.value,
    email: email.value,
    policy: policy.value,
    date: date.value,
  };
  useSendMail(data);
};
</script>
