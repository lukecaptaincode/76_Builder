import * as perks from './perks.json';

export module SeventySixCore {
    export class Perks {
        // @ts-ignore
        allPerks = perks;
        // @ts-ignore
        strengthPerks = perks.Strength;
        // @ts-ignore
        perceptionPerks = perks.Perception;
        // @ts-ignore
        endurancePerks = perks.Endurance;
        // @ts-ignore
        charismaPerks = perks.Charisma;
        // @ts-ignore
        intelligencePerks = perks.Intelligence;
        // @ts-ignore
        agilityPerks = perks.Agility;
        // @ts-ignore
        luckPerks = perks.Luck;

        public getAllPerks() {
            return {
                strength: () => {
                    return {
                        byRank: (rank: number = 0) => {
                            return this.getAllPerks().byRank(rank, this.strengthPerks);
                        },
                        all: () => {
                            return this.strengthPerks;
                        }
                    };
                },
                perception: () => {
                    return {
                        byRank: (rank: number = 0) => {
                            return this.getAllPerks().byRank(rank, this.perceptionPerks);
                        },
                        all: () => {
                            return this.perceptionPerks;
                        }
                    };
                },
                endurance: () => {
                    return {
                        byRank: (rank: number = 0) => {
                            return this.getAllPerks().byRank(rank, this.endurancePerks);
                        },
                        all: () => {
                            return this.endurancePerks;
                        },
                    };
                },
                charisma: () => {
                    return {
                        byRank: (rank: number = 0) => {
                            return this.getAllPerks().byRank(rank, this.charismaPerks);
                        },
                        all: () => {
                            return this.charismaPerks;
                        }
                    };
                },
                intelligence: () => {
                    return {
                        byRank: (rank: number = 0) => {
                            return this.getAllPerks().byRank(rank, this.intelligencePerks);
                        },
                        all: () => {
                            return this.intelligencePerks;
                        }
                    };
                },
                agility: () => {
                    return {
                        byRank: (rank: number = 0) => {
                            return this.getAllPerks().byRank(rank, this.agilityPerks);
                        },
                        all: () => {
                            return this.agilityPerks;
                        }
                    };
                },
                luck: () => {
                    return {
                        byRank: (rank: number = 0) => {
                            return this.getAllPerks().byRank(rank, this.luckPerks);
                        },
                        all: () => {
                            return this.luckPerks;
                        }
                    };
                },
                all: () => {
                    return this.allPerks;
                },
                byRank: (rank: Number = 0, perkList: Object = false) => {
                    if (rank === 0 && !perkList) {// If Want all ranks
                        return this.allPerks;
                    }
                    if (rank === 0 && perkList) {// If want all ranks of special return object
                        return perkList;
                    }
                    const output: any = [];
                    let specials: any = [];
                    if (!perkList) {
                        specials = [this.strengthPerks, this.perceptionPerks, this.endurancePerks, this.charismaPerks,
                            this.intelligencePerks, this.agilityPerks, this.luckPerks];
                    } else {
                        specials = [perkList];
                    }
                    for (let i = 0; i < specials.length; i++) {
                        const internalPerks = specials[i];
                        for (let j = 0; j < internalPerks.length; j++) {
                            // @ts-ignore
                            const rankData = internalPerks[j]['ranks'][rank];
                            if (!rankData.includes('N/A') && rankData.trim() !== '') {
                                output.push({
                                    'perkName': internalPerks[j]['perkName'],
                                    'rank': rank,
                                    'rankDescription': rankData
                                });
                            }
                        }
                    }
                    return output;
                }
            };
        }
    }
}
