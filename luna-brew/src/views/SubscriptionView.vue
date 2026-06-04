<template>
  <section class="section-subscription page-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="subscription-card" rounded="0" color="surface" border="opacity-20">
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pa-8 pa-md-12">
                <v-chip color="primary" variant="tonal" size="small" class="mb-4">подписка</v-chip>
                <h2 class="subscription-title">Кофе<br />каждую<br /><em>новую луну</em></h2>
                <p class="subscription-desc mt-4">
                  Раз в месяц, в новолуние, мы отправляем вам набор: 250 г свежеобжаренного зерна + карточка с инструкцией заваривания.
                </p>
                <v-btn
                  color="primary"
                  size="large"
                  class="mt-6"
                  rounded="0"
                  prepend-icon="mdi-moon-new"
                  @click="openOrder"
                >
                  Подписаться — 1 490 ₽/мес
                </v-btn>
              </v-col>
              <v-col cols="12" md="6" class="subscription-visual pa-8 pa-md-12">
                <div class="sub-phases">
                  <div v-for="p in subPerks" :key="p.title" class="sub-perk">
                    <span class="sub-perk-icon">{{ p.icon }}</span>
                    <div>
                      <div class="sub-perk-title">{{ p.title }}</div>
                      <div class="sub-perk-desc">{{ p.desc }}</div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { subPerks } from '../data/site.js'
import { useStore } from 'vuex'

const store = useStore()

function openOrder() {
  store.dispatch('booking/openOrder')
}
</script>
