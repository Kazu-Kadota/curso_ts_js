import { zeroLeft } from "./zero-left"

export function secondsToTime(mainTime: number): string {
  const hours = zeroLeft((mainTime / 3600))
  const min = zeroLeft((mainTime / 60) % 60)
  const sec = zeroLeft((mainTime % 60) % 60)
  return `${hours}:${min}:${sec}`
}
