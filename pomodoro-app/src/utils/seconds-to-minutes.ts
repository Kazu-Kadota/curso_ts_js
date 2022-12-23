import { zeroLeft } from "./zero-left"

export function secondsToMinutes(mainTime: number): string {
  const min = zeroLeft((mainTime / 60) % 60)
  const sec = zeroLeft((mainTime % 60) % 60)
  return `${min}:${sec}`
}
