<script lang="ts" setup>
const { candidates } = storeToRefs(useCandidatesStore())

const rows = computed(() => candidates.value.map(candidate => ({
  fullName: `${candidate.firstName} ${candidate.lastName}`,
  email: candidate.email,
  skills: candidate.skills.join(', '),
  id: `${candidate.id}`,
})))
</script>

<template>
  <div>
    <h1 class="text-h3">
      Home Page
    </h1>
    <div class="q-mb-lg">
      <QBtn
        color="primary"
        label="Add Candidate"
        size="lg"
        to="/add"
      />
    </div>
    <CandidatesTable
      :rows="rows"
      @edit="console.log($event)"
    />
  </div>
</template>
