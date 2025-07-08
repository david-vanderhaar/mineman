export function preload(gameInstance) {
    gameInstance.load.image("tileset", "pac man tiles/tileset.png");
    gameInstance.load.tilemapTiledJSON("map-1","pac man tiles/pacman-map-1.json");
    gameInstance.load.tilemapTiledJSON("map-2", "pac man tiles/pacman-map-3.json");
    
    gameInstance.load.spritesheet("pacman", "pacman characters/pacman/steve0.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("pacman1", "pacman characters/pacman/steve0.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("pacman2", "pacman characters/pacman/steve0.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("pacman3", "pacman characters/pacman/steve0.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("pacman4", "pacman characters/pacman/steve0.png", {
        frameWidth: 32, frameHeight: 32
    });

    gameInstance.load.spritesheet("pacmanDeath1", "fx/explosion_0/Fx06_01.png", {
        frameWidth: 64, frameHeight: 64
    });
    gameInstance.load.spritesheet("pacmanDeath2", "fx/explosion_0/Fx06_02.png", {
        frameWidth: 64, frameHeight: 64
    });
    gameInstance.load.spritesheet("pacmanDeath3", "fx/explosion_0/Fx06_03.png", {
        frameWidth: 64, frameHeight: 64
    });
    gameInstance.load.spritesheet("pacmanDeath4", "fx/explosion_0/Fx06_04.png", {
        frameWidth: 64, frameHeight: 64
    });
    gameInstance.load.spritesheet("pacmanDeath5", "fx/explosion_0/Fx06_05.png", {
        frameWidth: 64, frameHeight: 64
    });
    gameInstance.load.spritesheet("pacmanDeath6", "fx/explosion_0/Fx06_06.png", {
        frameWidth: 64, frameHeight: 64
    });
    gameInstance.load.spritesheet("pacmanDeath7", "fx/explosion_0/Fx06_07.png", {
        frameWidth: 64, frameHeight: 64
    });
    gameInstance.load.spritesheet("pacmanDeath8", "fx/explosion_0/Fx06_08.png", {
        frameWidth: 64, frameHeight: 64
    });

    gameInstance.load.image("dot", "pac man tiles/chicken_leg.png");
    gameInstance.load.image("gold", "pac man tiles/gold.png");
    gameInstance.load.image("diamond", "pac man tiles/diamond.png");
    gameInstance.load.image("powerPill", "pac man tiles/lava_bucket.png");


    gameInstance.load.spritesheet("pinkGhost", "ghost/creeper.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("orangeGhost", "ghost/creeper.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("blueGhost", "ghost/creeper.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("redGhost", "ghost/creeper.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("scaredGhost", "ghost/ghost afraid/spr_afraid_0.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.spritesheet("scaredGhostWhite", "ghost/ghost afraid/spr_afraid_1.png", {
        frameWidth: 32, frameHeight: 32
    });
    gameInstance.load.image("endGameImage", "pac man text/spr_message_2.png");
    gameInstance.load.image("lifeCounter", "pac man & life counter & death/pac man life counter/spr_lifecounter_0.png");
}