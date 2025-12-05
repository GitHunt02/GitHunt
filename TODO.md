# TODO List for GitHunt Features

## 1. Add Wishlist Functionality to Product Cards
- [x] Add a heart icon/button to each bounty card in ProductCards.tsx
- [x] Implement toggle functionality to add/remove from wishlist
- [x] Use localStorage to persist wishlist across sessions
- [x] Style the wishlist button to match the existing theme (pink/purple gradients)

## 2. Create AI Recommendation Component
- [x] Create app/components/AIRecommendation.tsx
- [x] Add loading animation component (spinner or skeleton)
- [x] Display dummy recommended projects based on GitHub profile
- [x] Include attractive animations and match existing design

## 3. Create Leaderboard Component
- [x] Create app/components/Leaderboard.tsx
- [x] Display "Top Open Source Hunters" with dummy profiles and contributions
- [x] Add animations and attractive design matching theme

## 4. Integrate Sign-In and Conditional Rendering
- [x] Add "Connect to GitHub" button in main page (app/page.tsx)
- [x] Use NextAuth to handle GitHub sign-in
- [x] Conditionally render AI Recommendation and Leaderboard after sign-in
- [x] Ensure sections appear seamlessly in the layout

## 5. Update Main Page Layout
- [x] Modify app/page.tsx to include new components
- [x] Position sections appropriately (e.g., after Features or Stats)
- [x] Ensure responsive design and theme consistency

## 6. Testing and Refinements
- [x] Test sign-in flow and conditional rendering
- [x] Verify animations and loading states
- [x] Check responsiveness on different screen sizes
- [x] Ensure no disruption to existing theme and design
