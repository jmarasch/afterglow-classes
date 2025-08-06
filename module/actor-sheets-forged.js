/**
 * Afterglow Forged character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the DCC actor sheet for Afterglow Forged
 * @extends {DCCActorSheet}
 */
class ActorSheetForged extends DCCActorSheet {
    /** @inheritDoc */
    static DEFAULT_OPTIONS = {
        classes: ['dcc', 'sheet', 'actor', 'pc', 'forged'],
        position: {
            height: 635
        }
    }

    /** @inheritDoc */
    static CLASS_TABS = {
        sheet: {
            tabs: [
                { id: 'forged', group: 'sheet', label: 'Afterglow.Forged' },
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
        forged: {
            template: 'modules/afterglow-classes/templates/actor-partial-forged.html'
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
        if (context.system.details.sheetClass !== 'Forged') {
            this.actor.update({
                'system.class.className': game.i18n.localize('Afterglow.Forged'),
                'system.config.showSkills' : true
            })
        }

        // Add in Forged specific data if missing
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
        if (!context.system.class.primaryModule) {
            this.actor.update({
                'system.class.primaryModule': {
                    label: 'Forged.PrimaryModule',
                    value: 'Not Installed'
                }
            })
        }
        if (!context.system.class.secondaryModule) {
            this.actor.update({
                'system.class.secondaryModule': {
                    label: 'Forged.secondaryModule',
                    value: 'Not Installed'
                }
            })
        }
        return context
    }
}

export {
    ActorSheetForged
}
