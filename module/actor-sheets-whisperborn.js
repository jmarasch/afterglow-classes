/**
 * Afterglow Whisperborn character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the DCC actor sheet for Afterglow Whisperborn
 * @extends {DCCActorSheet}
 */
class ActorSheetWhisperborn extends DCCActorSheet {
    /** @inheritDoc */
    static DEFAULT_OPTIONS = {
        classes: ['dcc', 'sheet', 'actor', 'pc', 'whisperborn'],
        position: {
            height: 635
        }
    }

    /** @inheritDoc */
    static CLASS_TABS = {
        sheet: {
            tabs: [
                { id: 'whisperborn', group: 'sheet', label: 'Afterglow.Whisperborn' },
                { id: 'spells', group: 'sheet', label: 'Afterglow.Mutations' },
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
        whisperborn: {
            template: 'modules/afterglow-classes/templates/actor-partial-whisperborn.html'
        },
        spells: {
            template: 'modules/afterglow-classes/templates/actor-partial-mutations.html'
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

        if (context.system.details.sheetClass !== 'Whisperborn') {
            this.actor.update({
                'system.class.className': game.i18n.localize('Afterglow.Whisperborn'),
                'system.config.showSkills' : true
            })
        }

        // Add in Whisperborn specific data if missing
        if (!context.system.class.spellCheckAbility) {
            this.actor.update({
                'system.class.spellCheckAbility': {
                    label: 'Whisperborn.VisionSpellCheck',
                    value: 'Per'
                }
            })
        }
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
        return context
    }
}

export {
    ActorSheetWhisperborn
}
