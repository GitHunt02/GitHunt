import { NextResponse } from 'next/server'

// Main GET endpoint - calls backend API
export async function GET(request: Request) {
  try {
    // Get query parameters from the request URL
    const url = new URL(request.url)
    const query = url.searchParams.get('query') || ''
    const difficulty = url.searchParams.get('difficulty') || ''
    const language = url.searchParams.get('language') || ''

    // Determine the backend URL based on environment
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8001'

    // Build the API endpoint with query parameters
    let apiUrl = `${backendUrl}/api/bounties`

    // Add search/filter parameters if provided
    if (query || difficulty || language) {
      apiUrl = `${backendUrl}/api/bounties/search?`
      if (query) apiUrl += `query=${encodeURIComponent(query)}&`
      if (difficulty) apiUrl += `difficulty=${encodeURIComponent(difficulty)}&`
      if (language) apiUrl += `language=${encodeURIComponent(language)}&`
      // Remove trailing ampersand
      apiUrl = apiUrl.slice(0, -1)
    }

    // Fetch from backend
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()

    // Return the backend response
    return NextResponse.json({
      success: true,
      count: Array.isArray(data) ? data.length : 0,
      bounties: Array.isArray(data) ? data : data.bounties || [],
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bounties from backend' },
      { status: 500 }
    )
  }
}
