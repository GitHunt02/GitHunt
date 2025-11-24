import { NextResponse } from 'next/server'

// API endpoints for bounty platforms
const PLATFORM_APIS = {
  algora: 'https://api.algora.io/v1/bounties',
  gitcoin: 'https://grants-stack-indexer-v2.gitcoin.co/graphql',
  issuehunt: 'https://api.issuehunt.io/v1/bounties',
  polar: 'https://api.polar.sh/v1/issues'
}

// Standardize bounty data from different platforms
function standardizeBounty(bounty: any, platform: string) {
  // Common structure for all bounties
  return {
    id: bounty.id || bounty._id || `${platform}-${Date.now()}`,
    title: bounty.title || bounty.name || 'Untitled Bounty',
    description: bounty.description || bounty.body || 'No description',
    reward: bounty.reward || bounty.amount || bounty.value || 0,
    difficulty: bounty.difficulty || 'Medium',
    language: bounty.language || bounty.primary_language || 'Unknown',
    platform: platform,
    tags: bounty.tags || bounty.labels || [],
    timeEstimate: bounty.time_estimate || '3-5 days',
    applicants: bounty.applicants || bounty.submissions || 0,
    url: bounty.url || bounty.html_url || '#',
    status: bounty.status || 'open',
    createdAt: bounty.created_at || new Date().toISOString()
  }
}

// Fetch from Algora (public bounties)
async function fetchAlgoraBounties() {
  try {
    // Algora has a public GraphQL API
    const query = `
      query {
        bounties(first: 20, orderBy: REWARD_DESC) {
          edges {
            node {
              id
              title
              description
              reward
              status
              organization {
                name
              }
              repository {
                name
              }
            }
          }
        }
      }
    `
    // Note: In production, use actual API endpoint
    // For now, return sample data
    return [
      {
        id: 'algo-1',
        title: 'Fix memory leak in React components',
        description: 'Performance issue in large React app',
        reward: 500,
        difficulty: 'Medium',
        language: 'JavaScript',
        platform: 'Algora',
        tags: ['React', 'Performance'],
        timeEstimate: '5-7 days',
        applicants: 12
      }
    ]
  } catch (error) {
    console.error('Algora fetch error:', error)
    return []
  }
}

// Fetch from Gitcoin
async function fetchGitcoinBounties() {
  try {
    // Gitcoin uses GraphQL
    return [
      {
        id: 'git-1',
        title: 'Build REST API for authentication',
        description: 'Secure JWT-based authentication system',
        reward: 800,
        difficulty: 'Hard',
        language: 'Python',
        platform: 'Gitcoin',
        tags: ['Backend', 'Security'],
        timeEstimate: '7-10 days',
        applicants: 15
      }
    ]
  } catch (error) {
    console.error('Gitcoin fetch error:', error)
    return []
  }
}

// Fetch from IssueHunt
async function fetchIssueHuntBounties() {
  try {
    return [
      {
        id: 'ih-1',
        title: 'Implement dark mode theme',
        description: 'Add dark mode with theme persistence',
        reward: 350,
        difficulty: 'Easy',
        language: 'TypeScript',
        platform: 'IssueHunt',
        tags: ['UI/UX', 'Theme'],
        timeEstimate: '3-4 days',
        applicants: 8
      }
    ]
  } catch (error) {
    console.error('IssueHunt fetch error:', error)
    return []
  }
}

// Fetch from Polar
async function fetchPolarBounties() {
  try {
    return [
      {
        id: 'pol-1',
        title: 'Optimize database queries',
        description: 'Improve PostgreSQL performance',
        reward: 600,
        difficulty: 'Medium',
        language: 'SQL',
        platform: 'Polar',
        tags: ['Database', 'Performance'],
        timeEstimate: '4-6 days',
        applicants: 6
      }
    ]
  } catch (error) {
    console.error('Polar fetch error:', error)
    return []
  }
}

// Main GET endpoint
export async function GET(request: Request) {
  try {
    // Fetch from all platforms in parallel
    const [algora, gitcoin, issuehunt, polar] = await Promise.all([
      fetchAlgoraBounties(),
      fetchGitcoinBounties(),
      fetchIssueHuntBounties(),
      fetchPolarBounties()
    ])

    // Combine all bounties
    const allBounties = [
      ...algora,
      ...gitcoin,
      ...issuehunt,
      ...polar
    ]

    // Add more sample bounties for demonstration
    const additionalBounties = [
      {
        id: 'op-1',
        title: 'Create mobile-responsive navigation',
        description: 'Build hamburger menu with animations',
        reward: 250,
        difficulty: 'Easy',
        language: 'JavaScript',
        platform: 'Opire',
        tags: ['Mobile', 'UI/UX'],
        timeEstimate: '2-3 days',
        applicants: 20
      },
      {
        id: 'algo-2',
        title: 'Implement WebSocket real-time chat',
        description: 'Real-time messaging with persistence',
        reward: 700,
        difficulty: 'Hard',
        language: 'Node.js',
        platform: 'Algora',
        tags: ['WebSocket', 'Real-time'],
        timeEstimate: '6-8 days',
        applicants: 10
      }
    ]

    const finalBounties = [...allBounties, ...additionalBounties]

    return NextResponse.json({
      success: true,
      count: finalBounties.length,
      bounties: finalBounties,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bounties' },
      { status: 500 }
    )
  }
}