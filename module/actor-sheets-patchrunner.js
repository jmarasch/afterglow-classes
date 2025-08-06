/**
 * Afterglow patchrunner character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the DCC actor sheet for Afterglow Patchrunner
 * @extends {DCCActorSheet}
 */
class ActorSheetPatchrunner extends DCCActorSheet {
    /** @inheritDoc */
    static DEFAULT_OPTIONS = {
        classes: ['dcc', 'sheet', 'actor', 'pc', 'patchrunner'],
        position: {
            height: 635,
            width: 583
        }
    }

    /** @inheritDoc */
    static CLASS_TABS = {
        sheet: {
            tabs: [
                { id: 'patchrunner', group: 'sheet', label: 'Afterglow.Patchrunner' },
                { id: 'spells', group: 'sheet', label: 'Patchrunner.Programs' },
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
        patchrunner: {
            template: 'modules/afterglow-classes/templates/actor-partial-patchrunner.html'
        },
        spells: {
            template: 'modules/afterglow-classes/templates/actor-partial-patchrunner-programs.html'
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
        if (context.system.details.sheetClass !== 'Patchrunner') {
            this.actor.update({
                'system.class.className': game.i18n.localize('Afterglow.Patchrunner'),
                'system.config.showSkills' : true
            })
        }

        // Add in patchrunner specific data if missing
        if (!context.system.class.aiPatron) {
            this.actor.update({
                'system.class.aiPatron': {
                    label: 'Patchrunner.AIPatron',
                    value: ' '
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
        if (!context.system.class.spellCheck) {
            this.actor.update({
                'system.class.spellCheck': {
                    label: 'Afterglow.ProgramCheck',
                    value: '+0'
                }
            })
        }
        if (!context.system.class.WhispercoilPersonality) {
            this.actor.update({
                'system.class.WhispercoilPersonality': {
                    label: 'Patchrunner.WhispercoilPersonality',
                    value: ''
                }
            })
        }
        if (!context.system.class.WhispercoilHindrence) {
            this.actor.update({
                'system.class.WhispercoilHindrence': {
                    label: 'Patchrunner.WhispercoilHindrence',
                    value: ''
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
    ActorSheetPatchrunner
}
