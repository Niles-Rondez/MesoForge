export type Session = {
  day: number
  exercises: {
    exerciseId: string
    prescription: SetPrescription
  }[]
}
