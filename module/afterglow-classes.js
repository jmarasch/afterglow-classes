/* global foundry */

import * as BoomshadeSheets from './actor-sheets-boomshade.js';
import * as ChildOfGiaSheets from './actor-sheets-childofgia.js';
import * as CultistSheets from './actor-sheets-cultist.js';
import * as ForgedSheets from './actor-sheets-forged.js';
import * as PatchrunnerSheets from './actor-sheets-patchrunner.js';
import * as WhisperBornSheets from './actor-sheets-whisperborn.js';
import * as FreezySheets from './actor-sheets-freezy.js';

const { Actors } = foundry.documents.collections
const { loadTemplates } = foundry.applications.handlebars

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once('init', async function () {
    console.log(`Afterglow | Initializing Afterglow System`)

    // Register sheet application classes
    Actors.registerSheet('Afterglow-boomshade', BoomshadeSheets.ActorSheetBoomshade, {
        types: ['Player'],
        label: 'Boomshade.ActorSheetBoomshade'
    })
    Actors.registerSheet('Afterglow-childofgia', ChildOfGiaSheets.ActorSheetChildOfGia, {
        types: ['Player'],
        label: 'ChildOfGia.ActorSheetChildOfGia'
    })
    Actors.registerSheet('Afterglow-cultist', CultistSheets.ActorSheetCultist, {
        types: ['Player'],
        label: 'Cultist.ActorSheetCultist'
    })
    Actors.registerSheet('Afterglow-forged', ForgedSheets.ActorSheetForged, {
        types: ['Player'],
        label: 'Forged.ActorSheetForged'
    })
    Actors.registerSheet('Afterglow-patchrunner', PatchrunnerSheets.ActorSheetPatchrunner, {
        types: ['Player'],
        label: 'Patchrunner.ActorSheetPatchrunner'
    })
    Actors.registerSheet('Afterglow-whisperborn', WhisperBornSheets.ActorSheetWhisperborn, {
        types: ['Player'],
        label: 'Whisperborn.ActorSheetWhisperborn'
    })
    Actors.registerSheet('Afterglow-freezy', FreezySheets.ActorSheetFreezy, {
        types: ['Player'],
        label: 'Freezy.ActorSheetFreezy'
    })

    // Register shared template for Afterglow characters
    const templatePaths = [
        'modules/afterglow-classes/templates/actor-partial-mutations.html',
        'modules/afterglow-classes/templates/actor-partial-wetware-programs.html',
        'modules/afterglow-classes/templates/actor-partial-vision-spells.html'
    ]
    loadTemplates(templatePaths)
})

