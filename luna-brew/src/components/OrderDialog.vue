<template>
  <v-dialog
    :model-value="orderDialog"
    max-width="520"
    persistent
    @update:model-value="onDialogChange"
  >
    <v-card rounded="0" color="#13100d" border="primary opacity-30">
      <v-card-title class="dialog-title pa-6 pb-2">
        <span>Забронировать стол</span>
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" color="primary" @click="closeOrder" />
      </v-card-title>
      <v-card-text class="pa-6 pt-2">
        <p class="dialog-sub mb-6">Мы подберём стол под {{ currentPhase.name }} {{ currentPhase.icon }}</p>
        <v-text-field
          :model-value="form.name"
          label="Ваше имя"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          class="mb-3"
          @update:model-value="updateField('name', $event)"
        />
        <v-text-field
          :model-value="form.phone"
          label="Телефон"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          class="mb-3"
          prepend-inner-icon="mdi-phone"
          @update:model-value="updateField('phone', $event)"
        />
        <v-text-field
          :model-value="form.date"
          label="Дата и время"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          class="mb-3"
          prepend-inner-icon="mdi-calendar-moon"
          placeholder="25 июля, 19:00"
          @update:model-value="updateField('date', $event)"
        />
        <v-text-field
          :model-value="form.guests"
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
          @update:model-value="updateField('guests', Number($event))"
        />
        <v-textarea
          :model-value="form.wish"
          label="Пожелания (необязательно)"
          variant="outlined"
          color="primary"
          density="comfortable"
          rounded="0"
          rows="2"
          @update:model-value="updateField('wish', $event)"
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
    :model-value="snackbar"
    color="success"
    location="bottom right"
    :timeout="4000"
    rounded="0"
    @update:model-value="setSnackbar"
  >
    <v-icon class="mr-2">mdi-check-circle</v-icon>
    Бронирование принято! Ждём вас ☽
    <template #actions>
      <v-btn variant="text" @click="setSnackbar(false)">✕</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const orderDialog = computed(() => store.state.booking.orderDialog)
const snackbar = computed(() => store.state.booking.snackbar)
const submitting = computed(() => store.state.booking.submitting)
const form = computed(() => store.state.booking.form)
const currentPhase = computed(() => store.getters['moon/currentPhase'])

function onDialogChange(open) {
  if (!open) store.dispatch('booking/closeOrder')
}

function closeOrder() {
  store.dispatch('booking/closeOrder')
}

function updateField(field, value) {
  store.dispatch('booking/updateField', { field, value })
}

function submitOrder() {
  store.dispatch('booking/submitOrder')
}

function setSnackbar(value) {
  store.commit('booking/SET_SNACKBAR', value)
}
</script>
