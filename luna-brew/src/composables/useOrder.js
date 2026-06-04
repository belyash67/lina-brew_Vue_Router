import { ref, inject, provide } from 'vue'

const ORDER_KEY = Symbol('luna-order')

export function provideOrder() {
  const orderDialog = ref(false)
  const snackbar = ref(false)
  const submitting = ref(false)
  const form = ref({ name: '', phone: '', date: '', guests: 2, wish: '' })

  function openOrder() {
    orderDialog.value = true
  }

  function submitOrder() {
    submitting.value = true
    setTimeout(() => {
      submitting.value = false
      orderDialog.value = false
      snackbar.value = true
      form.value = { name: '', phone: '', date: '', guests: 2, wish: '' }
    }, 1500)
  }

  const api = {
    orderDialog,
    snackbar,
    submitting,
    form,
    openOrder,
    submitOrder,
  }

  provide(ORDER_KEY, api)
  return api
}

export function useOrder() {
  const order = inject(ORDER_KEY)
  if (!order) throw new Error('useOrder() must be used inside App with provideOrder()')
  return order
}
