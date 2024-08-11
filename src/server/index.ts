import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

export default handle(app)

if (import.meta.main) {
  serve(app)
}
