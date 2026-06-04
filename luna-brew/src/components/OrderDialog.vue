<template>
  <v-dialog v-model="orderDialog" max-width="520" persistent>
    <v-card rounded="0" color="#13100d" border="primary opacity-30">
      <v-card-title class="dialog-title pa-6 pb-2">
        <span>Забронировать стол</span>
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" color="primary" @click="orderDialog = false" />
      </v-card-title>
      <v-card-text class="pa-6 pt-2">
        <p class="dialog-sub mb-6">Мы подберём стол под текущую фазу луны ☽</p>
        <v-text-field
          v-model="form.name"
          label="Ваше имя"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          class="mb-3"
        />
        <v-text-field
          v-model="form.phone"
          label="Телефон"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          class="mb-3"
          prepend-inner-icon="mdi-phone"
        />
        <v-text-field
          v-model="form.date"
          label="Дата и время"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          class="mb-3"
          prepend-inner-icon="mdi-calendar-moon"
          placeholder="25 июля, 19:00"
        />
        <v-text-field
          v-model="form.guests"
          label="Количество гостей"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          class="mb-3"
          prepend-inner-icon="mdi-account-group"
          type="number"
          min="1"
          max="10"
        />
        <v-textarea
          v-model="form.wish"
          label="Пожелания (необязательно)"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          rows="2"
        />
      </v-card-text>
      <v-card-actions class="pa-6 pt-0">
        <v-btn
          block
          color="primary"
          size="large"
          rounded="0"
          :loading="submitting"
          @click="submitOrder"
        >
          Отправить бронирование
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-snackbar
    v-model="snackbar"
    color="success"
    location="bottom right"
    :timeout="4000"
    rounded="0"
  >
    <v-icon class="mr-2">mdi-check-circle</v-icon>
    Бронирование принято! Ждём вас ☽
    <template #actions>
      <v-btn variant="text" @click="snackbar = false">✕</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { useOrder } from '../composables/useOrder.js'

const { orderDialog, snackbar, submitting, form, submitOrder } = useOrder()
</script>
