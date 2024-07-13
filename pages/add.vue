<script lang="ts" setup>
import type { Candidate } from '@/models/candidate'

const { addCandidate } = useCandidatesStore()

const onSubmit = (candidate: Candidate) => {
  addCandidate(candidate)
  navigateTo('/')
}
</script>

<template>
  <div>
    <QBtn
      flat
      icon="arrow_back"
      to="/"
    />
    <h1 class="text-h3">
      Add Candidate
    </h1>
    <CandidateForm @submit="onSubmit" />
  </div>
</template>
