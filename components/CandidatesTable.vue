<script lang="ts" setup>
defineProps<{
  rows: {
    fullName: string
    email: string
    skills: string
    id: string
  }[]
}>()

const columns = [
  {
    name: 'fullName',
    label: 'Full Name',
    field: 'fullName',
    align: 'left',
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    align: 'left',
  },
  {
    name: 'skills',
    label: 'Skills',
    field: 'skills',
    align: 'left',
  },
  {
    name: 'action',
    label: 'Action',
    field: 'action',
    align: 'center',
  },
]

const filter = ref('')

const emit = defineEmits<{
  edit: [id: string]
}>()
</script>

<template>
  <QTable
    :columns="columns"
    :rows="rows"
    :filter="filter"
  >
    <template #top>
      <QInput
        v-model="filter"
        debounce="300"
        name="search"
        placeholder="Search"
        color="primary"
        class="col-grow"
      />
    </template>
    <template #body-cell-action="tdProps">
      <QTd :props="tdProps">
        <QBtn
          color="primary"
          icon="edit"
          flat
          round
          @click="emit('edit', tdProps.row.id)"
        />
      </QTd>
    </template>
  </QTable>
</template>
