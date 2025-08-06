/**
 * Afterglow Freezy character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the DCC actor sheet for Afterglow Freezy
 * @extends {DCCActorSheet}
 */
class ActorSheetFreezy extends DCCActorSheet {
    /** @inheritDoc */
    static DEFAULT_OPTIONS = {
        classes: ['dcc', 'sheet', 'actor', 'pc', 'freezy'],
        position: {
            height: 635,
            width: 595,
        }
    }

    /** @inheritDoc */
    static CLASS_TABS = {
        sheet: {
            tabs: [
                { id: 'freezy', group: 'sheet', label: 'Afterglow.Freezy' },
                { id: 'skills', group: 'sheet', label: 'DCC.Skills' }
            ],
            initial: 'character'
        }
    }

    /** @inheritDoc */
    static PARTS = {
        tabs: {
            template: 'systems/dcc/templates/actor-partial-tabs.html'
        },
        character: {
            template: 'systems/dcc/templates/actor-partial-pc-common.html'
        },
        equipment: {
            template: 'systems/dcc/templates/actor-partial-pc-equipment.html'
        },
        freezy: {
            template: 'modules/afterglow-classes/templates/actor-partial-freezy.html'
        },
        skills: {
            template: 'systems/dcc/templates/actor-partial-skills.html'
        },
        notes: {
            template: 'systems/dcc/templates/actor-partial-pc-notes.html'
        }
    }

    /** @override */
    async _prepareContext(options) {
        const context = await super._prepareContext(options)
        if (context.system.details.sheetClass !== 'Freezy') {
            this.actor.update({
                'system.class.className': game.i18n.localize('Afterglow.Freezy'),
                'system.config.showSkills' : true
            })
        }


        // Add in Freezy specific data if missing
        if (!context.system.skills.aiRecognition) {
            this.actor.update({
                'system.skills.aiRecognition': {
                    label: 'Afterglow.AIRecognition',
                    value: '0'
                }
            })
        }
        if (!context.system.class.moralCode) {
            this.actor.update({
                'system.class.moralCode': {
                    label: 'Afterglow.moralCode',
                    value: '6.5 Neutral'
                }
            })
        }
        if (!context.system.skills.artifactCheck) {
            this.actor.update({
                'system.skills.artifactCheck': {
                    label: 'Afterglow.ArtifactCheck',
                    value: '+0'
                }
            })
        }
        if (!context.system.skills.maxTechLevel) {
            this.actor.update({
                'system.skills.maxTechLevel': {
                    label: 'Afterglow.MaxTechLevel',
                    value: '0'
                }
            })
        }
        if (!context.system.class.freezySubClass) {
            this.actor.update({
                'system.class.freezySubClass': {
                    label: 'Freezy.SubClass',
                    value: 'unknown'
                }
            })
        }
        return context
    }
}

export {
    ActorSheetFreezy
}
