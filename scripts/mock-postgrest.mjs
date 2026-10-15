#!/usr/bin/env node
/**
 * mock-postgrest.mjs — minimal mock of Supabase PostgREST for form testing.
 *
 * Usage:
 *   node scripts/mock-postgrest.mjs fail   # all inserts return 500
 *   node scripts/mock-postgrest.mjs ok     # all inserts return 201, logs payload
 *
 * Listens on 127.0.0.1:54399 — matches the dummy NEXT_PUBLIC_SUPABASE_URL
 * used in local builds.
 */

import { createServer } from 'http'

const mode = process.argv[2] || 'fail'
const PORT = 54399

const server = createServer((req, res) => {
  const chunks = []
  req.on('data', (c) => chunks.push(c))
  req.on('end', () => {
    const body = Buffer.concat(chunks).toString()
    const path = req.url?.split('?')[0] ?? ''

    // PostgREST insert: POST /rest/v1/<table>
    if (req.method === 'POST' && path.startsWith('/rest/v1/')) {
      if (mode === 'ok') {
        console.log(`[mock] INSERT ${path}`, body.slice(0, 200))
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(body)
      } else {
        console.log(`[mock] FAIL ${path}`)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ code: '42P01', message: 'relation does not exist', hint: '' }))
      }
      return
    }

    // Default: 404
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'not found' }))
  })
})

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[mock-postgrest] mode=${mode} listening on 127.0.0.1:${PORT}`)
})
