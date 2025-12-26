export const RARITY = {
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic',
    LEGENDARY: 'legendary'
};

export const TYPE = {
    SQUAD: 'squad',
    BOOSTER: 'booster',
    FORMATION: 'formation',
    SCORING: 'scoring',
    MODIFIER: 'modifier',
    BENEFIT: 'benefit'
};

export const CARD_EFFECT = {
    CONSTRAINT: 'constraint',  // Makes things harder (most existing cards)
    BENEFIT: 'benefit'          // Gives advantages (new cards)
};

export const CARD_LIBRARY = [
    // --- A. Squad Constraint (1-60) ---
    // Common
    { id: 1, title: "One-Nation Defense", text: "All defenders (including GK) must be from the same nation.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 2, title: "Same Club CB Pair", text: "Your starting center-backs must be from the same club.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 3, title: "No Legends", text: "No Legend or Epic cards allowed in the squad.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 4, title: "Max 2 Players 95+", text: "Only 2 players in your squad can be rated 95 or higher.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 5, title: "One Club Core (3)", text: "You must start at least 3 players from the same club.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 6, title: "All Defenders Same League", text: "All defenders must play in the same league.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 7, title: "Bench Defenders", text: "Your bench must include at least 3 defenders.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 8, title: "GK & CB Nation Link", text: "Goalkeeper must share nationality with at least one CB.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 9, title: "Unique Club Attack", text: "No duplicate clubs allowed among your attackers.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 10, title: "7 Under 90", text: "Exactly 7 players in your squad must be rated 90 or below.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 11, title: "No Super Subs", text: "You cannot use the 'Super Sub' skill.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 12, title: "Exactly 3 Players 95+", text: "Your squad must have exactly 3 players rated 95+.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 13, title: "One-Nation Midfield", text: "All midfielders must be from the same nation.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 14, title: "Captain Defender", text: "Your captain must be a defender.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 15, title: "Weak Link", text: "At least one starter must be rated 85 or lower.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 16, title: "Club Limit (3)", text: "Max 3 players from any single club.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 17, title: "No Position Boosts", text: "No players with Position Boosters allowed.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 18, title: "Bench Cap 90", text: "No player on the bench can be rated above 90.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 19, title: "Out of Position", text: "One player must start in a non-compatible position.", type: TYPE.SQUAD, rarity: RARITY.COMMON },
    { id: 20, title: "Highlander Legend", text: "Only one Legend player allowed in the entire squad.", type: TYPE.SQUAD, rarity: RARITY.COMMON },

    // Rare
    { id: 21, title: "Club Core (4)", text: "You must start at least 4 players from the same club.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 22, title: "One-Nation Midfield Plus", text: "All midfielders Same Nation.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 23, title: "One League Squad", text: "All players must be from the same league.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 24, title: "Max 1 Player 96+", text: "Only 1 player rated 96+ allowed.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 25, title: "National Attack", text: "All attackers must be from the same nation.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 26, title: "Club Defense", text: "All defenders must be from the same club.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 27, title: "Weak Bench", text: "Bench players must be rated 88 or lower.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 28, title: "Twin Titans", text: "Exactly 2 players rated 96+.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 29, title: "GK Club Link", text: "GK must be from the same club as a defender.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 30, title: "Club Midfield", text: "All midfielders must be from the same club.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 31, title: "No Meta Players", text: "Admin defined meta players (e.g. Mbappe, Haaland) are banned.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 32, title: "Fab Five", text: "Exactly 5 players rated 89 or below.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 33, title: "The Underdog", text: "At least one starter must be rated 84 or lower.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 34, title: "No Iconics", text: "No Iconic Moment players allowed.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 35, title: "Loyal Captain", text: "Captain must be from the same club as the GK.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 36, title: "Diverse Attack", text: "No duplicate nationalities in attack.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 37, title: "Elite Quartet", text: "Exactly 4 players rated 94+.", type: TYPE.SQUAD, rarity: RARITY.RARE },
    { id: 38, title: "Team Strength 2800", text: "Max Team Strength 2800.", type: TYPE.SQUAD, rarity: RARITY.RARE },

    // Epic
    { id: 39, title: "Full One-Nation XI", text: "Entire starting XI must be from the same nation.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 40, title: "Current Club XI", text: "Entire starting XI from the same current club.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 41, title: "Cap 92", text: "No player rated above 92.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 42, title: "Lone Star", text: "Exactly 1 attacker rated 95+.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 43, title: "Midfield Bench", text: "Bench must consist only of midfielders.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 44, title: "League XI", text: "All starters from the same league.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 45, title: "Righties Only", text: "All players must be right-footed.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 46, title: "Lefties Only", text: "All players must be left-footed.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 47, title: "No CFs", text: "No natural CFs in the starting XI.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 48, title: "Average GK", text: "GK must be rated 85 or lower.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 49, title: "Defense Heavy", text: "Exactly 6 defenders in the starting XI.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 50, title: "Attack Heavy", text: "Exactly 6 attackers in the starting XI.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 51, title: "Unique Clubs", text: "No duplicate clubs in the entire XI.", type: TYPE.SQUAD, rarity: RARITY.EPIC },
    { id: 52, title: "Team Strength 2700", text: "Max Team Strength 2700.", type: TYPE.SQUAD, rarity: RARITY.EPIC },

    // Legendary
    { id: 53, title: "One-Club Squad", text: "Full squad (Past/Present) from one club.", type: TYPE.SQUAD, rarity: RARITY.LEGENDARY },
    { id: 54, title: "Nation + League", text: "Same Nation AND Same League XI.", type: TYPE.SQUAD, rarity: RARITY.LEGENDARY },
    { id: 55, title: "Team Strength 2600", text: "Max Team Strength 2600.", type: TYPE.SQUAD, rarity: RARITY.LEGENDARY },
    { id: 56, title: "Under 90 Club", text: "No player rated above 90.", type: TYPE.SQUAD, rarity: RARITY.LEGENDARY },
    { id: 57, title: "Pristine Squad", text: "No Legends and No 95+ Players.", type: TYPE.SQUAD, rarity: RARITY.LEGENDARY },
    { id: 58, title: "Values XI", text: "All players must be rated 88 or lower.", type: TYPE.SQUAD, rarity: RARITY.LEGENDARY },
    { id: 59, title: "Underdog XI", text: "All players rated 85 or lower.", type: TYPE.SQUAD, rarity: RARITY.LEGENDARY },
    { id: 60, title: "Random 5", text: "Pick 5 random players, they MUST start.", type: TYPE.SQUAD, rarity: RARITY.LEGENDARY },

    // --- A2. Booster Constraint (61-90) ---
    // Common
    { id: 61, title: "No Double-Boosters", text: "No players with double boosters allowed.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 62, title: "Single Boosters Only", text: "Only single-booster players allowed.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 63, title: "Max 3 Boosted", text: "Max 3 boosted players in squad.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 64, title: "Boosted Bench", text: "Boosters allowed on bench only.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 65, title: "No Boosted Defense", text: "No boosters on defenders.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 66, title: "No Boosted Attack", text: "No boosters on attackers.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 67, title: "Standard Manager", text: "Manager must be non-booster.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 68, title: "The Chosen One", text: "Exactly 1 boosted player allowed.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 69, title: "Humble Captain", text: "Boosted player cannot be captain.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },
    { id: 70, title: "Bench Boosters", text: "Bench players must have boosters.", type: TYPE.BOOSTER, rarity: RARITY.COMMON },

    // Rare
    { id: 71, title: "Double-Boost Limit", text: "Max 2 double-booster players.", type: TYPE.BOOSTER, rarity: RARITY.RARE },
    { id: 72, title: "Two Boosted", text: "Exactly 2 boosted players allowed.", type: TYPE.BOOSTER, rarity: RARITY.RARE },
    { id: 73, title: "Weak Double-Boost", text: "Double booster players must be ≤94 rating.", type: TYPE.BOOSTER, rarity: RARITY.RARE },
    { id: 74, title: "Standard Boss", text: "No booster manager allowed.", type: TYPE.BOOSTER, rarity: RARITY.RARE },
    { id: 75, title: "Midfield Engine", text: "Boosters only allowed in midfield.", type: TYPE.BOOSTER, rarity: RARITY.RARE },
    { id: 76, title: "National Boost", text: "Boosted players must be same nationality.", type: TYPE.BOOSTER, rarity: RARITY.RARE },
    { id: 77, title: "Iron Wall", text: "Boosted player must be a defender.", type: TYPE.BOOSTER, rarity: RARITY.RARE },
    { id: 78, title: "Spearhead", text: "Boosted player must be an attacker.", type: TYPE.BOOSTER, rarity: RARITY.RARE },
    { id: 79, title: "Tactician", text: "Manager booster only, no player boosters.", type: TYPE.BOOSTER, rarity: RARITY.RARE },

    // Epic
    { id: 80, title: "Power XI", text: "All starters must have boosters.", type: TYPE.BOOSTER, rarity: RARITY.EPIC },
    { id: 81, title: "Pure Skill", text: "No boosters at all (Players + Manager).", type: TYPE.BOOSTER, rarity: RARITY.EPIC },
    { id: 82, title: "Double Worth", text: "Double booster players count as +2 goals (if scoring).", type: TYPE.BOOSTER, rarity: RARITY.EPIC },
    { id: 83, title: "Boosted Scorers", text: "Only boosted players can score.", type: TYPE.BOOSTER, rarity: RARITY.EPIC },
    { id: 84, title: "Low-Key Boost", text: "All boosted players must be ≤90.", type: TYPE.BOOSTER, rarity: RARITY.EPIC },
    { id: 85, title: "Full Boosted", text: "Entire XI must be boosted.", type: TYPE.BOOSTER, rarity: RARITY.EPIC },
    { id: 86, title: "Super Manager", text: "Double booster manager mandatory.", type: TYPE.BOOSTER, rarity: RARITY.EPIC },

    // Legendary
    { id: 87, title: "God Mode", text: "Full Double-Booster XI (If Available).", type: TYPE.BOOSTER, rarity: RARITY.LEGENDARY },
    { id: 88, title: "Booster Chaos", text: "Random booster count determined by dice (1-6).", type: TYPE.BOOSTER, rarity: RARITY.LEGENDARY },
    { id: 89, title: "Golden Boost", text: "Double booster goals = Match Winner.", type: TYPE.BOOSTER, rarity: RARITY.LEGENDARY },
    { id: 90, title: "Booster Lock", text: "Boosters Frozen/Fixed for entire tournament.", type: TYPE.BOOSTER, rarity: RARITY.LEGENDARY },

    // --- B. Formation (Mapped to 91-130) ---
    // Common
    { id: 91, title: "Two CF Mandatory", text: "You must play with exactly 2 CFs.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 92, title: "Back 4 Only", text: "You must use a 4-defender formation.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 93, title: "One DMF Required", text: "You must use at least one DMF.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 94, title: "One AMF Required", text: "You must use at least one AMF.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 95, title: "No SS", text: "No SS (Second Striker) position allowed.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 96, title: "No Wing Backs", text: "LMF and RMF forbidden if 5 at the back.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 97, title: "Midfield Trio", text: "Exactly 3 midfielders.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 98, title: "Width Mandatory", text: "One wide player (LWF/RWF/LMF/RMF) mandatory.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 99, title: "No False 9", text: "CF cannot drop deep (must be top line).", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 100, title: "Captain CMF", text: "A CMF must be captain.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 101, title: "Bench Attacker", text: "Must have an attacker on the bench.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 102, title: "No DMF", text: "No Defensive Midfielder allowed.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 103, title: "Bench Fullback", text: "Exactly one fullback on bench.", type: TYPE.FORMATION, rarity: RARITY.COMMON },
    { id: 104, title: "Static Tactics", text: "No formation change in-game.", type: TYPE.FORMATION, rarity: RARITY.COMMON },

    // Rare
    { id: 105, title: "Back 3 or 5", text: "You must play with 3 or 5 defenders.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 106, title: "No Wingers", text: "No LWF or RWF allowed.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 107, title: "Midfield Heavy", text: "4 or more midfielders mandatory.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 108, title: "Front Two Lock", text: "Exactly 2 forwards.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 109, title: "Lone Striker", text: "Only 1 CF/SS allowed.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 110, title: "False 9", text: "SS as the only central forward.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 111, title: "No AMF", text: "No Attacking Midfielders allowed.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 112, title: "The Wall", text: "Exactly 5 defenders.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 113, title: "All Out Attack", text: "Exactly 4 attackers.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 114, title: "Captain Midfield", text: "Captain must be a midfielder.", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 115, title: "Central Play", text: "No wide positions (LWF/RWF/LMF/RMF).", type: TYPE.FORMATION, rarity: RARITY.RARE },
    { id: 116, title: "Wing Play", text: "Must use Wide positions.", type: TYPE.FORMATION, rarity: RARITY.RARE },

    // Epic
    { id: 117, title: "Random Formation", text: "Use a random number generator for formation.", type: TYPE.FORMATION, rarity: RARITY.EPIC },
    { id: 118, title: "No Natural Defenders", text: "No primary CB/LB/RB players.", type: TYPE.FORMATION, rarity: RARITY.EPIC },
    { id: 119, title: "No Natural Attackers", text: "No primary CF/LWF/RWF players.", type: TYPE.FORMATION, rarity: RARITY.EPIC },
    { id: 120, title: "Central Only", text: "Only central positions allowed.", type: TYPE.FORMATION, rarity: RARITY.EPIC },
    { id: 121, title: "Wide Only", text: "Only wide positions allowed.", type: TYPE.FORMATION, rarity: RARITY.EPIC },
    { id: 122, title: "Converted CF", text: "CF must be a converted SS.", type: TYPE.FORMATION, rarity: RARITY.EPIC },
    { id: 123, title: "Out of Place", text: "No player in their preferred position.", type: TYPE.FORMATION, rarity: RARITY.EPIC },
    { id: 124, title: "Mirror Match", text: "Copy your opponent's formation.", type: TYPE.FORMATION, rarity: RARITY.EPIC },
    { id: 125, title: "Symmetrical Bench", text: "Bench positions must match starters.", type: TYPE.FORMATION, rarity: RARITY.EPIC },

    // Legendary
    { id: 126, title: "Form Lock", text: "Formation locked for entire tournament.", type: TYPE.FORMATION, rarity: RARITY.LEGENDARY },
    { id: 127, title: "Static Match", text: "One formation for the entire match.", type: TYPE.FORMATION, rarity: RARITY.LEGENDARY },
    { id: 128, title: "Swap One", text: "Randomly swap one player's position.", type: TYPE.FORMATION, rarity: RARITY.LEGENDARY },
    { id: 129, title: "Inverted Team", text: "Defense plays Attack, Attack plays Defense.", type: TYPE.FORMATION, rarity: RARITY.LEGENDARY },
    { id: 130, title: "Chaos Formation", text: "Admin assigns a formation.", type: TYPE.FORMATION, rarity: RARITY.LEGENDARY },

    // --- C. Scoring (Mapped to 131-160) ---
    // Common
    { id: 131, title: "First Goal Wins", text: "Golden Goal rule applies.", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 132, title: "Captain Goal = 2", text: "Captain's goal counts as 2.", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 133, title: "Defender Goal = 2", text: "Defender's goal counts as 2.", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 134, title: "Header Bonus", text: "Header goals count +1 (Value 2).", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 135, title: "Outside Box = 2", text: "Outside box goals count as 2.", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 136, title: "Lefty Bonus", text: "Only left-footed goals count.", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 137, title: "Righty Bonus", text: "Only right-footed goals count.", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 138, title: "Equalizer Bonus", text: "Equalizing goal counts as 2.", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 139, title: "First Half Double", text: "First half goals count double.", type: TYPE.SCORING, rarity: RARITY.COMMON },
    { id: 140, title: "Late Drama", text: "Goals after 80' count as 2.", type: TYPE.SCORING, rarity: RARITY.COMMON },

    // Rare
    { id: 141, title: "No CF Goals", text: "Goals by CF do not count.", type: TYPE.SCORING, rarity: RARITY.RARE },
    { id: 142, title: "Midfield Master", text: "Midfielder goals count as 2.", type: TYPE.SCORING, rarity: RARITY.RARE },
    { id: 143, title: "Assist Only", text: "Only assisted goals count.", type: TYPE.SCORING, rarity: RARITY.RARE },
    { id: 144, title: "Clean Hit", text: "No rebound goals allowed.", type: TYPE.SCORING, rarity: RARITY.RARE },
    { id: 145, title: "Counter Strike", text: "Counter-attack goals = 2.", type: TYPE.SCORING, rarity: RARITY.RARE },
    { id: 146, title: "Last Laugh", text: "Last goal wins the match.", type: TYPE.SCORING, rarity: RARITY.RARE },
    { id: 147, title: "Warm Up", text: "First goal doesn't count.", type: TYPE.SCORING, rarity: RARITY.RARE },
    { id: 148, title: "Dead Ball Specialist", text: "Set-piece goals count as 2.", type: TYPE.SCORING, rarity: RARITY.RARE },
    { id: 149, title: "One-Touch", text: "One-touch finish bonus (+0.5).", type: TYPE.SCORING, rarity: RARITY.RARE },

    // Epic
    { id: 150, title: "Solo Scorer", text: "Only one player is allowed to score.", type: TYPE.SCORING, rarity: RARITY.EPIC },
    { id: 151, title: "Captain's Burden", text: "Captain must score to win.", type: TYPE.SCORING, rarity: RARITY.EPIC },
    { id: 152, title: "Single Strike", text: "Max 1 goal per match.", type: TYPE.SCORING, rarity: RARITY.EPIC },
    { id: 153, title: "Comeback", text: "First goal by either team is ignored.", type: TYPE.SCORING, rarity: RARITY.EPIC },
    { id: 154, title: "Teamwork", text: "Winning goal must be assisted.", type: TYPE.SCORING, rarity: RARITY.EPIC },
    { id: 155, title: "Air Raid", text: "Only header goals count.", type: TYPE.SCORING, rarity: RARITY.EPIC },
    { id: 156, title: "Sniper", text: "Only outside box goals count.", type: TYPE.SCORING, rarity: RARITY.EPIC },

    // Legendary
    { id: 157, title: "Golden Goal", text: "Match ends immediately on goal.", type: TYPE.SCORING, rarity: RARITY.LEGENDARY },
    { id: 158, title: "One Shot", text: "One goal decides the entire tie.", type: TYPE.SCORING, rarity: RARITY.LEGENDARY },
    { id: 159, title: "Buzzer Beater", text: "Final goal wins regardless of score.", type: TYPE.SCORING, rarity: RARITY.LEGENDARY },
    { id: 160, title: "Perfection", text: "Goal must be a 'Perfect Goal' (Admin choice).", type: TYPE.SCORING, rarity: RARITY.LEGENDARY },

    // --- D. Modifiers (Mapped to 161-180) ---
    // Common
    { id: 161, title: "Locked XI", text: "Cannot change XI from previous match.", type: TYPE.MODIFIER, rarity: RARITY.COMMON },
    { id: 162, title: "Shake Up", text: "Mandatory 2 changes for next match.", type: TYPE.MODIFIER, rarity: RARITY.COMMON },
    { id: 163, title: "Home Advantage", text: "Home team chooses kit & stadium.", type: TYPE.MODIFIER, rarity: RARITY.COMMON },
    { id: 164, title: "Static Bench", text: "No bench changes between matches.", type: TYPE.MODIFIER, rarity: RARITY.COMMON },
    { id: 165, title: "Captain Lock", text: "Captain cannot be changed.", type: TYPE.MODIFIER, rarity: RARITY.COMMON },
    { id: 166, title: "Déjà Vu", text: "Same squad as next match.", type: TYPE.MODIFIER, rarity: RARITY.COMMON },

    // Rare
    { id: 167, title: "Evolution", text: "Add one new rule next round.", type: TYPE.MODIFIER, rarity: RARITY.RARE },
    { id: 168, title: "Attrition", text: "Remove 1 player from squad.", type: TYPE.MODIFIER, rarity: RARITY.RARE },
    { id: 169, title: "Winner's Boons", text: "Winner draws an extra card.", type: TYPE.MODIFIER, rarity: RARITY.RARE },
    { id: 170, title: "Second Chance", text: "Loser gets one re-roll.", type: TYPE.MODIFIER, rarity: RARITY.RARE },
    { id: 171, title: "Rotation", text: "Mandatory bench rotation.", type: TYPE.MODIFIER, rarity: RARITY.RARE },
    { id: 172, title: "Shuffle", text: "Random opponent each round.", type: TYPE.MODIFIER, rarity: RARITY.RARE },

    // Epic
    { id: 173, title: "Blessing & Curse", text: "Draw 2 cards, keep one, give one to opp.", type: TYPE.MODIFIER, rarity: RARITY.EPIC },
    { id: 174, title: "Double Trouble", text: "Two rules apply this match.", type: TYPE.MODIFIER, rarity: RARITY.EPIC },
    { id: 175, title: "Sudden Change", text: "Rule changes at half-time.", type: TYPE.MODIFIER, rarity: RARITY.EPIC },
    { id: 176, title: "Rule Thief", text: "Winner copies loser's rule.", type: TYPE.MODIFIER, rarity: RARITY.EPIC },
    { id: 177, title: "Survival", text: "Loser is eliminated immediately.", type: TYPE.MODIFIER, rarity: RARITY.EPIC },

    // Legendary
    { id: 178, title: "Chaos Round", text: "Apply 3 cards immediately.", type: TYPE.MODIFIER, rarity: RARITY.LEGENDARY },
    { id: 179, title: "Final Boss", text: "Play against the Organizer/Admin.", type: TYPE.MODIFIER, rarity: RARITY.LEGENDARY },
    { id: 180, title: "Ultimate Rule", text: "Admin creates a custom rule.", type: TYPE.MODIFIER, rarity: RARITY.LEGENDARY },

    // --- E. BENEFICIAL CARDS (181-260) ---
    // These cards give ADVANTAGES to the player (Fun tactical advantages for eFootball)

    // Common Benefits (181-210)
    { id: 181, title: "Super Sub Power", text: "Goals by substitutes count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 182, title: "Opponent Weak GK", text: "Opponent must use their lowest-rated goalkeeper.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 183, title: "First Goal x2", text: "Your first goal counts as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 184, title: "Clean Sheet Bonus", text: "Clean sheet = 1 bonus goal added to final score.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 185, title: "Penalty Master", text: "Penalty goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 186, title: "Free Kick Specialist", text: "Free kick goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 187, title: "Corner Threat", text: "Goals from corners count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 188, title: "Counter King", text: "Counter-attack goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 189, title: "Header Specialist", text: "Header goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 190, title: "Long Range", text: "Goals from outside box count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 191, title: "Late Drama", text: "Goals after 75th minute count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 192, title: "Fast Start", text: "Goals before 15th minute count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 193, title: "Defender's Delight", text: "Goals by defenders count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 194, title: "Midfielder Magic", text: "Goals by midfielders count as 2.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 195, title: "Stadium Choice", text: "You choose the stadium.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 196, title: "Opponent Low Rated GK", text: "Opponent's GK must be rated 88 or below.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 197, title: "Weak Defense", text: "Opponent must use 2 defenders rated 84 or below.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 198, title: "Possession Bonus", text: "60%+ possession = 0.5 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 199, title: "Shot Bonus", text: "10+ shots on target = 0.5 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 200, title: "Pass Master", text: "85%+ pass accuracy = 0.5 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 201, title: "Assist Reward", text: "3+ assists = 0.5 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 202, title: "Tackle Reward", text: "15+ tackles won = 0.5 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 203, title: "No Red Bonus", text: "No red cards = 0.5 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 204, title: "Fair Play", text: "Less than 3 yellows = 0.5 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 205, title: "GK Hero", text: "5+ saves = 0.5 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 206, title: "Comeback King", text: "Win from behind = 1 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 207, title: "Underdog Power", text: "When losing, your goals count as 1.5x.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 208, title: "Opponent Weak Attack", text: "Opponent cannot use players rated 94+ in attack.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 209, title: "Weak Midfield", text: "Opponent must use 1 midfielder rated 85 or below.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },
    { id: 210, title: "Limited Subs", text: "Opponent can only make 1 substitution.", type: TYPE.BENEFIT, rarity: RARITY.COMMON, effect: CARD_EFFECT.BENEFIT },

    // Rare Benefits (211-235)
    { id: 211, title: "Force Out of Position", text: "Choose 1 opponent player who must play out of position.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 212, title: "Bench Their Star", text: "Choose 1 opponent player who must start on bench.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 213, title: "Formation Lock", text: "Opponent cannot change formation during match.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 214, title: "Sub Limit", text: "Opponent can only make 2 substitutions.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 215, title: "Set Piece Master", text: "All set piece goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 216, title: "Skill Move Goals x2", text: "Goals after skill moves count as 2.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 217, title: "Second Half Power", text: "2nd half goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 218, title: "Pressure Cooker", text: "When tied or losing, your goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 219, title: "Possession Master", text: "70%+ possession = 1 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 220, title: "Clinical Finisher", text: "80%+ shot accuracy = 1 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 221, title: "Tiki-Taka", text: "90%+ pass accuracy = 1 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 222, title: "Wall of Steel", text: "8+ saves = 1 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 223, title: "Defensive Fortress", text: "20+ tackles won = 1 bonus goal.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 224, title: "Card Swap", text: "Swap one of your constraint cards with opponent's card.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 225, title: "Rematch Rights", text: "If you lose, replay this match once.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 226, title: "Spy Network", text: "See opponent's selected card before match starts.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 227, title: "Nullify One", text: "Block one of opponent's constraint cards for this match.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 228, title: "Ban Best Striker", text: "Opponent cannot use their highest-rated attacker.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 229, title: "Weak Backline", text: "Opponent must use 2 defenders rated 85 or below.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 230, title: "Legend Ban", text: "Opponent cannot use Legend players.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 231, title: "Rating Ceiling", text: "Opponent cannot use players rated 96+.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 232, title: "Wrong Foot Curse", text: "Opponent's highest-rated player must play on wrong foot.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 233, title: "Goalkeeper Handicap", text: "Opponent GK must be rated 86 or below.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 234, title: "First Goal Bonus", text: "First to score gets +1 bonus goal at full time.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },
    { id: 235, title: "Youth Squad", text: "Opponent must use 2 players rated 83 or below.", type: TYPE.BENEFIT, rarity: RARITY.RARE, effect: CARD_EFFECT.BENEFIT },

    // Epic Benefits (236-250)
    { id: 236, title: "Mass Bench", text: "Choose 3 opponent players who must start on bench.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 237, title: "Formation Dictator", text: "Choose opponent's formation for this match.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 238, title: "Position Chaos", text: "Choose positions for opponent's top 3 rated players.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 239, title: "No Substitutions", text: "Opponent cannot make any substitutions.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 240, title: "Freedom Pass", text: "Ignore all your constraint cards this match.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 241, title: "Copy Cat", text: "Copy one of opponent's beneficial card effects.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 242, title: "Weak Squad", text: "Opponent's bench players must be rated 85 or below.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 243, title: "First Goal Void", text: "Opponent's first goal doesn't count.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 244, title: "Double Trouble", text: "All your goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 245, title: "Strength Cap", text: "Opponent's team strength max 2700.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 246, title: "No Legends Allowed", text: "Opponent cannot use any Legend players.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 247, title: "Star Player Ban", text: "Opponent cannot use players rated 95+.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 248, title: "One Nation Squad", text: "Opponent's starting XI must all be from same nation.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 249, title: "Bronze Team", text: "Opponent must use 5 players rated 85 or below.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },
    { id: 250, title: "Swap Constraints", text: "Exchange all your constraint cards with opponent's cards.", type: TYPE.BENEFIT, rarity: RARITY.EPIC, effect: CARD_EFFECT.BENEFIT },

    // Legendary Benefits (251-260)
    { id: 251, title: "Position Master", text: "Choose opponent's entire starting XI positions.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 252, title: "Force 10 Players", text: "Opponent plays with 10 players (choose who's benched).", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 253, title: "Bench the Stars", text: "Opponent must bench their top 5 rated players.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 254, title: "Triple Goals", text: "All your goals count as 3.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 255, title: "Full Card Swap", text: "Trade all your cards for opponent's cards this match.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 256, title: "Double Veto", text: "Opponent's first 2 goals don't count.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 257, title: "Draw Victory", text: "If match ends in draw, you win.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 258, title: "Second Chance", text: "If you lose, replay the match once.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 259, title: "God Mode", text: "Ignore all your constraints AND all goals count as 2.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
    { id: 260, title: "Ultimate Nerf", text: "Opponent: Max team strength 2500 + No sub + Must use 3 players under 85.", type: TYPE.BENEFIT, rarity: RARITY.LEGENDARY, effect: CARD_EFFECT.BENEFIT },
];
