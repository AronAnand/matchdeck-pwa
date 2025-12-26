# MatchDeck - eFootball Tournament Card System

A PWA for managing eFootball tournaments with a unique card-based constraint system.

## Overview

MatchDeck allows tournament admins to create tournaments where players select cards that apply constraints or benefits to their matches. Each player gets a unique login code and selects one card from a pack of 5 random cards per matchday.

## Features

- **Admin Portal**: Create tournaments, manage players, track selections
- **Player Portal**: Login with code, select cards from packs
- **Firebase Integration**: Real-time synchronization across devices
- **260 Unique Cards**: Mix of constraints and benefits
- **Multiple Tournaments**: Support for parallel tournaments

---

## Complete Card Library (260 Cards)

### CONSTRAINT CARDS (1-180)

#### A. Squad Constraints (1-60)

**Common (1-20)**
1. One-Nation Defense - All defenders (including GK) must be from the same nation.
2. Same Club CB Pair - Your starting center-backs must be from the same club.
3. No Legends - No Legend or Epic cards allowed in the squad.
4. Max 2 Players 95+ - Only 2 players in your squad can be rated 95 or higher.
5. One Club Core (3) - You must start at least 3 players from the same club.
6. All Defenders Same League - All defenders must play in the same league.
7. Bench Defenders - Your bench must include at least 3 defenders.
8. GK & CB Nation Link - Goalkeeper must share nationality with at least one CB.
9. Unique Club Attack - No duplicate clubs allowed among your attackers.
10. 7 Under 90 - Exactly 7 players in your squad must be rated 90 or below.
11. No Super Subs - You cannot use the 'Super Sub' skill.
12. Exactly 3 Players 95+ - Your squad must have exactly 3 players rated 95+.
13. One-Nation Midfield - All midfielders must be from the same nation.
14. Captain Defender - Your captain must be a defender.
15. Weak Link - At least one starter must be rated 85 or lower.
16. Club Limit (3) - Max 3 players from any single club.
17. No Position Boosts - No players with Position Boosters allowed.
18. Bench Cap 90 - No player on the bench can be rated above 90.
19. Out of Position - One player must start in a non-compatible position.
20. Highlander Legend - Only one Legend player allowed in the entire squad.

**Rare (21-38)**
21. Club Core (4) - You must start at least 4 players from the same club.
22. One-Nation Midfield Plus - All midfielders Same Nation.
23. One League Squad - All players must be from the same league.
24. Max 1 Player 96+ - Only 1 player rated 96+ allowed.
25. National Attack - All attackers must be from the same nation.
26. Club Defense - All defenders must be from the same club.
27. Weak Bench - Bench players must be rated 88 or lower.
28. Twin Titans - Exactly 2 players rated 96+.
29. GK Club Link - GK must be from the same club as a defender.
30. Club Midfield - All midfielders must be from the same club.
31. No Meta Players - Admin defined meta players (e.g. Mbappe, Haaland) are banned.
32. Fab Five - Exactly 5 players rated 89 or below.
33. The Underdog - At least one starter must be rated 84 or lower.
34. No Iconics - No Iconic Moment players allowed.
35. Loyal Captain - Captain must be from the same club as the GK.
36. Diverse Attack - No duplicate nationalities in attack.
37. Elite Quartet - Exactly 4 players rated 94+.
38. Team Strength 2800 - Max Team Strength 2800.

**Epic (39-52)**
39. Full One-Nation XI - Entire starting XI must be from the same nation.
40. Current Club XI - Entire starting XI from the same current club.
41. Cap 92 - No player rated above 92.
42. Lone Star - Exactly 1 attacker rated 95+.
43. Midfield Bench - Bench must consist only of midfielders.
44. League XI - All starters from the same league.
45. Righties Only - All players must be right-footed.
46. Lefties Only - All players must be left-footed.
47. No CFs - No natural CFs in the starting XI.
48. Average GK - GK must be rated 85 or lower.
49. Defense Heavy - Exactly 6 defenders in the starting XI.
50. Attack Heavy - Exactly 6 attackers in the starting XI.
51. Unique Clubs - No duplicate clubs in the entire XI.
52. Team Strength 2700 - Max Team Strength 2700.

**Legendary (53-60)**
53. One-Club Squad - Full squad (Past/Present) from one club.
54. Nation + League - Same Nation AND Same League XI.
55. Team Strength 2600 - Max Team Strength 2600.
56. Under 90 Club - No player rated above 90.
57. Pristine Squad - No Legends and No 95+ Players.
58. Values XI - All players must be rated 88 or lower.
59. Underdog XI - All players rated 85 or lower.
60. Random 5 - Pick 5 random players, they MUST start.

#### B. Booster Constraints (61-90)

**Common (61-70)**
61. No Double-Boosters - No players with double boosters allowed.
62. Single Boosters Only - Only single-booster players allowed.
63. Max 3 Boosted - Max 3 boosted players in squad.
64. Boosted Bench - Boosters allowed on bench only.
65. No Boosted Defense - No boosters on defenders.
66. No Boosted Attack - No boosters on attackers.
67. Standard Manager - Manager must be non-booster.
68. The Chosen One - Exactly 1 boosted player allowed.
69. Humble Captain - Boosted player cannot be captain.
70. Bench Boosters - Bench players must have boosters.

**Rare (71-79)**
71. Double-Boost Limit - Max 2 double-booster players.
72. Two Boosted - Exactly 2 boosted players allowed.
73. Weak Double-Boost - Double booster players must be ≤94 rating.
74. Standard Boss - No booster manager allowed.
75. Midfield Engine - Boosters only allowed in midfield.
76. National Boost - Boosted players must be same nationality.
77. Iron Wall - Boosted player must be a defender.
78. Spearhead - Boosted player must be an attacker.
79. Tactician - Manager booster only, no player boosters.

**Epic (80-86)**
80. Power XI - All starters must have boosters.
81. Pure Skill - No boosters at all (Players + Manager).
82. Double Worth - Double booster players count as +2 goals (if scoring).
83. Boosted Scorers - Only boosted players can score.
84. Low-Key Boost - All boosted players must be ≤90.
85. Full Boosted - Entire XI must be boosted.
86. Super Manager - Double booster manager mandatory.

**Legendary (87-90)**
87. God Mode - Full Double-Booster XI (If Available).
88. Booster Chaos - Random booster count determined by dice (1-6).
89. Golden Boost - Double booster goals = Match Winner.
90. Booster Lock - Boosters Frozen/Fixed for entire tournament.

#### C. Formation Constraints (91-130)

**Common (91-104)**
91. Two CF Mandatory - You must play with exactly 2 CFs.
92. Back 4 Only - You must use a 4-defender formation.
93. One DMF Required - You must use at least one DMF.
94. One AMF Required - You must use at least one AMF.
95. No SS - No SS (Second Striker) position allowed.
96. No Wing Backs - LMF and RMF forbidden if 5 at the back.
97. Midfield Trio - Exactly 3 midfielders.
98. Width Mandatory - One wide player (LWF/RWF/LMF/RMF) mandatory.
99. No False 9 - CF cannot drop deep (must be top line).
100. Captain CMF - A CMF must be captain.
101. Bench Attacker - Must have an attacker on the bench.
102. No DMF - No Defensive Midfielder allowed.
103. Bench Fullback - Exactly one fullback on bench.
104. Static Tactics - No formation change in-game.

**Rare (105-116)**
105. Back 3 or 5 - You must play with 3 or 5 defenders.
106. No Wingers - No LWF or RWF allowed.
107. Midfield Heavy - 4 or more midfielders mandatory.
108. Front Two Lock - Exactly 2 forwards.
109. Lone Striker - Only 1 CF/SS allowed.
110. False 9 - SS as the only central forward.
111. No AMF - No Attacking Midfielders allowed.
112. The Wall - Exactly 5 defenders.
113. All Out Attack - Exactly 4 attackers.
114. Captain Midfield - Captain must be a midfielder.
115. Central Play - No wide positions (LWF/RWF/LMF/RMF).
116. Wing Play - Must use Wide positions.

**Epic (117-125)**
117. Random Formation - Use a random number generator for formation.
118. No Natural Defenders - No primary CB/LB/RB players.
119. No Natural Attackers - No primary CF/LWF/RWF players.
120. Central Only - Only central positions allowed.
121. Wide Only - Only wide positions allowed.
122. Converted CF - CF must be a converted SS.
123. Out of Place - No player in their preferred position.
124. Mirror Match - Copy your opponent's formation.
125. Symmetrical Bench - Bench positions must match starters.

**Legendary (126-130)**
126. Form Lock - Formation locked for entire tournament.
127. Static Match - One formation for the entire match.
128. Swap One - Randomly swap one player's position.
129. Inverted Team - Defense plays Attack, Attack plays Defense.
130. Chaos Formation - Admin assigns a formation.

#### D. Scoring Constraints (131-160)

**Common (131-140)**
131. First Goal Wins - Golden Goal rule applies.
132. Captain Goal = 2 - Captain's goal counts as 2.
133. Defender Goal = 2 - Defender's goal counts as 2.
134. Header Bonus - Header goals count +1 (Value 2).
135. Outside Box = 2 - Outside box goals count as 2.
136. Lefty Bonus - Only left-footed goals count.
137. Righty Bonus - Only right-footed goals count.
138. Equalizer Bonus - Equalizing goal counts as 2.
139. First Half Double - First half goals count double.
140. Late Drama - Goals after 80' count as 2.

**Rare (141-149)**
141. No CF Goals - Goals by CF do not count.
142. Midfield Master - Midfielder goals count as 2.
143. Assist Only - Only assisted goals count.
144. Clean Hit - No rebound goals allowed.
145. Counter Strike - Counter-attack goals = 2.
146. Last Laugh - Last goal wins the match.
147. Warm Up - First goal doesn't count.
148. Dead Ball Specialist - Set-piece goals count as 2.
149. One-Touch - One-touch finish bonus (+0.5).

**Epic (150-156)**
150. Solo Scorer - Only one player is allowed to score.
151. Captain's Burden - Captain must score to win.
152. Single Strike - Max 1 goal per match.
153. Comeback - First goal by either team is ignored.
154. Teamwork - Winning goal must be assisted.
155. Air Raid - Only header goals count.
156. Sniper - Only outside box goals count.

**Legendary (157-160)**
157. Golden Goal - Match ends immediately on goal.
158. One Shot - One goal decides the entire tie.
159. Buzzer Beater - Final goal wins regardless of score.
160. Perfection - Goal must be a 'Perfect Goal' (Admin choice).

#### E. Modifier Constraints (161-180)

**Common (161-166)**
161. Locked XI - Cannot change XI from previous match.
162. Shake Up - Mandatory 2 changes for next match.
163. Home Advantage - Home team chooses kit & stadium.
164. Static Bench - No bench changes between matches.
165. Captain Lock - Captain cannot be changed.
166. Déjà Vu - Same squad as next match.

**Rare (167-172)**
167. Evolution - Add one new rule next round.
168. Attrition - Remove 1 player from squad.
169. Winner's Boons - Winner draws an extra card.
170. Second Chance - Loser gets one re-roll.
171. Rotation - Mandatory bench rotation.
172. Shuffle - Random opponent each round.

**Epic (173-177)**
173. Blessing & Curse - Draw 2 cards, keep one, give one to opp.
174. Double Trouble - Two rules apply this match.
175. Sudden Change - Rule changes at half-time.
176. Rule Thief - Winner copies loser's rule.
177. Survival - Loser is eliminated immediately.

**Legendary (178-180)**
178. Chaos Round - Apply 3 cards immediately.
179. Final Boss - Play against the Organizer/Admin.
180. Ultimate Rule - Admin creates a custom rule.

---

### BENEFICIAL CARDS (181-260)

#### Common Benefits (181-210)
181. Super Sub Power - Goals by substitutes count as 2.
182. Home Advantage - You choose the stadium.
183. Captain's Goal - Captain's goals count as 2.
184. Draw = Win - If match ends in draw, you win.
185. Clean Sheet Bonus - Clean sheet = 1 bonus goal added to score.
186. First Blood - Your first goal counts as 2.
187. Free Kick Master - Free kick goals count as 2.
188. Corner King - Corner kick goals count as 2.
189. Penalty Pro - Penalty goals count as 2.
190. Counter Master - Counter-attack goals count as 2.
191. Header Specialist - Header goals count as 2.
192. Long Shot - Goals outside box count as 2.
193. Late Drama - Goals after 70th minute count as 2.
194. Early Bird - Goals before 20th minute count as 2.
195. Defender's Glory - Defender goals count as 2.
196. Midfielder Magic - Midfielder goals count as 2.
197. Weather Choice - You choose match weather.
198. Time Choice - You choose match time (day/night).
199. Kit Choice - You choose which kit opponent wears.
200. Side Choice - You choose which side to start.
201. Possession Bonus - 60%+ possession = 0.5 bonus goal.
202. Shot Master - 10+ shots on target = 0.5 bonus goal.
203. Pass Master - 85%+ pass accuracy = 0.5 bonus goal.
204. Assist King - 3+ assists = 0.5 bonus goal.
205. Tackle Master - 15+ tackles won = 0.5 bonus goal.
206. No Red Card Bonus - If you get no red cards, +0.5 bonus goal.
207. Fair Play - Less than 3 yellow cards = 0.5 bonus goal.
208. GK Hero - 5+ saves = 0.5 bonus goal.
209. Comeback Bonus - If you come from behind to win, +1 bonus goal.
210. Mercy Rule - If losing by 3+, your goals count as 2.

#### Rare Benefits (211-235)
211. Double Benefit - Draw 2 benefit cards, keep both.
212. All Goals x2 - All your goals count as 2.
213. Set Piece Master - All set piece goals count as 3.
214. Skill Move Bonus - Goals after skill moves count as 3.
215. Aerial King - All header goals count as 3.
216. Long Range Master - All outside-box goals count as 3.
217. One-Touch Finisher - One-touch finish goals count as 3.
218. Comeback Specialist - When losing at HT, 2nd half goals count as 2.
219. Pressure Master - If losing, your goals count as 2.
220. Domination Bonus - 70%+ possession = 1 bonus goal.
221. Shot Accuracy - 80%+ shot accuracy = 1 bonus goal.
222. Pass Perfection - 90%+ pass accuracy = 1 bonus goal.
223. Assist Hero - Each assist = 1 bonus goal.
224. GK Masterclass - 8+ saves = 1 bonus goal.
225. Defensive Fortress - 20+ tackles won = 1 bonus goal.
226. Card Swap - Swap one of your constraint cards with opponent's card for this match.
227. Rematch Option - If you lose, replay this match once.
228. Auto-Qualify - Win this match automatically (1-0 awarded).
229. Full Control - Choose stadium, weather, time, and side for this match.
230. Spy Card - See opponent's selected card before this match starts.
231. Card Block - Block one of opponent's constraint cards for this match.
232. Golden Goal - First goal wins this match (for you only).
233. Substitute Master - All substitute goals count as 3.
234. Last Minute Hero - Goals after 80th minute count as 3.
235. Perfect Start - Goals in first 10 minutes count as 3.

#### Epic Benefits (236-250)
236. Triple Benefit - Draw 3 benefit cards for this match, keep all.
237. Draw = Win - If match ends in draw, you win.
238. All Goals x3 - All your goals count as 3.
239. Score Multiplier - Your final score is multiplied by 1.5 (rounded up).
240. Constraint Immunity - Your constraint cards don't apply this match.
241. Steal Benefit - Copy one of opponent's beneficial card effects.
242. Perfect Squad - Ignore all squad constraints for this match.
243. Goal Veto - Cancel opponent's first goal.
244. Comeback Magic - If losing, your goals count as 3.
245. Dominance Bonus - 50%+ possession = 2 bonus goals.
246. Shot King - 15+ shots on target = 2 bonus goals.
247. Pass Perfection Pro - 85%+ pass accuracy = 2 bonus goals.
248. Defensive Wall - Clean sheet = 2 bonus goals.
249. Complete Control - Choose all match settings (stadium, weather, time, side, ball).
250. Golden Touch - Your first 2 shots on target are guaranteed goals.

#### Legendary Benefits (251-260)
251. God Mode - All goals count as 5.
252. Instant Win - Win the match automatically (1-0 awarded).
253. Perfect Match - Draw 5 benefit cards, apply all to this match.
254. Ultimate Power - All goals = 4, opponent's goals = 0.5.
255. Swap All Cards - Trade all your cards for opponent's cards this match.
256. Goal Control - Cancel any 2 opponent goals during match.
257. Score Chooser - Choose the final score (up to 5-0).
258. Rematch - If you lose, replay the match once.
259. Total Immunity - All constraints ignored, all your goals count as 2.
260. Miracle Match - Choose result: Auto-win OR All goals x5 OR Opponent plays with 8 players.

---

## Rarity Distribution

**Weighted Random (per pack draw):**
- Common: 45% chance
- Rare: 30% chance
- Epic: 18% chance
- Legendary: 7% chance

**Total Cards by Rarity:**
- Common: ~117 cards
- Rare: ~79 cards
- Epic: ~47 cards
- Legendary: ~17 cards

---

## Tech Stack

- React 19.2.0
- Vite 7.2.4
- Firebase Firestore
- GitHub Pages (PWA deployment)

## Development

```bash
npm install
npm run dev
```

## Admin Access

Default password: `admin123`

---

Generated with Claude Code
