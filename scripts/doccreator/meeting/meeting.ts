import { getDate, getDMYDateString, getWeekNumber } from '../dep.ts'
import { agendaMarkdown, meetingMarkdown } from './markdown.ts'

export async function createMeeting() {
  console.log('Creating meeting....\n')
  await Deno.mkdir('meetings').catch(() => {})
  const d = await getDate()
  const dateString = getDMYDateString(d, '/')
  const getMeetingFileName = (prefix: string, date: Date) =>
    `meetings/${getWeekNumber(date)}_${prefix}_${getDMYDateString(date, '_')}.md`

  Deno.writeFile(
    `${getMeetingFileName('S', d)}`,
    new TextEncoder().encode(meetingMarkdown(dateString))
  )
  Deno.writeFile(
    `${getMeetingFileName('A', d)}`,
    new TextEncoder().encode(agendaMarkdown(dateString))
  )
}
