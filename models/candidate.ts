export interface Candidate {
  id: number
  firstName: string
  lastName: string
  email: string
  bio: string
  skills: string[]
  resumeFile: File | string
  githubUrl: string
}
