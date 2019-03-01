import {Component, ViewEncapsulation} from '@angular/core';
import {SeventySixCore} from '../76Core/SeventySixCore';
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.None

})
export class HomePage {
    strengthPerks: any = [];
    perceptionPerks: any = [];
    endurancePerks: any = [];
    charismaPerks: any = [];
    intelligencePerks: any = [];
    agilityPerks: any = [];
    luckPerks: any = [];
    allPerks: any = [];

    constructor() {
        const seventySixCore = SeventySixCore;
        const perksClass = new seventySixCore.Perks();
        this.strengthPerks = perksClass.getAllPerks().strength().all();
        this.perceptionPerks = perksClass.getAllPerks().perception().all();
        this.endurancePerks = perksClass.getAllPerks().endurance().all();
        this.charismaPerks = perksClass.getAllPerks().charisma().all();
        this.intelligencePerks = perksClass.getAllPerks().intelligence().all();
        this.agilityPerks = perksClass.getAllPerks().agility().all();
        this.luckPerks = perksClass.getAllPerks().luck().all();
        this.allPerks = [this.strengthPerks, this.perceptionPerks, this.endurancePerks, this.charismaPerks, this.agilityPerks, this.intelligencePerks, this.luckPerks];
    }

    public expandPerk(event: any, perkuid: any) {
        const cursor = '<span class="blinking-cursor">|</span>';
        const perkContent = $('#content-' + perkuid);
        if (!perkContent.hasClass('perk-open')) {
            perkContent.addClass('perk-open');
            perkContent.css('height', 0)
                .animate(
                    {height: '100px'},
                    {queue: false, duration: 'slow'}
                );
            $('#perkname-' + perkuid).append(cursor);

        } else {
            perkContent.removeClass('perk-open');
            perkContent.css('height', '100px')
                .animate(
                    {height: 0},
                    {queue: false, duration: 'slow'}
                );
            $('span').filter(':contains("|")').remove();
        }

    }

    public search(value: any) {
        const perkNames = $('h4');
        for (let i = 0; i < perkNames.length; i++) {
            const perkText = perkNames[i].innerText;
            const cardID = perkNames[i].getAttribute('id').toString().split('-')[1];
            if (!perkText.match(value)) {
                $('#' + cardID).css('display', 'none');

            } else {
                $('#' + cardID).css('display', 'block');

            }
        }
    }

    public addPerk(event: any, id: any) {
        event.preventDefault();
        console.log(document.getElementById(id).innerText);
    }
}
