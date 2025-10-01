#  EcoQuest - Play for the Planet

![EcoQuest Banner](https://via.placeholder.com/800x200/4CAF50/FFFFFF?text=EcoQuest+-+Environmental+Adventure+Game)

##  About

**EcoQuest** is a 2D adventure game designed with a purpose beyond entertainment: raising awareness and funds to fight environmental change. Players explore vibrant pixel worlds, overcome challenges, and complete missions centered around themes like cleaning oceans, planting trees, and restoring ecosystems.

###  Mission
The game integrates ad-based revenue, with **100% of profits donated directly to NGOs** dedicated to combating climate change and protecting the environment. By combining engaging gameplay with a meaningful cause, EcoQuest transforms casual play into a way for players to contribute to real-world impact, making every level completed a step toward a healthier planet.

##  Features

### Current Features (Prototype)
-  **Platformer Gameplay** - Jump, run, and explore environmental worlds
-  **Collection Mechanics** - Gather recyclables and clean up pollution
-  **Obstacle Avoidance** - Navigate around environmental hazards
-  **Scoring System** - Earn points for environmental actions
-  **Lives System** - Strategic gameplay with consequences
-  **Progressive Levels** - Increasing difficulty and complexity

### Planned Features (Full Game)
-  **Ocean Cleanup Levels** - Remove plastic and restore marine ecosystems
-  **Forest Restoration** - Plant trees and revive deforested areas
-  **Urban Recycling** - Sort waste and reduce city pollution
-  **Wildlife Protection** - Save endangered species habitats
-  **Renewable Energy** - Build solar/wind farms
-  **Multiple Biomes** - Diverse environments (ocean, forest, desert, arctic)
-  **Power-ups** - Speed boost, double jump, pollution shield
-  **Boss Battles** - Face off against "pollution monsters"
-  **Achievement System** - Track environmental milestones
-  **Impact Dashboard** - See real-world donation impact
-  **Mobile Support** - iOS and Android versions
-  **Multiplayer Challenges** - Compete with friends for the planet

##  How to Play

### Controls
- **Move Left/Right**: Arrow Keys or `A`/`D`
- **Jump**: Space Bar, Up Arrow, or `W`
- **Pause**: `ESC` (planned)

### Objective
1. **Collect all recyclables** (♻️ symbols) in each level
2. **Avoid pollution hazards** (purple obstacles)
3. **Reach the end zone** after collecting everything
4. **Complete all levels** to maximize environmental impact

### Tips
- Time your jumps carefully to avoid hazards
- Explore every corner to find all collectibles
- Use platforms strategically to reach higher areas
- Watch your lives - colliding with pollution costs you!

## 🛠️ Technology Stack

### Current Prototype
- **Frontend**: React + JavaScript
- **Graphics**: HTML5 Canvas
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### Production Version (Unity)
- **Game Engine**: Unity 2022.3 LTS
- **Language**: C#
- **Platform**: Cross-platform (PC, Mobile, Web)
- **Monetization**: Unity Ads / Google AdMob
- **Analytics**: Unity Analytics / Firebase
- **Backend**: Firebase / Custom API

## 🚀 Getting Started

### Prototype (Web Version)
1. Open `index.html` in a modern web browser
2. Click "Start Adventure"
3. Use keyboard controls to play
4. Enjoy and share!

### Unity Version (Development)
```bash
# Prerequisites
- Unity Hub
- Unity 2022.3 LTS or later
- C# IDE (Visual Studio / Rider)

# Setup
1. Clone this repository
   git clone https://github.com/yourusername/ecoquest.git

2. Open project in Unity Hub

3. Open the main scene
   Assets/Scenes/MainMenu.unity

4. Press Play to test in editor

5. Build for your target platform
   File > Build Settings > Select Platform > Build
```

## 📁 Project Structure

```
EcoQuest/
├── Assets/
│   ├── Scenes/           # Game scenes
│   ├── Scripts/          # C# game logic
│   │   ├── Player/       # Player controller
│   │   ├── Environment/  # Collectibles, obstacles
│   │   ├── Managers/     # Game, UI, Audio managers
│   │   └── Utils/        # Helper scripts
│   ├── Sprites/          # 2D graphics assets
│   ├── Animations/       # Animation controllers
│   ├── Audio/            # Sound effects and music
│   ├── Prefabs/          # Reusable game objects
│   └── UI/               # User interface elements
├── Packages/             # Unity packages
├── ProjectSettings/      # Unity project settings
└── README.md            # This file
```

##  Art Style

- **Visual Style**: Vibrant pixel art with modern flair
- **Color Palette**: 
  - Nature greens (#4CAF50, #228B22)
  - Ocean blues (#87CEEB, #1E90FF)
  - Pollution purples/grays (#8B008B, #696969)
  - Sunny accents (#FFD700)
- **Resolution**: HD support (1920x1080 native)
- **Animation**: Smooth 60 FPS gameplay

##  Monetization & Impact

### Revenue Model
- **Ad Placements**: 
  - Rewarded video ads (optional, for power-ups)
  - Interstitial ads (between levels)
  - Banner ads (non-intrusive)
- **In-App Purchases**: 
  - Cosmetic items (character skins)
  - Level packs
  - Ad removal (optional)

### Donation Commitment
- **100% of ad revenue** donated to environmental NGOs
- Monthly transparency reports
- Player impact dashboard
- Partner organizations:
  - Ocean Conservancy
  - The Nature Conservancy
  - Rainforest Alliance
  - WWF (World Wildlife Fund)
  - Cool Earth

### Impact Tracking
- Real-time donation counter
- Trees planted equivalent
- Plastic removed from oceans (kg)
- Carbon offset (tons)
- Acres of forest protected

##  Contributing

We welcome contributions! Here's how you can help:

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Level Design
- Submit level designs in Issues
- Include screenshots/mockups
- Describe environmental theme
- List collectibles and hazards

### Art Assets
- Follow existing art style
- Provide sprite sheets
- Include asset licenses
- Maintain consistent resolution

### Bug Reports
- Use GitHub Issues
- Include steps to reproduce
- Provide screenshots/videos
- Specify platform/device

##  Development Roadmap

### Phase 1: Prototype ✅
- [x] Basic platformer mechanics
- [x] Collection system
- [x] Obstacle avoidance
- [x] Level completion
- [x] UI/UX foundation

### Phase 2: Core Game (Q2 2025)
- [ ] 20+ unique levels
- [ ] 5 different biomes
- [ ] Multiple character types
- [ ] Power-up system
- [ ] Achievement system
- [ ] Save/load functionality

### Phase 3: Monetization (Q3 2025)
- [ ] Ad integration
- [ ] In-app purchases
- [ ] Analytics tracking
- [ ] NGO partnership setup
- [ ] Donation dashboard

### Phase 4: Mobile Launch (Q4 2025)
- [ ] Mobile optimization
- [ ] Touch controls
- [ ] iOS App Store release
- [ ] Google Play Store release
- [ ] Cross-platform cloud saves

### Phase 5: Community & Expansion (2026)
- [ ] Level editor
- [ ] Community levels
- [ ] Multiplayer modes
- [ ] Seasonal events
- [ ] Educational content

## 📊 Key Metrics

### Performance Targets
- **Frame Rate**: 60 FPS on all platforms
- **Load Time**: < 3 seconds
- **App Size**: < 100 MB
- **Battery Usage**: Optimized for mobile

### Engagement Goals
- **Retention**: 40% D7 retention
- **Session Length**: 15+ minutes average
- **Level Completion**: 70% completion rate
- **Social Sharing**: 5% share rate

### Impact Goals
- **Year 1**: $50,000 donated
- **Year 2**: $200,000 donated
- **Year 3**: $500,000 donated
- **Trees Planted**: 1,000,000+
- **Players**: 5,000,000+

##  Credits

### Development Team
- **Lead Developer**: [Your Name]
- **Game Designer**: [Team Member]
- **Artist**: [Team Member]
- **Sound Designer**: [Team Member]
- **QA Tester**: [Team Member]

### Special Thanks
- Environmental NGO partners
- Open source community
- Beta testers
- Players making a difference

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Contact

- **Website**: [www.ecoquest.game](https://www.ecoquest.game)
- **Email**: contact@ecoquest.game
- **Twitter**: [@EcoQuestGame](https://twitter.com/EcoQuestGame)
- **Discord**: [Join our community](https://discord.gg/ecoquest)
- **GitHub**: [github.com/ecoquest](https://github.com/ecoquest)

##  Support the Project

If you love EcoQuest, here's how to support:

1.  **Star this repository**
2.  **Play and share the game**
3.  **Report bugs and suggest features**
4.  **Contribute code or art**
5.  **Follow us on social media**
6.  **Spread the word about environmental gaming**

---

**Remember: Every level you play helps save the planet! **

Made with love for a sustainable future
