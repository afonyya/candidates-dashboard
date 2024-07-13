<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string, array, mixed } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import type { Candidate } from '@/models/candidate'

const props = withDefaults(defineProps<{
  candidate?: Partial<Candidate>
}>(), {
  candidate: () => ({
    skills: [''],
  }),
})

const schema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().required().email(),
  bio: string().optional(),
  skills: array().of(string().required()).min(1),
  resumeFile: mixed<File>().required('Resume is required').test('fileSize', 'File must be less than 2MB', (value) => {
    return !value || (value && value.size <= 2 * 1024 * 1024)
  }),
  githubUrl: string().optional().url(),
})

const { defineField, handleSubmit, errors } = useForm<Candidate>({
  validationSchema: toTypedSchema(schema),
  initialValues: props.candidate,
})

const quasarConfig = (state: { errors: string[] }) => ({
  props: {
    'error': !!state.errors[0],
    'error-message': state.errors[0],
  },
})

const [firstName, firstNameProps] = defineField('firstName', quasarConfig)
const [lastName, lastNameProps] = defineField('lastName', quasarConfig)
const [email, emailProps] = defineField('email', quasarConfig)
const [bio, bioProps] = defineField('bio', quasarConfig)
const [githubUrl, githubUrlProps] = defineField('githubUrl', quasarConfig)
const { fields, push, remove } = useFieldArray<string>('skills')
const { value: resumeFile, errorMessage: resumeFileErrorMessage, handleChange: handleResumeFileChange, handleBlur: handleResumeFileBlur } = useField('resumeFile')

const emit = defineEmits<{
  submit: [candidate: Candidate]
}>()

const onSubmit = handleSubmit((candidate) => {
  emit('submit', candidate)
})
</script>

<template>
  <QForm @submit="onSubmit">
    <QInput
      v-model="firstName"
      v-bind="firstNameProps"
      label="First name"
      placeholder="Enter first name"
    />
    <QInput
      v-model="lastName"
      v-bind="lastNameProps"
      label="Last name"
      placeholder="Enter last name"
    />
    <QInput
      v-model="email"
      v-bind="emailProps"
      label="Email"
      placeholder="Enter email"
    />
    <QInput
      v-model="bio"
      v-bind="bioProps"
      label="BIO"
      placeholder="Enter BIO"
      type="textarea"
    />
    <QInput
      v-for="(field, index) in fields"
      :key="field.key"
      v-model="field.value"
      label="Skill"
      placeholder="Enter skill"
      :error="!!errors[`skills[${index}]` as `skills.${number}`]"
      :error-message="errors[`skills[${index}]` as `skills.${number}`]"
    >
      <template #append>
        <QBtn
          v-if="fields.length > 1"
          flat
          round
          icon="delete"
          @click="remove(index)"
        />
      </template>
    </QInput>
    <QBtn
      flat
      icon="add"
      label="Add Skill"
      class="full-width"
      @click="push('')"
    />
    <QFile
      v-model="resumeFile"
      label="Resume file"
      placeholder="Choose resume file"
      :error="!!resumeFileErrorMessage"
      :error-message="resumeFileErrorMessage"
      @blur="handleResumeFileBlur"
      @change="handleResumeFileChange"
    >
      <template #prepend>
        <q-icon name="attach_file" />
      </template>
    </QFile>
    <QInput
      v-model="githubUrl"
      v-bind="githubUrlProps"
      label="Github URL"
      placeholder="Enter Github URL"
    />
    <div class="row justify-end q-mt-md">
      <QBtn
        color="primary"
        label="Submit"
        type="submit"
        size="lg"
      />
    </div>
  </QForm>
</template>
