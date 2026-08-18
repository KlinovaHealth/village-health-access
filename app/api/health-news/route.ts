import { NextResponse } from 'next/server'

export const revalidate = 43200 // refresh every 12 hours

export async function GET() {
  try {
    const res = await fetch(
      'https://api.reliefweb.int/v1/reports?' +
        'appname=villagehealthaccess.org' +
        '&filter[operator]=AND' +
        '&filter[conditions][0][field]=primary_country.iso3' +
        '&filter[conditions][0][value][]=TGO' +
        '&filter[conditions][0][value][]=GHA' +
        '&filter[conditions][0][value][]=BEN' +
        '&filter[conditions][0][value][]=NGA' +
        '&filter[conditions][0][value][]=BFA' +
        '&filter[conditions][1][field]=theme.name' +
        '&filter[conditions][1][value][]=Health' +
        '&sort[]=date.created:desc' +
        '&limit=7' +
        '&fields[include][]=title' +
        '&fields[include][]=url' +
        '&fields[include][]=date.created' +
        '&fields[include][]=source.name' +
        '&fields[include][]=body',
      { next: { revalidate: 43200 } }
    )

    if (!res.ok) throw new Error(`ReliefWeb error: ${res.status}`)

    const json = await res.json()
    const items = (json.data ?? []).map((item: any) => {
      const f = item.fields
      const rawDate = f['date.created'] ?? f.date?.created ?? ''
      const dateStr = rawDate
        ? new Date(rawDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
        : ''
      const body: string = f.body ?? ''
      const excerpt = body.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200) + '...'
      const source = Array.isArray(f['source.name'])
        ? f['source.name'][0]
        : f.source?.[0]?.name ?? 'ReliefWeb'

      return {
        title: f.title ?? '',
        url: f.url ?? `https://reliefweb.int/node/${item.id}`,
        date: dateStr,
        source,
        excerpt,
      }
    })

    return NextResponse.json({ items }, {
      headers: { 'Cache-Control': 's-maxage=43200, stale-while-revalidate=3600' }
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message, items: [] }, { status: 200 })
  }
}
