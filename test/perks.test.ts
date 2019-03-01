import {SeventySixCore} from '../src/app/76Core/SeventySixCore';

describe('This is SeventySixCore Perks class test', () => {
    const perksClass = new SeventySixCore.Perks();
    test('Check if perks file is parsed', () => {
        expect(typeof perksClass.getAllPerks().all()).toBe('object');
        expect(typeof perksClass.allPerks).toBe('object');
        expect(typeof perksClass.getAllPerks().strength()).toBe('object');
        expect(typeof perksClass.strengthPerks).toBe('object');
        expect(typeof perksClass.getAllPerks().perception()).toBe('object');
        expect(typeof perksClass.perceptionPerks).toBe('object');
        expect(typeof perksClass.getAllPerks().endurance()).toBe('object');
        expect(typeof perksClass.endurancePerks).toBe('object');
        expect(typeof perksClass.getAllPerks().charisma()).toBe('object');
        expect(typeof perksClass.charismaPerks).toBe('object');
        expect(typeof perksClass.getAllPerks().intelligence()).toBe('object');
        expect(typeof perksClass.intelligencePerks).toBe('object');
        expect(typeof perksClass.getAllPerks().agility()).toBe('object');
        expect(typeof perksClass.agilityPerks).toBe('object');
        expect(typeof perksClass.getAllPerks().luck()).toBe('object');
        expect(typeof perksClass.luckPerks).toBe('object');
    });
    test('Check if strength perks object is created', () => {
        expect(typeof perksClass.getAllPerks().strength()).toBe('object');
        expect(typeof perksClass.strengthPerks).toBe('object');
    });
    test('Check if perception perks object is created', () => {
        expect(typeof perksClass.getAllPerks().perception()).toBe('object');
        expect(typeof perksClass.perceptionPerks).toBe('object');
    });
    test('Check if endurance perks object is created', () => {
        expect(typeof perksClass.getAllPerks().endurance()).toBe('object');
        expect(typeof perksClass.endurancePerks).toBe('object');
    });
    test('Check if charisma perks object is created', () => {
        expect(typeof perksClass.getAllPerks().charisma()).toBe('object');
        expect(typeof perksClass.charismaPerks).toBe('object');
    });
    test('Check if intelligence perks object is created', () => {
        expect(typeof perksClass.getAllPerks().intelligence()).toBe('object');
        expect(typeof perksClass.intelligencePerks).toBe('object');
    });
    test('Check if agility perks object is created', () => {
        expect(typeof perksClass.getAllPerks().agility()).toBe('object');
        expect(typeof perksClass.agilityPerks).toBe('object');
    });
    test('Check if Luck perks object is created', () => {
        expect(typeof perksClass.getAllPerks().luck()).toBe('object');
        expect(typeof perksClass.luckPerks).toBe('object');
    });
    test('check length of all objects by rank', () => {
        expect(Object.keys(perksClass.getAllPerks().byRank()).length).toEqual(7);
    });
});
