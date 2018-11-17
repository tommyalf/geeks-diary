import { Action } from '@ngrx/store';
import { VcsFileChange } from '../../core/vcs';


export enum VcsActionTypes {
    UPDATE_FILE_CHANGES = '[Vcs] Update file changes',
    UPDATE_FILE_CHANGES_FAIL = '[Vcs] Update file changes fail',
}


export class UpdateFileChangesAction implements Action {
    readonly type = VcsActionTypes.UPDATE_FILE_CHANGES;

    constructor(public readonly payload: { fileChanges: VcsFileChange[] }) {
    }
}


export class UpdateFileChangesErrorAction implements Action {
    readonly type = VcsActionTypes.UPDATE_FILE_CHANGES_FAIL;

    constructor(public errors?: any) {
    }
}


export type VcsAction =
    UpdateFileChangesAction
    | UpdateFileChangesErrorAction;
