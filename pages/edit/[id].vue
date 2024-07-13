<script lang="ts" setup>
const route = useRoute()

const { getCandidateById } = useCandidatesStore()

const candidate = getCandidateById(Number(route.params.id))
</script>

<template>
  <div>
    <QBtn
      flat
      icon="arrow_back"
      to="/"
    />
    <h1 class="text-h3">
      Edit Candidate
    </h1>
    <CandidateForm :candidate="candidate" />
  </div>
</template>
