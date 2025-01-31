import { defineStore } from 'pinia'
import type { Candidate } from '@/models/candidate'

export const useCandidatesStore = defineStore('candidates', () => {
  const candidates = ref<Candidate[]>([
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      bio: 'Software engineer with 5 years of experience in full-stack development.',
      skills: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
      resumeFile: 'resumes/alice_smith.pdf',
      githubUrl: 'https://github.com/alicesmith',
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob.johnson@example.com',
      bio: 'DevOps specialist with a passion for automation and cloud infrastructure.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      resumeFile: 'resumes/bob_johnson.pdf',
      githubUrl: 'https://github.com/bobjohnson',
    },
    {
      id: 3,
      firstName: 'Charlie',
      lastName: 'Williams',
      email: 'charlie.williams@example.com',
      bio: 'Front-end developer focused on creating beautiful and responsive web applications.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
      resumeFile: 'resumes/charlie_williams.pdf',
      githubUrl: 'https://github.com/charliewilliams',
    },
    {
      id: 4,
      firstName: 'Dana',
      lastName: 'Brown',
      email: 'dana.brown@example.com',
      bio: 'Data scientist with expertise in machine learning and data visualization.',
      skills: ['Python', 'R', 'TensorFlow', 'Tableau'],
      resumeFile: 'resumes/dana_brown.pdf',
      githubUrl: 'https://github.com/danabrown',
    },
    {
      id: 5,
      firstName: 'Evan',
      lastName: 'Davis',
      email: 'evan.davis@example.com',
      bio: 'Backend developer with a strong background in database management and API development.',
      skills: ['Java', 'Spring Boot', 'SQL', 'REST APIs'],
      resumeFile: 'resumes/evan_davis.pdf',
      githubUrl: 'https://github.com/evandavis',
    },
    {
      id: 6,
      firstName: 'Fiona',
      lastName: 'Miller',
      email: 'fiona.miller@example.com',
      bio: 'Full-stack developer experienced in building scalable web applications.',
      skills: ['JavaScript', 'Node.js', 'Express', 'Angular'],
      resumeFile: 'resumes/fiona_miller.pdf',
      githubUrl: 'https://github.com/fionamiller',
    },
    {
      id: 7,
      firstName: 'George',
      lastName: 'Martinez',
      email: 'george.martinez@example.com',
      bio: 'Mobile developer specializing in iOS and Android app development.',
      skills: ['Swift', 'Kotlin', 'Flutter', 'React Native'],
      resumeFile: 'resumes/george_martinez.pdf',
      githubUrl: 'https://github.com/georgemartinez',
    },
    {
      id: 8,
      firstName: 'Hannah',
      lastName: 'Garcia',
      email: 'hannah.garcia@example.com',
      bio: 'UI/UX designer with a strong focus on user-centered design principles.',
      skills: ['Sketch', 'Figma', 'Adobe XD', 'User Research'],
      resumeFile: 'resumes/hannah_garcia.pdf',
      githubUrl: 'https://github.com/hannahgarcia',
    },
    {
      id: 9,
      firstName: 'Ivan',
      lastName: 'Rodriguez',
      email: 'ivan.rodriguez@example.com',
      bio: 'Cybersecurity expert with experience in network security and ethical hacking.',
      skills: ['Penetration Testing', 'Network Security', 'Python', 'Metasploit'],
      resumeFile: 'resumes/ivan_rodriguez.pdf',
      githubUrl: 'https://github.com/ivanrodriguez',
    },
    {
      id: 10,
      firstName: 'Julia',
      lastName: 'Wilson',
      email: 'julia.wilson@example.com',
      bio: 'Cloud architect with extensive experience in cloud infrastructure and DevOps practices.',
      skills: ['AWS', 'Azure', 'Terraform', 'Kubernetes'],
      resumeFile: 'resumes/julia_wilson.pdf',
      githubUrl: 'https://github.com/juliawilson',
    },
  ])

  const addCandidate = (candidate: Candidate) => {
    candidates.value.unshift(candidate)
  }

  const getCandidateById = (id: number) => {
    return candidates.value.find(candidate => candidate.id === id)
  }

  return {
    candidates,
    addCandidate,
    getCandidateById,
  }
})
