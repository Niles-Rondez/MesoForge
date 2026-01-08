export type Exercise = {
  id: string
  name: string
  primaryMuscles: Record<string, number>
  secondaryMuscles?: Record<string, number>
  fatigueCost: number
  equipment: string[]
  movementPattern: string
}
