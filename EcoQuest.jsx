import React, { useState, useEffect, useRef } from 'react';
import { Heart, Leaf, Droplet, TreePine } from 'lucide-react';

const EcoQuest = () => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [collected, setCollected] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  const gameRef = useRef({
    player: { x: 50, y: 300, width: 32, height: 32, velocityY: 0, jumping: false },
    platforms: [],
    collectibles: [],
    obstacles: [],
    keys: {},
    gravity: 0.6,
    jumpStrength: -12,
    playerSpeed: 4,
    groundLevel: 360
  });

  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const game = gameRef.current;

    const initLevel = (levelNum) => {
      game.player = { x: 50, y: 300, width: 32, height: 32, velocityY: 0, jumping: false };
      
      if (levelNum === 1) {
        game.platforms = [
          { x: 0, y: 380, width: 800, height: 20, color: '#8B4513' },
          { x: 150, y: 320, width: 100, height: 20, color: '#8B4513' },
          { x: 300, y: 260, width: 100, height: 20, color: '#8B4513' },
          { x: 450, y: 200, width: 120, height: 20, color: '#8B4513' },
          { x: 620, y: 280, width: 100, height: 20, color: '#8B4513' }
        ];
        
        game.collectibles = [
          { x: 180, y: 280, type: 'trash', collected: false },
          { x: 330, y: 220, type: 'trash', collected: false },
          { x: 490, y: 160, type: 'trash', collected: false },
          { x: 650, y: 240, type: 'trash', collected: false },
          { x: 400, y: 350, type: 'trash', collected: false }
        ];
        
        game.obstacles = [
          { x: 250, y: 350, width: 30, height: 30, type: 'pollutant' },
          { x: 550, y: 350, width: 30, height: 30, type: 'pollutant' }
        ];
      }
      
      setTotalItems(game.collectibles.length);
      setCollected(0);
    };

    const drawPlayer = () => {
      ctx.fillStyle = '#4CAF50';
      ctx.fillRect(game.player.x, game.player.y, game.player.width, game.player.height);
      
      ctx.fillStyle = '#FFF';
      ctx.fillRect(game.player.x + 8, game.player.y + 8, 6, 6);
      ctx.fillRect(game.player.x + 18, game.player.y + 8, 6, 6);
      
      ctx.fillStyle = '#000';
      ctx.fillRect(game.player.x + 10, game.player.y + 10, 3, 3);
      ctx.fillRect(game.player.x + 20, game.player.y + 10, 3, 3);
      
      ctx.fillRect(game.player.x + 12, game.player.y + 20, 8, 2);
    };

    const drawPlatforms = () => {
      game.platforms.forEach(platform => {
        ctx.fillStyle = platform.color;
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        
        ctx.fillStyle = '#654321';
        for (let i = 0; i < platform.width; i += 20) {
          ctx.fillRect(platform.x + i, platform.y, 18, 4);
        }
      });
    };

    const drawCollectibles = () => {
      game.collectibles.forEach(item => {
        if (!item.collected) {
          if (item.type === 'trash') {
            ctx.fillStyle = '#FF6B6B';
            ctx.beginPath();
            ctx.arc(item.x, item.y, 8, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#FFF';
            ctx.font = '12px Arial';
            ctx.fillText('♻', item.x - 5, item.y + 4);
          }
        }
      });
    };

    const drawObstacles = () => {
      game.obstacles.forEach(obs => {
        ctx.fillStyle = '#8B008B';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        
        ctx.fillStyle = '#FF00FF';
        ctx.fillRect(obs.x + 5, obs.y + 5, obs.width - 10, obs.height - 10);
      });
    };

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#87CEEB');
      gradient.addColorStop(1, '#E0F6FF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(700, 50, 30, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#90EE90';
      for (let i = 0; i < 5; i++) {
        const x = 100 + i * 150;
        ctx.fillRect(x, 340, 40, 40);
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.arc(x + 20, 320, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#90EE90';
      }
    };

    const updatePlayer = () => {
      if (game.keys['ArrowLeft'] || game.keys['a']) {
        game.player.x -= game.playerSpeed;
      }
      if (game.keys['ArrowRight'] || game.keys['d']) {
        game.player.x += game.playerSpeed;
      }
      if ((game.keys['ArrowUp'] || game.keys['w'] || game.keys[' ']) && !game.player.jumping) {
        game.player.velocityY = game.jumpStrength;
        game.player.jumping = true;
      }

      game.player.velocityY += game.gravity;
      game.player.y += game.player.velocityY;

      if (game.player.x < 0) game.player.x = 0;
      if (game.player.x + game.player.width > canvas.width) {
        game.player.x = canvas.width - game.player.width;
      }

      let onGround = false;
      game.platforms.forEach(platform => {
        if (game.player.x + game.player.width > platform.x &&
            game.player.x < platform.x + platform.width &&
            game.player.y + game.player.height >= platform.y &&
            game.player.y + game.player.height <= platform.y + 20 &&
            game.player.velocityY >= 0) {
          game.player.y = platform.y - game.player.height;
          game.player.velocityY = 0;
          game.player.jumping = false;
          onGround = true;
        }
      });

      if (!onGround && game.player.y >= game.groundLevel) {
        game.player.y = game.groundLevel;
        game.player.velocityY = 0;
        game.player.jumping = false;
      }
    };

    const checkCollisions = () => {
      game.collectibles.forEach(item => {
        if (!item.collected) {
          const dx = (game.player.x + game.player.width / 2) - item.x;
          const dy = (game.player.y + game.player.height / 2) - item.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 20) {
            item.collected = true;
            setScore(s => s + 10);
            setCollected(c => c + 1);
          }
        }
      });

      game.obstacles.forEach(obs => {
        if (game.player.x + game.player.width > obs.x &&
            game.player.x < obs.x + obs.width &&
            game.player.y + game.player.height > obs.y &&
            game.player.y < obs.y + obs.height) {
          setLives(l => l - 1);
          game.player.x = 50;
          game.player.y = 300;
        }
      });

      if (collected === totalItems && game.player.x + game.player.width >= canvas.width - 50) {
        setGameState('levelComplete');
      }
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawBackground();
      drawPlatforms();
      drawCollectibles();
      drawObstacles();
      updatePlayer();
      drawPlayer();
      checkCollisions();

      if (lives <= 0) {
        setGameState('gameOver');
      }
    };

    initLevel(level);
    const interval = setInterval(gameLoop, 1000 / 60);

    const handleKeyDown = (e) => {
      game.keys[e.key] = true;
      e.preventDefault();
    };

    const handleKeyUp = (e) => {
      game.keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState, lives, collected, totalItems, level]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(3);
    setLevel(1);
    setCollected(0);
  };

  const nextLevel = () => {
    setLevel(l => l + 1);
    setGameState('playing');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-blue-100 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-4xl w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
            <Leaf className="text-green-600" /> EcoQuest
          </h1>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Heart className="text-red-500" size={20} />
              <span className="font-bold">{lives}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">Score: {score}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">Level: {level}</span>
            </div>
          </div>
        </div>

        {gameState === 'menu' && (
          <div className="text-center py-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Welcome to EcoQuest!</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Explore vibrant pixel worlds and complete missions to clean oceans, plant trees, and restore ecosystems. 
              Every level you complete helps raise awareness for environmental causes!
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <div className="text-center">
                <TreePine className="mx-auto text-green-600 mb-2" size={32} />
                <p className="text-sm">Plant Trees</p>
              </div>
              <div className="text-center">
                <Droplet className="mx-auto text-blue-600 mb-2" size={32} />
                <p className="text-sm">Clean Oceans</p>
              </div>
              <div className="text-center">
                <Leaf className="mx-auto text-green-600 mb-2" size={32} />
                <p className="text-sm">Restore Nature</p>
              </div>
            </div>
            <button
              onClick={startGame}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition"
            >
              Start Adventure
            </button>
            <div className="mt-6 text-sm text-gray-600">
              <p className="font-bold mb-2">Controls:</p>
              <p>Arrow Keys or WASD to move • Space or Up Arrow to jump</p>
            </div>
          </div>
        )}

        {gameState === 'playing' && (
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>Collected: {collected}/{totalItems}</span>
              <span className="text-green-600 font-bold">Clean up the environment!</span>
            </div>
            <canvas
              ref={canvasRef}
              width={800}
              height={400}
              className="border-4 border-green-600 rounded-lg w-full"
            />
            <p className="text-xs text-gray-600 mt-2 text-center">
              Collect all recyclables and reach the end to complete the level!
            </p>
          </div>
        )}

        {gameState === 'levelComplete' && (
          <div className="text-center py-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Level Complete! 🎉</h2>
            <p className="text-xl mb-6">You cleaned up the environment!</p>
            <p className="text-lg mb-4">Score: {score}</p>
            <button
              onClick={nextLevel}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition"
            >
              Next Level
            </button>
          </div>
        )}

        {gameState === 'gameOver' && (
          <div className="text-center py-12">
            <h2 className="text-4xl font-bold text-red-800 mb-4">Game Over</h2>
            <p className="text-xl mb-6">Final Score: {score}</p>
            <button
              onClick={startGame}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition"
            >
              Try Again
            </button>
          </div>
        )}

        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800 text-center">
            <strong>💚 Making a Difference:</strong> In the full game, ad revenue supports environmental NGOs fighting climate change!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcoQuest;
