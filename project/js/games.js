const data = [
    {
        name: "Counter-Strike 2",
        types: ["All Games", "Shooter", "Free", "Multiplayer", "Approved By Whalen"],
        price: "Free",
        picture: "https://steamcdn-a.akamaihd.net/steam/apps/730/capsule_616x353.jpg",
        multiplayer: true,
        dlc: false,
        MrWhalenApproval: true
    },
    {
        name: "Fortnite",
        types: ["All Games", "Battle Royale", "Shooter", "Multiplayer", "Free", "Approved By Whalen"],
        picture: "https://th.bing.com/th/id/OIP.88XiV74jWk0bNFfAlwMovQHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "Free",
        dlc: false,
        MrWhalenApproval: true
    },
    {
        name: "One Piece: Odyssey",
        types: ["All Games", "Open-World", "RPG", "Anime", "DLC", "Unapproved By Whalen"],
        picture: "https://th.bing.com/th/id/OIP.l0dQ_J-83PBWJSGUJgGcFAHaEL?w=292&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: false,
        price: "$59.99",
        dlc: true,
        MrWhalenApproval: false
    },
    {
        name: "Genshin Impact", 
        types: ["All Games", "Open-World", "RPG", "Gacha", "Free", "Unapproved By Whalen"],
        picture: "https://th.bing.com/th/id/OIP.6UyAX3A4Rtf-Y4S_jvUYVgHaEK?w=303&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "Free (Social Status)",
        dlc: false,
        MrWhalenApproval: false
    },
    {
        name: "Minecraft",
        types: ["All Games", "Open-World", "Adventure", "Multiplayer", "DLC", "Approved By Whalen"],
        picture: "https://th.bing.com/th/id/OIP.81usBOaz0sLSdWXI2b6XTAHaEK?w=249&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "$29.99",
        dlc: true,
        MrWhalenApproval: true
    },
    {
        name: "Cuphead",
        types: ["All Games", "Platformer", "Shooter", "Multiplayer", "DLC", "Approved By Whalen"],
        picture: "https://th.bing.com/th/id/OIP.Gnzb6RfpoDPjwleU44OaLgHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "$19.99",
        dlc: true,
        MrWhalenApproval: true
    },
    {
        name: "Raft",
        types: ["All Games","Open-World", "Adventure", "Multiplayer", "DLC", "Approved By Whalen"],
        picture: "https://th.bing.com/th/id/OIP.muY-qbKVWuAHYkBCSeH-EQFNC7?w=302&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "$59.99",
        dlc: true,
        MrWhalenApproval: true
    },
    {
        name: "Sea of Thieves",
        types: ["All Games", "Open-World", "Adventure", "Action", "Multiplayer", "DLC", "Approved By Whalen"],
        picture: "https://th.bing.com/th/id/OIP.Am8XR4OwSH_TZZbTd8yaawHaEG?w=296&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "$59.99",
        dlc: true,
        MrWhalenApproval: true
    },
    {
        name: "League of Legends",
        types: ["All Games", "MOBA", "Versus", "Multiplayer", "DLC", "Unapproved By Whalen"],
        picture: "https://th.bing.com/th/id/OIP._I4jbvQ3-EPxo7S-Wts2JAHaEK?w=277&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "Free (Sanity + Unsanitary Living Conditions)",
        dlc: true,
        MrWhalenApproval: false
    },
];

/* const data = [
    {
        name: "Counter-Strike 2",
        genres: ["Shooter"],
        price: "Free",
        picture: "https://steamcdn-a.akamaihd.net/steam/apps/730/capsule_616x353.jpg",
        multiplayer: true,
        dlc: false,
        MrWhalenApproval: true
    },
    {
        name: "Fortnite",
        genres: ["Battle Royale", "Shooter"],
        picture: "https://th.bing.com/th/id/OIP.88XiV74jWk0bNFfAlwMovQHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "Free",
        dlc: false,
        MrWhalenApproval: true
    },
    {
        name: "One Piece: Odyssey",
        genres: ["Open-World", "RPG", "Anime"],
        picture: "https://th.bing.com/th/id/OIP.l0dQ_J-83PBWJSGUJgGcFAHaEL?w=292&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: false,
        price: "$59.99",
        dlc: true,
        MrWhalenApproval: false
    },
    {
        name: "Genshin Impact", 
        genres: ["Open-World", "RPG", "Gacha"],
        picture: "https://th.bing.com/th/id/OIP.6UyAX3A4Rtf-Y4S_jvUYVgHaEK?w=303&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "Social Status",
        dlc: false,
        MrWhalenApproval: false
    },
    {
        name: "Minecraft",
        genres: ["Open-World", "Adventure"],
        picture: "https://th.bing.com/th/id/OIP.81usBOaz0sLSdWXI2b6XTAHaEK?w=249&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "$29.99",
        dlc: true,
        MrWhalenApproval: true
    },
    {
        name: "Cuphead",
        genres: ["Platformer", "Shooter"],
        picture: "https://th.bing.com/th/id/OIP.Gnzb6RfpoDPjwleU44OaLgHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "$19.99",
        dlc: true,
        MrWhalenApproval: true
    },
    {
        name: "Raft",
        genres: ["Open-World", "Adventure"],
        picture: "https://th.bing.com/th/id/OIP.muY-qbKVWuAHYkBCSeH-EQFNC7?w=302&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "$59.99",
        dlc: true,
        MrWhalenApproval: true
    },
    {
        name: "Sea of Thieves",
        genres: ["Open-World", "Adventure", "Action"],
        picture: "https://th.bing.com/th/id/OIP.Am8XR4OwSH_TZZbTd8yaawHaEG?w=296&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "$59.99",
        dlc: true,
        MrWhalenApproval: true
    },
    {
        name: "League of Legends",
        genres: ["MOBA", "Versus"],
        picture: "https://th.bing.com/th/id/OIP._I4jbvQ3-EPxo7S-Wts2JAHaEK?w=277&h=180&c=7&r=0&o=5&pid=1.7",
        multiplayer: true,
        price: "Sanity + Unsanitary Living Conditions",
        dlc: true,
        MrWhalenApproval: false
    },
]; */

export { data };