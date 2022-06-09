'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const races = ["Altmer (High Elf)","Argonian","Bosmer (Wood Elf)","Breton","Dunmer (Dark Elf)","Imperial","Khajiit","Nord","Orsimer","Redguard"];
const spec = ["Archer","Barbarian","Crusader","Knight","Rogue","Scout","Warrior","Battlemage","Healer","Mage","Nightblade","Sorcerer","Spellsword","Witchhunher","Acrobat","Agent","Assassin","Bard","Monk","Pilgrim","Thief"];
const birthsigns = ["The Lover","The Lord","The Mage","The Shadow","The Steed","The Apprentice","The Warrior","The Lady","The Tower","The Atronach","The Thief", "The Serpent"];
const alingment = ["Chaotic Evil","Chaotic Good","Chaotic Neutral","Lawful Evil","Lawful Good","Lawful Neutral","Neutral","Neutral Evil", "Neutral Good"];
const sex = ["Male","Female"];
const aedra = ["Akatosh","Dibella","Arkay","Zenithar","Stendarr","Mara","Kynareth","Julianos","Talos"];
const daedra = ["Azura","Boethiah","Clavicus Vile","Hermaeus Mora","Hircine","Malacath","Mehrunes Dagon","Mephala","Meridia","Molag Bal","Namira","Nocturnal","Peryite","Sanguine","Sheogorath","Sheogorath","Vaermina"];
const skills = ["Archery", "Block", "Heavy Armor", "One Handed", "Smithing", "Two Handed", "Alternation", "Conjuration", "Destruction", "Enchanting", "Illusion", "Restoration", "Alchemy", "Light Armor", "Lockpicking", "Pickpocket", "Sneak", "Speech"];
const blessings = ["None", "Survivor - lower need for food and water", "Adept - 1 perk in all skill trees", "One with Nature - start with tame animal shout", "Poppins - start with 1 bag of holding", "Hardy - start with 20 extra health", "Tireless - start with 30 extra stamina", "Wellspring - start with 25 extra magika", "Quick Learner - increased exp gains", "Thane - start as Thane of nearest hold", "Guided - turn compass on", "Best Friend - Recruit nearest follower and set relationship to a high status", "Beauty - Speech increased to 30, free Allure perk", "Heir - 1 set of unenchanted, high level (not deadric or dragon) armor and weapons", "Prodigy - increase 1 starting skill to 50", "Reflexes - start with Slow Time shout - can only be used once per day until found naturally", "Half-breed - Add racial ability and bonuses from another race", "Divine Favor - start with legendary or deadric artifact" ];
const curses = ["Addicted - skooma or alcohol", "Awkward - set your speech exprate to zero", "Clumsy - no crafting skills", "Inept - set 10 starting skills to zero", "Lost - No using the map", "Phobia - Roll a D6. You must avoid (1.water 2.heights 3.insects 4.caves 5.dogs/wolves 6.fire)", "Antisocial - Avoid cities as much as possible. Trade as little as possible", "Werewolf - Afflicted with Lycanthropy", "Vampire - Afflicted with Sanguine Vampiris", "Wanted - Bounty set to 1000 in all but one hold", "Glutton - Increase need for food in INeed", "Divine Scorn - No deadric items and no praying at shrines", "Afflicted - Uncurable disease. Roll D6 (1.Ataxia 2.Witbane 3.Bone Break Fever 4.Brain Rot 5.Rattles 6. Rockjoint)", "Uncooperative - May not have a follower", "Obsession - Choose 1 equipment you have started with. You must not remove it", "Dragon - may not sell any gems or gold jewelery or bars. Hoarde the treasure in your home", "Hitagi - Lightest clothes possible, no armor", "None" ];
let start = ["Caught Crossing the Border Illegally","Escape My Cell","Outlaw in the Wilds","Soldier in the Army - Imperials","Soldier in the Army - Stormcloacks","Camping in the Woods","Shipwrecked off the Coast","Attacked and Left for Dead","Vampire in a Secluded Lair","Necromancer in a Hidden Lab","Vigilant of Stendarr","Warlock's Thrall", "Arrived by Ship - Solitude", "Arrived by Ship - Dawnstar", "Arrived by Ship - Windhelm", "Arrived by Ship - Raven Rock", "Property Owner - Breezehome", "Property Owner - Honeyside", "Property Owner - Vlindrel Hall", "Property Owner - Proudspire Manor", "Member of a Guild - Thieves Guild", "Member of a Guild - Companions", "Member of a Guild - Dawnguard", "Member of a Guild - Castle Volkihar", "Member of a Guild - College of Winterhold", "Patron at an Inn - Windspeak Inn", "Patron at an Inn - Four Shields Tavern", "Patron at an Inn - Dead Man\'s Drink", "Patron at an Inn - Vilemyr Inn", "Patron at an Inn - Braidwood Inn", "Patron at an Inn - Moorside Inn", "Patron at an Inn - Nightgate Inn", "Patron at an Inn - Sleeping Giant Inn", "Patron at an Inn - Frostfruit Inn", "Patron at an Inn - The Frozen Hearth"];

window.addEventListener("load", function(){
    function character(){
        let isEvil = false, x;
        let myclasses = [];
        let classText;
        
        this.race = "",
        this.spec = "",
        this.birthsign = "",
        this.alingment = "",
        this.sex = "",
        this.god = "",
        this.blessing = "",
        this.curse = "",
        this.start = "",
        this.img = "",
        
        this.create = function(type = -1){
            // type -1 = update all
            if(type == -1 || type == 0)
                this.race = races[Math.floor(Math.random() * races.length)];
            if(type == -1 || type == 1)
                this.sex = sex[Math.floor(Math.random() * sex.length)];
            if(type == -1 || type == 2)
                this.birthsign = birthsigns[Math.floor(Math.random() * birthsigns.length)];
            if(type == -1 || type == 3){
                let temp = Math.floor(Math.random() * spec.length);          
                this.spec = spec[temp];
                // Adding skills to specs
                switch(temp){
                    case 0:
                        myclasses.push(0,3,4,11,13,16);
                        break;
                    case 1:
                        myclasses.push(0,1,3,4,5,13);
                        break;
                    case 2:
                        myclasses.push(1,2,3,5,8,11);
                        break;
                    case 3:
                        myclasses.push(1,2,3,5,10,17);
                        break;
                    case 4:
                        myclasses.push(1,3,10,12,13,17);
                        break;
                    case 5:
                        myclasses.push(0,1,3,4,12,13);
                        break;
                    case 6:
                        myclasses.push(0,1,2,3,4,5);
                        break;
                    case 7:
                        myclasses.push(2,3,6,7,8,9);
                        break;
                    case 8:
                        myclasses.push(6,8,10,11,12,17);
                        break;
                    case 9:
                        myclasses.push(6,7,8,9,10,11);
                        break;
                    case 10:
                        myclasses.push(3,6,8,11,13,16);
                        break;
                    case 11:
                        myclasses.push(2,6,7,8,9,11);
                        break;
                    case 12:
                        myclasses.push(2,3,6,8,10,11);
                        break;
                    case 13:
                        myclasses.push(0,7,8,9,12,14);
                        break;
                    case 14:
                        myclasses.push(0,1,3,14,16,17);
                        break;
                    case 15:
                        myclasses.push(0,10,14,15,16,17);
                        break;
                    case 16:
                        myclasses.push(0,3,12,13,14,16);
                        break;
                    case 17:
                        myclasses.push(1,3,10,12,13,17);
                        break;
                    case 18:
                        myclasses.push(0,1,6,10,14,16,17);
                        break;
                    case 19:
                        myclasses.push(1,4,5,13,14,17);
                        break;
                    case 20:
                        myclasses.push(0,13,14,15,16,17);
                        break;
                }
                
                classText = skills.map(function(str, index){
                    if(index == myclasses[0]){
                        myclasses.shift();
                        return "<li>" + skills[index] + "</li>";
                    } else return "";
                }).join("");
            }
            
            if(type == -1 || type == 4){
                this.alingment = alingment[Math.floor(Math.random() * alingment.length)];
                isEvil = this.alingment.match(/chaotic|evil/i) == null ? false : true;
            }
            
            if(type == -1 || type == 5)
                this.god = (!isEvil) ? aedra[Math.floor(Math.random() * aedra.length)] : daedra[Math.floor(Math.random() * daedra.length)];
            
            if(type == -1 || type == 7)
                this.blessing = blessings[Math.floor(Math.random() * blessings.length)];
            
            if(type == -1 || type == 8)
                this.curse = curses[Math.floor(Math.random() * curses.length)];

            if(type == -1 || type == 6){
                x = -1;
                switch(this.race){
                    case "Breton":
                            start.push("Member of a Forsworn Tribe");
                            break;
                    case "Nord":
                            start.push("Erik the Slayer's Childhood Friend");
                            break;
                    case "Imperial":
                            start.push("Member of the Penitus Oculatus");
                            break;
                    case "Altmer (High Elf)":
                            start.push("Altmer Agent of the Thalmor");
                            break;
                    case "Khajiit":
                            start.push("Khajiit Caravan Guard");
                            break;
                    case "Argonian":
                            start.push("Argonian Dock Worker");
                            break;
                    case "Dunmer (Dark Elf)":
                            start.push("Dunmer Refugee - Windhelm","Dunmer Refugee - Raven Rock");
                            x--;
                            break;
                    case "Redguard":
                            start.push("Redguard Alik'r Warrior");
                            break;
                    case "Orsimer":
                            start.push("Live in an Orc Stronghold");
                            break;
                    default:
                            x = 0;
                }

                if(isEvil){
                    start.push("Member of a Guild - Dark Brotherhood");
                    x--;
                }
                
                this.start = start[Math.floor(Math.random() * start.length)];
                start.splice(x, x * -1);
            }

            if(type == -1 || type == 0)
                this.img = "img/races/" + this.race.split(" ")[0] + ".png";
        }

        this.show = function(type = -1){
            $(".race").textContent = this.race;
            $(".class").innerHTML = this.spec + "<img id=info src='img/info.png'><div class=class-info><ul>" + classText + "</ul></div>";
            $(".birthsign").textContent = this.birthsign;
            $(".alingment").textContent = this.alingment;
            $(".sex").textContent = this.sex;
            $(".god").textContent = this.god;
            $(".start").textContent = this.start;
            $("#blessing").textContent = this.blessing;
            $("#curse").textContent = this.curse;

            if(type == -1 || type ==0){
                $(".col3 img").setAttribute("src", this.img);
            }

            if(window.innerWidth < 600 || type == -1 || type == 6 || type == 7 || type == 8){
                updateButtonsPositions();
            }
        }

        // Update positions of elements in first column when elements of second column take multiple lines
        function updateButtonsPositions(){
            let textElements;
            let buttonElements;

            if(window.innerWidth > 600){
                // Update only last 2 for larger displays
                textElements = $$(".start, #blessing");
                buttonElements = $$(".col1 .gift, .col1 .curse");
            } else {
                // Update all for small displays
                textElements = $$(".col2 > div");
                buttonElements = $$(".col1 > div:not(:first-of-type)");
            }

            textElements.forEach((element, index) => {
                let buttonWrapper = buttonElements[index];

                if(buttonWrapper){
                    let startHeight = parseInt(getComputedStyle(element, null).height.replace("px", ""));
                    let margin = (startHeight - parseInt(getComputedStyle(buttonWrapper.previousElementSibling, null).height.replace("px", ""))) + "px";

                    buttonWrapper.style.marginTop = margin;
                }
            });
        }
    };

    (function(){
        var characterNow = new character();
        characterNow.create();
        characterNow.show();

        $$(".refresh").forEach((element, index) => {
            element.addEventListener("click", function(){
                characterNow.create(index);
                characterNow.show(index);
            });
        });

        $(".generate").addEventListener("click", function(){
            characterNow.create();
            characterNow.show();
        });
    })();
});
